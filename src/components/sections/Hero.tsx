import type { CSSProperties } from "react";
import { site } from "@/lib/data";
import HeroBrowser from "../HeroBrowser";

const facts = [
  {
    title: "6 anos",
    text: "desenvolvendo e sustentando e-commerces, sistemas corporativos, aplicações em React e integrações.",
  },
  {
    title: "Suporte exclusivo",
    text: "da aplicação que integra as receitas de toda a Cinemark Brasil, com melhorias e novos processadores.",
  },
  {
    title: "5 sublojas VTEX IO",
    text: "da Izzo Musical, desenvolvidas do zero, com integrações próprias, vendas ativas e suporte exclusivo após entrega.",
  },
  {
    title: "Ecossistema React",
    text: "React, Next.js, React Native, TypeScript e Redux, aplicados em suporte e evolução de aplicações reais.",
  },
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1
            className="rise"
            style={{ fontSize: "49px", "--d": "0ms" } as CSSProperties}
          >
            Desenvolvedor Full Stack especialista em VTEX
          </h1>
          <p className="lead rise" style={{ "--d": "120ms" } as CSSProperties}>
            Desenvolvedor Full Stack com 6 anos de experiência em
            desenvolvimento e sustentação de soluções digitais, com atuação em
            projetos de e-commerce, sistemas corporativos e integrações.
            Construi lojas em VTEX IO do zero, desenvolvi aplicações em React e
            TypeScript e sustentei sistemas corporativos em C# e .NET, da
            estrutura inicial ao suporte depois do deploy.
          </p>
          <div
            className="cta-row rise"
            style={{ "--d": "240ms" } as CSSProperties}
          >
            <a className="btn btn-primary" href="#vtex">
              VTEX
            </a>
            <a className="btn btn-ghost" href="#react">
              React
            </a>
            <a className="btn btn-ghost" href="#csharp">
              C# .NET
            </a>
          </div>
          <dl
            className="facts rise"
            style={{ "--d": "360ms" } as CSSProperties}
          >
            {facts.map((f) => (
              <div key={f.title}>
                <dt>{f.title}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div
          className="hero-visual rise"
          style={{ "--d": "200ms" } as CSSProperties}
        >
          <HeroBrowser />
        </div>
      </div>
    </section>
  );
}
