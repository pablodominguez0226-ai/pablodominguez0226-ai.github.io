import {
  getCertifications,
  getCoverLetter,
  getProjects,
  getSkills,
  profile,
  translations,
} from "./data.js";

const iconArrow = '<span aria-hidden="true">↗</span>';
let currentLang = localStorage.getItem("portfolio_lang") || "es";
if (currentLang !== "en" && currentLang !== "es") {
  currentLang = "es";
}

function getNestedTranslation(obj, path) {
  return path.split(".").reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
}

function actionLink(url, label, className = "text-link") {
  const pendingText = currentLang === "en" ? "Pending" : "Pendiente";
  if (!url) {
    return `<span class="${className} is-disabled" aria-disabled="true" title="${label}">${label} · ${pendingText}</span>`;
  }
  return `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${label} ${iconArrow}</a>`;
}

function renderProjects(lang = currentLang) {
  const container = document.querySelector("#projects-grid");
  if (!container) return;
  const t = translations[lang].projects;
  const projectsList = getProjects(lang).filter((p) => p.featured);

  container.innerHTML = projectsList
    .map(
      (project) => `
        <article class="project-card project-${project.accent} reveal">
          <div class="project-copy">
            <div class="project-meta">
              <span>${project.number}</span>
              <p>${project.category}</p>
            </div>
            <h3>${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-snapshot">
              <div>
                <span>${t.problemLabel}</span>
                <p>${project.problem}</p>
              </div>
              <div>
                <span>${t.solutionLabel}</span>
                <p>${project.solution}</p>
              </div>
            </div>
            <ul class="stack-list" aria-label="Tecnologías">
              ${project.stack.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="project-actions">
              <button class="button button-primary case-button" type="button" data-project-id="${project.id}">
                ${t.caseBtn}
              </button>
              ${actionLink(project.repositoryUrl, t.repoLabel)}
              ${project.demoUrl ? actionLink(project.demoUrl, t.demoLabel) : ""}
            </div>
          </div>
          <div class="project-visual">
            <div class="project-status">${project.status}</div>
            <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" width="720" height="520" />
            <p>${t.visualNote}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSkills(lang = currentLang) {
  const container = document.querySelector("#skills-grid");
  if (!container) return;
  const skillsList = getSkills(lang);
  container.innerHTML = skillsList
    .map(
      (group) => `
        <article class="skill-card reveal">
          <div class="skill-card-heading"><span>${group.number}</span><h3>${group.title}</h3></div>
          <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function renderCertifications(lang = currentLang) {
  const container = document.querySelector("#certifications-grid");
  if (!container) return;
  const certs = getCertifications(lang);
  const t = translations[lang].certifications;

  container.innerHTML = certs
    .map(
      (certification) => `
        <article class="cert-card reveal">
          <img src="${certification.image}" alt="" width="96" height="96" loading="lazy" />
          <div class="cert-content">
            <div class="cert-meta"><span>${certification.status}</span><span>${certification.year}</span></div>
            <h3>${certification.name}</h3>
            <p>${certification.institution}</p>
            <p class="cert-duration">${certification.duration}</p>
            <ul>${certification.skills.map((item) => `<li>${item}</li>`).join("")}</ul>
            ${actionLink(certification.certificateUrl, t.viewCert, "text-link cert-link")}
          </div>
        </article>
      `,
    )
    .join("");
}

function setupCaseStudies() {
  const dialog = document.querySelector("[data-case-dialog]");
  const content = document.querySelector("[data-dialog-content]");
  if (!dialog || !content) return;

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) return;
    const currentProjects = getProjects(currentLang);
    const project = currentProjects.find((item) => item.id === button.dataset.projectId);
    if (!project) return;

    const study = project.caseStudy;
    const labels = translations[currentLang].caseStudyLabels;
    const tProj = translations[currentLang].projects;

    content.innerHTML = `
      <div class="dialog-header">
        <p class="section-index">${project.category}</p>
        <h2 id="case-title">${project.name}</h2>
        <p>${project.description}</p>
      </div>
      <div class="case-layout">
        <aside>
          <p class="case-label">${labels.status}</p>
          <strong>${project.status}</strong>
          <p class="case-label">${labels.stack}</p>
          <ul class="stack-list">${project.stack.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="case-label">${labels.links}</p>
          ${actionLink(project.repositoryUrl, tProj.repoLabel)}
          ${project.demoUrl ? actionLink(project.demoUrl, tProj.demoLabel) : ""}
        </aside>
        <div class="case-sections">
          ${caseBlock(labels.context, study.context)}
          ${caseBlock(labels.problem, project.problem)}
          ${caseBlock(labels.objectives, study.objectives)}
          ${caseList(labels.users, study.users)}
          ${caseBlock(labels.requirements, study.requirements)}
          ${caseBlock(labels.architecture, study.architecture)}
          ${caseBlock(labels.dataModel, study.dataModel)}
          ${caseBlock(labels.decisions, study.decisions)}
          ${caseList(labels.features, project.features)}
          ${caseList(labels.responsibilities, project.responsibilities)}
          ${caseBlock(labels.challenges, study.challenges)}
          ${caseBlock(labels.solution, project.solution)}
          ${caseBlock(labels.results, study.results)}
          ${caseBlock(labels.learnings, study.learnings)}
          ${caseBlock(labels.next, study.next, true)}
        </div>
      </div>
    `;
    dialog.showModal();
    document.body.classList.add("dialog-open");
  });

  const closeDialog = () => {
    dialog.close();
    document.body.classList.remove("dialog-open");
  };

  const closeBtn = document.querySelector("[data-dialog-close]");
  if (closeBtn) closeBtn.addEventListener("click", closeDialog);
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) closeDialog();
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

function caseBlock(title, text, pending = false) {
  return `<section class="${pending ? "case-pending" : ""}"><h3>${title}</h3><p>${text}</p></section>`;
}

function caseList(title, items) {
  return `<section><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></section>`;
}

function setupCoverLetter() {
  const dialog = document.querySelector("[data-cover-dialog]");
  const content = document.querySelector("[data-cover-content]");
  if (!dialog || !content) return;

  let coverLetterLang = currentLang;

  const renderCover = (lang) => {
    coverLetterLang = lang;
    const cl = getCoverLetter(lang);
    const tMod = translations[lang].coverLetterModal;

    content.innerHTML = `
      <div class="cover-letter-header">
        <div class="cover-header-text">
          <p class="section-index">${cl.badge}</p>
          <h2 id="cover-title">${cl.author}</h2>
          <p>${cl.role}</p>
        </div>
        <div class="cover-lang-toggle" role="group" aria-label="Idioma de la carta">
          <button class="cover-lang-btn ${lang === "es" ? "is-active" : ""}" type="button" data-cover-lang="es">
            Español
          </button>
          <button class="cover-lang-btn ${lang === "en" ? "is-active" : ""}" type="button" data-cover-lang="en">
            English
          </button>
        </div>
      </div>

      <div class="cover-letter-body">
        <p class="cover-salutation">${cl.salutation}</p>
        <p>${cl.intro}</p>
        <p>${cl.academic}</p>
        <p>${cl.aiSkills}</p>
        <p>${cl.projectsIntro}</p>
        <ul>
          ${cl.projectsList
            .map(
              (p) => `
                <li><strong>${p.name}:</strong> ${p.desc}</li>
              `,
            )
            .join("")}
        </ul>
        <p>${cl.dataAndCert}</p>
        <p>${cl.closing}</p>

        <div class="cover-signature">
          <p>${cl.signoff}</p>
          <strong>${cl.author}</strong>
          <span>${cl.role}</span>
          <small>${cl.location}</small>
        </div>

        <div class="cover-actions">
          <a class="button button-primary" href="cv.pdf" target="_blank" rel="noreferrer">
            ${tMod.downloadCv} <span aria-hidden="true">↓</span>
          </a>
          <button class="button button-ghost" type="button" data-copy-email>
            ${tMod.copyEmail} <span aria-hidden="true">⧉</span>
          </button>
          <a class="button button-ghost" href="https://www.linkedin.com/in/pablo-dominguez-460a811a1/" target="_blank" rel="noreferrer">
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <button class="button button-ghost" type="button" data-cover-close style="margin-left: auto;">
            ${tMod.close}
          </button>
        </div>
      </div>
    `;
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-cover-trigger]");
    if (trigger) {
      coverLetterLang = currentLang;
      renderCover(coverLetterLang);
      dialog.showModal();
      document.body.classList.add("dialog-open");
      return;
    }

    const langBtn = event.target.closest("[data-cover-lang]");
    if (langBtn) {
      renderCover(langBtn.dataset.coverLang);
      return;
    }

    const closeBtn = event.target.closest("[data-cover-close]");
    if (closeBtn) {
      dialog.close();
      document.body.classList.remove("dialog-open");
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
      document.body.classList.remove("dialog-open");
    }
  });
  dialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));
}

export function setLanguage(lang) {
  if (lang !== "es" && lang !== "en") lang = "es";
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update meta & title
  if (t.meta) {
    document.title = t.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", t.meta.description);
  }

  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = getNestedTranslation(t, key);
    if (value !== undefined) {
      el.innerHTML = value;
    }
  });

  // Update language toggle buttons in Navbar
  document.querySelectorAll("[data-lang-val]").forEach((opt) => {
    opt.classList.toggle("is-active", opt.dataset.langVal === lang);
  });

  // Re-render dynamic components
  renderProjects(lang);
  renderSkills(lang);
  renderCertifications(lang);

  // Re-observe reveal elements
  setupReveal();
}

function setupLanguageSwitch() {
  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-lang-toggle]");
    if (!toggle) return;

    // If clicked directly on an option, switch to it, otherwise toggle
    const clickedVal = event.target.closest("[data-lang-val]");
    if (clickedVal && clickedVal.dataset.langVal) {
      setLanguage(clickedVal.dataset.langVal);
    } else {
      const nextLang = currentLang === "es" ? "en" : "es";
      setLanguage(nextLang);
    }
  });
}

function setupNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  const closeMenu = () => {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a:not([target='_blank'])")) closeMenu();
    });
  }

  if (header) {
    window.addEventListener(
      "scroll",
      () => header.classList.toggle("is-scrolled", window.scrollY > 24),
      { passive: true },
    );
  }

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...(nav ? nav.querySelectorAll('a[href^="#"]') : [])];
  if (sections.length && links.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          links.forEach((link) =>
            link.classList.toggle("is-active", link.getAttribute("href") === `#${entry.target.id}`),
          );
        });
      },
      { rootMargin: "-30% 0px -60%", threshold: 0 },
    );
    sections.forEach((section) => observer.observe(section));
  }
}

let revealObserver;
function setupReveal() {
  if (revealObserver) {
    revealObserver.disconnect();
  }
  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal:not(.is-visible)").forEach((element) => {
    revealObserver.observe(element);
  });
}

function setupContact() {
  const toast = document.querySelector("[data-toast]");
  let toastTimer;
  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  };

  document.addEventListener("click", async (event) => {
    if (event.target.closest("[data-copy-email]")) {
      const copiedMsg = translations[currentLang].contact.copiedToast || "Correo copiado";
      try {
        await navigator.clipboard.writeText(profile.email);
        showToast(copiedMsg);
      } catch {
        showToast(`Correo: ${profile.email}`);
      }
    }
  });

  const cvLinks = document.querySelectorAll("[data-cv-link], a[href*='cv.pdf']");
  cvLinks.forEach((link) => {
    if (profile.cvUrl) {
      link.href = profile.cvUrl;
      link.classList.remove("is-disabled");
      link.removeAttribute("aria-disabled");
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noreferrer");
    } else {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        showToast(currentLang === "en" ? "CV loading pending" : "CV pendiente de cargar");
      });
    }
  });
}

// Initial Bootstrap
renderProjects(currentLang);
renderSkills(currentLang);
renderCertifications(currentLang);
setupCaseStudies();
setupCoverLetter();
setupNavigation();
setupLanguageSwitch();
setupContact();
setLanguage(currentLang);

const yearEl = document.querySelector("[data-year]");
if (yearEl) yearEl.textContent = new Date().getFullYear();
