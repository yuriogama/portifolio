import { cinemark } from "@/lib/data";
import Illustration from "../Illustrations";
import Reveal from "../Reveal";

export default function Cinemark() {
  return (
    <section id="csharp" className="section case">
      <div className="container">
        <div className="case-grid">
          <Reveal>
            <div className="section-head left">
              <p className="case-kicker">C# .NET · Azure</p>
              <h2>{cinemark.title}</h2>
              <p>{cinemark.intro}</p>
              <ul className="chips-dark">
                {cinemark.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="case-art">
              <Illustration name="pipeline" />
            </div>
          </Reveal>
        </div>

        <ul className="case-points">
          {cinemark.points.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 80}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <ol className="steps">
          {cinemark.steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 80}>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
