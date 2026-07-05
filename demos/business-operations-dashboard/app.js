(function () {
  const data = window.dashboardData;

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

  function safeColor(value) {
    return /^#[0-9a-f]{6}$/i.test(String(value)) ? value : "#2f8cff";
  }

  function formatCurrency(value) {
    return "$" + value.toLocaleString("en-US");
  }

  function renderKpis() {
    const grid = getElement("kpiGrid");
    grid.innerHTML = data.kpis.map((kpi) => {
      return `
        <article class="kpi-card">
          <p class="kpi-label">${escapeHTML(kpi.label)}</p>
          <strong class="kpi-value">${escapeHTML(kpi.value)}</strong>
          <span class="kpi-note">${escapeHTML(kpi.note)}</span>
        </article>
      `;
    }).join("");
  }

  function renderSalesChart() {
    const chart = getElement("salesChart");
    const maxValue = 6000;
    const plot = {
      left: 58,
      right: 586,
      top: 16,
      bottom: 134
    };
    const chartHeight = plot.bottom - plot.top;
    const barWidth = 18;
    const guideValues = [6000, 4000, 2000, 0];
    const step = (plot.right - plot.left) / (data.salesByWeek.length - 1);

    const getY = (value) => plot.bottom - ((value / maxValue) * chartHeight);

    const gridLines = guideValues.map((value) => {
      const y = getY(value);
      const label = value === 0 ? "$0" : "$" + (value / 1000) + "k";

      return `
        <g class="chart-guide">
          <text x="18" y="${y + 4}">${label}</text>
          <line x1="${plot.left}" y1="${y}" x2="${plot.right + 4}" y2="${y}"></line>
        </g>
      `;
    }).join("");

    const points = data.salesByWeek.map((item, index) => {
      const x = plot.left + (index * step);
      const y = getY(item.value);
      return { x, y, item };
    });

    const bars = points.map((point, index) => {
      const barHeight = Math.max(10, plot.bottom - point.y);
      const x = point.x - (barWidth / 2);
      const formattedValue = formatCurrency(point.item.value);

      return `
        <rect
          class="sales-bar"
          x="${x}"
          y="${point.y}"
          width="${barWidth}"
          height="${barHeight}"
          rx="6"
          style="animation-delay: ${index * 70}ms"
        >
          <title>${escapeHTML(point.item.label)}: ${escapeHTML(formattedValue)}</title>
        </rect>
      `;
    }).join("");

    const path = points.map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    }).join(" ");

    const markers = points.map((point) => {
      return `<circle class="trend-dot" cx="${point.x}" cy="${point.y}" r="2.2"></circle>`;
    }).join("");

    const xAxis = points.map((point) => {
      const formattedValue = formatCurrency(point.item.value);
      const xPosition = (point.x / 640) * 100;

      return `
        <span class="chart-x-item" style="left: ${xPosition}%">
          <strong>${escapeHTML(formattedValue)}</strong>
          <em>${escapeHTML(point.item.label)}</em>
        </span>
      `;
    }).join("");

    chart.innerHTML = `
      <div class="sales-chart-frame">
        <svg class="sales-chart-svg" viewBox="0 0 640 152" role="img" aria-label="Sales by Week sample values from Week 1 to Week 5">
          <defs>
            <linearGradient id="salesBarGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stop-color="#37d5ff"></stop>
              <stop offset="100%" stop-color="#2f8cff"></stop>
            </linearGradient>
            <linearGradient id="salesTrendGradient" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stop-color="#52b6ff" stop-opacity="0.32"></stop>
              <stop offset="54%" stop-color="#37d5ff" stop-opacity="0.68"></stop>
              <stop offset="100%" stop-color="#52b6ff" stop-opacity="0.3"></stop>
            </linearGradient>
          </defs>
          <g class="chart-guides" aria-hidden="true">${gridLines}</g>
          <g class="chart-bars">${bars}</g>
          <path class="trend-line" pathLength="1" d="${path}"></path>
          <g class="trend-markers" aria-hidden="true">${markers}</g>
        </svg>
        <div class="chart-x-axis">${xAxis}</div>
      </div>
    `;
  }

  function renderLeadSources() {
    const list = getElement("leadSources");
    const maxValue = Math.max(...data.leadSources.map((item) => item.value));

    list.innerHTML = data.leadSources.map((item) => {
      const width = Math.round((item.value / maxValue) * 100);

      return `
        <div class="source-row">
          <div class="source-topline">
            <span>${escapeHTML(item.label)}</span>
            <strong>${escapeHTML(item.value)}</strong>
          </div>
          <div class="source-track" aria-hidden="true">
            <div class="source-fill" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  function renderOrdersStatus() {
    const total = data.ordersByStatus.reduce((sum, item) => sum + item.value, 0);
    const chart = getElement("ordersStatus");

    const stackedBar = data.ordersByStatus.map((item) => {
      const width = (item.value / total) * 100;
      return `<span class="stack-segment" style="width: ${width}%; background: ${safeColor(item.color)}" title="${escapeHTML(item.label)}: ${escapeHTML(item.value)}"></span>`;
    }).join("");

    const legend = data.ordersByStatus.map((item) => {
      return `
        <div class="status-row">
          <span class="status-dot" style="background: ${safeColor(item.color)}"></span>
          <span>${escapeHTML(item.label)}</span>
          <strong>${escapeHTML(item.value)}</strong>
        </div>
      `;
    }).join("");

    chart.innerHTML = `
      <div class="stacked-bar" aria-label="Sample orders by status">${stackedBar}</div>
      <div class="status-list">${legend}</div>
    `;
  }

  function renderRecentActivity() {
    const list = getElement("recentActivity");
    list.innerHTML = data.recentActivity.map((item) => {
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

  function renderStockAlerts() {
    const tbody = getElement("stockAlerts");
    tbody.innerHTML = data.stockAlerts.map((item) => {
      return `
        <tr class="stock-alert-row ${classToken(item.status)}">
          <td>${escapeHTML(item.sku)}</td>
          <td>${escapeHTML(item.item)}</td>
          <td>${escapeHTML(item.current)}</td>
          <td>${escapeHTML(item.threshold)}</td>
          <td><span class="pill ${classToken(item.status)}">${escapeHTML(item.status)}</span></td>
        </tr>
      `;
    }).join("");
  }

  function renderOpenTasks() {
    const list = getElement("openTasks");
    list.innerHTML = data.openTasks.map((item) => {
      return `
        <li class="task-item priority-${classToken(item.priority)}">
          <div>
            <strong>${escapeHTML(item.task)}</strong>
            <span>${escapeHTML(item.owner)}</span>
          </div>
          <span class="priority ${classToken(item.priority)}">${escapeHTML(item.priority)}</span>
        </li>
      `;
    }).join("");
  }

  function renderMeta() {
    const mobileSamplePeriod = getElement("mobileSamplePeriod");

    getElement("demoLabel").textContent = data.meta.label;
    getElement("dashboardTitle").textContent = data.meta.title;
    getElement("dashboardScope").textContent = data.meta.scope;
    getElement("samplePeriod").textContent = data.meta.lastUpdated;
    getElement("disclaimer").textContent = data.meta.disclaimer;

    if (mobileSamplePeriod) {
      mobileSamplePeriod.textContent = data.meta.lastUpdated;
    }
  }

  function init() {
    applyCaptureMode();
    renderMeta();
    renderKpis();
    renderSalesChart();
    renderLeadSources();
    renderOrdersStatus();
    renderRecentActivity();
    renderStockAlerts();
    renderOpenTasks();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
