import { illustrationFiles, type IllustrationName } from "@/lib/data";

/**
 * Ilustrações no estilo unDraw (formas planas, cores da marca).
 * Para trocar por um arquivo real do unDraw, veja `illustrationFiles` em src/lib/data.ts.
 */
export default function Illustration({ name, className }: { name: IllustrationName; className?: string }) {
  const file = illustrationFiles[name];
  if (file) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={file} alt="" className={className} />;
  }
  switch (name) {
    case "storefront": return <Storefront className={className} />;
    case "code": return <Code className={className} />;
    case "blog": return <Blog className={className} />;
    case "pipeline": return <Pipeline className={className} />;
    case "components": return <Components className={className} />;
    case "layers": return <Layers className={className} />;
    case "cloud": return <Cloud className={className} />;
    default: return <Mail className={className} />;
  }
}

function Storefront({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de uma página de loja virtual">
      <rect x="20" y="20" width="480" height="300" rx="14" className="il-paper il-stroke" />
      <rect x="36" y="34" width="56" height="12" rx="6" className="il-accent" />
      <rect x="260" y="36" width="40" height="8" rx="4" className="il-line" />
      <rect x="312" y="36" width="40" height="8" rx="4" className="il-line" />
      <rect x="364" y="36" width="40" height="8" rx="4" className="il-line" />
      <rect x="36" y="64" width="448" height="124" rx="12" className="il-lilac" />
      <rect x="56" y="88" width="190" height="14" rx="7" className="il-ink" />
      <rect x="56" y="110" width="140" height="14" rx="7" className="il-ink" />
      <rect x="56" y="136" width="170" height="8" rx="4" className="il-line" />
      <rect x="56" y="152" width="120" height="8" rx="4" className="il-line" />
      <rect x="56" y="168" width="84" height="12" rx="6" className="il-accent" />
      <circle cx="388" cy="126" r="50" className="il-ink" />
      <circle cx="388" cy="126" r="38" className="il-ink-2" />
      <circle cx="388" cy="126" r="16" className="il-accent" />
      <circle cx="388" cy="126" r="4" className="il-paper" />
      <path d="M352 96a48 48 0 0 1 34-20" className="il-shine" />
      <g>
        <rect x="36" y="204" width="140" height="100" rx="10" className="il-paper il-stroke" />
        <rect x="46" y="214" width="120" height="48" rx="8" className="il-lilac" />
        <circle cx="106" cy="238" r="16" className="il-accent" />
        <rect x="46" y="272" width="80" height="8" rx="4" className="il-line" />
        <rect x="46" y="286" width="36" height="10" rx="5" className="il-ink" />
      </g>
      <g>
        <rect x="190" y="204" width="140" height="100" rx="10" className="il-paper il-stroke" />
        <rect x="200" y="214" width="120" height="48" rx="8" className="il-lilac" />
        <rect x="236" y="224" width="48" height="28" rx="6" className="il-ink" />
        <rect x="200" y="272" width="80" height="8" rx="4" className="il-line" />
        <rect x="200" y="286" width="36" height="10" rx="5" className="il-ink" />
      </g>
      <g>
        <rect x="344" y="204" width="140" height="100" rx="10" className="il-paper il-stroke" />
        <rect x="354" y="214" width="120" height="48" rx="8" className="il-lilac" />
        <path d="M414 224l20 28h-40z" className="il-mint" />
        <rect x="354" y="272" width="80" height="8" rx="4" className="il-line" />
        <rect x="354" y="286" width="36" height="10" rx="5" className="il-ink" />
      </g>
      <circle cx="486" cy="34" r="22" className="il-ink" />
      <path d="M475 26h4l3 12h12l3-9h-16" className="il-cart" />
      <circle cx="483" cy="42" r="1.8" className="il-white" />
      <circle cx="493" cy="42" r="1.8" className="il-white" />
      <circle cx="30" cy="304" r="18" className="il-mint" />
      <path d="M22 304l6 6 11-12" className="il-check" />
    </svg>
  );
}

function Code({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 380" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de código e tabela de dados">
      <rect x="30" y="30" width="400" height="250" rx="14" className="il-ink" />
      <circle cx="54" cy="54" r="5" className="il-accent" />
      <circle cx="72" cy="54" r="5" className="il-mint" />
      <circle cx="90" cy="54" r="5" className="il-lilac" />
      <rect x="56" y="88" width="70" height="10" rx="5" className="il-accent" />
      <rect x="134" y="88" width="120" height="10" rx="5" className="il-lilac" />
      <rect x="80" y="112" width="90" height="10" rx="5" className="il-mint" />
      <rect x="178" y="112" width="150" height="10" rx="5" className="il-faint" />
      <rect x="80" y="136" width="130" height="10" rx="5" className="il-faint" />
      <rect x="218" y="136" width="70" height="10" rx="5" className="il-accent" />
      <rect x="104" y="160" width="100" height="10" rx="5" className="il-lilac" />
      <rect x="212" y="160" width="110" height="10" rx="5" className="il-faint" />
      <rect x="80" y="184" width="60" height="10" rx="5" className="il-mint" />
      <rect x="148" y="184" width="140" height="10" rx="5" className="il-faint" />
      <rect x="56" y="208" width="40" height="10" rx="5" className="il-accent" />
      <rect x="56" y="240" width="96" height="24" rx="12" className="il-accent" />
      <text x="104" y="257" textAnchor="middle" className="il-label">VTEX IO</text>
      <g>
        <rect x="270" y="200" width="180" height="150" rx="12" className="il-paper il-stroke" />
        <rect x="270" y="200" width="180" height="32" rx="12" className="il-lilac" />
        <rect x="270" y="220" width="180" height="12" className="il-lilac" />
        <rect x="286" y="212" width="56" height="8" rx="4" className="il-ink" />
        <rect x="360" y="212" width="40" height="8" rx="4" className="il-ink" />
        <line x1="270" y1="262" x2="450" y2="262" className="il-rule" />
        <line x1="270" y1="292" x2="450" y2="292" className="il-rule" />
        <line x1="270" y1="322" x2="450" y2="322" className="il-rule" />
        <rect x="286" y="244" width="52" height="8" rx="4" className="il-line" />
        <rect x="360" y="244" width="64" height="8" rx="4" className="il-line" />
        <rect x="286" y="274" width="64" height="8" rx="4" className="il-line" />
        <rect x="360" y="274" width="40" height="8" rx="4" className="il-line" />
        <rect x="286" y="304" width="44" height="8" rx="4" className="il-line" />
        <circle cx="428" cy="308" r="10" className="il-mint" />
        <path d="M423 308l4 4 7-8" className="il-check" />
      </g>
      <path d="M180 282c20 24 48 30 80 22" className="il-dash" />
    </svg>
  );
}

function Mail({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de um envelope e um avião de papel">
      <circle cx="240" cy="180" r="120" className="il-lilac" />
      <rect x="130" y="70" width="190" height="120" rx="10" className="il-paper il-stroke" />
      <rect x="148" y="92" width="110" height="10" rx="5" className="il-ink" />
      <rect x="148" y="112" width="150" height="8" rx="4" className="il-line" />
      <rect x="148" y="128" width="130" height="8" rx="4" className="il-line" />
      <rect x="100" y="120" width="250" height="150" rx="14" className="il-ink" />
      <path d="M100 134l125 90 125-90" className="il-flap" />
      <path d="M100 270l90-76M350 270l-90-76" className="il-flap-2" />
      <path d="M385 70l70-34-30 72-14-26z" className="il-accent" />
      <path d="M411 82l44-46" className="il-plane-fold" />
      <path d="M360 120c-30 10-24 40-60 40" className="il-dash" />
      <circle cx="60" cy="90" r="6" className="il-mint" />
      <circle cx="420" cy="220" r="8" className="il-accent" />
      <circle cx="40" cy="220" r="5" className="il-ink" />
    </svg>
  );
}

function Blog({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de um blog sendo migrado para um novo servidor">
      <rect x="20" y="30" width="330" height="280" rx="14" className="il-paper il-stroke" />
      <rect x="36" y="46" width="60" height="10" rx="5" className="il-accent" />
      <rect x="36" y="76" width="298" height="110" rx="10" className="il-lilac" />
      <circle cx="110" cy="131" r="26" className="il-accent" />
      <path d="M170 170l50-62 50 62z" className="il-mint" />
      <rect x="36" y="204" width="220" height="14" rx="7" className="il-ink" />
      <rect x="36" y="228" width="298" height="8" rx="4" className="il-line" />
      <rect x="36" y="244" width="270" height="8" rx="4" className="il-line" />
      <rect x="36" y="260" width="290" height="8" rx="4" className="il-line" />
      <rect x="36" y="282" width="70" height="12" rx="6" className="il-accent" />
      <g>
        <rect x="390" y="50" width="110" height="56" rx="10" className="il-ink" />
        <circle cx="412" cy="78" r="5" className="il-mint" />
        <rect x="428" y="75" width="56" height="6" rx="3" className="il-faint" />
        <rect x="390" y="120" width="110" height="56" rx="10" className="il-ink" />
        <circle cx="412" cy="148" r="5" className="il-accent" />
        <rect x="428" y="145" width="56" height="6" rx="3" className="il-faint" />
        <rect x="390" y="190" width="110" height="56" rx="10" className="il-ink" />
        <circle cx="412" cy="218" r="5" className="il-mint" />
        <rect x="428" y="215" width="56" height="6" rx="3" className="il-faint" />
      </g>
      <path d="M352 170c20 0 20-22 36-22" className="il-dash" />
      <path d="M384 140l12 8-12 8z" className="il-accent" />
    </svg>
  );
}

function Pipeline({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 520 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração do fluxo de integração da Cinemark Brasil: dados do Microsoft Fabric, processadores em C#, filas do Azure e integração concluída">
      <rect x="150" y="30" width="220" height="32" rx="16" className="il-ink" />
      <text x="260" y="51" textAnchor="middle" className="il-label">Cinemark Brasil · Receitas</text>

      {/* 1. Microsoft Fabric */}
      <rect x="20" y="120" width="90" height="100" rx="14" className="il-ink" />
      <ellipse cx="65" cy="148" rx="26" ry="9" className="il-accent" />
      <rect x="39" y="148" width="52" height="38" className="il-accent" />
      <ellipse cx="65" cy="186" rx="26" ry="9" className="il-accent" />
      <ellipse cx="65" cy="148" rx="26" ry="9" className="il-lilac" />

      {/* 2. Processadores em C# */}
      <rect x="150" y="120" width="90" height="100" rx="14" className="il-accent" />
      <text x="195" y="182" textAnchor="middle" className="il-big">C#</text>

      {/* 3. Filas do Azure */}
      <rect x="280" y="120" width="90" height="100" rx="14" className="il-paper il-stroke" />
      <rect x="296" y="138" width="58" height="12" rx="6" className="il-accent" />
      <rect x="296" y="160" width="58" height="12" rx="6" className="il-lilac" />
      <rect x="296" y="182" width="58" height="12" rx="6" className="il-mint" />

      {/* 4. Integração concluída */}
      <rect x="410" y="120" width="90" height="100" rx="14" className="il-lilac" />
      <circle cx="455" cy="170" r="26" className="il-mint" />
      <path d="M443 170l9 9 17-19" className="il-check" />

      {/* Conexões */}
      <path d="M114 170h32M244 170h32M374 170h32" className="il-dash" />
      <path d="M140 162l10 8-10 8zM270 162l10 8-10 8zM400 162l10 8-10 8z" className="il-accent" />

      {/* Legendas */}
      <text x="65" y="256" textAnchor="middle" className="il-label-dark">
        <tspan x="65">Microsoft</tspan>
        <tspan x="65" dy="18">Fabric</tspan>
      </text>
      <text x="195" y="256" textAnchor="middle" className="il-label-dark">
        <tspan x="195">Processadores</tspan>
        <tspan x="195" dy="18">em C#</tspan>
      </text>
      <text x="325" y="256" textAnchor="middle" className="il-label-dark">
        <tspan x="325">Filas do</tspan>
        <tspan x="325" dy="18">Azure</tspan>
      </text>
      <text x="455" y="256" textAnchor="middle" className="il-label-dark">
        <tspan x="455">Integração</tspan>
        <tspan x="455" dy="18">concluída no D365</tspan>
      </text>

      <rect x="150" y="306" width="220" height="10" rx="5" className="il-mint" />
    </svg>
  );
}

function Components({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de componentes React orbitando">
      <g transform="translate(240 180)">
        <ellipse rx="120" ry="44" className="il-orbit" />
        <ellipse rx="120" ry="44" transform="rotate(60)" className="il-orbit" />
        <ellipse rx="120" ry="44" transform="rotate(120)" className="il-orbit" />
        <circle r="20" className="il-accent" />
      </g>
      <rect x="24" y="30" width="116" height="74" rx="12" className="il-paper il-stroke" />
      <rect x="38" y="46" width="60" height="8" rx="4" className="il-ink" />
      <rect x="38" y="62" width="88" height="6" rx="3" className="il-line" />
      <rect x="38" y="76" width="40" height="14" rx="7" className="il-accent" />
      <rect x="340" y="262" width="116" height="74" rx="12" className="il-paper il-stroke" />
      <circle cx="366" cy="290" r="12" className="il-lilac" />
      <rect x="386" y="282" width="56" height="8" rx="4" className="il-ink" />
      <rect x="386" y="298" width="44" height="6" rx="3" className="il-line" />
      <rect x="40" y="276" width="62" height="44" rx="12" className="il-ink" />
      <text x="71" y="305" textAnchor="middle" className="il-label">TS</text>
      <circle cx="414" cy="62" r="18" className="il-mint" />
      <path d="M406 62l6 6 11-12" className="il-check" />
    </svg>
  );
}

function Layers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de camadas de tecnologia empilhadas">
      <path d="M240 190L420 250 240 310 60 250z" className="il-ink il-sep" />
      <path d="M240 140L420 200 240 260 60 200z" className="il-accent il-sep" />
      <path d="M240 90L420 150 240 210 60 150z" className="il-mint il-sep" />
      <path d="M240 40L420 100 240 160 60 100z" className="il-lilac il-sep" />
      <rect x="196" y="86" width="88" height="12" rx="6" className="il-ink" />
      <rect x="208" y="104" width="64" height="8" rx="4" className="il-line" />
      <circle cx="440" cy="50" r="8" className="il-accent" />
      <circle cx="40" cy="60" r="6" className="il-ink" />
      <circle cx="450" cy="290" r="5" className="il-mint" />
    </svg>
  );
}

function Cloud({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 480 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ilustração de nuvem com containers">
      <circle cx="170" cy="180" r="50" className="il-lilac" />
      <circle cx="245" cy="140" r="66" className="il-lilac" />
      <circle cx="320" cy="180" r="48" className="il-lilac" />
      <rect x="120" y="180" width="248" height="60" rx="30" className="il-lilac" />
      <path d="M244 96l18 22h-11v24h-14v-24h-11z" className="il-accent" />
      <rect x="170" y="190" width="46" height="34" rx="6" className="il-ink" />
      <rect x="222" y="190" width="46" height="34" rx="6" className="il-ink" />
      <rect x="274" y="190" width="46" height="34" rx="6" className="il-ink" />
      <rect x="180" y="200" width="26" height="6" rx="3" className="il-mint" />
      <rect x="232" y="200" width="26" height="6" rx="3" className="il-accent" />
      <rect x="284" y="200" width="26" height="6" rx="3" className="il-mint" />
      <path d="M244 244v40M244 284h-90M244 284h90" className="il-dash" />
      <circle cx="154" cy="284" r="12" className="il-ink" />
      <circle cx="244" cy="284" r="12" className="il-accent" />
      <circle cx="334" cy="284" r="12" className="il-mint" />
    </svg>
  );
}
