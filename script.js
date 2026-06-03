const PAGE_SIZE = 10;
const BOARD_ORDER = ["overall", "vla", "wam"];
const BOARD_LABELS = {
  overall: "总榜",
  vla: "VLA 榜",
  wam: "WAM 榜",
};
const PREFERENCE_STORAGE_KEY = "paper-assistant-preferences";
const DEFAULT_PREFERENCES = {
  laneFocus: "balanced",
  scenarioFocus: "balanced",
  signalFocus: "balanced",
  codeFocus: false,
};

const siteData = window.PAPERS_SITE_DATA || {
  generatedAt: null,
  description: "尚未生成最新论文数据。",
  dateWindowDays: 7,
  categories: ["cs.RO", "cs.AI", "cs.CV", "cs.LG"],
  keywords: ["vision-language-action", "world action model", "robotics", "autonomous driving"],
  boardOrder: BOARD_ORDER,
  boardLabels: BOARD_LABELS,
  scoreDimensions: {
    relevance: "与 VLA/WAM/机器人/自动驾驶核心主题的相关程度",
    novelty: "是否包含新任务、新模型、新基准或新训练范式",
    impact: "是否具备基础性、统一性或潜在高影响力",
    practicality: "是否有真实场景、真实机器人/驾驶或较强落地信号",
    coreAlignment: "是否属于你最关心的 VLA 或 WAM 主航道工作",
  },
  selectionMethod: "rule_based",
  modelInfo: null,
  batchWindow: null,
  currentDateKey: null,
  paperSets: { overall: [], vla: [], wam: [] },
  dailyBrief: {},
  trendBrief: {
    windowDays: 7,
    dateRange: "",
    overview: "正在生成趋势总览。",
    hotspots: "正在生成热点摘要。",
    vla: "正在生成 VLA 趋势。",
    wam: "正在生成 WAM 趋势。",
    watchlist: "正在生成连续跟踪建议。",
  },
  archives: [],
};

const state = {
  currentPage: 1,
  query: "",
  currentBoard: "overall",
  selectedDateKey: resolveInitialDateKey(),
  preferences: loadPreferenceMemory(),
};

const paperCount = document.querySelector("#paper-count");
const generatedAt = document.querySelector("#generated-at");
const metaDescription = document.querySelector("#meta-description");
const pageTitle = document.querySelector("#page-title");
const summaryWindow = document.querySelector("#summary-window");
const summaryCategories = document.querySelector("#summary-categories");
const summaryKeywords = document.querySelector("#summary-keywords");
const selectionMethod = document.querySelector("#selection-method");
const selectedDateTitle = document.querySelector("#selected-date-title");
const selectedDateKey = document.querySelector("#selected-date-key");
const selectedPaperCount = document.querySelector("#selected-paper-count");
const boardSummary = document.querySelector("#board-summary");
const archiveList = document.querySelector("#archive-list");
const boardTabs = document.querySelector("#board-tabs");
const scoreDimensions = document.querySelector("#score-dimensions");
const preferenceSummary = document.querySelector("#preference-summary");
const preferencePanel = document.querySelector("#preference-panel");
const codePreference = document.querySelector("#code-preference");
const resetPreferences = document.querySelector("#reset-preferences");
const trendWindow = document.querySelector("#trend-window");
const trendRange = document.querySelector("#trend-range");
const trendOverview = document.querySelector("#trend-overview");
const trendHotspots = document.querySelector("#trend-hotspots");
const trendVla = document.querySelector("#trend-vla");
const trendWam = document.querySelector("#trend-wam");
const trendWatchlist = document.querySelector("#trend-watchlist");
const paperList = document.querySelector("#paper-list");
const emptyState = document.querySelector("#empty-state");
const pagination = document.querySelector("#pagination");
const searchInput = document.querySelector("#search-input");
const dailyBriefOverall = document.querySelector("#daily-brief-overall");
const dailyBriefVla = document.querySelector("#daily-brief-vla");
const dailyBriefWam = document.querySelector("#daily-brief-wam");
const dailyBriefRetrieval = document.querySelector("#daily-brief-retrieval");

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  state.currentPage = 1;
  render();
});

preferencePanel.addEventListener("click", (event) => {
  const button = event.target.closest("[data-pref-group][data-pref-value]");
  if (!button) {
    return;
  }
  updatePreference(button.dataset.prefGroup, button.dataset.prefValue);
});

codePreference.addEventListener("change", (event) => {
  updatePreference("codeFocus", event.target.checked);
});

resetPreferences.addEventListener("click", () => {
  state.preferences = { ...DEFAULT_PREFERENCES };
  savePreferenceMemory(state.preferences);
  render();
});

function render() {
  const currentArchive = getCurrentArchive();
  const paperSets = getPaperSets(currentArchive);
  const currentBoard = applyPreferenceRanking(paperSets[state.currentBoard] || [], state.preferences);
  const filtered = filterPapers(currentBoard, state.query);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(state.currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePapers = filtered.slice(start, start + PAGE_SIZE);

  state.currentPage = currentPage;
  renderMeta(currentArchive, paperSets, filtered.length);
  renderDailyBrief(currentArchive);
  renderScoreDimensions();
  renderPreferenceMemory();
  renderTrendBrief();
  renderArchiveList();
  renderBoardTabs(currentArchive);
  renderPapers(visiblePapers, start);
  renderPagination(totalPages);
}

function renderMeta(currentArchive, paperSets, filteredCount) {
  const archives = getArchives();
  const currentBoardPapers = paperSets[state.currentBoard] || [];
  const totalOverall = archives.reduce((count, archive) => count + (getPaperSets(archive).overall.length || 0), 0);

  paperCount.textContent = `${paperSets.overall.length}`;
  generatedAt.textContent = formatDateTime(siteData.generatedAt);
  selectionMethod.textContent = formatSelectionMethod(siteData.selectionMethod, siteData.modelInfo);
  pageTitle.textContent = currentArchive
    ? `智能研究助理 · ${currentArchive.dateKey}`
    : "智能研究助理";
  metaDescription.textContent = `${siteData.description} 当前归档共 ${archives.length} 天，累计展示 ${totalOverall} 篇总榜论文，当前榜单匹配 ${filteredCount} 篇。`;
  summaryWindow.textContent = formatBatchWindow(siteData.batchWindow, siteData.dateWindowDays);
  summaryCategories.textContent = `重点分类：${(siteData.categories || []).join(" / ")}`;
  summaryKeywords.textContent = `关键词：${(siteData.keywords || []).join(" / ")}`;
  selectedDateTitle.textContent = currentArchive
    ? `${currentArchive.dateKey} · ${getBoardLabel(state.currentBoard)}`
    : `${getBoardLabel(state.currentBoard)}`;
  selectedDateKey.textContent = currentArchive?.dateLabel || "--";
  selectedPaperCount.textContent = `${currentBoardPapers.length} 篇`;
  boardSummary.textContent = getBoardSummary(currentArchive, state.currentBoard);
}

function renderDailyBrief(currentArchive) {
  const dailyBrief = currentArchive?.dailyBrief || siteData.dailyBrief || {};
  dailyBriefOverall.textContent = dailyBrief.overall || "正在生成今日总榜摘要。";
  dailyBriefVla.textContent = dailyBrief.vla || "正在生成 VLA 趋势摘要。";
  dailyBriefWam.textContent = dailyBrief.wam || "正在生成 WAM 趋势摘要。";
  dailyBriefRetrieval.textContent = dailyBrief.retrieval || "正在加载宽召回与重排说明。";
}

function renderScoreDimensions() {
  const entries = Object.entries(siteData.scoreDimensions || {});
  scoreDimensions.innerHTML = "";

  entries.forEach(([key, description]) => {
    const item = document.createElement("article");
    item.className = "dimension-card";
    item.innerHTML = `
      <h4>${escapeHtml(formatDimensionLabel(key))}</h4>
      <p>${escapeHtml(description)}</p>
    `;
    scoreDimensions.append(item);
  });
}

function renderPreferenceMemory() {
  const preferences = state.preferences;
  preferenceSummary.textContent = getPreferenceSummary(preferences);
  codePreference.checked = Boolean(preferences.codeFocus);

  preferencePanel.querySelectorAll("[data-pref-group][data-pref-value]").forEach((button) => {
    const isActive = preferences[button.dataset.prefGroup] === button.dataset.prefValue;
    button.classList.toggle("is-active", isActive);
  });
}

function renderTrendBrief() {
  const trendBrief = siteData.trendBrief || {};
  trendWindow.textContent = `近 ${trendBrief.windowDays || 7} 天`;
  trendRange.textContent = trendBrief.dateRange
    ? `观察区间：${trendBrief.dateRange}`
    : "观察区间正在生成。";
  trendOverview.textContent = trendBrief.overview || "正在生成趋势总览。";
  trendHotspots.textContent = trendBrief.hotspots || "正在生成热点摘要。";
  trendVla.textContent = trendBrief.vla || "正在生成 VLA 趋势。";
  trendWam.textContent = trendBrief.wam || "正在生成 WAM 趋势。";
  trendWatchlist.textContent = trendBrief.watchlist || "正在生成连续跟踪建议。";
}

function renderArchiveList() {
  const archives = getArchives();
  archiveList.innerHTML = "";

  archives.forEach((archive) => {
    const overallCount = getPaperSets(archive).overall.length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `archive-button${archive.dateKey === state.selectedDateKey ? " is-active" : ""}`;
    button.innerHTML = `
      <span class="archive-date">${archive.dateKey}</span>
      <span class="archive-count">${overallCount} 篇</span>
    `;
    button.addEventListener("click", () => {
      state.selectedDateKey = archive.dateKey;
      state.currentPage = 1;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    archiveList.append(button);
  });
}

function renderBoardTabs(currentArchive) {
  const paperSets = getPaperSets(currentArchive);
  const order = Array.isArray(siteData.boardOrder) ? siteData.boardOrder : BOARD_ORDER;
  boardTabs.innerHTML = "";

  order.forEach((boardKey) => {
    const count = (paperSets[boardKey] || []).length;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `board-tab${boardKey === state.currentBoard ? " is-active" : ""}`;
    button.innerHTML = `<span>${getBoardLabel(boardKey)}</span><span class="board-tab-count">${count}</span>`;
    button.addEventListener("click", () => {
      state.currentBoard = boardKey;
      state.currentPage = 1;
      render();
    });
    boardTabs.append(button);
  });
}

function renderPapers(papers, startIndex) {
  paperList.innerHTML = "";
  emptyState.hidden = papers.length > 0;

  if (!papers.length) {
    return;
  }

  papers.forEach((paper, index) => {
    const item = document.createElement("li");
    item.className = "paper-card";

    const rank = startIndex + index + 1;
    const authors = Array.isArray(paper.authors) ? paper.authors.join(", ") : "";
    const tags = Array.isArray(paper.categories) ? paper.categories : [];
    const reasonTags = Array.isArray(paper.reasonTags) ? paper.reasonTags : [];
    const innovationPoints = Array.isArray(paper.innovationPoints) ? paper.innovationPoints : [];
    const retrievalGroups = Array.isArray(paper.retrievalGroups) ? paper.retrievalGroups : [];
    const importanceLevel = paper.importanceLevel || "B";
    const lane = formatLane(paper.lane);
    const oneSentenceSummary = paper.oneSentenceSummary || "";
    const whyImportant = paper.whyImportant || "";
    const summaryCn = paper.summaryCn || paper.summary || "";
    const noveltyVerdict = paper.noveltyVerdict || "";
    const dedupeNote = paper.dedupeNote || "";
    const duplicateRisk = formatDuplicateRisk(paper.duplicateRisk);
    const dimensionScores = paper.dimensionScores || {};
    const mergedCount = Number(paper.mergedCount || 1);
    const mergedTitles = Array.isArray(paper.mergedTitles) ? paper.mergedTitles.filter(Boolean).slice(1, 3) : [];

    item.innerHTML = `
      <article>
        <header class="paper-header">
          <div>
            <h3 class="paper-title">
              <a href="${paper.link}" target="_blank" rel="noreferrer">${escapeHtml(paper.title)}</a>
            </h3>
            <div class="paper-meta">
              <span>发布日期：${formatDate(paper.published)}</span>
              <span>作者：${escapeHtml(authors)}</span>
            </div>
          </div>
          <div class="paper-rank-group">
            <span class="importance-badge importance-${importanceLevel.toLowerCase()}">${escapeHtml(importanceLevel)} 级</span>
            <span class="paper-rank">#${rank}</span>
          </div>
        </header>
        <div class="paper-topline">
          <span class="lane-badge">${escapeHtml(lane)}</span>
          <span class="risk-badge risk-${paper.duplicateRisk || "low"}">重复风险：${escapeHtml(duplicateRisk)}</span>
          ${mergedCount > 1 ? `<span class="merge-badge">已合并 ${mergedCount - 1} 篇近似稿件</span>` : ""}
        </div>
        ${oneSentenceSummary ? `<p class="paper-cn-summary">${escapeHtml(oneSentenceSummary)}</p>` : ""}
