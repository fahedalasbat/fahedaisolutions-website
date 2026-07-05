(function () {
  const data = window.adSpendRoasTrackerData;

  function applyCaptureMode() {
    const params = new URLSearchParams(window.location.search);
    const hash = window.location.hash.toLowerCase();
    const captureEnabled = params.get("capture") === "1" || params.get("mode") === "capture" || hash === "#capture";

    if (captureEnabled) {
      document.documentElement.classList.add("capture-mode");
      document.body.classList.add("capture-mode");
    }
  }

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

  function classToken(value) {
    return String(value).toLowerCase().replace(/[^a-z0-9-]/g, "");
  }

  function formatMoney(value) {
    return `$${Number(value).toLocaleString("en-US")}`;
  }

  function renderMeta() {
    const mobileSamplePeriod = getElement("mobileSamplePeriod");

    getElement("demoLabel").textContent = data.meta.label;
    getElement("demoTitle").textContent = data.meta.title;
    getElement("demoScope").textContent = data.meta.scope;
    getElement("samplePeriod").textContent = data.meta.period;
    getElement("demoDisclaimer").textContent = data.meta.disclaimer;
    getElement("safetyNote").textContent = data.meta.safetyNote;
    getElement("footerVersion").textContent = data.meta.version;

    if (mobileSamplePeriod) {
      mobileSamplePeriod.textContent = data.meta.period;
    }
  }

  function renderKpis() {
    const grid = getElement("kpiGrid");

    grid.innerHTML = data.kpis.map((kpi) => {
      return `
        <article class="kpi-card">
          <p>${escapeHTML(kpi.label)}</p>
          <strong>${escapeHTML(kpi.value)}</strong>
          <span>${escapeHTML(kpi.note)}</span>
        </article>
      `;
    }).join("");
  }

  function renderPerformanceChart() {
    const chart = getElement("performanceChart");
    const rows = data.weeklyPerformance;
    const width = 820;
    const height = 320;
    const plot = {
      left: 64,
      top: 26,
      width: 720,
      height: 224
    };
    const moneyMax = 12000;
    const roasMin = 1;
    const roasMax = 8;
    const step = plot.width / rows.length;

    function moneyY(value) {
      return plot.top + plot.height - (value / moneyMax) * plot.height;
    }

    function roasY(value) {
      return plot.top + plot.height - ((value - roasMin) / (roasMax - roasMin)) * plot.height;
    }

    const gridLines = [12000, 8000, 4000, 0].map((value) => {
      const y = moneyY(value);

      return `
        <g>
          <text x="18" y="${y + 4}">${escapeHTML(value === 0 ? "$0" : `$${value / 1000}k`)}</text>
          <line x1="${plot.left}" y1="${y}" x2="${plot.left + plot.width}" y2="${y}"></line>
        </g>
      `;
    }).join("");

    const bars = rows.map((item, index) => {
      const center = plot.left + step * index + step / 2;
      const spendY = moneyY(item.spend);
      const valueY = moneyY(item.conversionValue);
      const baseline = plot.top + plot.height;

      return `
        <g class="chart-group" style="--chart-delay: ${index * 80}ms">
          <rect class="bar-spend" x="${center - 16}" y="${spendY}" width="12" height="${baseline - spendY}" rx="6" fill="url(#spendGradient)"></rect>
          <rect class="bar-value" x="${center + 4}" y="${valueY}" width="12" height="${baseline - valueY}" rx="6" fill="url(#valueGradient)"></rect>
          <text class="chart-week" x="${center}" y="286">${escapeHTML(item.label)}</text>
          <text class="chart-value" x="${center}" y="304">${escapeHTML(formatMoney(item.spend))}</text>
        </g>
      `;
    }).join("");

    const roasPoints = rows.map((item, index) => {
      const center = plot.left + step * index + step / 2;
      return `${center},${roasY(item.roas)}`;
    });
    const linePath = roasPoints.reduce((path, point, index) => {
      return `${path}${index === 0 ? "M" : " L"}${point}`;
    }, "");
    const dots = roasPoints.map((point, index) => {
      const [x, y] = point.split(",");
      return `<circle cx="${x}" cy="${y}" r="3" style="--chart-delay: ${index * 80 + 220}ms"></circle>`;
    }).join("");

    chart.innerHTML = `
      <svg class="performance-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Sample weekly ad spend, conversion value, and ROAS trend chart">
        <defs>
          <linearGradient id="spendGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#dff8ff" stop-opacity="0.66"></stop>
            <stop offset="48%" stop-color="#37d5ff" stop-opacity="0.42"></stop>
            <stop offset="100%" stop-color="#2f8cff" stop-opacity="0.2"></stop>
          </linearGradient>
          <linearGradient id="valueGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#63f2cb" stop-opacity="0.54"></stop>
            <stop offset="55%" stop-color="#2fd5a6" stop-opacity="0.3"></stop>
            <stop offset="100%" stop-color="#2f8cff" stop-opacity="0.12"></stop>
          </linearGradient>
        </defs>
        <g class="chart-grid">${gridLines}</g>
        <g class="chart-bars">${bars}</g>
        <path class="roas-line" d="${linePath}"></path>
        <g class="roas-dots">${dots}</g>
      </svg>
    `;
  }

  function renderCampaigns() {
    const body = getElement("campaignTable");

    body.innerHTML = data.campaigns.map((campaign) => {
      const status = classToken(campaign.status);
      const action = classToken(campaign.action);

      return `
        <tr>
          <td data-label="Campaign"><strong>${escapeHTML(campaign.campaign)}</strong></td>
          <td data-label="Platform">${escapeHTML(campaign.platform)}</td>
          <td data-label="Spend">${escapeHTML(campaign.spend)}</td>
          <td data-label="Budget">${escapeHTML(campaign.budget)}</td>
          <td data-label="Leads">${escapeHTML(campaign.leads)}</td>
          <td data-label="Purchases">${escapeHTML(campaign.purchases)}</td>
          <td data-label="Conversion Value">${escapeHTML(campaign.conversionValue)}</td>
          <td data-label="ROAS"><strong>${escapeHTML(campaign.roas)}</strong></td>
          <td data-label="Status"><span class="status-badge ${status}">${escapeHTML(campaign.status)}</span></td>
          <td data-label="Suggested Action"><span class="action-badge ${action}">${escapeHTML(campaign.action)}</span></td>
        </tr>
      `;
    }).join("");
  }

  function renderPlatforms() {
    const list = getElement("platformBreakdown");

    list.innerHTML = data.platforms.map((platform) => {
      return `
        <article class="platform-row">
          <div class="platform-topline">
            <strong>${escapeHTML(platform.name)}</strong>
            <span>${escapeHTML(platform.spend)}</span>
          </div>
          <div class="platform-track" aria-hidden="true">
            <span style="width: ${escapeHTML(platform.share)}%"></span>
          </div>
          <dl>
            <div><dt>Leads</dt><dd>${escapeHTML(platform.leads)}</dd></div>
            <div><dt>Purchases</dt><dd>${escapeHTML(platform.purchases)}</dd></div>
            <div><dt>ROAS</dt><dd>${escapeHTML(platform.roas)}</dd></div>
          </dl>
        </article>
      `;
    }).join("");
  }

  function renderBudget() {
    const budget = data.budget;
    const card = getElement("budgetPacing");

    card.innerHTML = `
      <div class="budget-main">
        <span>Monthly Budget</span>
        <strong>${escapeHTML(budget.monthlyBudget)}</strong>
      </div>
      <div class="budget-track" aria-label="Sample budget pacing progress">
        <span style="width: ${escapeHTML(budget.progress)}%"></span>
      </div>
      <div class="budget-grid">
        <div><span>Spent</span><strong>${escapeHTML(budget.spent)}</strong></div>
        <div><span>Remaining</span><strong>${escapeHTML(budget.remaining)}</strong></div>
        <div><span>Pacing</span><strong>${escapeHTML(budget.pacing)}</strong></div>
        <div><span>Days remaining</span><strong>${escapeHTML(budget.daysRemaining)}</strong></div>
      </div>
    `;
  }

  function renderOwnerActions() {
    const list = getElement("ownerActions");

    list.innerHTML = data.ownerActions.map((item) => {
      return `
        <li class="action-item">
          <span class="action-badge ${classToken(item.status)}">${escapeHTML(item.status)}</span>
          <div>
            <strong>${escapeHTML(item.label)}</strong>
            <p>${escapeHTML(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function renderActivity() {
    const list = getElement("activityLog");

    list.innerHTML = data.activity.map((item) => {
      return `
        <li class="activity-item">
          <span class="activity-time">${escapeHTML(item.time)}</span>
          <div>
            <strong>${escapeHTML(item.title)}</strong>
            <p>${escapeHTML(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function init() {
    if (!data) {
      return;
    }

    applyCaptureMode();
    renderMeta();
    renderKpis();
    renderPerformanceChart();
    renderCampaigns();
    renderPlatforms();
    renderBudget();
    renderOwnerActions();
    renderActivity();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
