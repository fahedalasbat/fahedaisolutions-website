(function () {
  const data = window.invoicePaymentTrackerData;

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

  function renderStatusOverview() {
    const list = getElement("statusOverview");
    const maxCount = Math.max(...data.statusOverview.map((item) => item.count));

    list.innerHTML = data.statusOverview.map((item) => {
      const height = Math.max(14, Math.round((item.count / maxCount) * 100));

      return `
        <article class="status-item tone-${classToken(item.tone)}">
          <div class="status-bar-track" aria-hidden="true">
            <span class="status-bar" style="height: ${height}%"></span>
          </div>
          <div class="status-meta">
            <strong>${escapeHTML(item.label)}</strong>
            <span>${escapeHTML(item.count)} ${escapeHTML(item.unit)}</span>
            <em>${escapeHTML(item.amount)}</em>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderInvoiceCards() {
    const grid = getElement("invoiceCards");

    grid.innerHTML = data.invoices.map((invoice) => {
      const statusToken = classToken(invoice.status);

      return `
        <article class="invoice-card">
          <div class="invoice-topline">
            <strong>${escapeHTML(invoice.id)}</strong>
            <span class="status-badge ${statusToken}">${escapeHTML(invoice.status)}</span>
          </div>
          <p>${escapeHTML(invoice.customer)}</p>
          <div class="invoice-amount">${escapeHTML(invoice.amount)}</div>
          <dl>
            <div>
              <dt>Due date</dt>
              <dd>${escapeHTML(invoice.dueDate)}</dd>
            </div>
            <div>
              <dt>Follow-up</dt>
              <dd>${escapeHTML(invoice.followUp)}</dd>
            </div>
          </dl>
        </article>
      `;
    }).join("");
  }

  function renderAgingBreakdown() {
    const list = getElement("agingBreakdown");
    const maxCount = Math.max(...data.agingBuckets.map((item) => item.count));

    list.innerHTML = data.agingBuckets.map((bucket) => {
      const width = Math.round((bucket.count / maxCount) * 100);

      return `
        <div class="aging-row">
          <div class="aging-topline">
            <span>${escapeHTML(bucket.label)}</span>
            <strong>${escapeHTML(bucket.amount)}</strong>
          </div>
          <div class="aging-track" aria-hidden="true">
            <span style="width: ${width}%"></span>
          </div>
          <small>${escapeHTML(bucket.count)} sample invoices</small>
        </div>
      `;
    }).join("");
  }

  function renderFollowQueue() {
    const list = getElement("followQueue");

    list.innerHTML = data.followQueue.map((item) => {
      return `
        <li class="queue-item">
          <span class="queue-state ${classToken(item.status)}">${escapeHTML(item.status)}</span>
          <div>
            <strong>${escapeHTML(item.task)}</strong>
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

  function renderOwnerActions() {
    const list = getElement("ownerActions");

    list.innerHTML = data.ownerActions.map((item) => {
      return `
        <li class="owner-action">
          <span class="queue-state ${classToken(item.status)}">${escapeHTML(item.status)}</span>
          <div>
            <strong>${escapeHTML(item.label)}</strong>
            <p>${escapeHTML(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function init() {
    applyCaptureMode();
    renderMeta();
    renderKpis();
    renderStatusOverview();
    renderInvoiceCards();
    renderAgingBreakdown();
    renderFollowQueue();
    renderActivity();
    renderOwnerActions();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
