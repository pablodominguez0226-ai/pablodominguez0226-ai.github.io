import { certifications, profile, projects, skills } from "./data.js";

const iconArrow = '<span aria-hidden="true">↗</span>';

function actionLink(url, label, className = "text-link") {
  if (!url) {
    return `<span class="${className} is-disabled" aria-disabled="true" title="Enlace pendiente">${label} · Pendiente</span>`;
  }
  return `<a class="${className}" href="${url}" target="_blank" rel="noreferrer">${label} ${iconArrow}</a>`;
}

function renderProjects() {
  const container = document.querySelector("#projects-grid");
  container.innerHTML = projects
    .filter((project) => project.featured)
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
                <span>PROBLEMA</span>
                <p>${project.problem}</p>
              </div>
              <div>
                <span>SOLUCIÓN</span>
                <p>${project.solution}</p>
              </div>
            </div>
            <ul class="stack-list" aria-label="Tecnologías">
              ${project.stack.map((item) => `<li>${item}</li>`).join("")}
            </ul>
            <div class="project-actions">
              <button class="button button-primary case-button" type="button" data-project-id="${project.id}">
                Ver caso de estudio <span aria-hidden="true">↗</span>
              </button>
              ${actionLink(project.repositoryUrl, "Repositorio")}
              ${project.demoUrl ? actionLink(project.demoUrl, "Demo") : ""}
            </div>
          </div>
          <div class="project-visual">
            <div class="project-status">${project.status}</div>
            <img src="${project.image}" alt="${project.imageAlt}" loading="lazy" width="720" height="520" />
            <p>Visual conceptual · Reemplazar por captura real</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderSkills() {
  document.querySelector("#skills-grid").innerHTML = skills
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

function renderCertifications() {
  document.querySelector("#certifications-grid").innerHTML = certifications
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
            ${actionLink(certification.certificateUrl, "Ver certificado", "text-link cert-link")}
          </div>
        </article>
      `,
    )
    .join("");
}

function setupCaseStudies() {
  const dialog = document.querySelector("[data-case-dialog]");
  const content = document.querySelector("[data-dialog-content]");

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-project-id]");
    if (!button) return;
    const project = projects.find((item) => item.id === button.dataset.projectId);
    if (!project) return;

    const study = project.caseStudy;
    content.innerHTML = `
      <div class="dialog-header">
        <p class="section-index">${project.category}</p>
        <h2 id="case-title">${project.name}</h2>
        <p>${project.description}</p>
      </div>
      <div class="case-layout">
        <aside>
          <p class="case-label">ESTADO</p>
          <strong>${project.status}</strong>
          <p class="case-label">STACK</p>
          <ul class="stack-list">${project.stack.map((item) => `<li>${item}</li>`).join("")}</ul>
          <p class="case-label">ENLACES</p>
          ${actionLink(project.repositoryUrl, "Repositorio")}
          ${project.demoUrl ? actionLink(project.demoUrl, "Demo") : ""}
        </aside>
        <div class="case-sections">
          ${caseBlock("Contexto", study.context)}
          ${caseBlock("Problema", project.problem)}
          ${caseBlock("Objetivos", study.objectives)}
          ${caseList("Usuarios o actores", study.users)}
          ${caseBlock("Requerimientos", study.requirements)}
          ${caseBlock("Arquitectura", study.architecture)}
          ${caseBlock("Modelo de datos", study.dataModel)}
          ${caseBlock("Decisiones técnicas", study.decisions)}
          ${caseList("Funcionalidades", project.features)}
          ${caseList("Responsabilidades", project.responsibilities)}
          ${caseBlock("Desafíos encontrados", study.challenges)}
          ${caseBlock("Soluciones aplicadas", project.solution)}
          ${caseBlock("Resultados", study.results)}
          ${caseBlock("Aprendizajes", study.learnings)}
          ${caseBlock("Próximas mejoras", study.next, true)}
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

  document.querySelector("[data-dialog-close]").addEventListener("click", closeDialog);
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

function setupNavigation() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("[data-nav]");

  const closeMenu = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  window.addEventListener("scroll", () => header.classList.toggle("is-scrolled", window.scrollY > 24), {
    passive: true,
  });

  const sections = [...document.querySelectorAll("main section[id]")];
  const links = [...nav.querySelectorAll('a[href^="#"]')];
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

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupContact() {
  const toast = document.querySelector("[data-toast]");
  let toastTimer;
  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  };

  document.querySelector("[data-copy-email]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Correo copiado");
    } catch {
      showToast(`Correo: ${profile.email}`);
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
        showToast("CV pendiente de cargar");
      });
    }
  });
}

renderProjects();
renderSkills();
renderCertifications();
setupCaseStudies();
setupNavigation();
setupReveal();
setupContact();
document.querySelector("[data-year]").textContent = new Date().getFullYear();
