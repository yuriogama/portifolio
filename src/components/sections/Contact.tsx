import { site } from "@/lib/data";
import ContactForm from "../ContactForm";
import Illustration from "../Illustrations";
import Reveal from "../Reveal";

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container contact" >
        <Reveal className="contactBox">
          <div className="revelBox">
            <div className="section-head left">
              <h2>Vamos conversar!</h2>
              <p>Entre em contato comigo por algum desses meior abaixo e responderei o quanto antes.</p>
            </div>
            <div className="contact-art">
              <Illustration name="mail" />
            </div>
            <ul className="contact-links">
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li>
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  WhatsApp {site.phone}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href={site.cv} download>
                  Baixar currículo (PDF)
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </Reveal>
        {/* <Reveal delay={100}>
          <ContactForm />
        </Reveal> */}
      </div>
    </section>
  );
}
