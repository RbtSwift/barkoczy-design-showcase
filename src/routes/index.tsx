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
  "Há, porém, um lado de Dashiell que poucos conhecem: o homem que precisa de chão, bicho e céu. Ele ama estar em contato com a natureza — chegar perto, pedir autorização da mata, sentir a energia do lugar e deixar que isso alimente a sua alma. É na fazenda que ele se encontra de verdade: cavalos, gado, galinhas, porcos, bodes e animais em geral, todos sempre ao seu lado em cada aventura. Acampar, fazer trilhas e descobrir coisas novas são convites que ele nunca recusa. Sua vida se divide, na prática, entre ser empresário e fugir para o campo — e quando não é o campo, é a casa de praia, parado diante do mar, admirando o céu e sentindo a brisa passar.",
  "Há um jeito que Dashiell tem de amar que quem convive com ele percebe rápido: ele não economiza carinho. É colo, é abraço apertado, é a vontade realizada antes mesmo de ser pedida. Ele sabe exatamente o efeito que isso causa — quanto mais mimado, mais manhoso e carente o afilhado fica — e, no fundo, é justamente isso que ele quer. Porque aos seus olhos, aos 18 ou a qualquer idade, Tainã continua sendo a criança que ele tirou de casa para proteger do mundo. E é esse menino que Dashiell prometeu cuidar, acolher e defender pelo resto da vida.",
];

const tainaText = [
  "Nascido em 4 de setembro, Tainã Barkóczy é a mente criativa e o coração digital por trás das inovações da Família Barkóczy. De origem afro-indígena — filho de uma ativista Baré e de um fotojornalista angolano —, ele carrega em suas raízes uma riqueza cultural que transparece em toda a sua arte. Após a trágica perda de seus pais durante a infância, Tainã foi resgatado e adotado por Dashiell Barkóczy, o patriarca da família e o melhor amigo de seu falecido pai. Desde aquele momento, Dashiell não o levou apenas para Madrid, mas o abrigou em sua vida, concedendo-lhe o peso e o prestígio do sobrenome da família.",
  "Essa intervenção de Dashiell moldou não apenas o futuro de Tainã, mas o seu próprio coração. Ele é profundamente apegado ao padrinho, a quem considera seu porto seguro e a pessoa que mais ama no mundo. Não há um único passo que Tainã dê, um projeto que conclua ou uma frustração que sinta que não seja imediatamente compartilhado com Dashiell. Seja dividindo a mesma sala ou conversando por mensagens enquanto viaja, Tainã faz questão de manter essa proximidade constante. Cada madrugada no Illustrator, cada nova habilidade que aprende e cada passo na Agência tem um objetivo silencioso e primordial em sua vida: ser o motivo do maior orgulho de seu padrinho.",
  "Apesar de já ter mais de 18 anos, perto do padrinho Tainã continua sendo criança. É como se a postura fosse embora: ele fica manhoso, carente, do jeito mais aberto que existe — e Dashiell sabe exatamente o que fazer com isso. Vive o enchendo de carinho, o mimando e realizando suas vontades sem pensar duas vezes, como quem entende que aquele menino ainda quer colo.",
  "O dia em que se assumiu gay ficou marcado para sempre. Mesmo sabendo que o padrinho o amava acima de tudo, Tainã sentiu medo — não de Dashiell, mas da sociedade preconceituosa em que vivia. A resposta veio em forma de acolhimento imediato e de um gesto que mudou o grupo: ao entender o peso que o afilhado carregava, Dashiell decidiu que o Grupo Barkóczy passaria a apoiar as causas LGBTQIA+, para que outras pessoas como Tainã nunca se sentissem sozinhas. Para Tainã, essa é a maior prova de amor que já recebeu.",
  "Formado em Design Gráfico e Comunicação Digital pelo prestigiado IED (Istituto Europeo di Design) em Madrid, Tainã atua como o diretor de arte não-oficial da Agência Barkóczy. Apaixonado por edição de fotos, ilustração e design têxtil, é ele quem assina a criação de sites e a identidade visual de diversos projetos da comunidade. Ele é uma presença magnética e constante no grupo da agência no Facebook, equilibrando seu papel no império da família com postagens autênticas, onde desabafa sobre sua rotina criativa e interage de forma genuína com os membros.",
  "Foi no IED que as noites em claro no Illustrator — movidas a muito Bubble Tea — viraram profissão. A formação teve um único foco: unir as raízes afro-indígenas às tendências do design moderno europeu, afiando nos corredores da escola o olhar artístico que hoje assina a Direção de Arte e Criação do império da Agência Barkóczy. Tudo, como sempre, com um objetivo em mente: dar ao padrinho o maior orgulho do mundo. E dormitório estudantil? Jamais — morando com Dashiell, a residência oficial de Tainã sempre foi a Mansão Barkóczy.",
  "Tainã ama trabalhar — e ama especialmente usar e abusar da própria criatividade, que lhe brota na cabeça de segundo em segundo. Quando a mente começa a ferver, é o primeiro a aceitar o convite do padrinho para ir à fazenda esfriar a cabeça e passar um tempo na natureza. Quase sempre está ao seu lado nas trilhas e nos acampamentos, trocando as telas pelo mato, pelo céu aberto e pelo barulho dos bichos.",
  "Quando se afasta das telas de trabalho, Tainã é dono de um estilo de vida que mistura o geek ao peculiar. Seu combustível para as horas de edição costuma ser um bom Bubble Tea, acompanhado de sua curiosa preferência por abacate. Sua estética e visão de mundo foram profundamente marcadas por uma inesquecível viagem ao Japão, o que se reflete em seu amor pela cultura pop e pelas animações. Seu refúgio absoluto é o universo de Hora de Aventura — cujas faixas 'Sou Seu Problema' e 'Island Song' são presença constante em seus fones de ouvido —, mas ele também é fã de clássicos modernos como Banana Fish, O Incrível Mundo de Gumball, Apenas um Show e Titio Avô. No tempo livre, além de maratonar os filmes do Homem-Aranha estrelados por Tom Holland, ele divide sua atenção entre a imersão de Dead by Daylight, a exploração no Roblox e investigações no jogo de sua animação favorita. E quando o assunto é cor, a escolha dele é sempre a mesma: o rosa — sua cor favorita, a que ele elege sempre que pode para dar vida às suas criações.",
  "Caseiro por natureza, Tainã é plenamente feliz em casa: um jogo no computador, um bom filme, uma série, os YouTubers favoritos, o caderno de desenho sempre à mão e um livro para ler. Mas também adora sair — ir ao cinema, pedalar pelo parque ecológico, tomar uma água de coco, fazer um piquenique ou simplesmente se deitar na grama para ler. Parques de diversões, shopping center, restaurantes e museus — lugares com histórias para contar — têm lugar garantido na sua lista de programas favoritos.",
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

type Causa = { name: string; desc: string; tag?: string | undefined; tone:
