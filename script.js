const grid = document.querySelector("[data-grid]");
const buttons = document.querySelectorAll("[data-layout]");
const templateCode = document.querySelector("[data-template-code]");
const layoutSummary = document.querySelector("[data-layout-summary]");

const templates = {
  dashboard: `"header header header"
"sidebar content1 content1"
"sidebar content2 content3"
"footer footer footer"`,
  article: `"header header"
"sidebar content1"
"content2 content1"
"content3 footer"`,
  gallery: `"header header sidebar"
"content1 content2 sidebar"
"content1 content3 content3"
"footer footer footer"`,
};

const summaries = {
  dashboard:
    "A dashboard-style layout with a persistent sidebar and stacked content regions.",
  article:
    "An article-style layout where the main content column receives the most space.",
  gallery:
    "A gallery-style layout that lets visual content blocks span across the grid.",
};

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const layout = button.dataset.layout;

    grid.className = `container layout-${layout}`;
    templateCode.textContent = templates[layout];
    layoutSummary.textContent = summaries[layout];

    buttons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});
