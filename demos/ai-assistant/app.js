(function () {
  const data = window.aiAssistantDemoData;
  const playbackTimers = [];
  const playbackIntervals = [];

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

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function schedule(callback, delay) {
    const timer = window.setTimeout(() => {
      const timerIndex = playbackTimers.indexOf(timer);

      if (timerIndex >= 0) {
        playbackTimers.splice(timerIndex, 1);
      }

      callback();
    }, delay);
    playbackTimers.push(timer);
    return timer;
  }

  function clearPlaybackTimers() {
    playbackTimers.splice(0).forEach((timer) => window.clearTimeout(timer));
    playbackIntervals.splice(0).forEach((timer) => window.clearInterval(timer));
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

    panel.innerHTML = "";
  }

  function renderKnowledgeSources() {
    const list = getElement("knowledgeSources");

    list.innerHTML = data.knowledgeSources.map((source) => {
      return `
        <article class="source-card" data-source-index="${data.knowledgeSources.indexOf(source)}">
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
        <li class="action-item" data-action-index="${data.suggestedActions.indexOf(action)}">
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
        <li class="review-item" data-review-index="${data.reviewItems.indexOf(item)}">
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
        <li class="activity-item" data-activity-index="${data.activity.indexOf(item)}">
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

  function setAssistantStatus(status) {
    const statusElement = getElement("assistantStatus");

    if (statusElement) {
      statusElement.textContent = status;
    }
  }

  function clearLiveHighlights() {
    document.querySelectorAll(".is-live-highlight").forEach((element) => {
      element.classList.remove("is-live-highlight");
    });
    document.querySelectorAll(".is-review-live").forEach((element) => {
      element.classList.remove("is-review-live");
    });
  }

  function highlightLiveState(stage) {
    if (stage === 0) {
      document.querySelector('[data-action-index="0"]')?.classList.add("is-live-highlight");
      document.querySelector('[data-review-index="0"]')?.classList.add("is-live-highlight");
      document.querySelector('[data-activity-index="1"]')?.classList.add("is-live-highlight");
      document.querySelector(".review-card")?.classList.add("is-review-live");
      return;
    }

    if (stage === 1) {
      [0, 1, 2].forEach((index) => {
        document.querySelector(`[data-source-index="${index}"]`)?.classList.add("is-live-highlight");
      });
      document.querySelector('[data-activity-index="2"]')?.classList.add("is-live-highlight");
      return;
    }

    if (stage === 2) {
      document.querySelector('[data-review-index="2"]')?.classList.add("is-live-highlight");
      document.querySelector('[data-activity-index="3"]')?.classList.add("is-live-highlight");
      document.querySelector(".review-card")?.classList.add("is-review-live");
    }
  }

  function appendChatMessage(item, options) {
    const panel = getElement("chatPanel");
    const role = classToken(item.role);
    const message = document.createElement("article");
    message.className = `chat-message ${role} is-new`;

    if (options?.typing) {
      message.classList.add("is-typing");
    }

    const label = document.createElement("span");
    label.textContent = item.label;
    message.appendChild(label);

    if (options?.typing) {
      const indicator = document.createElement("div");
      indicator.className = "typing-indicator";
      indicator.setAttribute("aria-label", "Demo assistant is typing");
      indicator.innerHTML = "<i></i><i></i><i></i>";
      message.appendChild(indicator);
    }

    const content = document.createElement("p");
    content.className = options?.typing ? "typed-draft" : "";
    content.textContent = options?.typing ? "" : item.message;
    message.appendChild(content);

    if (options?.safetyNote) {
      const note = document.createElement("small");
      note.textContent = "Demo/sample behavior only. Human review is required before sending.";
      message.appendChild(note);
    }

    panel.appendChild(message);
    panel.scrollTop = panel.scrollHeight;

    return { message, content };
  }

  function wait(delay) {
    return new Promise((resolve) => {
      schedule(resolve, delay);
    });
  }

  function typeIntoElement(target, message, speed) {
    if (prefersReducedMotion() || document.body.classList.contains("capture-mode")) {
      target.textContent = message;
      return Promise.resolve();
    }

    return new Promise((resolve) => {
      let index = 0;
      target.textContent = "";

      const timer = window.setInterval(() => {
        target.textContent = message.slice(0, index);
        index += 1;

        if (index > message.length) {
          window.clearInterval(timer);
          const timerIndex = playbackIntervals.indexOf(timer);

          if (timerIndex >= 0) {
            playbackIntervals.splice(timerIndex, 1);
          }

          resolve();
        }
      }, speed);

      playbackIntervals.push(timer);
    });
  }

  function renderStaticConversation() {
    const panel = getElement("chatPanel");
    panel.innerHTML = "";
    data.chat.forEach((item) => appendChatMessage(item));
    setAssistantStatus("Waiting for review");
    highlightLiveState(0);
    highlightLiveState(1);
    highlightLiveState(2);
  }

  async function runConversationCycle() {
    const panel = getElement("chatPanel");
    panel.innerHTML = "";
    clearLiveHighlights();
    setAssistantStatus("Listening");

    let assistantStage = 0;

    await wait(500);

    for (const item of data.chat) {
      if (item.role === "user") {
        setAssistantStatus("Listening");
        appendChatMessage(item);
        await wait(900);
      } else {
        setAssistantStatus("Drafting");
        const draft = appendChatMessage(item, { typing: true, safetyNote: assistantStage === 0 });
        await wait(760);
        draft.message.classList.add("is-active-draft");
        await typeIntoElement(draft.content, item.message, 18);
        draft.message.classList.remove("is-typing");
        draft.message.classList.remove("is-active-draft");
        setAssistantStatus("Waiting for review");
        highlightLiveState(assistantStage);
        assistantStage += 1;
        await wait(1400);
      }
    }

    await wait(4200);
    schedule(runConversationCycle, 0);
  }

  function startConversationPlayback() {
    clearPlaybackTimers();

    if (prefersReducedMotion() || document.body.classList.contains("capture-mode")) {
      renderStaticConversation();
      return;
    }

    runConversationCycle();
  }

  function typeMessage(targetId, message, speed) {
    const target = getElement(targetId);

    if (!target) {
      return;
    }

    if (prefersReducedMotion() || document.body.classList.contains("capture-mode")) {
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
    startConversationPlayback();
    simulateTyping();
  }

  document.addEventListener("DOMContentLoaded", init);
})();
