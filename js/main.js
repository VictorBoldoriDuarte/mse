const CONFIG = {
  whatsapp: "556792392131",
  whatsapp2: "",
  mensagem: "Olá! Gostaria de solicitar um orçamento para meu evento com a Multi Show Eventos.",
  instagram: "https://www.instagram.com/multishowled/",

  gaId: "",
  metaPixelId: ""
};

document.addEventListener("DOMContentLoaded", () => {
  setupWhatsApp();
  setupMenu();
  setupHeaderScroll();
  renderEventos();
  renderContratacoes();
  renderDepoimentos();
  renderPacotes();
  renderCidades();
  initCarousels();
  setupCounters();
  setupQuoteForm();
  setupBeforeAfter();
  setupLightbox();
  setupHeroVideo();
  setupAnalytics();
  setupReveal();
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
});

function waLink(msg, num) {
  const numero = num || CONFIG.whatsapp;
  return `https://wa.me/${numero}?text=${encodeURIComponent(msg || CONFIG.mensagem)}`;
}
function setupWhatsApp() {
  document.querySelectorAll("[data-wa]").forEach(a => {
    const secundario = a.getAttribute("data-wa") === "2";
    if (secundario && !CONFIG.whatsapp2) { a.style.display = "none"; return; }
    a.style.display = "";
    a.href = waLink(a.dataset.waMsg, secundario ? CONFIG.whatsapp2 : CONFIG.whatsapp);
    a.target = "_blank"; a.rel = "noopener";
  });
}

function setupMenu() {
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");
  if (!toggle || !nav) return;
  const close = () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
  };
  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  });
  nav.querySelectorAll("a").forEach(a => a.addEventListener("click", close));
}

function setupHeaderScroll() {
  const header = document.getElementById("header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function renderEventos() {
  const track = document.getElementById("eventosTrack");
  if (!track || typeof eventos === "undefined") return;
  track.innerHTML = eventos.map(ev => {
    const isVideo = ev.tipo === "reel" || ev.tipo === "video" || !!ev.video;
    const embed = ev.instagram ? ev.instagram.replace(/\/+$/, "") + "/embed" : "";
    const hasMedia = embed || ev.video;
    const mediaClass = hasMedia ? (isVideo ? " event--ig event--video" : " event--ig event--post") : "";
    return `
    <article class="event${mediaClass}"${ev.video ? ` data-video="${encodeURI(ev.video)}"` : ""}${embed ? ` data-embed="${escapeHtml(embed)}"` : ""}${ev.imagem ? ` data-img="${encodeURI(ev.imagem)}"` : ""} data-title="${escapeHtml(ev.titulo)}" tabindex="0" role="button" aria-label="Abrir ${escapeHtml(ev.titulo)}">
      <div class="event__media">
        <span class="event__tag">${escapeHtml(ev.servico)}</span>
        <span class="event__ph">${escapeHtml(ev.titulo)}</span>
        ${hasMedia ? `<span class="event__play" aria-hidden="true">${isVideo ? "▶" : "＋"}</span>` : ""}
        ${ev.imagem ? `<img src="${encodeURI(ev.imagem)}" alt="${escapeHtml(ev.titulo)}" loading="lazy" onerror="this.hidden=true">` : ""}
      </div>
      <div class="event__body">
        <h3 class="event__title">${escapeHtml(ev.titulo)}</h3>
        <p class="event__desc">${escapeHtml(ev.descricao)}</p>
      </div>
    </article>`;
  }).join("");
}

function renderContratacoes() {
  const track = document.getElementById("jobsTrack");
  if (!track || typeof contratacoes === "undefined") return;
  track.innerHTML = contratacoes.map(c => {
    const open = /agenda/i.test(c.status);
    return `
      <article class="job">
        <span class="job__status ${open ? "status--open" : "status--done"}">${escapeHtml(c.status)}</span>
        <h3 class="job__event">${escapeHtml(c.evento)}</h3>
        ${c.local ? `<p class="job__local">${escapeHtml(c.local)}</p>` : ""}
        <p class="job__service">${escapeHtml(c.servico)}</p>
      </article>`;
  }).join("");
}

function renderDepoimentos() {
  const wrap = document.getElementById("testimonials");
  if (!wrap || typeof depoimentos === "undefined") return;
  wrap.innerHTML = depoimentos.map(d => {
    const stars = "★".repeat(d.nota || 5) + "☆".repeat(5 - (d.nota || 5));
    const inicial = (d.nome || "?").trim().charAt(0).toUpperCase();
    return `
      <article class="testimonial">
        <div class="testimonial__stars" aria-label="${d.nota || 5} de 5 estrelas">${stars}</div>
        <p class="testimonial__text">${escapeHtml(d.texto)}</p>
        <div class="testimonial__who">
          <span class="testimonial__avatar">${escapeHtml(inicial)}</span>
          <span>
            <span class="testimonial__name">${escapeHtml(d.nome)}</span><br>
            <span class="testimonial__event">${escapeHtml(d.evento)}</span>
          </span>
        </div>
      </article>`;
  }).join("");
}

function renderPacotes() {
  const wrap = document.getElementById("packages");
  if (!wrap || typeof pacotes === "undefined") return;
  wrap.innerHTML = pacotes.map(p => {
    const msg = `Olá, MSE! Tenho interesse no pacote "${p.nome}". Pode me enviar um orçamento?`;
    return `
      <article class="package reveal${p.destaque ? " package--featured" : ""}">
        ${p.destaque ? `<span class="package__badge">Mais pedido</span>` : ""}
        <h3 class="package__name">${escapeHtml(p.nome)}</h3>
        <p class="package__ideal">Ideal para ${escapeHtml(p.ideal)}</p>
        <ul class="package__list">
          ${p.itens.map(i => `<li>${escapeHtml(i)}</li>`).join("")}
        </ul>
        <a href="${waLink(msg)}" target="_blank" rel="noopener" class="btn btn--green btn--glow" data-lead>Quero este pacote</a>
      </article>`;
  }).join("");
}

function renderCidades() {
  const wrap = document.getElementById("cities");
  if (!wrap || typeof cidades === "undefined") return;
  wrap.innerHTML = cidades.map(c => `<li>${escapeHtml(c)}</li>`).join("");
}

function initCarousels() {
  document.querySelectorAll("[data-carousel]").forEach(el => {
    const name = el.getAttribute("data-carousel");
    const track = el.querySelector(".carousel__track");
    if (!track) return;
    const step = () => {
      const card = track.firstElementChild;
      if (!card) return track.clientWidth * 0.9;
      const gap = parseFloat(getComputedStyle(track).gap) || 20;
      return card.getBoundingClientRect().width + gap;
    };
    const goto = (dir) => {
      const max = track.scrollWidth - track.clientWidth - 4;
      let target = track.scrollLeft + dir * step();
      if (dir > 0 && track.scrollLeft >= max) target = 0;
      else if (dir < 0 && track.scrollLeft <= 4) target = max;
      track.scrollTo({ left: target, behavior: "smooth" });
    };
    document.querySelectorAll(`.carousel__btn[data-car="${name}"]`).forEach(btn => {
      btn.addEventListener("click", () => { pause(); goto(parseInt(btn.getAttribute("data-dir"), 10)); });
    });
    let timer = null, resumeT;
    const play = () => { if (!timer) timer = setInterval(() => goto(1), 4200); };
    const pauseTemp = () => { clearInterval(timer); timer = null; };
    const pause = () => { pauseTemp(); clearTimeout(resumeT); resumeT = setTimeout(play, 6000); };
    el.addEventListener("mouseenter", pauseTemp);
    el.addEventListener("mouseleave", play);
    track.addEventListener("pointerdown", pauseTemp);
    track.addEventListener("pointerup", pause);
    document.addEventListener("visibilitychange", () => document.hidden ? pauseTemp() : play());
    enableDrag(track);
    play();
  });
}
function enableDrag(track) {
  let down = false, startX = 0, startLeft = 0, moved = false;
  track.addEventListener("pointerdown", e => {
    if (e.pointerType === "touch") return;
    down = true; moved = false; startX = e.clientX; startLeft = track.scrollLeft; track.style.cursor = "grabbing";
  });
  track.addEventListener("pointermove", e => {
    if (!down) return;
    const dx = e.clientX - startX;
    if (Math.abs(dx) > 4) moved = true;
    track.scrollLeft = startLeft - dx;
  });
  const end = () => { down = false; track.style.cursor = ""; };
  track.addEventListener("pointerup", end);
  track.addEventListener("pointerleave", end);
  track.addEventListener("click", e => { if (moved) e.preventDefault(); }, true);
}

function setupCounters() {
  const nums = document.querySelectorAll("[data-count]");
  if (!nums.length) return;
  const run = (el) => {
    const target = parseFloat(el.getAttribute("data-count")) || 0;
    const suffix = el.getAttribute("data-suffix") || "";
    const dur = 1400, start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } });
  }, { threshold: 0.5 });
  nums.forEach(n => io.observe(n));
}

function setupQuoteForm() {
  const form = document.getElementById("quoteForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const f = form.elements;
    const nome = f.nome.value.trim();
    const tipo = f.tipo.value;
    if (!nome || !tipo) {
      if (!nome) f.nome.focus(); else f.tipo.focus();
      form.reportValidity && form.reportValidity();
      return;
    }
    const data = f.data.value ? new Date(f.data.value + "T00:00").toLocaleDateString("pt-BR") : "";
    const linhas = [
      `Olá, MSE! Gostaria de um orçamento. 🎉`, ``,
      `• Nome: ${nome}`,
      `• Tipo de evento: ${tipo}`,
      data ? `• Data: ${data}` : null,
      f.cidade.value.trim() ? `• Cidade: ${f.cidade.value.trim()}` : null,
      f.servico.value ? `• Preciso de: ${f.servico.value}` : null
    ].filter(Boolean);
    trackLead();
    window.open(waLink(linhas.join("\n")), "_blank", "noopener");
  });
}

function setupBeforeAfter() {
  const ba = document.getElementById("ba");
  const range = document.getElementById("baRange");
  if (!ba || !range) return;
  const update = () => ba.style.setProperty("--pos", range.value + "%");
  range.addEventListener("input", update);
  update();
}

function setupLightbox() {
  const lb = document.getElementById("lightbox");
  const media = document.getElementById("lightboxMedia");
  const cap = document.getElementById("lightboxCap");
  const closeBtn = document.getElementById("lightboxClose");
  const track = document.getElementById("eventosTrack");
  if (!lb || !media || !track) return;

  const showEmbed = (embed, title) => {
    media.classList.add("lightbox__media--embed");
    media.innerHTML = `<iframe src="${embed}" title="${escapeHtml(title || "")}" loading="lazy" allowfullscreen allow="autoplay; encrypted-media; picture-in-picture; clipboard-write" scrolling="no"></iframe>`;
  };
  const showImage = (img, title) => {
    media.classList.remove("lightbox__media--embed");
    media.innerHTML = `<span class="lightbox__ph">${escapeHtml(title || "")}</span>` +
      (img ? `<img src="${encodeURI(img)}" alt="${escapeHtml(title || "")}" onerror="this.remove()">` : "");
  };
  const open = ({ img, title, embed, video }) => {
    if (video) {

      media.classList.add("lightbox__media--embed");
      media.innerHTML = `<video src="${encodeURI(video)}"${img ? ` poster="${encodeURI(img)}"` : ""} autoplay playsinline controls preload="metadata"></video>`;
      const vid = media.querySelector("video");
      if (vid) {
        vid.addEventListener("error", () => embed ? showEmbed(embed, title) : showImage(img, title), { once: true });
        const p = vid.play && vid.play();
        if (p && p.catch) p.catch(() => {});
      }
    } else if (embed) {
      showEmbed(embed, title);
    } else {
      showImage(img, title);
    }
    if (cap) cap.textContent = title || "";
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  };
  const close = () => {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    media.innerHTML = "";
    media.classList.remove("lightbox__media--embed");
  };
  const openFrom = (card) => { if (card) open(card.dataset); };

  track.addEventListener("click", (e) => openFrom(e.target.closest(".event")));
  track.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openFrom(e.target.closest(".event")); }
  });
  closeBtn && closeBtn.addEventListener("click", close);
  lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && lb.classList.contains("is-open")) close(); });
}

function setupHeroVideo() {
  const v = document.getElementById("heroVideo");
  if (!v) return;
  const src = "assets/video/hero.mp4";
  const test = document.createElement("video");
  test.preload = "metadata";
  test.onloadedmetadata = () => {
    v.src = src;
    const p = v.play && v.play();
    if (p && p.catch) p.catch(() => {});
    v.classList.add("is-on");
  };
  test.onerror = () => {};
  test.src = src;
}

function setupAnalytics() {
  if (CONFIG.gaId) {
    const s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + CONFIG.gaId;
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    gtag("js", new Date());
    gtag("config", CONFIG.gaId);
  }
  if (CONFIG.metaPixelId) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", CONFIG.metaPixelId); fbq("track", "PageView");
  }
  document.querySelectorAll("[data-wa], [data-lead]").forEach(a => a.addEventListener("click", trackLead));
}
function trackLead() {
  if (window.gtag) gtag("event", "contact_whatsapp", { event_category: "engagement" });
  if (window.fbq) fbq("track", "Lead");
}

function setupReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || !items.length) {
    items.forEach(i => i.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  items.forEach(i => io.observe(i));
}

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, s => (
    { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[s]
  ));
}
