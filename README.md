# Portfólio — Yuri Gama · Especialista em desenvolvimento VTEX

Next.js 14 (App Router) + React 18 + TypeScript. Envio de e-mail via Gmail (Nodemailer).

## Passo a passo para rodar localmente

### 1. Pré-requisitos
- **Node.js 18.17 ou superior** (recomendado: 20 LTS) — https://nodejs.org
- Confira no terminal: `node -v` e `npm -v`

### 2. Instalar dependências
```bash
npm install
```

### 3. Configurar o envio de e-mail (Gmail)
O Gmail não aceita a senha normal para envio por aplicativos. Você precisa de uma **senha de app**:

1. Acesse https://myaccount.google.com/security e ative a **Verificação em duas etapas** (se ainda não estiver ativa).
2. Acesse https://myaccount.google.com/apppasswords
3. Crie uma senha de app (nome sugerido: `Portfolio`). O Google mostra 16 letras.
4. Copie o arquivo de exemplo e edite:
   ```bash
   cp .env.example .env.local
   ```
   (no Windows/PowerShell: `copy .env.example .env.local`)
5. Preencha `GMAIL_APP_PASSWORD` com as 16 letras (espaços são ignorados).

```env
GMAIL_USER=yuri.ogama@gmail.com
GMAIL_APP_PASSWORD=abcdefghijklmnop
CONTACT_TO=yuri.ogama@gmail.com
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

> Nunca suba o `.env.local` para o GitHub (já está no `.gitignore`).

### 4. Iniciar
```bash
npm run dev
```
Abra http://localhost:3000. Envie uma mensagem pelo formulário para testar: o e-mail chega em `CONTACT_TO`, com **Responder** apontando para o visitante.

### 5. Build de produção (opcional)
```bash
npm run build
npm start
```

## Publicar (Vercel)
1. Suba o projeto para um repositório no GitHub.
2. Em https://vercel.com, importe o repositório.
3. Em *Settings → Environment Variables*, cadastre as 4 variáveis do `.env.example` (troque `NEXT_PUBLIC_SITE_URL` pelo seu domínio).
4. Deploy.

## Onde editar
| O que | Onde |
|---|---|
| Textos, lojas, projetos, experiência, stack | `src/lib/data.ts` |
| Cores, fontes, animações | `src/app/globals.css` |
| Seções da página | `src/components/sections/` |
| Rota de envio de e-mail | `src/app/api/contact/route.ts` |
| Currículo em PDF | `public/curriculo-yuri-oliveira-gama.pdf` |

## Banners das empresas
Os cards do portfólio de lojas mostram o nome da empresa até você colocar o banner. Salve a imagem em `public/stores/` e informe o caminho em `projects`, no `src/lib/data.ts`:
```ts
{ id: "riachuelo", name: "Riachuelo", image: "/stores/riachuelo.png", ... }
```
Nesse mesmo arquivo você edita textos, tags e a ordem dos cards. **Confirme os cards de Santa Luzia, GrandVision, GoldKo, Riachuelo e "Landing pages"**: eles foram montados a partir do currículo.

## Ilustrações do unDraw
O projeto traz SVGs inline no estilo unDraw. Para usar as originais:
1. Acesse https://undraw.co/illustrations e defina a cor principal como `#F71963`.
2. Baixe o SVG, salve em `public/illustrations/`.
3. Em `src/lib/data.ts`, informe o caminho em `illustrationFiles`:
```ts
export const illustrationFiles = { storefront: "/illustrations/web-shopping.svg", code: null, mail: null, blog: null, pipeline: null, components: null, layers: null, cloud: null };
```

## Problemas comuns
- **`Invalid login` / `535`**: a senha de app está errada ou a verificação em duas etapas não está ativa.
- **"Envio de e-mail ainda não configurado"**: falta `.env.local` ou o servidor não foi reiniciado após criá-lo.
- **Porta 3000 ocupada**: `npm run dev -- -p 3001`.
