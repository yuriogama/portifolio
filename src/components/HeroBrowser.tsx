"use client";

import { useEffect, useState } from "react";
import { showcase } from "@/lib/data";
import Illustration from "./Illustrations";

/** Moldura de navegador que alterna entre os projetos e empresas em destaque. */
export default function HeroBrowser() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setActive((i) => (i + 1) % showcase.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  const item = showcase[active];

  return (
    <div
      className="browser"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="browser-bar">
        <span className="dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <div className="url">
          <span className="live" aria-hidden="true" />
          <span key={item.id} className="url-text">
            {item.bar}
          </span>
        </div>
      </div>
      <div className="browser-body">
        <Illustration name={item.art} />
      </div>
      <div key={item.id} className="browser-caption">
        <h3>{item.title}</h3>
        <p>{item.text}</p>
        <a className="link" href={item.href}>
          {item.cta}
        </a>
      </div>
      <div className="browser-tabs" role="group" aria-label="Escolher projeto">
        {showcase.map((s, i) => (
          <button key={s.id} type="button" className={i === active ? "is-active" : ""} aria-pressed={i === active} onClick={() => setActive(i)}>
            {s.tab}
          </button>
        ))}
      </div>
    </div>
  );
}
