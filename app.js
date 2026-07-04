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
          <div class="preview-kpi">
            <span>Total Workflows</span>
            <strong>24</strong>
            <small>Sample trend</small>
            <svg class="preview-sparkline" viewBox="0 0 96 30" aria-hidden="true" focusable="false">
              <path d="M4 22 L20 16 L36 18 L52 11 L70 14 L92 7"></path>
            </svg>
          </div>
          <div class="preview-kpi">
            <span>Active Tasks</span>
            <strong>8</strong>
            <small>Sample trend</small>
            <svg class="preview-sparkline" viewBox="0 0 96 30" aria-hidden="true" focusable="false">
              <path d="M4 18 L18 20 L34 13 L52 15 L72 9 L92 12"></path>
            </svg>
          </div>
          <div class="preview-kpi">
            <span>Review Items</span>
            <strong>16</strong>
            <small>Sample trend</small>
            <svg class="preview-sparkline" viewBox="0 0 96 30" aria-hidden="true" focusable="false">
              <path d="M4 24 L22 21 L38 15 L55 18 L72 10 L92 8"></path>
            </svg>
          </div>
        </div>
        <div class="preview-chart">
          <div class="preview-chart-top">
            <strong>Workflow Overview</strong>
            <em>Sample activity</em>
          </div>
          <div class="preview-chart-body">
            <svg class="preview-chart-svg" viewBox="0 0 330 170" role="img" aria-label="Sample workflow overview chart">
              <defs>
                <linearGradient id="previewBarGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#dff8ff" stop-opacity="0.64"></stop>
                  <stop offset="46%" stop-color="#31d7ff" stop-opacity="0.42"></stop>
                  <stop offset="100%" stop-color="#00a3ff" stop-opacity="0.18"></stop>
                </linearGradient>
              </defs>
              <g class="preview-axis-labels">
                <text x="18" y="24">40</text>
                <text x="18" y="52">30</text>
                <text x="18" y="80">20</text>
                <text x="18" y="108">10</text>
                <text x="22" y="136">0</text>
              </g>
              <g class="preview-grid-lines">
                <line x1="42" y1="20" x2="310" y2="20"></line>
                <line x1="42" y1="48" x2="310" y2="48"></line>
                <line x1="42" y1="76" x2="310" y2="76"></line>
                <line x1="42" y1="104" x2="310" y2="104"></line>
                <line x1="42" y1="132" x2="310" y2="132"></line>
              </g>
              <g class="preview-chart-bars">
                <rect class="preview-bar" x="57" y="82" width="14" height="50" rx="7"></rect>
                <rect class="preview-bar" x="99" y="62" width="14" height="70" rx="7"></rect>
                <rect class="preview-bar" x="141" y="75" width="14" height="57" rx="7"></rect>
                <rect class="preview-bar" x="183" y="43" width="14" height="89" rx="7"></rect>
                <rect class="preview-bar" x="225" y="68" width="14" height="64" rx="7"></rect>
                <rect class="preview-bar" x="267" y="54" width="14" height="78" rx="7"></rect>
              </g>
              <path class="preview-chart-line" d="M64 92 C88 78, 94 70, 106 74 S134 84, 148 72 S176 46, 190 56 S220 76, 232 66 S264 48, 274 54"></path>
              <g class="preview-month-labels">
                <text x="51" y="158">Jan</text>
                <text x="93" y="158">Feb</text>
                <text x="135" y="158">Mar</text>
                <text x="177" y="158">Apr</text>
                <text x="219" y="158">May</text>
                <text x="261" y="158">Jun</text>
              </g>
            </svg>
          </div>
        </div>
        <div class="preview-summary-grid">
          <div class="preview-summary-card">
            <span>Automation Queue</span>
            <strong>08</strong>
            <small>Tasks</small>
            <em>View all</em>
          </div>
          <div class="preview-summary-card">
            <span>CRM Pipeline</span>
            <strong>16</strong>
            <small>Active deals</small>
            <em>View all</em>
          </div>
        </div>
        <div class="preview-ai-row">
          <div class="preview-ai-copy">
            <strong>AI Assistant</strong>
            <span>Draft ready for human review</span>
          </div>
          <em>Human review required</em>
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
      const sampleRequest = mockup.messages[0] || "Sample request";
      const draftStatus = mockup.messages[1] || "Draft ready for review";

      return `
        <div class="service-mockup assistant-mockup" aria-hidden="true">
          <p class="assistant-service-bubble">${escapeHTML(sampleRequest)}</p>
          <div class="assistant-service-draft">
            <span>${escapeHTML(draftStatus)}</span>
            <div class="assistant-service-dots">
              <i></i>
              <i></i>
              <i></i>
            </div>
          </div>
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
      ".hero-support, .business-strip, .value-card, .page-section, .service-card, .portfolio-card, .process-card, .about-card, .systems-panel, .footer-intake-card"
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

      context.strokeStyle = "rgba(117, 171, 255, 0.018)";
      context.lineWidth = 0.6;
      for (let x = 0; x < width; x += 52) {
        context.beginPath();
        context.moveTo(x, 0);
        context.lineTo(x, height);
        context.stroke();
      }
      for (let y = 0; y < height; y += 52) {
        context.beginPath();
        context.moveTo(0, y);
        context.lineTo(width, y);
        context.stroke();
      }

      context.strokeStyle = "rgba(49, 215, 255, 0.045)";
      context.lineWidth = 0.7;
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
        const alpha = 0.045 + (index % 5) * 0.006;
        context.fillStyle = `rgba(49, 215, 255, ${alpha})`;
        context.beginPath();
        context.arc(x, y, 1.05, 0, Math.PI * 2);
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
