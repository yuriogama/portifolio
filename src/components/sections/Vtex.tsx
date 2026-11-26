import { capabilities, projects } from "@/lib/data";
import ProjectCard from "../ProjectCard";
import Reveal from "../Reveal";

export default function Vtex() {
  return (
    <section id="vtex" className="section">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <h2>Portfólio de lojas VTEX</h2>
            <p>
              A Izzo Musical em destaque, com cinco lojas no ar, e os e-commerces e projetos que atendi durante suporte e atendimentos especificos.
            </p>
          </div>
        </Reveal>

        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 90} className="project-wrap">
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="offer-title">O que entrego em VTEX</h3>
        </Reveal>
        <ul className="offer">
          {capabilities.map((c, i) => (
            <li key={c.title}>
              <Reveal delay={(i % 3) * 70}>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
