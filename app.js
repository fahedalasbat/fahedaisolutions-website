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
      <article class="floating-card hero-dashboard-card">
        <div class="scene-topline">
          <span class="status-dot"></span>
          <strong>Operations Dashboard</strong>
          <em>Sample</em>
        </div>
        <div class="scene-kpis">
          <span><strong>24</strong><em>Workflows</em></span>
          <span><strong>08</strong><em>Queue</em></span>
          <span><strong>16</strong><em>Follow-ups</em></span>
        </div>
        <div class="scene-bars" aria-hidden="true">
          <span style="height: 58%"></span>
          <span style="height: 82%"></span>
          <span style="height: 46%"></span>
          <span style="height: 74%"></span>
          <span style="height: 64%"></span>
        </div>
        <div class="scene-workflow" aria-hidden="true">
          <span><i></i> Intake</span>
          <span><i></i> Route</span>
          <span><i></i> Review</span>
          <span><i></i> Ready</span>
        </div>
      </article>

      <article class="floating-card hero-crm-card">
        <div class="scene-topline">
          <span class="status-dot"></span>
          <strong>CRM Pipeline</strong>
          <em>Demo</em>
        </div>
        <div class="pipeline-preview">
          <span>New</span>
          <span>Discovery</span>
          <span>Proposal</span>
        </div>
      </article>

      <article class="floating-card hero-chat-card">
        <div class="scene-topline">
          <span class="status-dot"></span>
          <strong>AI Assistant</strong>
          <em>Review</em>
        </div>
        <div class="mini-chat">
          <p>Sample request received.</p>
          <p>Draft response ready for human review.</p>
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
    getElement("contactActions").innerHTML = data.contact.links.map((link) => {
      const isExternal = /^https?:\/\//.test(link.href);
      const targetAttributes = isExternal ? ' target="_blank" rel="noopener"' : "";

      return `
        <a class="contact-link tone-${escapeHTML(link.tone)}" href="${escapeHTML(link.href)}"${targetAttributes} aria-label="${escapeHTML(link.label)}: ${escapeHTML(link.value)}">
          <span>${escapeHTML(link.label)}</span>
          <strong>${escapeHTML(link.value)}</strong>
        </a>
      `;
    }).join("");

    getElement("projectType").innerHTML = data.contact.projectTypes.map((type) => {
      return `<option>${escapeHTML(type)}</option>`;
    }).join("");

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
      ".page-section, .service-card, .portfolio-card, .process-card, .about-card, .systems-panel, .contact-card, .contact-form"
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
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrame = null;

    function resize() {
      const bounds = canvas.getBoundingClientRect();
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.max(1, Math.floor(bounds.width * ratio));
      canvas.height = Math.max(1, Math.floor(bounds.height * ratio));
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      if (reduceMotion) {
        draw(0);
      }
    }

    function roundedRect(x, y, width, height, radius) {
      context.beginPath();
      context.moveTo(x + radius, y);
      context.lineTo(x + width - radius, y);
      context.quadraticCurveTo(x + width, y, x + width, y + radius);
      context.lineTo(x + width, y + height - radius);
      context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      context.lineTo(x + radius, y + height);
      context.quadraticCurveTo(x, y + height, x, y + height - radius);
      context.lineTo(x, y + radius);
      context.quadraticCurveTo(x, y, x + radius, y);
      context.closePath();
    }

    function drawPanel(x, y, width, height, title, accent) {
      roundedRect(x, y, width, height, 8);
      context.fillStyle = "rgba(8, 17, 31, 0.82)";
      context.fill();
      context.strokeStyle = "rgba(117, 171, 255, 0.24)";
      context.lineWidth = 1;
      context.stroke();

      context.fillStyle = accent;
      context.font = "700 11px Inter, system-ui, sans-serif";
      context.fillText(title, x + 16, y + 26);
    }

    function draw(time) {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const phase = reduceMotion ? 0 : time * 0.001;

      context.clearRect(0, 0, width, height);
      context.fillStyle = "#030610";
      context.fillRect(0, 0, width, height);

      const glowShift = Math.sin(phase * 0.7) * width * 0.08;
      const gradient = context.createLinearGradient(glowShift, 0, width, height);
      gradient.addColorStop(0, "rgba(0, 163, 255, 0.18)");
      gradient.addColorStop(0.46, "rgba(49, 215, 255, 0.05)");
      gradient.addColorStop(1, "rgba(5, 9, 20, 0.9)");
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      context.strokeStyle = "rgba(117, 171, 255, 0.07)";
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

      const offset = Math.sin(phase) * 8;
      const baseX = Math.max(300, width * 0.46);
      drawPanel(baseX, 92 + offset, Math.min(520, width * 0.42), 250, "OPERATIONS DASHBOARD", "#31d7ff");
      drawPanel(baseX + 34, 372 - offset, Math.min(430, width * 0.34), 152, "CRM PIPELINE", "#00a3ff");
      drawPanel(Math.max(24, width * 0.13), 340 + offset * 0.45, Math.min(360, width * 0.28), 150, "AUTOMATION QUEUE", "#22c55e");

      const chartX = baseX + 28;
      const chartY = 155 + offset;
      const barWidth = 34;
      const values = [72, 108, 58, 132, 94, 118];
      values.forEach((value, index) => {
        const x = chartX + index * 52;
        const y = chartY + 132 - value;
        const barGradient = context.createLinearGradient(x, y, x, chartY + 132);
        barGradient.addColorStop(0, "#31d7ff");
        barGradient.addColorStop(1, "#00a3ff");
        roundedRect(x, y, barWidth, value, 5);
        context.fillStyle = barGradient;
        context.fill();
      });

      const pills = ["Dashboard", "Automation", "CRM", "AI Assistant"];
      pills.forEach((pill, index) => {
        const x = baseX + 28 + index * 112;
        const y = 292 + offset;
        roundedRect(x, y, 96, 28, 6);
        context.fillStyle = "rgba(0, 163, 255, 0.12)";
        context.fill();
        context.strokeStyle = "rgba(49, 215, 255, 0.22)";
        context.stroke();
        context.fillStyle = "#dff8ff";
        context.font = "700 10px Inter, system-ui, sans-serif";
        context.fillText(pill, x + 10, y + 18);
      });

      if (!reduceMotion) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    if (reduceMotion) {
      draw(0);
    } else {
      animationFrame = window.requestAnimationFrame(draw);
    }

    document.addEventListener("visibilitychange", () => {
      if (reduceMotion) {
        return;
      }

      if (document.hidden && animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = null;
      } else if (!document.hidden && !animationFrame) {
        animationFrame = window.requestAnimationFrame(draw);
      }
    });
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
