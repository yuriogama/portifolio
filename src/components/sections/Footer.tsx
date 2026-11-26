"use client";

import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <p>
          © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name}
        </p>
        <p>{site.location}</p>
        <a href="#top">Voltar ao topo</a>
      </div>
    </footer>
  );
}
