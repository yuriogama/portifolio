import { marquee } from "@/lib/data";

export default function Marquee() {
  const list = (hidden: boolean) => (
    <ul aria-hidden={hidden || undefined} className="marquee-list">
      {marquee.map((m) => (
        <li key={m}>{m}</li>
      ))}
    </ul>
  );
  return (
    <div className="marquee" aria-label="Tecnologias que uso">
      <div className="marquee-track">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}
