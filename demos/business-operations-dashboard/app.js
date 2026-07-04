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
    const maxValue = Math.max(...data.salesByWeek.map((item) => item.value));

    chart.innerHTML = data.salesByWeek.map((item) => {
      const height = Math.max(18, Math.round((item.value / maxValue) * 100));
      const formattedValue = formatCurrency(item.value);

      return `
        <div class="bar-column" aria-label="${escapeHTML(item.label)}: ${escapeHTML(formattedValue)}">
          <div class="bar-track">
            <div class="bar-fill" style="height: ${height}%"></div>
          </div>
          <span class="bar-value">${escapeHTML(formattedValue)}</span>
          <span class="bar-label">${escapeHTML(item.label)}</span>
        </div>
      `;
    }).join("");
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
