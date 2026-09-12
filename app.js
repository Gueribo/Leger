// ============ RANGGEGEVENS ============
// Aangeleverd door de gebruiker: volledige, officiële rangstructuur (23 niveaus
// per component) van de Belgische Defensie — Landcomponent, Luchtcomponent,
// Marinecomponent en Medische component. Volgorde: laag (1) naar hoog (23).
// Afbeeldingen: Commons-bestandsnamen, opgehaald via Wikimedia's Special:FilePath.
const DEFAULT_RANKS = [
  // ---- LANDMACHT ----
  { component: "landmacht", rank: "Soldaat", level: 1, image: "LandLuchtMarineOR1.png" },
  { component: "landmacht", rank: "1e Soldaat", level: 2, image: "LandOR2.png" },
  { component: "landmacht", rank: "Korporaal", level: 3, image: "LandOR3.png" },
  { component: "landmacht", rank: "Korporaal-Chef", level: 4, image: "LandOR4a.png" },
  { component: "landmacht", rank: "1e Korporaal-Chef", level: 5, image: "LandOR4b.png" },
  { component: "landmacht", rank: "Sergeant", level: 6, image: "LandOR5.png" },
  { component: "landmacht", rank: "1e Sergeant", level: 7, image: "LandOR6a.png" },
  { component: "landmacht", rank: "1e Sergeant-Chef", level: 8, image: "LandOR6b.png" },
  { component: "landmacht", rank: "1e Sergeant-Majoor", level: 9, image: "LandOR7.png" },
  { component: "landmacht", rank: "Adjudant", level: 10, image: "LandOR8.png" },
  { component: "landmacht", rank: "Adjudant-Chef", level: 11, image: "LandOR9a.png" },
  { component: "landmacht", rank: "Adjudant-Majoor", level: 12, image: "LandOR9b.png" },
  { component: "landmacht", rank: "Onderluitenant", level: 13, image: "LandOF1a.png" },
  { component: "landmacht", rank: "Luitenant", level: 14, image: "LandOF1b.png" },
  { component: "landmacht", rank: "Kapitein", level: 15, image: "LandOF2.png" },
  { component: "landmacht", rank: "Kapitein-commandant", level: 16, image: "LandOF3a.png" },
  { component: "landmacht", rank: "Majoor", level: 17, image: "LandOF3b.png" },
  { component: "landmacht", rank: "Luitenant-Kolonel", level: 18, image: "LandOF4.png" },
  { component: "landmacht", rank: "Kolonel", level: 19, image: "LandOF5.png" },
  { component: "landmacht", rank: "Brigadegeneraal", level: 20, image: "LandOF6.png" },
  { component: "landmacht", rank: "Generaal-Majoor", level: 21, image: "LandOF7.png" },
  { component: "landmacht", rank: "Luitenant-generaal", level: 22, image: "LandOF8.png" },
  { component: "landmacht", rank: "Generaal", level: 23, image: "LandOF9.png" },

  // ---- MEDISCHE DIENST ----
  { component: "medisch", rank: "Soldaat", level: 1, image: "LandLuchtMarineOR1.png" },
  { component: "medisch", rank: "1e Soldaat", level: 2, image: "MedicOR2.png" },
  { component: "medisch", rank: "Korporaal", level: 3, image: "MedicOR3.png" },
  { component: "medisch", rank: "Korporaal-Chef", level: 4, image: "MedicOR4a.png" },
  { component: "medisch", rank: "1e Korporaal-Chef", level: 5, image: "MedicOR4b.png" },
  { component: "medisch", rank: "Sergeant", level: 6, image: "MedicOR5.png" },
  { component: "medisch", rank: "1e Sergeant", level: 7, image: "MedicOR6a.png" },
  { component: "medisch", rank: "1e Sergeant-Chef", level: 8, image: "MedicOR6b.png" },
  { component: "medisch", rank: "1e Sergeant-Majoor", level: 9, image: "MedicOR7.png" },
  { component: "medisch", rank: "Adjudant", level: 10, image: "MedicOR8.png" },
  { component: "medisch", rank: "Adjudant-Chef", level: 11, image: "MedicOR9a.png" },
  { component: "medisch", rank: "Adjudant-Majoor", level: 12, image: "MedicOR9b.png" },
  { component: "medisch", rank: "Onderluitenant", level: 13, image: "MedicOF1a.png" },
  { component: "medisch", rank: "Luitenant", level: 14, image: "MedicOF1b.png" },
  { component: "medisch", rank: "Kapitein", level: 15, image: "MedicOF2.png" },
  { component: "medisch", rank: "Kapitein-commandant", level: 16, image: "MedicOF3a.png" },
  { component: "medisch", rank: "Majoor", level: 17, image: "MedicOF3b.png" },
  { component: "medisch", rank: "Luitenant-Kolonel", level: 18, image: "MedicOF4.png" },
  { component: "medisch", rank: "Kolonel", level: 19, image: "MedicOF5.png" },
  { component: "medisch", rank: "Brigadegeneraal", level: 20, image: "MedicOF6.png" },
  { component: "medisch", rank: "Generaal-Majoor", level: 21, image: "MedicOF7.png" },
  { component: "medisch", rank: "Luitenant-generaal", level: 22, image: "MedicOF8.png" },
  { component: "medisch", rank: "Generaal", level: 23, image: "MedicOF9.png" },

  // ---- LUCHTMACHT ----
  { component: "luchtmacht", rank: "Soldaat", level: 1, image: "LandLuchtMarineOR1.png" },
  { component: "luchtmacht", rank: "1e Soldaat", level: 2, image: "LuchtOR2.png" },
  { component: "luchtmacht", rank: "Korporaal", level: 3, image: "LuchtOR3.png" },
  { component: "luchtmacht", rank: "Korporaal-Chef", level: 4, image: "LuchtOR4a.png" },
  { component: "luchtmacht", rank: "1e Korporaal-Chef", level: 5, image: "LuchtOR4b.png" },
  { component: "luchtmacht", rank: "Sergeant", level: 6, image: "LuchtOR5.png" },
  { component: "luchtmacht", rank: "1e Sergeant", level: 7, image: "LuchtOR6a.png" },
  { component: "luchtmacht", rank: "1e Sergeant-Chef", level: 8, image: "LuchtOR6b.png" },
  { component: "luchtmacht", rank: "1e Sergeant-Majoor", level: 9, image: "LuchtOR7.png" },
  { component: "luchtmacht", rank: "Adjudant", level: 10, image: "LuchtOR8.png" },
  { component: "luchtmacht", rank: "Adjudant-Chef", level: 11, image: "LuchtOR9a.png" },
  { component: "luchtmacht", rank: "Adjudant-Majoor", level: 12, image: "LuchtOR9b.png" },
  { component: "luchtmacht", rank: "Onderluitenant", level: 13, image: "LuchtOF1a.png" },
  { component: "luchtmacht", rank: "Luitenant", level: 14, image: "LuchtOF1b.png" },
  { component: "luchtmacht", rank: "Kapitein", level: 15, image: "LuchtOF2.png" },
  { component: "luchtmacht", rank: "Kapitein-commandant", level: 16, image: "LuchtOF3a.png" },
  { component: "luchtmacht", rank: "Majoor", level: 17, image: "LuchtOF3b.png" },
  { component: "luchtmacht", rank: "Luitenant-Kolonel", level: 18, image: "LuchtOF4.png" },
  { component: "luchtmacht", rank: "Kolonel", level: 19, image: "LuchtOF5.png" },
  { component: "luchtmacht", rank: "Brigadegeneraal", level: 20, image: "LuchtOF6.png" },
  { component: "luchtmacht", rank: "Generaal-Majoor", level: 21, image: "LuchtOF7.png" },
  { component: "luchtmacht", rank: "Luitenant-generaal", level: 22, image: "LuchtOF8.png" },
  { component: "luchtmacht", rank: "Generaal", level: 23, image: "LuchtOF9.png" },

  // ---- MARINE ----
  { component: "marine", rank: "Matroos", level: 1, image: "LandLuchtMarineOR1.png" },
  { component: "marine", rank: "1e Matroos", level: 2, image: "MarineOR2.png" },
  { component: "marine", rank: "Kwartiermeester", level: 3, image: "MarineOR3.png" },
  { component: "marine", rank: "Kwartiermeester-Chef", level: 4, image: "MarineOR4a.png" },
  { component: "marine", rank: "1e Kwartiermeester-Chef", level: 5, image: "MarineOR4b.png" },
  { component: "marine", rank: "2e Meester", level: 6, image: "MarineOR5.png" },
  { component: "marine", rank: "Meester", level: 7, image: "MarineOR6a.png" },
  { component: "marine", rank: "Meester-Chef", level: 8, image: "MarineOR6b.png" },
  { component: "marine", rank: "1e Meester", level: 9, image: "MarineOR7.png" },
  { component: "marine", rank: "1e Meester-Chef", level: 10, image: "MarineOR8.png" },
  { component: "marine", rank: "Oppermeester", level: 11, image: "MarineOR9a.png" },
  { component: "marine", rank: "Oppermeester-Chef", level: 12, image: "MarineOR9b.png" },
  { component: "marine", rank: "Vaandrig-ter-zee 2e klasse", level: 13, image: "MarineOF1a.png" },
  { component: "marine", rank: "Vaandrig-ter-zee", level: 14, image: "MarineOF1b.png" },
  { component: "marine", rank: "Luitenant-ter-zee", level: 15, image: "MarineOF2.png" },
  { component: "marine", rank: "Luitenant-ter-zee 1e klasse", level: 16, image: "MarineOF3a.png" },
  { component: "marine", rank: "Korvet-kapitein", level: 17, image: "MarineOF3b.png" },
  { component: "marine", rank: "Fregat-kapitein", level: 18, image: "MarineOF4.png" },
  { component: "marine", rank: "Kapitein-ter-zee", level: 19, image: "MarineOF5.png" },
  { component: "marine", rank: "Flottielje-admiraal", level: 20, image: "MarineOF6.png" },
  { component: "marine", rank: "Divisie-admiraal", level: 21, image: "MarineOF7.png" },
  { component: "marine", rank: "Vice-admiraal", level: 22, image: "MarineOF8.png" },
  { component: "marine", rank: "Admiraal", level: 23, image: "MarineOF9.png" },
];

const COMPONENT_LABELS = {
  landmacht: "Landmacht",
  luchtmacht: "Luchtmacht",
  marine: "Marine",
  medisch: "Medische Dienst",
};

const STATS_KEY = "rangquiz.stats.v1";

function loadStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { known: {}, unknown: {} };
}

function saveStats(stats) {
  localStorage.setItem(STATS_KEY, JSON.stringify(stats));
}

const ranks = DEFAULT_RANKS;
let stats = loadStats();

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function byComponent(comp) {
  return ranks.filter((r) => r.component === comp);
}

function levelCategory(level) {
  if (level <= 3) return "Vrijwilligers";
  if (level <= 5) return "Keurvrijwilligers";
  if (level <= 8) return "Lagere Onderofficieren";
  if (level <= 10) return "Keuronderofficieren";
  if (level <= 12) return "Hoofdonderofficieren";
  if (level <= 16) return "Lagere Officieren";
  if (level <= 19) return "Hoofdofficieren";
  return "Opperofficieren";
}

// ============ AFBEELDINGEN (rang-insignes) ============
// Voor een volledig offline-werkende app is de LOKALE map "images/" de
// primaire bron: zet daar de bestanden in met exact dezelfde naam als het
// "image"-veld hierboven (bv. images/LandOF9.png). Ontbreekt een bestand
// lokaal, dan probeert de app het (enkel met internetverbinding) nog even
// op te halen via Wikimedia Commons als noodgreep, en anders verschijnt een
// nette placeholder met de rangnaam.
const IMG_EXTS = ["png", "webp", "jpg", "jpeg", "svg"];

function slugify(str) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function imageBaseName(item) {
  return `${item.component}__${slugify(item.rank)}`;
}

function commonsUrl(filename) {
  return `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(filename)}`;
}

function rankImgTag(item, extraClass = "") {
  const hasImage = !!(item.image && item.image.trim());
  const filename = hasImage ? item.image.trim() : `${imageBaseName(item)}.png`;
  // Lokaal bestand is de PRIMAIRE bron (voor een echte offline app) — zelfde
  // bestandsnaam als op Commons, gewoon opgeslagen in de map "images/".
  const initialSrc = `./images/${filename}`;
  return `<img src="${initialSrc}" data-filename="${filename}" data-stage="local" alt="${item.rank}" class="rank-img ${extraClass}" onerror="handleImgError(this)" />`;
}

function handleImgError(img) {
  if (img.dataset.stage === "local") {
    // Lokaal bestand ontbreekt -> probeer als online-fallback Wikimedia Commons
    // (werkt alleen met internetverbinding; voor offline gebruik moet het
    // bestand echt in images/ staan).
    img.dataset.stage = "commons";
    img.src = commonsUrl(img.dataset.filename);
    return;
  }
  const div = document.createElement("div");
  div.className = "rank-img-placeholder " + (img.className.includes("small") ? "small" : "");
  div.innerHTML = `<span class="ph-icon">🎖️</span><small>${img.alt}</small>`;
  img.replaceWith(div);
}
window.handleImgError = handleImgError;

// ============ NAVIGATIE ============
const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    panels.forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.panel).classList.add("active");
    if (tab.dataset.panel === "panel-flash") initFlashcards();
    if (tab.dataset.panel === "panel-quiz") initQuiz();
  });
});

// ============ FLASHCARDS ============
let flashDeck = [];
let flashIndex = 0;
let flashFlipped = false;

function initFlashcards() {
  flashDeck = shuffle(ranks);
  flashIndex = 0;
  flashFlipped = false;
  renderFlashcard();
}

function renderFlashcard() {
  const wrap = document.getElementById("flash-wrap");
  if (flashDeck.length === 0) {
    wrap.innerHTML = `<p class="empty">Geen rangen beschikbaar.</p>`;
    return;
  }
  if (flashIndex >= flashDeck.length) {
    wrap.innerHTML = `
      <div class="deck-done">
        <p>Je hebt de volledige stapel doorlopen.</p>
        <button class="btn primary" id="flash-restart">Opnieuw schudden</button>
      </div>`;
    document.getElementById("flash-restart").addEventListener("click", initFlashcards);
    updateFlashProgress();
    return;
  }
  const item = flashDeck[flashIndex];
  wrap.innerHTML = `
    <div class="card comp-${item.component} ${flashFlipped ? "flipped" : ""}" id="flash-card">
      <div class="card-face card-front">
        <div class="rank-img-wrap">${rankImgTag(item)}</div>
      </div>
      <div class="card-face card-back">
        <span class="card-label">${COMPONENT_LABELS[item.component]}</span>
        <span class="card-main">${item.rank}</span>
        <span class="card-hint">${levelCategory(item.level)}</span>
      </div>
    </div>
    <div class="flash-actions ${flashFlipped ? "" : "hidden"}">
      <button class="btn no" id="btn-unknown">X</button>
      <button class="btn yes" id="btn-known">✔</button>
    </div>
  `;
  document.getElementById("flash-card").addEventListener("click", () => {
    flashFlipped = !flashFlipped;
    renderFlashcard();
  });
  if (flashFlipped) {
    document.getElementById("btn-known").addEventListener("click", () => markFlash(item, true));
    document.getElementById("btn-unknown").addEventListener("click", () => markFlash(item, false));
  }
  updateFlashProgress();
}

function markFlash(item, known) {
  const key = item.component + "::" + item.rank;
  if (known) {
    stats.known[key] = (stats.known[key] || 0) + 1;
  } else {
    stats.unknown[key] = (stats.unknown[key] || 0) + 1;
  }
  saveStats(stats);
  flashIndex++;
  flashFlipped = false;
  renderFlashcard();
}

function updateFlashProgress() {
  const el = document.getElementById("flash-progress");
  const total = flashDeck.length;
  const shown = Math.min(flashIndex + 1, total);
  el.textContent = total === 0 ? "" : `Kaart ${shown} / ${total}`;
}

// ============ QUIZ ============
let quizQuestions = [];
let quizIndex = 0;
let quizScore = 0;
let quizMode = "component"; // 'component' | 'compare' | 'recognize'

function initQuiz() {
  quizIndex = 0;
  quizScore = 0;
  buildQuizQuestions();
  renderQuiz();
}

document.querySelectorAll('input[name="quiz-mode"]').forEach((r) => {
  r.addEventListener("change", (e) => {
    quizMode = e.target.value;
    initQuiz();
  });
});

function buildQuizQuestions() {
  const n = 10;
  quizQuestions = [];
  if (quizMode === "component") {
    const pool = shuffle(ranks);
    for (let i = 0; i < Math.min(n, pool.length); i++) {
      const correct = pool[i];
      const otherComps = Object.keys(COMPONENT_LABELS).filter((c) => c !== correct.component);
      const options = shuffle([correct.component, ...otherComps]);
      quizQuestions.push({
        type: "component",
        rank: correct,
        options,
        answer: correct.component,
      });
    }
  } else if (quizMode === "compare") {
    // compare: which rank is higher, within same component
    let tries = 0;
    while (quizQuestions.length < n && tries < 200) {
      tries++;
      const comp = shuffle(Object.keys(COMPONENT_LABELS))[0];
      const list = byComponent(comp);
      if (list.length < 2) continue;
      const shuffled = shuffle(list);
      const a = shuffled[0];
      const b = shuffled[1];
      if (a.level === b.level) continue;
      const higher = a.level > b.level ? a : b;
      quizQuestions.push({
        type: "compare",
        component: comp,
        a,
        b,
        answer: higher.rank,
      });
    }
  } else if (quizMode === "recognize") {
    // recognize: given the insignia image, pick the correct rank name
    let tries = 0;
    while (quizQuestions.length < n && tries < 300) {
      tries++;
      const correct = shuffle(ranks)[0];
      const sameComp = byComponent(correct.component).filter((r) => r.rank !== correct.rank);
      if (sameComp.length < 3) continue;
      const distractors = shuffle(sameComp).slice(0, 3);
      const options = shuffle([correct, ...distractors]);
      quizQuestions.push({
        type: "recognize",
        rank: correct,
        options,
        answer: correct.rank,
      });
    }
  }
}

function renderQuiz() {
  const wrap = document.getElementById("quiz-wrap");
  if (quizQuestions.length === 0) {
    wrap.innerHTML = `<p class="empty">Niet genoeg rangen om een quiz te maken.</p>`;
    return;
  }
  if (quizIndex >= quizQuestions.length) {
    wrap.innerHTML = `
      <div class="deck-done">
        <p class="score-big">${quizScore} / ${quizQuestions.length}</p>
        <p>correct beantwoord</p>
        <button class="btn primary" id="quiz-restart">Nieuwe ronde</button>
      </div>`;
    document.getElementById("quiz-restart").addEventListener("click", initQuiz);
    updateQuizProgress();
    return;
  }
  const q = quizQuestions[quizIndex];
  if (q.type === "component") {
    wrap.innerHTML = `
      <div class="quiz-question comp-${q.rank.component}">
        <span class="card-label">Bij welke macht hoort deze rang?</span>
        <div class="rank-img-wrap small">${rankImgTag(q.rank)}</div>
        <span class="card-main">${q.rank.rank}</span>
      </div>
      <div class="options">
        ${q.options
          .map((c) => `<button class="option-btn" data-value="${c}">${COMPONENT_LABELS[c]}</button>`)
          .join("")}
      </div>
      <p class="feedback" id="quiz-feedback"></p>
    `;
  } else if (q.type === "compare") {
    wrap.innerHTML = `
      <div class="quiz-question comp-${q.component}">
        <span class="card-label">Welke rang is hoger? (${COMPONENT_LABELS[q.component]})</span>
      </div>
      <div class="options options-compare">
        <button class="option-btn option-with-img" data-value="${q.a.rank}">
          <div class="option-thumb-wrap">${rankImgTag(q.a, "tiny")}</div>
          <span>${q.a.rank}</span>
        </button>
        <button class="option-btn option-with-img" data-value="${q.b.rank}">
          <div class="option-thumb-wrap">${rankImgTag(q.b, "tiny")}</div>
          <span>${q.b.rank}</span>
        </button>
      </div>
      <p class="feedback" id="quiz-feedback"></p>
    `;
  } else if (q.type === "recognize") {
    wrap.innerHTML = `
      <div class="quiz-question comp-${q.rank.component}">
        <span class="card-label">Welke rang toont deze afbeelding? (${COMPONENT_LABELS[q.rank.component]})</span>
        <div class="rank-img-wrap small">${rankImgTag(q.rank)}</div>
      </div>
      <div class="options">
        ${q.options
          .map((o) => `<button class="option-btn" data-value="${o.rank}">${o.rank}</button>`)
          .join("")}
      </div>
      <p class="feedback" id="quiz-feedback"></p>
    `;
  }
  document.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => answerQuiz(btn, q));
  });
  updateQuizProgress();
}

function answerQuiz(btn, q) {
  document.querySelectorAll(".option-btn").forEach((b) => (b.disabled = true));
  const value = btn.dataset.value;
  const correct = value === q.answer;
  const feedback = document.getElementById("quiz-feedback");
  document.querySelectorAll(".option-btn").forEach((b) => {
    if (b.dataset.value === q.answer) b.classList.add("correct");
  });
  if (correct) {
    quizScore++;
    btn.classList.add("correct");
    feedback.textContent = "Juist!";
    feedback.className = "feedback ok";
  } else {
    btn.classList.add("wrong");
    const answerLabel = q.type === "component" ? COMPONENT_LABELS[q.answer] : q.answer;
    feedback.textContent = `Helaas. Juiste antwoord: ${answerLabel}`;
    feedback.className = "feedback bad";
  }
  setTimeout(() => {
    quizIndex++;
    renderQuiz();
  }, 1100);
}

function updateQuizProgress() {
  const el = document.getElementById("quiz-progress");
  const total = quizQuestions.length;
  const shown = Math.min(quizIndex + 1, total);
  el.textContent = total === 0 ? "" : `Vraag ${shown} / ${total} — score ${quizScore}`;
}

// ============ INIT ============
initFlashcards();

// ============ SERVICE WORKER ============
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

// ============ INSTALLATIE (eigen knop i.p.v. adresbalk-icoon) ============
// De browser bepaalt zelf of/waar hij een install-icoon toont (enkel
// Chrome/Edge doen dat, en niet consistent) — dit is niet aan te passen.
// In plaats daarvan vangen we hetzelfde event op en tonen we een eigen knop,
// die op elk ondersteunend platform werkt.
let deferredInstallPrompt = null;
const installBtn = document.getElementById("install-btn");
const iosHint = document.getElementById("ios-install-hint");

function isStandaloneAlready() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;
  if (!isStandaloneAlready()) installBtn.classList.remove("hidden");
});

installBtn.addEventListener("click", async () => {
  if (!deferredInstallPrompt) return;
  installBtn.classList.add("hidden");
  deferredInstallPrompt.prompt();
  await deferredInstallPrompt.userChoice;
  deferredInstallPrompt = null;
});

window.addEventListener("appinstalled", () => {
  installBtn.classList.add("hidden");
});

// iOS Safari heeft geen beforeinstallprompt-event; toon in plaats daarvan een
// korte, statische instructie voor "Zet op beginscherm".
(function maybeShowIosHint() {
  const ua = window.navigator.userAgent;
  const isIos = /iPad|iPhone|iPod/.test(ua);
  const isSafari = /Safari/.test(ua) && !/CriOS|FxiOS|EdgiOS/.test(ua);
  if (isIos && isSafari && !isStandaloneAlready()) {
    iosHint.classList.remove("hidden");
  }
})();
