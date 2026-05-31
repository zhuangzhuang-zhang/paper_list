const PAGE_SIZE = 10;

const siteData = window.PAPERS_SITE_DATA || {
  generatedAt: null,
  description: "尚未生成最新论文数据。",
  dateWindowDays: 7,
  categories: ["cs.RO", "cs.AI", "cs.CV", "cs.LG"],
  keywords: ["vision-language-action", "world action model", "robotics", "autonomous driving"],
  papers: [],
};

const state = {
  currentPage: 1,
  query: "",
  papers: Array.isArray(siteData.papers) ? siteData.papers : [],
};

const paperCount = document.querySelector("#paper-count");
const generatedAt = document.querySelector("#generated-at");
const metaDescription = document.querySelector("#meta-description");
const summaryWindow = document.querySelector("#summary-window");
const summaryCategories = document.querySelector("#summary-categories");
const summaryKeywords = document.querySelector("#summary-keywords");
const paperList = document.querySelector("#paper-list");
const emptyState = document.querySelector("#empty-state");
const pagination = document.querySelector("#pagination");
const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  state.currentPage = 1;
  render();
});

function render() {
  const filtered = filterPapers(state.papers, state.query);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(state.currentPage, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visiblePapers = filtered.slice(start, start + PAGE_SIZE);

  state.currentPage = currentPage;
  renderMeta(filtered.length);
  renderPapers(visiblePapers, start);
  renderPagination(totalPages);
}

function renderMeta(filteredCount) {
  paperCount.textContent = `${state.papers.length}`;
  generatedAt.textContent = formatDateTime(siteData.generatedAt);
  metaDescription.textContent = `${siteData.description} 当前共展示 ${state.papers.length} 篇，搜索后匹配 ${filteredCount} 篇。`;
  summaryWindow.textContent = `近 ${siteData.dateWindowDays || 7} 天最新提交`;
  summaryCategories.textContent = `重点分类：${(siteData.categories || []).join(" / ")}`;
  summaryKeywords.textContent = `关键词：${(siteData.keywords || []).join(" / ")}`;
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
          <span class="paper-rank">#${rank}</span>
        </header>
        <p class="paper-summary">${escapeHtml(paper.summary)}</p>
        <footer class="paper-footer">
          <div class="tag-list">
            ${tags.map((tag) => `<span class="tag">${escapeHtml(tag)}</span>`).join("")}
          </div>
          <div class="link-group">
            <a class="link-button primary" href="${paper.link}" target="_blank" rel="noreferrer">查看论文</a>
            <a class="link-button secondary" href="${paper.pdfLink}" target="_blank" rel="noreferrer">打开 PDF</a>
          </div>
        </footer>
      </article>
    `;

    paperList.append(item);
  });
}

function renderPagination(totalPages) {
  pagination.innerHTML = "";
  pagination.hidden = totalPages <= 1;

  if (totalPages <= 1) {
    return;
  }

  for (let page = 1; page <= totalPages; page += 1) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `page-button${page === state.currentPage ? " is-active" : ""}`;
    button.textContent = `${page}`;
    button.addEventListener("click", () => {
      state.currentPage = page;
      render();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
    pagination.append(button);
  }
}

function filterPapers(papers, query) {
  if (!query) {
    return papers;
  }

  return papers.filter((paper) => {
    const haystack = [
      paper.title,
      paper.summary,
      ...(paper.authors || []),
      ...(paper.categories || []),
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  });
}

function formatDate(value) {
  if (!value) {
    return "未知";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(value));
}

function formatDateTime(value) {
  if (!value) {
    return "等待首次自动更新";
  }

  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Shanghai",
  }).format(new Date(value));
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

render();
