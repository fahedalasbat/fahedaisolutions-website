(function () {
  const data = window.crmDemoData;

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

  function escapeHtml(value) {
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
    getElement("demoLabel").textContent = data.meta.label;
    getElement("demoTitle").textContent = data.meta.title;
    getElement("demoScope").textContent = data.meta.scope;
    getElement("samplePeriod").textContent = data.meta.period;
    getElement("demoDisclaimer").textContent = data.meta.disclaimer;
    getElement("footerVersion").textContent = data.meta.version;
  }

  function renderKpis() {
    const grid = getElement("kpiGrid");

    grid.innerHTML = data.kpis.map((kpi) => {
      return `
        <article class="kpi-card">
          <p>${escapeHtml(kpi.label)}</p>
          <strong>${escapeHtml(kpi.value)}</strong>
          <span>${escapeHtml(kpi.note)}</span>
        </article>
      `;
    }).join("");
  }

  function renderPipeline() {
    const board = getElement("pipelineBoard");

    board.innerHTML = data.pipeline.map((column) => {
      const cards = column.cards.map((card) => {
        return `
          <article class="lead-card">
            <div class="lead-card-top">
              <strong>${escapeHtml(card.id)}</strong>
              <span class="priority ${classToken(card.priority)}">${escapeHtml(card.priority)}</span>
            </div>
            <p>${escapeHtml(card.need)}</p>
            <div class="lead-meta">
              <span>${escapeHtml(card.type)}</span>
              <span>${escapeHtml(card.source)}</span>
            </div>
            <small>${escapeHtml(card.owner)}</small>
          </article>
        `;
      }).join("");

      return `
        <section class="pipeline-column">
          <div class="column-header">
            <h3>${escapeHtml(column.stage)}</h3>
            <span>${column.cards.length}</span>
          </div>
          <div class="column-cards">${cards}</div>
        </section>
      `;
    }).join("");
  }

  function renderFollowUps() {
    const list = getElement("followUps");

    list.innerHTML = data.followUps.map((item) => {
      const dueToken = classToken(item.due);
      return `
        <li class="follow-up-item due-${dueToken}">
          <div>
            <strong>${escapeHtml(item.item)}</strong>
            <p>${escapeHtml(item.action)}</p>
            <small>${escapeHtml(item.owner)}</small>
          </div>
          <div class="follow-up-side">
            <span>${escapeHtml(item.due)}</span>
            <em class="priority ${classToken(item.priority)}">${escapeHtml(item.priority)}</em>
          </div>
        </li>
      `;
    }).join("");
  }

  function renderSources() {
    const list = getElement("sourceBreakdown");
    const maxValue = Math.max(...data.sources.map((source) => source.value));

    list.innerHTML = data.sources.map((source) => {
      const width = Math.round((source.value / maxValue) * 100);

      return `
        <div class="source-row">
          <div class="source-topline">
            <span>${escapeHtml(source.label)}</span>
            <strong>${escapeHtml(source.value)}</strong>
          </div>
          <div class="source-track" aria-hidden="true">
            <div class="source-fill" style="width: ${width}%"></div>
          </div>
        </div>
      `;
    }).join("");
  }

  function renderActivity() {
    const list = getElement("crmActivity");

    list.innerHTML = data.activity.map((item) => {
      return `
        <li class="activity-item">
          <span class="activity-time">${escapeHtml(item.time)}</span>
          <div>
            <div class="activity-heading">
              <strong>${escapeHtml(item.title)}</strong>
              <em>${escapeHtml(item.type)}</em>
            </div>
            <p>${escapeHtml(item.detail)}</p>
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
          <span class="action-state ${classToken(item.status)}">${escapeHtml(item.status)}</span>
          <div>
            <strong>${escapeHtml(item.label)}</strong>
            <p>${escapeHtml(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function init() {
    applyCaptureMode();
    renderMeta();
    renderKpis();
    renderPipeline();
    renderFollowUps();
    renderSources();
    renderActivity();
    renderOwnerActions();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
