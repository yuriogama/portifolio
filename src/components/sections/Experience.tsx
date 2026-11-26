import { education, experience, languages } from "@/lib/data";
import Reveal from "../Reveal";

export default function Experience() {
  return (
    <section id="experiencia" className="section section-alt">
      <div className="container">
        <Reveal>
          <div className="section-head left">
            <h2>Experiência</h2>
            <p>VTEX, e-commerce e sistemas corporativos, em times remotos.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((job) => (
            <Reveal key={job.company} className="job-wrap">
              <article className="job">
                <header>
                  <h3>{job.company}</h3>
                  <p className="job-role">{job.role}</p>
                  <p className="job-meta">
                    {job.period}. {job.place}
                  </p>
                </header>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="edu">
          <Reveal>
            <h3>Formação</h3>
            <ul>
              {education.map((e) => (
                <li key={e.title}>
                  <strong>{e.title}</strong>
                  <span>{e.detail}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={90}>
            <h3>Idiomas</h3>
            <ul>
              {languages.map((l) => (
                <li key={l.name}>
                  <strong>{l.name}</strong>
                  <span>{l.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
