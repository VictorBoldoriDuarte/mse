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

## Sobre

Landing page da **Multi Show Eventos**, com visual escuro no estilo palco/LED (feixes de luz animados, textura de painel, brilho neon). O foco é **gerar orçamentos pelo WhatsApp**. Feita em **HTML, CSS e JavaScript puro** — sem build e sem dependências.

As **configurações** (WhatsApp, Instagram, Analytics) ficam em [`js/main.js`](js/main.js) e o **conteúdo** (eventos, depoimentos, pacotes, estados) em [`js/data.js`](js/data.js).

---

## Funcionalidades

- 🎯 **CTA de WhatsApp** em todos os pontos-chave + botão flutuante + barra fixa no celular
- 📱 **Formulário de orçamento** que monta a mensagem e abre o WhatsApp já preenchido
- 💬 **Dois números de WhatsApp** (principal + secundário)
- 🖼️ **Carrossel de eventos** com lightbox em tela cheia
- 📸 **Integração com Instagram** — posts e reels abrem só ao clicar
- ▶️ **Vídeo próprio com autoplay** ao abrir (com fallback para o Instagram)
- 🎚️ **Antes/Depois** interativo
- 🔢 **Contadores animados**, depoimentos, pacotes, FAQ e "como funciona"
- 🗺️ **Mapa do Google incorporado ao rodapé**
- 📈 **SEO local** completo (JSON-LD, Open Graph, geo, sitemap, robots)
- ♿ Respeita `prefers-reduced-motion` e é **responsivo** até celulares pequenos

---

## Tecnologias

HTML5 + CSS3 (variáveis, grid, flexbox, animações) + **JavaScript puro (vanilla)**. Zero dependências, zero build.

---

## Estrutura

```
mse/
├─ index.html            # Página única (HTML + SEO/JSON-LD)
├─ robots.txt            # SEO técnico
├─ sitemap.xml           # Mapa do site
├─ site.webmanifest      # Manifesto PWA
├─ favicon.ico
├─ css/
│  ├─ styles.css         # Base, tema, hero, seções, responsivo
│  └─ enhancements.css   # Componentes, rodapé/mapa, lightbox
├─ js/
│  ├─ main.js            # Configurações (WhatsApp, Instagram, Analytics) + comportamento
│  └─ data.js            # Conteúdo (eventos, depoimentos, pacotes, estados)
└─ assets/
   ├─ img/               # Logos e favicon
   ├─ eventos/           # Fotos dos eventos e capas
   └─ video/             # Vídeos (hero e reels)
```

---

## Identidade visual

Fontes: **Sora** (títulos) e **Inter** (texto). Paleta principal:

| Variável | Cor | Uso |
|---|---|---|
| `--led-green-soft` | `#00C084` | Verde de destaque, CTAs, brilhos |
| `--led-red` | `#B43036` | Vermelho de palco |
| `--gold-light` | `#ABA132` | Dourado dos detalhes |
| `--bg-main` | `#050609` | Fundo principal |
| `--white-metal` | `#E6E6E6` | Texto |

---

## SEO

Inclui `<title>`/description/keywords, **Open Graph** (prévia no WhatsApp/Facebook), **Twitter Card**, `canonical`, **geo** (Campo Grande — MS), `robots.txt`, `sitemap.xml`, `alt` nas imagens e **dados estruturados JSON-LD** (`LocalBusiness` com coordenadas e `hasMap`, `Organization`, `ItemList`, `BreadcrumbList`, `FAQPage`).

---

## Links

- **Produção:** https://www.multishoweventos.com.br/
- **Instagram:** [@multishowled](https://www.instagram.com/multishowled/)

---

<div align="center">

Feito para a **Multi Show Eventos** — *Transformamos sonhos em experiências.*

</div>
