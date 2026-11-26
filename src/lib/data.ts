/**
 * Todo o conteúdo do portfólio mora aqui.
 * Para trocar textos, links, logos ou ilustrações, edite só este arquivo.
 */

export const site = {
  name: "Yuri de Oliveira Gama",
  shortName: "Yuri Gama",
  role: "Desenvolvedor full stack especialista em VTEX",
  email: "yuri.ogama@gmail.com",
  phone: "(11) 97685-3449",
  whatsapp: "5511976853449",
  location: "Mogi Guaçu - SP · Remoto",
  linkedin: "https://www.linkedin.com/in/yuri-oliveira-gama-878b5b187/",
  github: "https://github.com/yuriogama",
  cv: "/curriculo-yuri-oliveira-gama.pdf",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
};

export const nav = [
  { href: "#vtex", label: "VTEX" },
  { href: "#react", label: "React" },
  { href: "#csharp", label: "C# .NET" },
  { href: "#stack", label: "Stack" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

/**
 * Ilustrações. Por padrão usamos SVGs inline no estilo unDraw.
 * Para usar um arquivo real do unDraw: baixe o SVG em undraw.co, salve em
 * /public/illustrations e informe o caminho abaixo. Ex.: "/illustrations/web-shopping.svg"
 */
export type IllustrationName =
  | "storefront" | "code" | "mail" | "blog" | "pipeline" | "components" | "layers" | "cloud";

export const illustrationFiles: Record<IllustrationName, string | null> = {
  storefront: null,
  code: null,
  mail: null,
  blog: null,
  pipeline: null,
  components: null,
  layers: null,
  cloud: null,
};

/** Carrossel do hero: um item por projeto/empresa de destaque. */
export const showcase: {
  id: string; tab: string; bar: string; title: string; text: string; art: IllustrationName; href: string; cta: string;
}[] = [
  { id: "izzo", tab: "Izzo Musical", bar: "Izzo Musical · 5 sublojas VTEX IO", title: "Izzo Musical", text: "Cinco sublojas completas em VTEX IO: Dunlop, Ernie Ball, Elixir, Timbra e Remo.", art: "storefront", href: "#vtex", cta: "Ver as lojas" },
  { id: "cinemark", tab: "Cinemark", bar: "Cinemark Brasil · integração de receitas", title: "Cinemark Brasil", text: "Aplicação em C# que integra as receitas de todo o país. Em equipe montamos a estrutura e vários processadores, após a entrega fiquei 1 ano de suporte.", art: "pipeline", href: "#csharp", cta: "Ver o projeto" },
  { id: "riachuelo", tab: "Riachuelo", bar: "Riachuelo · blog", title: "Riachuelo", text: "Construção completa do blog, depois a migração de hospedagem, com suporte para mudanças, melhorias e problemas durante toda a atuação.", art: "blog", href: "#vtex", cta: "Ver no portfólio" },
  { id: "santaluzia", tab: "Santa Luzia", bar: "Santa Luzia · e-commerce", title: "Santa Luzia", text: "Suporte, manutenção e evolução do e-commerce, com análise de problemas e melhorias contínuas.", art: "storefront", href: "#vtex", cta: "Ver no portfólio" },
  { id: "goldko", tab: "GoldKo", bar: "GoldKo · e-commerce", title: "GoldKo", text: "Suporte, manutenção e evolução do site, com ajustes técnicos e melhorias.", art: "storefront", href: "#vtex", cta: "Ver no portfólio" },
  { id: "europa", tab: "Europa", bar: "Europa · e-commerce", title: "Europa", text: "Suporte, manutenção, LPs e evolução do e-commerce, com análise de problemas e melhorias contínuas.", art: "storefront", href: "#vtex", cta: "Ver no portfólio" },
];

export type Project = {
  id: string;
  kicker: string;
  name: string;
  summary: string;
  highlight?: string;
  tags: string[];
  /** Banner da empresa. Ex.: "/stores/riachuelo.png". Sem imagem, aparece o nome da empresa. */
  image?: string;
  art?: IllustrationName;
  featured?: boolean;
  links?: { label: string; url: string }[];
};

/**
 * Portfólio de lojas. O 1º item (Izzo Musical) é o destaque.
 * CONFIRME os 5 seguintes: textos, tags e, se quiser, adicione `image` com o banner.
 */
export const projects: Project[] = [
  {
    id: "izzo",
    kicker: "5 lojas em VTEX IO",
    name: "Izzo Musical",
    featured: false,
    image: "/stores/izzo-musical-mosaico.webp",
    summary:
      "Implantação de cinco sublojas completas em VTEX IO, da estrutura inicial às customizações. Trabalhei direto com a equipe da VTEX nas políticas comerciais, no tema exclusivo, na alteração do modelo de loja e no Master Data, com tabelas e triggers para coleta de dados e envio de e-mails. Cada subloja opera com política comercial e vendas independentes.",
    tags: ["VTEX IO", "Master Data", "Suporte", "Políticas comerciais", "Tema exclusivo"],
    links: [
      { label: "Dunlop", url: "https://dunlop.izzo.com.br" },
      { label: "Ernie Ball", url: "https://www.ernieball.izzo.com.br" },
      { label: "Elixir", url: "https://elixir.izzo.com.br" },
      { label: "Timbra", url: "https://www.timbra.com.br" },
      { label: "Remo", url: "https://www.remo.izzo.com.br" },
    ],
  },
  {
    id: "riachuelo",
    kicker: "Blog e landing pages",
    name: "Riachuelo",
    image: "/stores/Riachuelo.png",
    summary:
      "Construção completa do blog da Riachuelo, do zero até a publicação, seguida da migração de hospedagem. Também prestei suporte em projetos específicos de landing pages desenvolvidas em Ciano.",
    highlight:
      "Suporte contínuo para mudanças, melhorias e correção de problemas durante toda a atuação, tanto no blog quanto nas LPs.",
    tags: ["Blog completo", "Migração de hospedagem", "Landing pages em Ciano", "Suporte contínuo"],
    links: [
      { label: "Ver blog 🌐​", url: "https://blog.riachuelo.com.br" },
    ],
  },
  {
    id: "santaluzia",
    kicker: "E-commerce em VTEX IO",
    name: "Santa Luzia",
    image: "/stores/SantaLuzia.png",
    summary:
      "Criação de promoções, coleções e landing pages para os períodos de maior venda do e-commerce, principalmente Black Friday e Natal. Nesses momentos, o foco era entregar rápido e manter o site estável com o aumento do acesso.",
    highlight:
      "Além das campanhas, atuei no suporte, na manutenção e na evolução do site, com análise de problemas e melhorias contínuas.",
    tags: ["VTEX IO", "Promoções", "Coleções", "Landing pages", "Black Friday e Natal", "Suporte"],
    links: [
      { label: "Ver loja 🌐​", url: "https://www.santaluzia.com.br" },
    ],
  },
  {
    id: "europa",
    kicker: "E-commerce em VTEX IO",
    name: "Europa",
    image: "/stores/Europa.png",
    summary: "Suporte, manutenção e evolução do e-commerce, com ajustes técnicos e melhorias contínuas.",
    tags: ["VTEX IO", "E-commerce", "Suporte", "Melhorias", "Integrações"],
    links: [
      { label: "Ver loja 🌐​", url: "https://www.europa.com.br" },
    ],
  },
  {
    id: "goldko",
    kicker: "E-commerce em VTEX IO",
    name: "GoldKo",
    image: "/stores/GoldKo.png",
    summary: "Suporte, manutenção e evolução do site, resolvendo problemas e implementando melhorias.",
    tags: ["VTEX IO", "E-commerce", "Suporte", "Melhorias", "Integrações"],
    links: [
      { label: "Ver loja 🌐​", url: "https://www.goldko.com.br" },
    ],
  },
  {
    id: "campanhas",
    kicker: "Campanhas",
    name: "Landing pages e lojas",
    image: "/stores/mosaico-lojas.webp",
    summary: "Landing pages para campanhas e eventos promocionais, além de sites institucionais em VTEX e WordPress.",
    tags: ["VTEX IO", "API REST", "Landing pages", "Integrações"],
    links: [
      { label: "Arte Terapêutica 🌐​", url: "https://arteterapeutica.com.br" },
      { label: "Originais 🌐​", url: "https://www.europa.com.br/refil-original" },
      { label: "Overboard 🌐​", url: "https://www.overboard.com.br" },
      { label: "Ostore Sneakers 🌐​", url: "https://www.ostore.com.br" },
    ],
  },
];

export const marquee = [
  "VTEX IO", "React", "TypeScript", "Next.js", "C#", ".NET", "Azure", "Docker",
  "Master Data", "GraphQL", "APIs REST", "Node.js", "GTM e GA4",
];

export const capabilities = [
  { title: "Lojas em VTEX IO", text: "Estruturo a loja desde o início, implementando customizações em diferentes áreas da plataforma, além de configurar políticas comerciais, integrações e parâmetros iniciais para garantir uma operação consistente." },
  { title: "Store Theme e modelo de loja", text: "Crio Store Themes exclusivos, trabalhando em conjunto com a equipe VTEX para estruturar a loja, otimizar componentes existentes e facilitar a implementação de futuras melhorias." },
  { title: "Master Data", text: "Monto tabelas, desenvolvo triggers e automatizações para coletar dados e disparar e-mails a partir do cadastro de LPs, pop-ups ou qualquer formulário desenvolvido no site." },
  { title: "Integrações", text: "Conecto a loja a sistemas externos por meio de APIs REST e GraphQL desenvolvendo integrações e validando requisições, respostas e fluxos de dados com Insomnia e Postman." },
  { title: "Sustentação e métricas", text: "Diagnostico falhas, realizo manutenção e implemento melhorias contínuas para manter a estabilidade e o desempenho da loja. Também configuro e acompanho GTM e GA4, garantindo o funcionamento correto da mensuração." },
  { title: "Suporte especializado", text: "Com conhecimento profundo dos módulos, ferramentas e integrações da plataforma, compreendo o fluxo completo de um e-commerce, atuando no cadastro, gestão de produtos, configurações comerciais, logística, checkout e meios de pagamento." },
];

export const reactSpotlight = {
  kicker: "Suporte e evolução",
  title: "Suporte e melhorias em aplicações 100% React",
  text: "Atuo diariamente na manutenção e evolução de aplicações desenvolvidas com React, TypeScript e Next.js, realizando análise de código, investigação de falhas, correções, ajustes de componentes e implementação de novas funcionalidades.",
  chips: ["React", "TypeScript", "Docker", "Node.Js", "Laravel"],
};

export const reactItems = [
  { title: "Back-End", text: "Também trabalho na integração entre front-end e back-end, consumindo APIs REST e utilizando ferramentas como Axios, Swagger e Insomnia para validar requisições e fluxos de dados." },
  { title: "TypeScript", text: "Código tipado no dia a dia, com mais segurança para corrigir e evoluir aplicações em produção." },
  { title: "Docker", text: "Tenho experiência com ambientes de desenvolvimento containerizados utilizando Docker e Laravel Sail, apoiando a configuração e execução dos serviços necessários para o funcionamento da aplicação, como API e banco de dados." },
  { title: "Next.js", text: "Experiência com Next.js em sites e aplicações React, com atenção a desempenho e SEO." },
  { title: "React em VTEX IO", text: "As lojas VTEX IO são feitas em React: customizo blocos, componentes e temas do Store Framework." },
  { title: "Desenvolvimento sólido", text: "Minha atuação envolve demandas de desenvolvimento e sustentação, desde a identificação de problemas até a implementação das soluções, contribuindo para a estabilidade, qualidade e evolução dos sistemas." },
];

export const cinemark = {
  title: "Cinemark Brasil: integração das receitas de todo o país",
  intro:
    "Aplicação em C# que processa e analisa dados do Microsoft Fabric e mantém as integrações de receitas das operações da Cinemark em todo o Brasil, por meio de filas no Microsoft Azure.",
  points: [
    { title: "Projeto grande e complexo", text: "Receitas de todas as operações da Cinemark no Brasil." },
    { title: "Prazo curto, padrão alto", text: "Prazos e entregas que exigiam excelência e rapidez." },
    { title: "Construído em equipe", text: "Ajudei a montar a estrutura inicial e vários processadores completos." },
  ],
  steps: [
    { title: "Equipe e estrutura inicial", text: "Montagem do projeto em equipe e construção da estrutura inicial da aplicação." },
    { title: "Processadores completos", text: "Desenvolvimento de vários processadores de ponta a ponta, conforme as demandas da Cinemark." },
    { title: "Entrega e deploy", text: "Aplicação entregue e publicada em produção." },
    { title: "1 ano de suporte", text: "Suporte interino com decisões, melhorias, novos processadores e resolução de problemas." },
  ],
  tags: ["C#", ".NET", "Microsoft Fabric", "Azure", "D365", "Azure DevOps"],
};

export const experience = [
  {
    company: "Signo Tech",
    role: "Desenvolvedor Full Stack",
    period: "Ago/2024 – Nov/2026",
    place: "Remoto",
    bullets: [
      "Suporte e melhorias em aplicações 100% React, com TypeScript e Docker.",
      "Cinemark Brasil: ajudei a montar, em equipe, a estrutura inicial e vários processadores completos de uma aplicação em C# que integra as receitas de todo o país. Depois do deploy, fiquei 1 ano no suporte, com melhorias e novos processadores.",
      "Izzo Musical: implantei cinco sublojas completas em VTEX IO, com tema exclusivo, políticas comerciais e estruturas no Master Data.",
      "Suporte e evolução de lojas VTEX: análise de problemas, manutenção e melhorias.",
    ],
  },
  {
    company: "7ways – Marketing Digital",
    role: "Desenvolvedor Front-end",
    period: "Jul/2021 – Ago/2024",
    place: "Remoto",
    bullets: [
      "Riachuelo: construção completa do blog, depois migração de hospedagem e suporte contínuo para mudanças, melhorias e problemas.",
      "Suporte, manutenção e evolução dos e-commerces de Santa Luzia, GrandVision e GoldKo.",
      "Landing pages para campanhas e eventos promocionais.",
      "E-commerces e sites institucionais em VTEX, WordPress e Loja Integrada.",
    ],
  },
  {
    company: "Fujitsu South America e TTEC",
    role: "Suporte de TI e Help Desk",
    period: "2017 – 2019",
    place: "São Paulo e Osasco – SP",
    bullets: [
      "Início de carreira em suporte técnico: atendimento de chamados, liberação de acessos e apoio à manutenção do CPD.",
    ],
  },
];

export const stack: { group: string; featured: boolean; art?: IllustrationName; items: string[] }[] = [
  { group: "VTEX e e-commerce", featured: true, items: ["VTEX", "VTEX IO", "JSONC", "Master Data", "WordPress", "Loja Integrada"] },
  { group: "Frontend", featured: false, art: "components", items: ["JavaScript", "TypeScript", "React", "Next.js", "React Native", "Redux", "Tailwind CSS"] },
  { group: "Backend e integrações", featured: false, art: "pipeline", items: ["Node.js", "C#", ".NET", "Python", "GraphQL", "APIs REST", "Swagger"] },
  { group: "Dados", featured: false, items: ["MySQL", "SQL Server"] },
  { group: "Cloud e ferramentas", featured: false, art: "cloud", items: ["Azure", "Azure DevOps", "Docker", "Git", "GitHub", "Insomnia", "Postman", "GTM", "GA4"] },
  { group: "Arquitetura e IA", featured: false, items: ["Clean Architecture", "Code Review", "Agile/Scrum", "LLMs", "Agentes de IA", "MCP", "Prompt e context engineering"] },
];

export const education = [
  { title: "Engenharia Mecatrônica, Robótica e Automação", detail: "Centro Universitário FMU / FIAM-FAAM · 2018–2020, até o 4º semestre" },
  { title: "Técnico em Informática integrado ao Ensino Médio", detail: "Etec Raposo Tavares · 2014–2016" },
];

export const languages = [
  { name: "Português", level: "Nativo" },
  { name: "Inglês", level: "Intermediário (escuta e leitura)" },
];
