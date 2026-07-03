<div align="center">

# 🎇 MSE — Multi Show Eventos

**Site institucional • Painel de LED, iluminação cênica e som profissional para eventos**
📍 Campo Grande — MS e região

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Sem dependências](https://img.shields.io/badge/depend%C3%AAncias-0-success?style=flat)
![Sem build](https://img.shields.io/badge/build-n%C3%A3o%20precisa-success?style=flat)

</div>

---

## 📑 Índice

- [Visão geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Como rodar localmente](#-como-rodar-localmente)
- [⚡ Guia rápido de edição](#-guia-rápido-de-edição)
  - [WhatsApp (2 números)](#1-whatsapp--2-números)
  - [Instagram e mensagem padrão](#2-instagram-e-mensagem-padrão)
  - [Eventos / portfólio](#3-eventos--portfólio-fotos-posts-e-vídeos)
  - [Depoimentos, pacotes, contratações e cidades](#4-depoimentos-pacotes-contratações-e-cidades)
  - [Mapa / localização](#5-mapa--localização)
  - [Analytics (GA4 / Meta Pixel)](#6-analytics-opcional)
- [🎨 Personalização visual](#-personalização-visual)
- [🖼️ Imagens e vídeos a adicionar](#️-imagens-e-vídeos-a-adicionar)
- [🔍 SEO — para aparecer no Google](#-seo--para-aparecer-no-google)
- [🚀 Publicar (deploy)](#-publicar-deploy)
- [✅ Checklist antes de publicar](#-checklist-antes-de-publicar)

---

## 🧭 Visão geral

Landing page de alta conversão para a **Multi Show Eventos**, com visual escuro e "climão de palco/LED" (feixes de luz animados, textura de painel, brilho neon). O objetivo é **gerar orçamentos pelo WhatsApp**.

O site foi feito para ser **fácil de editar**: quase tudo que muda no dia a dia (números, eventos, fotos, textos, cidades) fica em **dois arquivos** — [`js/main.js`](js/main.js) (configurações) e [`js/data.js`](js/data.js) (conteúdo). Sem instalar nada, sem build.

---

## ✨ Funcionalidades

- 🎯 **CTA de WhatsApp** em todos os pontos-chave + botão flutuante + barra fixa no celular
- 📱 **Formulário de orçamento** que monta a mensagem e abre o WhatsApp já preenchido
- 💬 **Dois números de WhatsApp** (principal + secundário, que aparece sozinho quando configurado)
- 🖼️ **Carrossel de eventos** com lightbox em tela cheia
- 📸 **Integração com Instagram** — posts e reels abrem **só ao clicar** (não pesam no carregamento)
- ▶️ **Vídeo próprio com autoplay** ao abrir (com fallback automático para o Instagram)
- 🎚️ **Antes/Depois** interativo (arrastar)
- 🔢 **Contadores animados**, depoimentos, pacotes, FAQ e "como funciona"
- 🗺️ **Mapa do Google incorporado ao rodapé** + botão "Como chegar"
- 📈 **SEO local** completo (JSON-LD, Open Graph, geo, sitemap, robots)
- ♿ Respeita **`prefers-reduced-motion`** e é **responsivo** até celulares pequenos

---

## 🛠 Tecnologias

HTML5 + CSS3 (variáveis, grid, flexbox, animações) + **JavaScript puro (vanilla)**.

---

## 📁 Estrutura de pastas

```
mse/
├─ index.html            # Página única (estrutura + SEO/JSON-LD)
├─ robots.txt            # SEO técnico — ajuste o domínio
├─ sitemap.xml           # SEO técnico — ajuste o domínio
├─ site.webmanifest      # Manifesto PWA (ícones/tema)
├─ favicon.ico
├─ css/
│  ├─ styles.css         # Base, tema, hero, seções, responsivo
│  └─ enhancements.css   # Componentes extras + rodapé/mapa + lightbox
├─ js/
│  ├─ data.js            # Conteúdo editável (eventos, depoimentos, pacotes, cidades)
│  └─ main.js            # CONFIG (WhatsApp, Instagram, Analytics) + funcionalidades
└─ assets/
   ├─ img/               # Logos e favicon
   ├─ eventos/           # Fotos dos eventos e capas
   └─ video/             # Vídeos (hero e reels) — crie se não existir
```

> 💡 Regra de ouro: **configurações** ficam no `main.js`; **conteúdo** fica no `data.js`.

---

## ▶ Como rodar localmente

É um site estático — abrir o `index.html` no navegador já funciona. Mas, para os vídeos/imagens e o Instagram carregarem certinho, use um **servidor local**:

**VS Code (mais fácil):** instale a extensão **Live Server** → clique com o direito no `index.html` → **"Open with Live Server"**.

**Ou pelo terminal** (Python ou Node):
```bash
python -m http.server 8000

npx serve
```
Depois abra `http://localhost:8000`.

---

## ⚡ Guia rápido de edição

### 1. WhatsApp — 2 números

Arquivo [`js/main.js`](js/main.js), no topo (`CONFIG`):

```js
const CONFIG = {
  whatsapp:  "556792392131",
  whatsapp2: "",
};
```

- **Principal:** usado em todos os botões, formulário e botão flutuante.
- **Secundário:** deixe `""` enquanto não tiver. Assim que colar o número, o botão **"WhatsApp 2"** aparece sozinho no rodapé.

> Formato: apenas números, com país (55) e DDD. Ex.: `5567988887777`.
> Qualquer link com `data-wa` usa o principal; com `data-wa="2"` usa o secundário.

### 2. Instagram e mensagem padrão

Ainda no `CONFIG` — `mensagem` é o texto que já vem preenchido no WhatsApp:
```js
instagram: "https://www.instagram.com/multishowled/",
mensagem:  "Olá! Gostaria de solicitar um orçamento...",
```

### 3. Eventos / portfólio (fotos, posts e vídeos)

Arquivo [`js/data.js`](js/data.js), lista `eventos`. Cada item é um card do carrossel. Foto local, post do Instagram e reel/vídeo com autoplay:

```js
{ titulo: "Casamento", descricao: "Painel de LED e luz.", servico: "Painel LED",
  imagem: "assets/eventos/casamento.jpg" },

{ titulo: "Evento Bonamigo", descricao: "Entrega com excelência.", servico: "Post no Instagram",
  imagem: "assets/eventos/bonamigo.jpg",
  instagram: "https://www.instagram.com/p/CODIGO/", tipo: "post" },

{ titulo: "Show de Clayton & Romário", descricao: "Palco, LED, luz e som.", servico: "Show ao vivo",
  imagem: "assets/eventos/clayton-romario.jpg",
  video:  "assets/video/clayton-romario.mp4",
  instagram: "https://www.instagram.com/reel/CODIGO/",
  tipo: "reel" },
```

**Campos:**

| Campo | Obrigatório | O que é |
|---|:---:|---|
| `titulo` | ✅ | Título do card |
| `descricao` | ✅ | Texto curto embaixo |
| `servico` | ✅ | Selo no canto (ex.: "Painel LED") |
| `imagem` | — | Caminho da foto/capa. Vazio → placeholder elegante |
| `instagram` | — | Link do post/reel. Abre no lightbox ao clicar |
| `video` | — | Caminho de um `.mp4` local. **Autoplay** ao abrir |
| `tipo` | — | `"reel"` (▶ vídeo) ou `"post"` (＋ foto) — muda o ícone |

> **Prioridade ao clicar:** `video` (autoplay) → se o arquivo faltar, cai para `instagram` → senão, mostra a `imagem`. Ou seja, nada quebra enquanto você não sobe os arquivos.

### 4. Depoimentos, pacotes, contratações e cidades

Tudo no [`js/data.js`](js/data.js):

- `depoimentos` — avaliações (nome, evento, `nota` de 1 a 5, texto)
- `pacotes` — combos (nome, ideal, lista de itens, `destaque: true` marca "Mais pedido")
- `contratacoes` — timeline de montagens (evento, local, serviço, status)
- `cidades` — cidades atendidas (importante para SEO local)

### 5. Mapa / localização

O mapa fica **incorporado ao rodapé** ([`index.html`](index.html), bloco `footer__top`).
Para trocar o local: no Google Maps → **Compartilhar → Incorporar um mapa → copiar HTML** e substitua o `src` do `<iframe>` do rodapé. Se mudar de cidade, atualize também `geo.position` e o `geo` do JSON-LD.

### 6. Analytics (opcional)

No `CONFIG`, cole os IDs para ativar a medição. `gaId` é do Google Analytics 4 (ex.: `G-XXXXXXXXXX`) e `metaPixelId` é do Meta Pixel (ex.: `123456789012345`):
```js
gaId: "",
metaPixelId: "",
```
Cada clique de WhatsApp já dispara os eventos `contact_whatsapp` (GA4) e `Lead` (Pixel).

---

## 🎨 Personalização visual

As cores ficam em variáveis no topo de [`css/styles.css`](css/styles.css) (`:root`):

| Variável | Cor | Uso |
|---|---|---|
| `--led-green-soft` | `#00C084` | Verde de destaque, CTAs, brilhos |
| `--led-red` | `#B43036` | Vermelho de palco |
| `--gold-light` | `#ABA132` | Dourado dos detalhes |
| `--bg-main` | `#050609` | Fundo principal |
| `--white-metal` | `#E6E6E6` | Texto |

Mudou o valor da variável → muda no site inteiro. Fontes: **Sora** (títulos) e **Inter** (texto).

---

## 🖼️ Imagens e vídeos a adicionar

Enquanto não existirem, o site mostra placeholders elegantes (nada quebra). Nomes esperados:

| Arquivo | Pasta | Para quê |
|---|---|---|
| `clayton-romario.jpg` | `assets/eventos/` | Capa do show do Clayton & Romário |
| `clayton-romario.mp4` | `assets/video/` | Vídeo do show (**autoplay** ao abrir) |
| `reel-campo-grande.jpg` | `assets/eventos/` | Capa do reel "Entrega em Campo Grande" |
| `reel-campo-grande.mp4` | `assets/video/` | Vídeo do reel (**autoplay** ao abrir) |
| `bonamigo-sementes.jpg` | `assets/eventos/` | Capa do post da Bonamigo |
| `antes.jpg` / `depois.jpg` | `assets/eventos/` | Seção "Antes e depois" |
| `evento-01.jpg` … `evento-06.jpg` | `assets/eventos/` | Fotos do portfólio (opcional) |
| `hero.mp4` | `assets/video/` | Vídeo de fundo do hero (opcional) |

> A pasta `assets/video/` pode não existir ainda — é só criar.
> As fotos de evento usam proporção **16:10** (ex.: 1200×750). As capas de reel/post podem ser verticais.
> Dica: exporte em **JPG/WebP** otimizados para o site carregar rápido no celular.
>
> As fotos `evento-01.jpg` … `evento-06.jpg` seguem a ordem da lista `eventos` em [`js/data.js`](js/data.js) (casamento, 15 anos, corporativo, show, formatura, aniversário).

---

## 🔍 SEO — para aparecer no Google

**Já pronto na página (on-page):** `<title>`/description/keywords, **Open Graph** (prévia no WhatsApp/Facebook), **Twitter Card**, `canonical`, **geo** (Campo Grande — MS), `robots.txt`, `sitemap.xml`, `alt` nas imagens e **dados estruturados JSON-LD** (`LocalBusiness` com coordenadas e `hasMap`, `Organization`, `ItemList`, `BreadcrumbList`, `FAQPage`).


**Self-host das fontes (opcional, deixa ainda mais rápido):** as fontes (Sora/Inter) já têm fallback do sistema. Para não depender do Google Fonts, baixe os `.woff2` em fonts.google.com, coloque em `assets/fonts/` e troque o `<link>` do Google por `@font-face` locais.

---

## 🚀 Publicar (deploy)

Site 100% estático → sobe em qualquer hospedagem. Opções fáceis:

- **Netlify / Vercel:** arraste a pasta ou conecte o repositório.
- **GitHub Pages:** suba os arquivos e ative Pages nas configurações do repo.
- **Hospedagem própria (Hostinger etc.):** envie a pasta inteira por FTP para a raiz do domínio.

Domínio de produção: **https://www.multishoweventos.com.br/**

---

## ✅ Checklist antes de publicar

- [ ] Confirmar que o **WhatsApp principal** abre a conversa certa
- [ ] (Opcional) Colar o **número secundário** em `whatsapp2`
- [ ] Subir **fotos dos eventos** e **capas** (incl. Clayton & Romário)
- [ ] Subir os **vídeos dos reels** (`assets/video/`) para o autoplay
- [ ] Conferir **textos, cidades e depoimentos**
- [ ] Preencher **endereço completo + CEP** no JSON-LD
- [ ] Ajustar o **domínio** em `index.html`, `robots.txt` e `sitemap.xml`
- [ ] (Opcional) Ativar **Google Analytics** e/ou **Meta Pixel**
- [ ] Testar no **celular** (menu, botões, formulário, lightbox)

---

<div align="center">

Feito com 💚❤️ para a **Multi Show Eventos**
*Transformamos sonhos em experiências.*

</div>
