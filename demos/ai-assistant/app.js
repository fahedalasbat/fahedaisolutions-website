(function () {
  const data = window.aiAssistantDemoData;

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

  function renderChat() {
    const panel = getElement("chatPanel");

    panel.innerHTML = data.chat.map((item) => {
      const role = classToken(item.role);

      return `
        <article class="chat-message ${role}">
          <span>${escapeHTML(item.label)}</span>
          <p>${escapeHTML(item.message)}</p>
        </article>
      `;
    }).join("") + `
      <article class="chat-message assistant typing-demo" aria-live="polite">
        <span>AI Assistant Draft - Demo typing</span>
        <div class="typing-indicator" aria-label="Demo assistant is typing">
          <i></i>
          <i></i>
          <i></i>
        </div>
        <p id="typedResponse"></p>
        <small>Demo/sample behavior only. Human review is required before sending.</small>
      </article>
    `;
  }

  function renderKnowledgeSources() {
    const list = getElement("knowledgeSources");

    list.innerHTML = data.knowledgeSources.map((source) => {
      return `
        <article class="source-card">
          <div class="source-topline">
            <strong>${escapeHTML(source.title)}</strong>
            <span>${escapeHTML(source.status)}</span>
          </div>
          <small>${escapeHTML(source.type)}</small>
          <p>${escapeHTML(source.detail)}</p>
        </article>
      `;
    }).join("");
  }

  function renderSuggestedActions() {
    const list = getElement("suggestedActions");

    list.innerHTML = data.suggestedActions.map((action) => {
      return `
        <li class="action-item">
          <span class="state-pill ${classToken(action.state)}">${escapeHTML(action.state)}</span>
          <div>
            <strong>${escapeHTML(action.title)}</strong>
            <p>${escapeHTML(action.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function renderReviewItems() {
    const list = getElement("reviewItems");

    list.innerHTML = data.reviewItems.map((item) => {
      return `
        <li class="review-item">
          <span class="state-pill ${classToken(item.status)}">${escapeHTML(item.status)}</span>
          <div>
            <strong>${escapeHTML(item.label)}</strong>
            <p>${escapeHTML(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function renderSafetyLimits() {
    const list = getElement("safetyLimits");

    list.innerHTML = data.safetyLimits.map((limit) => {
      return `
        <article class="limit-card">
          <strong>${escapeHTML(limit.title)}</strong>
          <p>${escapeHTML(limit.detail)}</p>
        </article>
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
            <div class="activity-heading">
              <strong>${escapeHTML(item.title)}</strong>
              <em>${escapeHTML(item.type)}</em>
            </div>
            <p>${escapeHTML(item.detail)}</p>
          </div>
        </li>
      `;
    }).join("");
  }

  function typeMessage(targetId, message, speed) {
    const target = getElement(targetId);
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!target) {
      return;
    }

    if (reduceMotion || document.body.classList.contains("capture-mode")) {
      target.textContent = message;
      return;
    }

    let index = 0;
    target.textContent = "";

    const timer = window.setInterval(() => {
      target.textContent = message.slice(0, index);
      index += 1;

      if (index > message.length) {
        window.clearInterval(timer);
      }
    }, speed);
  }

  function simulateTyping() {
    typeMessage(
      "heroTypedPreview",
      "I can prepare a follow-up draft and flag missing CRM details for human review.",
      18
    );
    typeMessage(
      "typedResponse",
      "I found 3 pending follow-ups and 2 customer questions that may need review. I can prepare a draft summary, but a team member should approve it before sending.",
      24
    );
  }

  function init() {
    applyCaptureMode();
    renderMeta();
    renderKpis();
    renderChat();
    renderKnowledgeSources();
    renderSuggestedActions();
    renderReviewItems();
    renderSafetyLimits();
    renderActivity();
    simulateTyping();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
