import { createFileRoute } from "@tanstack/react-router";

const LINKS = {
  dashiell: "https://www.facebook.com/profile.php?id=61594191305147",
  taina: "https://www.facebook.com/HerdeiroLeclerc/",
  agencia: "https://www.facebook.com/groups/agenciaclubesecreto2",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Família Barkóczy — Honra, Tradição, Distinção e Orgulho" },
      { name: "description", content: "Conheça a Família Barkóczy: Dashiell, Tainã e o Grupo Barkóczy." },
      { property: "og:title", content: "Família Barkóczy" },
      { property: "og:description", content: "Honra, Tradição, Distinção e Orgulho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const dashiellText = [
  "Nascido em 8 de abril e radicado na Espanha, Dashiell Barkóczy é o atual patriarca e a força motriz por trás do imponente Grupo Barkóczy. Muito mais do que um líder e fundador de um império, ele é a personificação viva de um legado que atravessa gerações. De inspiração europeia e com uma essência profundamente refinada, Dashiell carrega consigo os pilares de honra, tradição, distinção e orgulho que definem sua família. Sob sua liderança, o nome Barkóczy evoca elegância, caráter e uma visão única do mundo, consolidando-se através da busca constante pela excelência. Publicamente, ele é um homem de presença inegável, frequentemente elogiado por sua beleza marcante, sua inteligência afiada e por uma postura proativa, sendo conhecido como alguém com a disposição e a habilidade para resolver qualquer problema que se apresente.",
  "Para a sociedade e nos negócios, Dashiell ostenta uma postura marrenta, extremamente séria e com os pés firmemente fincados no chão. Ele exige qualidade, comprometimento e autenticidade em cada projeto da sua agência. No entanto, toda essa armadura impenetrável cai por terra diante de uma única pessoa: seu afilhado e filho adotivo, Tainã. Na intimidade dessa relação, a fachada de patriarca implacável dá lugar a um homem intensamente carinhoso, brincalhão e vulnerável. É ao lado de Tainã que Dashiell se sente verdadeiramente à vontade para falar sobre qualquer assunto, demonstrando um amor paternal profundo e incondicional. Desde o momento em que acolheu o menino, Dashiell não enxergou apenas a responsabilidade de cuidar do filho de seu melhor amigo, mas viu naquela criança a chama do próximo grande herdeiro do Grupo Barkóczy, o sucessor destinado a unir a nobreza dos princípios do passado à determinação do futuro.",
  "Todas as decisões do Grupo Barkóczy passam pelas mãos de Dashiell — mas nenhuma é tomada sem que ele escute, antes, a opinião do afilhado. Foi assim que nasceram as duas causas mais importantes da família, ambas escolhidas 100% por ele. O apoio às escolas na Amazônia começou no dia em que adotou Tainã. Anos depois, quando o afilhado reuniu coragem para se assumir gay, Dashiell percebeu o peso que o menino carregava: não era medo dele, mas de uma sociedade cheia de preconceitos. Naquele instante, pensou em todas as pessoas LGBTQIA+ que não tinham alguém para apoiá-las e acolhê-las como ele acolhia Tainã — e decidiu, ali mesmo, abraçar a causa. Um gesto de pai, para mostrar ao filho que queria vê-lo viver em um mundo melhor, livre de preconceitos.",
  "Longe das pressões de manter a excelência e a tradição de sua dinastia, o cotidiano de Dashiell na Espanha revela um lado ainda mais acolhedor e particular. Apaixonado por animais, ele transformou sua residência em um verdadeiro refúgio, dividindo seu tempo e espaço com muitos cães e gatos que trazem leveza à sua rotina exigente. A filosofia de vida de Dashiell centra-se em criar conexões significativas, inspirar confiança e aportar um valor duradouro a quem faz parte do seu universo. Ele se mantém como o guardião inabalável de uma história singular e inesquecível, garantindo que a marca de identidade dos Barkóczy permaneça viva nos ensinamentos, nas lembranças e, acima de tudo, no coração de seu amado afilhado, perpetuando o sucesso com estilo, determinação e os olhos sempre voltados para o amanhã.",
];

const tainaText = [
  "Nascido em 4 de setembro, Tainã Barkóczy é a mente criativa e o coração digital por trás das inovações da Família Barkóczy. De origem afro-indígena — filho de uma ativista Baré e de um fotojornalista angolano —, ele carrega em suas raízes uma riqueza cultural que transparece em toda a sua arte. Após a trágica perda de seus pais durante a infância, Tainã foi resgatado e adotado por Dashiell Barkóczy, o patriarca da família e o melhor amigo de seu falecido pai. Desde aquele momento, Dashiell não o levou apenas para Madrid, mas o abrigou em sua vida, concedendo-lhe o peso e o prestígio do sobrenome da família.",
  "Essa intervenção de Dashiell moldou não apenas o futuro de Tainã, mas o seu próprio coração. Ele é profundamente apegado ao padrinho, a quem considera seu porto seguro e a pessoa que mais ama no mundo. Não há um único passo que Tainã dê, um projeto que conclua ou uma frustração que sinta que não seja imediatamente compartilhado com Dashiell. Seja dividindo a mesma sala ou conversando por mensagens enquanto viaja, Tainã faz questão de manter essa proximidade constante. Cada madrugada no Illustrator, cada nova habilidade que aprende e cada passo na Agência tem um objetivo silencioso e primordial em sua vida: ser o motivo do maior orgulho de seu padrinho.",
  "O dia em que se assumiu gay ficou marcado para sempre. Mesmo sabendo que o padrinho o amava acima de tudo, Tainã sentiu medo — não de Dashiell, mas da sociedade preconceituosa em que vivia. A resposta veio em forma de acolhimento imediato e de um gesto que mudou o grupo: ao entender o peso que o afilhado carregava, Dashiell decidiu que o Grupo Barkóczy passaria a apoiar as causas LGBTQIA+, para que outras pessoas como Tainã nunca se sentissem sozinhas. Para Tainã, essa é a maior prova de amor que já recebeu.",
  "Formado em Design Gráfico e Comunicação Digital pelo prestigiado IED (Istituto Europeo di Design) em Madrid, Tainã atua como o diretor de arte não-oficial da Agência Barkóczy. Apaixonado por edição de fotos, ilustração e design têxtil, é ele quem assina a criação de sites e a identidade visual de diversos projetos da comunidade. Ele é uma presença magnética e constante no grupo da agência no Facebook, equilibrando seu papel no império da família com postagens autênticas, onde desabafa sobre sua rotina criativa e interage de forma genuína com os membros.",
  "Quando se afasta das telas de trabalho, Tainã é dono de um estilo de vida que mistura o geek ao peculiar. Seu combustível para as horas de edição costuma ser um bom Bubble Tea, acompanhado de sua curiosa preferência por abacate. Sua estética e visão de mundo foram profundamente marcadas por uma inesquecível viagem ao Japão, o que se reflete em seu amor pela cultura pop e pelas animações. Seu refúgio absoluto é o universo de Hora de Aventura — cujas faixas 'Sou Seu Problema' e 'Island Song' são presença constante em seus fones de ouvido —, mas ele também é fã de clássicos modernos como Banana Fish, O Incrível Mundo de Gumball, Apenas um Show e Titio Avô. No tempo livre, além de maratonar os filmes do Homem-Aranha estrelados por Tom Holland, ele divide sua atenção entre a imersão de Dead by Daylight, a exploração no Roblox e investigações no jogo de sua animação favorita. E quando o assunto é cor, a escolha dele é sempre a mesma: o rosa — sua cor favorita, a que ele elege sempre que pode para dar vida às suas criações.",
];

const grupoText = [
  "O Grupo Barkóczy ergue-se não apenas como um império de comunicação e negócios, mas como um verdadeiro símbolo de inovação, fomento cultural e responsabilidade social. Com raízes na elegância europeia e uma visão moderna de mercado, o conglomerado é formado por uma diversidade de empreendimentos estratégicos que carregam a marca absoluta da excelência. A joia da coroa é, sem dúvida, a prestigiada Agência Barkóczy, que se consolidou como o epicentro social e criativo da comunidade, ditando tendências, conectando projetos e moldando a forma como as pessoas interagem.",
  "Todas as decisões da empresa são tomadas por Dashiell, que sempre considera a opinião do afilhado antes de bater o martelo. No entanto, o alcance do grupo vai muito além do universo digital, ramificando-se em espaços físicos e culturais de imenso renome em toda a Europa. Sob a liderança implacável do patriarca Dashiell e impulsionado pelo olhar artístico de seu herdeiro Tainã, o grupo expandiu seu legado fundando uma prestigiada escola de artes, que atrai e lapida talentos de todo o continente, e um imponente teatro de arquitetura clássica, palco das produções e exposições mais aclamadas da atualidade. A paixão pela narrativa e pelo conhecimento deu origem a uma sofisticada editora de livros, responsável por publicações de altíssimo padrão que circulam pelo mundo. Completando o portfólio, o grupo possui uma renomada e badalada cafeteria, que serve como ponto de encontro para mentes criativas na Europa — e que, certamente, possui no menu o Bubble Tea perfeito para acompanhar as exigentes rotinas de criação do jovem diretor de arte da família. Cada um desses empreendimentos respira a identidade Barkóczy, unindo tradição, qualidade e um desejo permanente de superar expectativas.",
  "Entretanto, o verdadeiro peso dessa dinastia não é medido apenas por seu sucesso comercial ou por sua influência cultural, mas pelo profundo impacto humano que promove. Movidos pela convicção de que o privilégio e o alcance global devem atuar como instrumentos reais de transformação, o Grupo Barkóczy destina anualmente mais de 20 milhões a causas filantrópicas — e as duas principais beneficiadas foram escolhidas 100% por Dashiell, por amor a Tainã. Essas doações generosas não são meros repasses financeiros, mas escolhas direcionadas que refletem a alma e os valores inegociáveis de seus líderes. O compromisso inabalável com a justiça social e a igualdade traduz-se no apoio contínuo a entidades de causas LGBTQIA+ e a movimentos ativos de combate ao racismo, além de contribuições estruturais e vitais a hospitais de referência no tratamento do câncer.",
  "Cada frente de apoio caritativo carrega uma assinatura pessoal e emocional da família. O amor imensurável de Dashiell pelos animais — visível nos cães e gatos que enchem sua casa de vida — reflete-se diretamente no financiamento robusto de diversas ONGs dedicadas ao resgate e proteção animal. De forma igualmente emocionante, o grupo atua como um pilar financeiro inabalável para escolas e projetos educacionais na Amazônia. Esta é uma homenagem silenciosa, poderosa e eterna que honra o sangue afro-indígena de Tainã e perpetua o legado ativista de sua mãe. Dessa forma, o Grupo Barkóczy transcende o conceito de corporação, provando que a verdadeira elegância de sua história não reside apenas na fortuna ou no status que acumula, mas no mundo mais justo, belo e acolhedor que ajuda a construir.",
];

const empresas = ["Agência Barkóczy", "Teatro Real", "Editorial", "Instituto de Artes", "El Grifo Café"];

type NegocioTone = "primary" | "teatro" | "editorial" | "instituto" | "cafe";
const negocioCls: Record<NegocioTone, string> = {
  primary: "bg-primary text-primary-foreground",
  teatro: "bg-teatro text-teatro-foreground",
  editorial: "bg-editorial text-editorial-foreground",
  instituto: "bg-instituto text-instituto-foreground",
  cafe: "bg-cafe text-cafe-foreground",
};
type Negocio = { name: string; tag: string; facts: string[]; text: string; tone: NegocioTone };
const negocios: Negocio[] = [
  {
    name: "Agência Barkóczy",
    tag: "A pedra fundamental",
    tone: "primary",
    facts: ["Fundada por Dashiell", "Direção de arte: Tainã", "O coração pulsante de Madrid"],
    text: "Começou como um núcleo de excelência em comunicação e rapidamente se tornou o epicentro social de toda a comunidade — o espaço onde laços são formados, projetos nascem e a vida cotidiana acontece em sua forma mais autêntica. Dashiell ergueu as pilastras inabaláveis do negócio com sua visão de liderança; Tainã, ao assumir a direção de arte, injetou sangue novo, modernidade e uma estética visual incomparável, consolidando a marca como o coração pulsante de Madrid e da comunidade virtual.",
  },
  {
    name: "Teatro Real Barkóczy",
    tag: "Símbolo máximo de status",
    tone: "teatro",
    facts: ["Edifício histórico restaurado", "Óperas, peças e exposições", "Veludo carmesim e ouro"],
    text: "Nascido da paixão de Dashiell pela arquitetura clássica e pela alta cultura espanhola e europeia. Ele adquiriu um edifício histórico no coração de Madrid e o restaurou de forma impecável, transformando-o no palco mais prestigiado da Espanha — onde a elite cultural se encontra sob o olhar vigilante e o patrocínio generoso dos Barkóczy.",
  },
  {
    name: "Editorial Barkóczy",
    tag: "Memória e prestígio",
    tone: "editorial",
    facts: ["Curadoria: Dashiell", "Concepção gráfica: Tainã", "Capas de colecionador"],
    text: "Para Dashiell, a memória e a história são o bem mais precioso de uma família — o mesmo respeito que o fez resgatar a história do falecido amigo e de Tainã. A editora é reconhecida por publicações de altíssimo padrão literário e acadêmico. Sob as mãos de Tainã, cada livro ganha capas que são verdadeiras peças de arte, cobiçadas em todo o mundo.",
  },
  {
    name: "Instituto Barkóczy de Artes Creativas",
    tag: "Ponte entre gerações",
    tone: "instituto",
    facts: ["Design gráfico, têxtil e digital", "Inspirado no talento de Tainã", "Bolsas para América do Sul e África"],
    text: "Dashiell fundou a escola inspirado pelo talento precoce de Tainã para o design e as artes visuais. Hoje é a instituição mais moderna e renomada da Espanha na área. Por exigência pessoal de Tainã, em honra às suas raízes e à memória de seus pais — o fotojornalista e a ativista —, o instituto mantém um programa robusto de bolsas integrais para jovens talentos da América do Sul e da África.",
  },
  {
    name: "El Grifo Café & Pastelería",
    tag: "Um projeto 100% Tainã",
    tone: "cafe",
    facts: ["Tainã detesta café puro", "O café é a estrela oculta", "Seção intocável de chocolate"],
    text: "A cafeteria mais badalada da cidade — e o detalhe irônico é que Tainã detesta o sabor do café puro. Fascinado pelo café como ingrediente, ele trabalhou lado a lado com chefs e baristas europeus num cardápio de entremets, tortas, frapês e coquetéis, cada um com seu próprio brilho. Para o seu lado formiga, exigiu uma seção exclusiva de chocolate: chocolates quentes densos, brownies e trufas. Sob o brasão do Grifo, é o ponto de encontro dos alunos do Instituto, das reuniões informais de Dashiell e o abastecimento de doces de Tainã nas madrugadas de design.",
  },
];

type Causa = { name: string; desc: string; tag?: string | undefined; tone: "primary" | "light" | "outline" };

const causas: Causa[] = [
  {
    tag: "Decisão 100% Dashiell",
    name: "Causas LGBTQIA+",
    desc: "Começou no dia em que Tainã se assumiu gay. Ao perceber que o medo do afilhado vinha de uma sociedade cheia de preconceitos, Dashiell pensou em todas as pessoas LGBTQIA+ sem alguém para acolhê-las — e decidiu apoiar a causa por ele, para que o filho viva em um mundo livre de preconceitos.",
    tone: "primary",
  },
  {
    tag: "Decisão 100% Dashiell",
    name: "Escolas na Amazônia",
    desc: "Começou no dia em que Dashiell adotou Tainã. Contribuição estrutural a escolas e projetos educacionais da região — a homenagem silenciosa, poderosa e eterna da família ao sangue afro-indígena de Tainã e ao legado ativista de sua mãe.",
    tone: "light",
  },
  { name: "Combate ao racismo", desc: "Movimentos ativos na linha de frente da igualdade racial.", tone: "outline" },
  { name: "Hospitais de câncer", desc: "Contribuições estruturais a hospitais de referência no tratamento.", tone: "outline" },
  { name: "Proteção animal", desc: "ONGs de resgate e proteção, sustentadas pela paixão de Dashiell pelos animais.", tone: "outline" },
];

function CauseCard({ c }: { c: Causa }) {
  const base =
    c.tone === "primary"
      ? "bg-primary text-primary-foreground"
      : c.tone === "light"
        ? "bg-background text-foreground"
        : "border border-ink-foreground/25 text-ink-foreground/80";
  const big = Boolean(c.tag);
  return (
    <div
      className={`${base} relative overflow-hidden rounded-[2rem] rounded-tl-none p-6 transition-transform hover:-translate-y-1 ${big ? "md:p-10" : ""}`}
    >
      {c.tag && (
        <span className="inline-block bg-ink px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-ink-foreground">
          {c.tag}
        </span>
      )}
      <p className={`mt-4 font-black uppercase tracking-tight ${big ? "text-3xl md:text-4xl" : "text-lg"}`}>{c.name}</p>
      <p className={`mt-3 font-medium leading-relaxed ${big ? "text-base" : "text-sm"}`}>{c.desc}</p>
    </div>
  );
}


function Btn({
  href, children, dark, accent = "blue",
}: {
  href: string; children: React.ReactNode; dark?: boolean | undefined; accent?: Accent | undefined;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-extrabold uppercase tracking-widest transition-all hover:-translate-y-0.5 ${
        dark ? "bg-ink text-ink-foreground hover:bg-primary" : `${accents[accent].solid} hover:bg-ink`
      }`}
    >
      {children}
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}

type Accent = "blue" | "pink";

const accents: Record<Accent, { solid: string; text: string }> = {
  blue: { solid: "bg-primary text-primary-foreground", text: "text-primary" },
  pink: { solid: "bg-pink text-pink-foreground", text: "text-pink" },
};

type Fact = { label: string; title: string; items?: string[]; tone: "accent" | "ink" | "light" };

const dashiellFacts: Fact[] = [
  { label: "Quem ele mais ama", title: "Tainã", items: ["Afilhado e filho adotivo", "Ao lado dele, é carinhoso, brincalhão e vulnerável"], tone: "accent" },
  { label: "Origem", title: "8 de abril · Espanha", items: ["Inspiração europeia", "Essência refinada"], tone: "ink" },
  { label: "Paixão", title: "Animais", items: ["Muitos cães e gatos em casa", "Financia ONGs de resgate animal"], tone: "light" },
  { label: "Papel", title: "Patriarca & Fundador", items: ["Toma todas as decisões do grupo", "Sempre ouve a opinião do afilhado"], tone: "light" },
  { label: "Decisões do coração", title: "Causas escolhidas por ele", items: ["Escolas na Amazônia: desde a adoção", "LGBTQIA+: desde que Tainã se assumiu"], tone: "accent" },
  { label: "Personalidade", title: "Marrento, sério, proativo", items: ["Resolve qualquer problema", "Exige qualidade e autenticidade"], tone: "ink" },
  { label: "Filosofia", title: "Conexões que duram", items: ["Inspirar confiança", "Gerar valor duradouro"], tone: "accent" },
];

const tainaFacts: Fact[] = [
  { label: "Quem ele mais ama", title: "Dashiell", items: ["Padrinho e porto seguro", "Compartilha tudo com ele", "Sonho: ser seu maior orgulho"], tone: "accent" },
  { label: "Raízes", title: "Afro-indígena", items: ["Mãe ativista Baré", "Pai fotojornalista angolano", "Nascido em 4 de setembro"], tone: "ink" },
  { label: "Estudos", title: "IED Madrid", items: ["Design Gráfico", "Comunicação Digital"], tone: "light" },
  { label: "Trabalho", title: "Diretor de arte", items: ["Agência Barkóczy", "Sites e identidade visual", "Foto, ilustração, design têxtil"], tone: "light" },
  { label: "Comida & bebida", title: "Favoritos", items: ["Bubble Tea", "Abacate", "Poke"], tone: "accent" },
  { label: "Na playlist", title: "Hora de Aventura", items: ["Sou Seu Problema", "Island Song"], tone: "ink" },
  { label: "Séries & filmes", title: "Animações", items: ["Banana Fish", "O Incrível Mundo de Gumball", "Apenas um Show", "Titio Avô", "Homem-Aranha (Tom Holland)"], tone: "light" },
  { label: "Games", title: "Modo jogador", items: ["Dead by Daylight", "Roblox", "Jogo de Hora de Aventura"], tone: "ink" },
  { label: "O dia que mudou tudo", title: "Se assumir gay", items: ["Medo da sociedade, nunca do padrinho", "Recebeu acolhimento imediato", "Inspirou o apoio às causas LGBTQIA+"], tone: "accent" },
  { label: "Marca na alma", title: "Japão", items: ["Viagem inesquecível", "Amor pela cultura pop"], tone: "light" },
  { label: "Cor favorita", title: "Rosa", items: ["A cor que ele mais ama", "Presente no que ele cria e no que ele é"], tone: "accent" },
];

const toneCls: Record<Fact["tone"], Record<Accent, string>> = {
  accent: { blue: accents.blue.solid, pink: accents.pink.solid },
  ink: { blue: "bg-ink text-ink-foreground", pink: "bg-ink text-ink-foreground" },
  light: { blue: "bg-muted text-foreground", pink: "bg-muted text-foreground" },
};

function FactCard({ f, i, accent }: { f: Fact; i: number; accent: Accent }) {
  const shape = i % 3 === 0 ? "rounded-[2rem] rounded-tr-none" : i % 3 === 1 ? "rounded-[2rem] rounded-bl-none" : "rounded-[2rem]";
  return (
    <div className={`${toneCls[f.tone][accent]} ${shape} relative overflow-hidden p-6 transition-transform hover:-translate-y-1`}>
      <span className="absolute -right-3 -top-6 text-7xl font-black opacity-10">{String(i + 1).padStart(2, "0")}</span>
      <p className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-70">{f.label}</p>
      <p className="mt-2 text-2xl font-black leading-tight">{f.title}</p>
      {f.items && (
        <ul className="mt-3 space-y-1 text-sm font-medium opacity-85">
          {f.items.map((it) => <li key={it}>— {it}</li>)}
        </ul>
      )}
    </div>
  );
}

function Member({
  name, role, born, text, facts, link, linkLabel, rev, accent = "blue",
}: {
  name: string; role: string; born: string; text: string[]; facts: Fact[]; link: string; linkLabel: string;
  rev?: boolean | undefined; accent?: Accent | undefined;
}) {
  const [first, last] = name.split(" ");
  return (
    <article className="relative">
      <div className={`flex flex-col gap-4 md:flex-row md:items-end md:justify-between ${rev ? "md:flex-row-reverse md:text-right" : ""}`}>
        <div>
          <span className={`inline-block px-4 py-2 text-xs font-black uppercase tracking-[0.3em] ${accents[accent].solid}`}>{role}</span>
          <h3 className={`mt-4 text-6xl font-black leading-[0.9] tracking-tight md:text-9xl ${accents[accent].text}`}>
            {first}
            <span className="block text-outline">{last}</span>
          </h3>
        </div>
        <p className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground">{born}</p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {facts.map((f, i) => <FactCard key={f.label} f={f} i={i} accent={accent} />)}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-12">
        <div className="lg:col-span-3">
          <p className="text-xs font-black uppercase tracking-[0.4em]">A história</p>
          <div className="mt-4 h-2 w-24 bg-ink" />
        </div>
        <div className="space-y-5 text-base leading-relaxed text-foreground/85 md:text-lg lg:col-span-9">
          {text.map((p, i) => <p key={i}>{p}</p>)}
          <div className="pt-6">
            <Btn href={link} accent={accent}>{linkLabel}</Btn>
          </div>
        </div>
      </div>
    </article>
  );
}

function Index() {
  return (
    <main className="overflow-x-hidden bg-background">
      {/* HERO */}
      <header className="relative min-h-screen overflow-hidden bg-muted">
        <div className="absolute -right-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-ink" />
        <div className="absolute -right-10 top-24 h-[30rem] w-[30rem] rounded-full border-[3rem] border-background" />
        <div className="absolute -left-20 bottom-32 h-24 w-[140%] -rotate-12 bg-primary" />
        <div className="absolute -left-20 bottom-12 h-8 w-[140%] -rotate-12 bg-ink" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full border-[2.5rem] border-primary" />

        <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <span className="text-lg font-black tracking-tight">B<span className="text-primary">.</span></span>
          <div className="hidden gap-8 text-xs font-bold uppercase tracking-[0.3em] md:flex">
            <a href="#familia" className="hover:text-primary">A Família</a>
            <a href="#grupo" className="hover:text-primary">O Grupo</a>
          </div>
        </nav>

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center px-6 pb-56 pt-16 md:pt-28">
          <p className="mb-6 inline-flex w-fit items-center gap-3 bg-ink px-4 py-2 text-xs font-bold uppercase tracking-[0.4em] text-ink-foreground">
            Est. Madrid · España
          </p>
          <h1 className="text-[18vw] font-black leading-[0.82] tracking-tighter md:text-[11rem]">
            <span className="block text-foreground">Família</span>
            <span className="block text-primary">Barkóczy</span>
          </h1>
          <p className="mt-10 max-w-xl border-l-8 border-primary pl-6 text-xl font-semibold md:text-2xl">
            Honra, Tradição, Distinção e Orgulho
          </p>
          <div className="mt-10">
            <Btn href="#familia" dark>Conheça a família</Btn>
          </div>
        </div>
      </header>

      {/* FAMÍLIA */}
      <section id="familia" className="relative py-28 md:py-40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-24 flex items-end gap-6">
            <span className="text-8xl font-black leading-none text-outline md:text-[10rem]">01</span>
            <h2 className="pb-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
              A <span className="text-primary">Família</span>
            </h2>
          </div>
          <div className="space-y-40">
            <Member
              name="Dashiell Barkóczy" role="Patriarca" born="8 de abril · Espanha"
              text={dashiellText} facts={dashiellFacts} link={LINKS.dashiell} linkLabel="Perfil de Dashiell"
            />
            <Member
              name="Tainã Barkóczy" role="O Herdeiro" born="4 de setembro · Madrid"
              text={tainaText} facts={tainaFacts} link={LINKS.taina} linkLabel="Perfil de Tainã" rev accent="pink"
            />
          </div>
        </div>
      </section>

      {/* GRUPO */}
      <section id="grupo" className="relative">
        <div className="clip-diag-rev bg-ink pb-32 pt-48 text-ink-foreground">
          <div className="pointer-events-none absolute right-0 top-40 h-[28rem] w-[28rem] translate-x-1/3 rounded-full border-[3rem] border-primary" />
          <div className="relative mx-auto max-w-7xl px-6">
            <div className="mb-16 flex items-end gap-6">
              <span className="text-8xl font-black leading-none text-primary md:text-[10rem]">02</span>
              <h2 className="pb-4 text-4xl font-black uppercase tracking-tight md:text-6xl">
                O Grupo <span className="text-primary">Barkóczy</span>
              </h2>
            </div>
            <div className="mb-16 flex flex-wrap gap-3">
              {empresas.map((e, i) => (
                <span
                  key={e}
                  className={`rounded-full px-5 py-3 text-xs font-extrabold uppercase tracking-widest ${
                    i === 0 ? "bg-primary text-primary-foreground" : "border border-ink-foreground/30"
                  }`}
                >
                  {e}
                </span>
              ))}
            </div>
            <div className="grid gap-10 text-base leading-relaxed text-ink-foreground/80 md:grid-cols-2 md:text-lg">
              {grupoText.map((p, i) => <p key={i}>{p}</p>)}
            </div>

            <div className="mt-24">
              <h3 className="mb-10 text-3xl font-black uppercase tracking-tight md:text-5xl">
                Os <span className="text-primary">empreendimentos</span>
              </h3>
              <div className="grid gap-4 lg:grid-cols-2">
                {negocios.map((n, i) => (
                  <article
                    key={n.name}
                    className={`relative overflow-hidden rounded-3xl p-8 md:p-10 ${
                      i === 0 ? "bg-primary text-primary-foreground lg:col-span-2" : n.pink ? "bg-pink text-pink-foreground" : "border border-ink-foreground/20"
                    }`}
                  >
                    <span className="pointer-events-none absolute -right-2 -top-6 text-[8rem] font-black leading-none opacity-15">0{i + 1}</span>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] opacity-70">{n.tag}</p>
                    <h4 className="mt-2 text-2xl font-black uppercase tracking-tight md:text-3xl">{n.name}</h4>
                    <ul className="mt-4 space-y-1 text-sm font-bold">
                      {n.facts.map((f) => <li key={f}>— {f}</li>)}
                    </ul>
                    <p className="mt-5 text-sm leading-relaxed opacity-85 md:text-base">{n.text}</p>
                  </article>
                ))}
              </div>
            </div>



            <div className="mt-24">
              <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
                <h3 className="text-3xl font-black uppercase tracking-tight md:text-5xl">
                  Para onde vão os <span className="text-primary">20 milhões</span>
                </h3>
                <p className="max-w-xs text-xs font-bold uppercase tracking-[0.3em] text-ink-foreground/50">
                  Mais de 20 milhões de euros por ano em apoio direto
                </p>
              </div>
              <blockquote className="mb-10 border-l-4 border-primary pl-6 text-xl font-bold leading-snug md:text-2xl">
                “Todas as decisões são do Dashiell — e ele sempre ouve o afilhado. As duas causas principais nasceram do amor por Tainã.”
              </blockquote>
              <div className="grid gap-4 lg:grid-cols-2">
                {causas.filter((c) => c.tag).map((c) => <CauseCard key={c.name} c={c} />)}
              </div>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {causas.filter((c) => !c.tag).map((c) => <CauseCard key={c.name} c={c} />)}
              </div>
            </div>

            <div className="mt-16 flex flex-col items-start gap-8 rounded-3xl bg-primary p-10 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.4em] text-primary-foreground/70">Filantropia anual em euros</p>
                <p className="text-5xl font-black text-primary-foreground md:text-7xl">+20 milhões</p>
              </div>
              <a
                href={LINKS.agencia} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-extrabold uppercase tracking-widest text-foreground transition-transform hover:-translate-y-0.5"
              >
                Conheça a Agência →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink-foreground/10 bg-ink text-ink-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-12 md:flex-row md:items-center md:justify-between">
          <p className="text-sm">Família Barkóczy © 2026. Todos os direitos reservados.</p>
          <div className="flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">
            <a href={LINKS.dashiell} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Dashiell</a>
            <a href={LINKS.taina} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Tainã</a>
            <a href={LINKS.agencia} target="_blank" rel="noopener noreferrer" className="hover:text-primary">Agência</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
