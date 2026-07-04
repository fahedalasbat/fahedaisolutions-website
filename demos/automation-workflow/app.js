(function () {
  const data = window.automationWorkflowData;

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

  function renderMeta() {
    const mobileSamplePeriod = getElement("mobileSamplePeriod");

    getElement("demoLabel").textContent = data.meta.label;
    getElement("demoTitle").textContent = data.meta.title;
    getElement("demoScope").textContent = data.meta.scope;
    getElement("samplePeriod").textContent = data.meta.period;
    getElement("demoDisclaimer").textContent = data.meta.disclaimer;
    getElement("footerVersion").textContent = data.meta.version;

    if (mobileSamplePeriod) {
      mobileSamplePeriod.textContent = data.meta.period;
    }
  }

  function renderWorkflow() {
    const track = getElement("workflowTrack");

    track.innerHTML = data.workflowSteps.map((step, index) => {
      const number = String(index + 1).padStart(2, "0");
      const isActive = index === data.workflowSteps.length - 1 ? " active-node" : "";

      return `
        <article class="workflow-node${isActive}">
          <span class="node-number">${number}</span>
          <div class="node-content">
            <span class="node-status">${escapeHtml(step.status)}</span>
            <h3>${escapeHtml(step.title)}</h3>
            <p>${escapeHtml(step.detail)}</p>
            <small>${escapeHtml(step.owner)}</small>
          </div>
        </article>
      `;
    }).join("");
  }

  function renderStatusCards() {
    const grid = getElement("statusCards");

    grid.innerHTML = data.statusCards.map((card) => {
      return `
        <article class="status-card">
          <p>${escapeHtml(card.label)}</p>
          <strong>${escapeHtml(card.value)}</strong>
          <span>${escapeHtml(card.note)}</span>
        </article>
      `;
    }).join("");
  }

  function renderActivityLog() {
    const list = getElement("activityLog");

    list.innerHTML = data.activityLog.map((item) => {
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

  function renderRules() {
    const list = getElement("rulesList");

    list.innerHTML = data.automationRules.map((item) => {
      return `
        <li class="rule-item">
          <span class="rule-state ${escapeHtml(item.state.toLowerCase())}">${escapeHtml(item.state)}</span>
          <p>${escapeHtml(item.rule)}</p>
        </li>
      `;
    }).join("");
  }

  function renderQueue() {
    const tbody = getElement("sampleQueue");

    tbody.innerHTML = data.sampleQueue.map((item) => {
      return `
        <tr>
          <td>${escapeHtml(item.item)}</td>
          <td>${escapeHtml(item.source)}</td>
          <td>${escapeHtml(item.stage)}</td>
          <td><span class="priority ${escapeHtml(item.priority.toLowerCase())}">${escapeHtml(item.priority)}</span></td>
        </tr>
      `;
    }).join("");
  }

  function init() {
    applyCaptureMode();
    renderMeta();
    renderWorkflow();
    renderStatusCards();
    renderActivityLog();
    renderRules();
    renderQueue();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
