const eventos = [
  { titulo: "Show de Clayton & Romário", descricao: "Palco completo com painel de LED, luz para o show ao vivo.", servico: "Show ao vivo", imagem: "", video: "assets/video/clayton-romario.mp4", instagram: "https://www.instagram.com/reel/DHhqPpWNeus/", tipo: "reel" },
  { titulo: "Evento Bonamigo Sementes", descricao: "Mais um evento entregue com excelência.", servico: "Post no Instagram", imagem: "", instagram: "https://www.instagram.com/p/DYCe9NlDs0P/", tipo: "post" },
  { titulo: "Entrega em Campo Grande", descricao: "Compromisso com qualidade e perfeição em cada evento.", servico: "Vídeo", imagem: "", video: "assets/video/reel-campo-grande.mp4", instagram: "https://www.instagram.com/reel/DX7_a0iM8Lo/", tipo: "reel" },
  { titulo: "Casamento com painel de LED", descricao: "Cenário visual elegante para momentos inesquecíveis.", servico: "Painel LED + iluminação", imagem: "" },
  { titulo: "Festa de 15 anos", descricao: "Luzes, movimento e impacto para uma entrada marcante.", servico: "Canhões de luz", imagem: "" },
  { titulo: "Evento corporativo", descricao: "Comunicação visual profissional com telão de LED.", servico: "Painel LED", imagem: "" },
  { titulo: "Show com estrutura de luz e som", descricao: "Palco completo com presença e energia para o público.", servico: "Luz + som profissional", imagem: "" },
  { titulo: "Formatura com pista iluminada", descricao: "Pista de LED e efeitos para uma noite inesquecível.", servico: "Pista LED + efeitos", imagem: "" },
  { titulo: "Aniversário com efeitos visuais", descricao: "Ambiente transformado com cor, luz e movimento.", servico: "Iluminação cênica", imagem: "" }
];

const contratacoes = [
  { evento: "Evento social", local: "Campo Grande · MS", servico: "Painel de LED + iluminação", status: "Realizado" },
  { evento: "Formatura", local: "Dourados · MS", servico: "Som profissional + canhões de luz", status: "Realizado" },
  { evento: "Casamento", local: "Três Lagoas · MS", servico: "Painel LED + iluminação cênica", status: "Montagem concluída" },
  { evento: "Aniversário", local: "A definir", servico: "Pista LED + efeitos visuais", status: "Agenda aberta" },
  { evento: "Evento corporativo", local: "A definir", servico: "Telão de LED + som", status: "Agenda aberta" }
];

const depoimentos = [
  { nome: "Ana & Rafael", evento: "Casamento", nota: 5, texto: "O painel de LED deixou a festa com cara de outro nível. A equipe foi pontual e super atenciosa. Recomendo demais!" },
  { nome: "Juliana M.", evento: "Festa de 15 anos", nota: 5, texto: "A iluminação transformou o salão. Minha filha amou a entrada com os canhões de luz. Ficou lindo!" },
  { nome: "Marcelo Costa", evento: "Evento corporativo", nota: 5, texto: "Telão nítido, som impecável e montagem sem estresse. Profissionais de verdade, entregaram tudo no prazo." }
];

const pacotes = [
  {
    nome: "Essencial",
    ideal: "Festas e aniversários",
    itens: ["Painel de LED", "Iluminação básica", "Montagem e operação"],
    destaque: false
  },
  {
    nome: "Completo",
    ideal: "Casamentos e formaturas",
    itens: ["Painel de LED alta resolução", "Iluminação cênica", "Som profissional", "Canhões de luz", "Equipe técnica dedicada"],
    destaque: true
  },
  {
    nome: "Premium",
    ideal: "Shows e eventos corporativos",
    itens: ["Telão de LED grande porte", "Projeto de luz completo", "Sistema de som robusto", "Efeitos especiais", "Coordenação técnica total"],
    destaque: false
  }
];

const cidades = [
  "Campo Grande", "Dourados", "Três Lagoas", "Corumbá", "Ponta Porã",
  "Sidrolândia", "Aquidauana", "Nova Andradina", "Naviraí", "Maracaju", "Coxim", "Rio Brilhante"
];
