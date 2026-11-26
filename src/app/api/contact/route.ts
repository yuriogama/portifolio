import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/** Limite simples em memória: 5 envios por hora por IP. (Em produção com várias instâncias, use Redis/Upstash.) */
const WINDOW_MS = 60 * 60 * 1000;
const MAX_HITS = 5;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

/** Remove quebras de linha para evitar injeção de cabeçalho de e-mail. */
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Requisição inválida." }, { status: 400 });
  }

  // Campo isca preenchido = robô. Responde "ok" sem enviar nada.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = oneLine(String(body.name ?? ""));
  const email = oneLine(String(body.email ?? ""));
  const subject = oneLine(String(body.subject ?? ""));
  const message = String(body.message ?? "").trim();

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ error: "Informe seu nome." }, { status: 400 });
  }
  if (!EMAIL_RE.test(email) || email.length > 150) {
    return NextResponse.json({ error: "Informe um e-mail válido." }, { status: 400 });
  }
  if (message.length < 10 || message.length > 3000) {
    return NextResponse.json({ error: "A mensagem precisa ter entre 10 e 3000 caracteres." }, { status: 400 });
  }
  if (subject.length > 120) {
    return NextResponse.json({ error: "O assunto está muito longo." }, { status: 400 });
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (rateLimited(ip)) {
    return NextResponse.json({ error: "Muitas mensagens em pouco tempo. Tente novamente mais tarde." }, { status: 429 });
  }

  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  const to = process.env.CONTACT_TO || user;

  if (!user || !pass || !to) {
    console.error("[contact] Variáveis GMAIL_USER / GMAIL_APP_PASSWORD não configuradas.");
    return NextResponse.json({ error: "Envio de e-mail ainda não configurado no servidor." }, { status: 500 });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass: pass.replace(/\s+/g, "") },
    });

    await transporter.sendMail({
      from: `"Portfólio" <${user}>`,
      to,
      replyTo: `"${name.replace(/"/g, "")}" <${email}>`,
      subject: `[Portfólio] ${subject || `Mensagem de ${name}`}`,
      text: `Nome: ${name}\nE-mail: ${email}\n\n${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#101A3A">
          <h2 style="margin:0 0 12px">Nova mensagem pelo portfólio</h2>
          <p style="margin:0"><strong>Nome:</strong> ${escapeHtml(name)}</p>
          <p style="margin:0 0 16px"><strong>E-mail:</strong> ${escapeHtml(email)}</p>
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(message)}</p>
        </div>`,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Falha ao enviar e-mail:", err);
    return NextResponse.json({ error: "Não consegui enviar agora. Tente de novo ou escreva direto para o e-mail." }, { status: 500 });
  }
}
