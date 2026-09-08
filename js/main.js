(function () {
  "use strict";

  const timelineEl = document.getElementById("timeline");
  const contentEl = document.getElementById("content");
  const houseSvg = document.getElementById("house-svg");
  const houseHint = document.getElementById("house-hint");

  /* ---------------- Render timeline ---------------- */

  PHASES.forEach((phase) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "timeline-node";
    btn.id = `nav-${phase.id}`;
    btn.dataset.target = phase.id;
    btn.innerHTML = `
      <span class="timeline-node__dot" aria-hidden="true"></span>
      <span class="timeline-node__label">
        <span class="timeline-node__num">${String(phase.number).padStart(2, "0")}</span>
        <span class="timeline-node__title">${phase.title}</span>
      </span>
    `;
    btn.addEventListener("click", () => {
      document.getElementById(`phase-${phase.id}`).scrollIntoView({ behavior: "smooth", block: "start" });
    });
    timelineEl.appendChild(btn);
  });

  /* ---------------- Render content ---------------- */

  PHASES.forEach((phase) => {
    const section = document.createElement("section");
    section.className = "phase";
    section.id = `phase-${phase.id}`;
    section.dataset.phaseId = phase.id;

    const itemsHtml = phase.items
      .map((item) => {
        const compAttr = item.component ? ` data-component="${item.component}"` : "";
        return `
          <article class="checklist-item"${compAttr} id="item-${phase.id}-${slug(item.title)}">
            <div class="checklist-item__top">
              <h3>${item.title}</h3>
              <span class="chapter-badge">Kap. ${item.chapter}</span>
            </div>
            <p class="checklist-item__ref">${item.chapterTitle}${item.ref ? " · " + item.ref : ""}</p>
            <p class="body-text">${item.text}</p>
          </article>
        `;
      })
      .join("");

    section.innerHTML = `
      <div class="phase__head">
        <span class="phase__icon"><svg viewBox="0 0 24 24">${phase.icon}</svg></span>
        <div class="phase__title-wrap">
          <p class="phase__eyebrow">Fase ${String(phase.number).padStart(2, "0")} av ${PHASES.length}</p>
          <h2>${phase.title}</h2>
        </div>
      </div>
      <p class="phase__lede">${phase.lede}</p>
      <div class="checklist">${itemsHtml}</div>
    `;

    contentEl.appendChild(section);
  });

  function slug(text) {
    return text
      .toLowerCase()
      .replace(/[æå]/g, "a")
      .replace(/ø/g, "o")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");
  }

  /* ---------------- Scrollspy: highlight active phase in timeline ---------------- */

  const navButtons = Array.from(timelineEl.querySelectorAll(".timeline-node"));
  const phaseSections = Array.from(contentEl.querySelectorAll(".phase"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const navBtn = document.getElementById(`nav-${entry.target.dataset.phaseId}`);
        if (!navBtn) return;
        if (entry.isIntersecting) {
          navButtons.forEach((b) => b.classList.remove("is-active"));
          navBtn.classList.add("is-active");
        }
      });
    },
    { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
  );

  phaseSections.forEach((section) => observer.observe(section));
  if (navButtons.length) navButtons[0].classList.add("is-active");

  /* ---------------- Interactive house ---------------- */

  const houseParts = Array.from(houseSvg.querySelectorAll(".house-part"));

  houseParts.forEach((part) => {
    const component = part.dataset.component;
    const label = HOUSE_LABELS[component] || component;

    part.addEventListener("mouseenter", () => setHint(component, label));
    part.addEventListener("focus", () => setHint(component, label));
    part.addEventListener("mouseleave", clearHint);
    part.addEventListener("blur", clearHint);

    part.addEventListener("click", () => goToComponent(component, label));
    part.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        goToComponent(component, label);
      }
    });
  });

  function setHint(component, label) {
    const target = contentEl.querySelector(`.checklist-item[data-component="${component}"]`);
    if (target) {
      const chapter = target.querySelector(".chapter-badge").textContent;
      houseHint.innerHTML = `<strong>${label}</strong> &nbsp;→&nbsp; <span class="hint-chapter">${chapter}</span>`;
    } else {
      houseHint.innerHTML = `<strong>${label}</strong>`;
    }
  }

  function clearHint() {
    houseHint.textContent = "Hold musepekeren over en bygningsdel, eller trykk for å hoppe til kravet.";
  }

  function goToComponent(component, label) {
    const target = contentEl.querySelector(`.checklist-item[data-component="${component}"]`);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth", block: "center" });
    target.classList.add("is-flashed");
    setTimeout(() => target.classList.remove("is-flashed"), 1600);

    houseParts.forEach((p) => p.classList.remove("is-active"));
    const activePart = houseSvg.querySelector(`.house-part[data-component="${component}"]`);
    if (activePart) activePart.classList.add("is-active");
    setTimeout(() => activePart && activePart.classList.remove("is-active"), 1600);

    setHint(component, label);
  }
})();
