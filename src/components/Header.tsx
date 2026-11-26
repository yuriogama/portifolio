"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/lib/data";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container header-row">
        <a href="#top" className="brand" aria-label={`${site.shortName}, voltar ao início`}>
          <span className="brand-mark">yg</span>
          <span>{site.shortName}</span>
        </a>

        <nav id="main-nav" className={`nav ${open ? "is-open" : ""}`} aria-label="Principal">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-primary btn-sm header-cta" href="#contato">
          Falar comigo
        </a>

        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
