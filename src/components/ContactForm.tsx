"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("sending");
    setMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error || "Não foi possível enviar agora.");
      setStatus("success");
      setMessage("Mensagem enviada. Vou responder no e-mail que você informou.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Não foi possível enviar agora. Tente novamente ou escreva direto para o e-mail ao lado.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate={false}>
      <div className="field">
        <label htmlFor="name">Nome</label>
        <input id="name" name="name" type="text" required minLength={2} maxLength={100} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" required maxLength={150} autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="subject">Assunto (opcional)</label>
        <input id="subject" name="subject" type="text" maxLength={120} />
      </div>
      <div className="field">
        <label htmlFor="msg">Mensagem</label>
        <textarea id="msg" name="message" required minLength={10} maxLength={3000} rows={6} />
      </div>
      {/* Campo isca contra robôs: humanos não veem nem preenchem */}
      <div className="hp" aria-hidden="true">
        <label htmlFor="website">Não preencha</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando…" : "Enviar mensagem"}
      </button>
      <p className={`form-status ${status}`} role="status" aria-live="polite">
        {message}
      </p>
    </form>
  );
}
