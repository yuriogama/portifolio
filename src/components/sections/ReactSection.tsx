import { reactItems, reactSpotlight } from "@/lib/data";
import Illustration from "../Illustrations";
import Reveal from "../Reveal";

export default function ReactSection() {
  return (
    <section id="react" className="section section-alt">
      <div className="container">
        <div className="react-top">
          <div>
            <Reveal>
              <div className="section-head left">
                <h2 style={{ fontSize: "36px" }}>
                  React, TypeScript e desenvolvimento full-stack na prática
                </h2>
                <p>
                  Front-end moderno em aplicações ativas, com suporte e evolução
                  contínua depois do lançamento.
                </p>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="spotlight">
                <p className="spot-kicker">{reactSpotlight.kicker}</p>
                <h3>{reactSpotlight.title}</h3>
                <p>{reactSpotlight.text}</p>
                <ul className="chips-dark">
                  {reactSpotlight.chips.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="react-art">
            <Illustration name="components" />
          </div>
        </div>

        <ul className="react-list">
          {reactItems.map((it, i) => (
            <li key={it.title}>
              <Reveal delay={(i % 3) * 70}>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
