import { stack } from "@/lib/data";
import Illustration from "../Illustrations";
import Reveal from "../Reveal";

export default function Stack() {
  return (
    <section id="stack" className="section">
      <div className="container">
        <div className="stack-head">
          <Reveal>
            <div className="section-head left">
              <h2>Stack</h2>
              <p>VTEX no centro, com React, C# e o restante da stack para sustentar o que o projeto precisa.</p>
            </div>
          </Reveal>
          <div className="stack-head-art">
            <Illustration name="layers" />
          </div>
        </div>
        <div className="stack">
          {stack.map((g, i) => (
            <Reveal key={g.group} delay={(i % 3) * 70} className="stack-wrap">
              <div className={`stack-group ${g.featured ? "is-featured" : ""}`}>
                {g.art && (
                  <div className="group-art">
                    <Illustration name={g.art} />
                  </div>
                )}
                <h3>{g.group}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
