(function () {
  const data = window.FahedSiteData;

  function getElement(id) {
    return document.getElementById(id);
  }

  function escapeHTML(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function applyCaptureMode() {
    const params = new URLSearchParams(window.location.search);
    const captureEnabled = params.get("capture") === "1" || window.location.hash.toLowerCase() === "#capture";

    if (captureEnabled) {
      document.documentElement.classList.add("capture-mode");
      document.body.classList.add("capture-mode");
    }
  }

  function renderMeta() {
    getElement("brandName").textContent = data.meta.brand;
    getElement("brandMeta").textContent = data.meta.location;
    getElement("demoLabel").textContent = data.meta.label;
    getElement("heroKicker").textContent = data.hero.kicker;
    getElement("heroTitle").textContent = data.hero.title;
    getElement("heroSubtitle").textContent = data.hero.subtitle;
    getElement("founderName").textContent = data.meta.founder;
    getElement("founderRole").textContent = data.meta.role;
    getElement("aboutText").textContent = data.about.text;
  }

  function renderHeroProof() {
    getElement("heroProof").innerHTML = data.hero.proof.map((item) => {
      return `<span>${escapeHTML(item)}</span>`;
    }).join("");
  }

  function renderHeroScene() {
    getElement("heroProductScene").innerHTML = `
      <article class="hero-preview-panel">
        <div class="preview-shell-top">
          <div>
            <span class="status-dot"></span>
            <strong>Operations Dashboard</strong>
          </div>
          <em>Demo / Sample Data</em>
        </div>
        <div class="preview-kpis">
          <span><strong>24</strong><em>Workflows</em></span>
          <span><strong>08</strong><em>Tasks</em></span>
          <span><strong>16</strong><em>Follow-ups</em></span>
        </div>
        <div class="preview-chart" aria-hidden="true">
          <span style="height: 48%"></span>
          <span style="height: 72%"></span>
          <span style="height: 58%"></span>
          <span style="height: 86%"></span>
          <span style="height: 66%"></span>
          <span style="height: 78%"></span>
        </div>
        <div class="preview-labels">
          <span>Automation Queue</span>
          <span>CRM Pipeline</span>
        </div>
        <div class="preview-ai-row">
          <strong>AI Assistant</strong>
          <span>Draft ready for review</span>
        </div>
      </article>
    `;
  }

  function renderServiceMockup(service) {
    const mockup = service.mockup || {};

    if (mockup.type === "dashboard") {
      return `
        <div class="service-mockup dashboard-mockup" aria-hidden="true">
          ${mockup.values.map((value) => `<span><strong>${escapeHTML(value)}</strong><em>Sample</em></span>`).join("")}
        </div>
      `;
    }

    if (mockup.type === "automation") {
      return `
        <div class="service-mockup automation-mockup" aria-hidden="true">
          ${mockup.steps.map((step) => `<span>${escapeHTML(step)}</span>`).join("")}
        </div>
      `;
    }

    if (mockup.type === "crm") {
      return `
        <div class="service-mockup crm-mockup" aria-hidden="true">
          ${mockup.stages.map((stage) => `<span>${escapeHTML(stage)}</span>`).join("")}
        </div>
      `;
    }

    if (mockup.type === "assistant") {
      return `
        <div class="service-mockup assistant-mockup" aria-hidden="true">
          ${mockup.messages.map((message) => `<p>${escapeHTML(message)}</p>`).join("")}
        </div>
      `;
    }

    if (mockup.type === "webapp") {
      return `
        <div class="service-mockup webapp-mockup" aria-hidden="true">
          <div>${mockup.tabs.map((tab) => `<span>${escapeHTML(tab)}</span>`).join("")}</div>
          <strong></strong>
        </div>
      `;
    }

    return `
      <div class="service-mockup system-mockup" aria-hidden="true">
        ${mockup.modules.map((moduleName) => `<span>${escapeHTML(moduleName)}</span>`).join("")}
      </div>
    `;
  }

  function renderServices() {
    getElement("servicesGrid").innerHTML = data.services.map((service) => {
      return `
        <article class="service-card tone-${escapeHTML(service.tone)}">
          <div class="card-topline">
            <span>${escapeHTML(service.label)}</span>
            <em>${escapeHTML(service.title)}</em>
          </div>
          ${renderServiceMockup(service)}
          <h3>${escapeHTML(service.title)}</h3>
          <p>${escapeHTML(service.description)}</p>
          <ul>
            ${service.includes.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}
          </ul>
        </article>
      `;
    }).join("");
  }

  function renderPortfolio() {
    getElement("portfolioGrid").innerHTML = data.portfolio.map((item) => {
      return `
        <article class="portfolio-card tone-${escapeHTML(item.tone)}">
          <div class="card-topline">
            <span>${escapeHTML(item.type)}</span>
            <em>${escapeHTML(item.label)}</em>
          </div>
          <h3>${escapeHTML(item.title)}</h3>
          <p>${escapeHTML(item.description)}</p>
          <a class="demo-link" href="${escapeHTML(item.href)}" target="_blank" rel="noopener">
            Open demo asset
          </a>
        </article>
      `;
    }).join("");
  }

  function renderProcess() {
    getElement("processGrid").innerHTML = data.process.map((item) => {
      return `
        <article class="process-card reveal-item">
          <div class="timeline-node">
            <span class="status-dot"></span>
            <strong>${escapeHTML(item.step)}</strong>
          </div>
          <div>
            <h3>${escapeHTML(item.title)}</h3>
            <div class="process-visual" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <p>${escapeHTML(item.description)}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderAbout() {
    getElement("systemsList").innerHTML = data.about.systems.map((item) => {
      return `<span>${escapeHTML(item)}</span>`;
    }).join("");
  }

  function renderContact() {
    getElement("footerContact").innerHTML = `
      <strong>Contact</strong>
      ${data.contact.links.map((link) => {
        const isExternal = /^https?:\/\//.test(link.href);
        const targetAttributes = isExternal ? ' target="_blank" rel="noopener"' : "";

        return `<a href="${escapeHTML(link.href)}"${targetAttributes} aria-label="${escapeHTML(link.label)}: ${escapeHTML(link.value)}">${escapeHTML(link.label)}</a>`;
      }).join("")}
    `;
  }

  function initRevealOnScroll() {
    const revealItems = document.querySelectorAll(
      ".page-section, .service-card, .portfolio-card, .process-card, .about-card, .systems-panel"
    );
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    revealItems.forEach((item) => {
      item.classList.add("reveal-item");
    });

    if (reduceMotion || !("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    revealItems.forEach((item) => observer.observe(item));
  }

  function drawHeroCanvas() {
    const canvas = getElement("heroCanvas");
    const context = canvas.getContext("2d");

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      draw();
    }

    function draw() {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#030610";
      context.fillRect(0, 0, width, height);

      const gradient = context.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(0, 163, 255, 0.18)");
      gradient.addColorStop(0.46, "rgba(49, 215, 255, 0.05)");
      gradient.addColorStop(1, "rgba(5, 9, 20, 0.9)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "rgba(117, 171, 255, 0.055)";
      context.lineWidth = 1;
      for (let x = 0; x < width; x += 44) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += 44) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(49, 215, 255, 0.09)";
      context.lineWidth = 1;
      for (let row = 0; row < 4; row += 1) {
        context.beginPath();
        const baseY = height * 0.78 + row * 20;
        for (let x = 0; x <= width; x += 24) {
          const y = baseY + Math.sin((x * 0.012) + row * 0.9) * (8 + row * 2);
          if (x === 0) {
            context.moveTo(x, y);
          } else {
            context.lineTo(x, y);
          }
        }
        context.stroke();
      }

      const particleCount = width < 720 ? 10 : 18;
      for (let index = 0; index < particleCount; index += 1) {
        const x = (index * 97) % Math.max(width, 1);
        const y = ((index * 53) % Math.max(height * 0.72, 1)) + height * 0.08;
        const alpha = 0.1 + (index % 5) * 0.012;
        context.fillStyle = `rgba(49, 215, 255, ${alpha})`;
        context.beginPath();
        context.arc(x, y, 1.4, 0, Math.PI * 2);
        context.fill();
      }
    }

    resize();
    window.addEventListener("resize", resize);
  }

  function init() {
    if (!data) {
      return;
    }

    applyCaptureMode();
    renderMeta();
    renderHeroProof();
    renderHeroScene();
    renderServices();
    renderPortfolio();
    renderProcess();
    renderAbout();
    renderContact();
    initRevealOnScroll();
    drawHeroCanvas();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
