const grid = document.querySelector("[data-grid]");
const buttons = document.querySelectorAll("[data-layout]");
const templateCode = document.querySelector("[data-template-code]");
const layoutSummary = document.querySelector("[data-layout-summary]");
const copyButton = document.querySelector("[data-copy-template]");
const copyStatus = document.querySelector("[data-copy-status]");

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

function setLayout(layout) {
  grid.className = `container layout-${layout}`;
  templateCode.textContent = templates[layout];
  layoutSummary.textContent = summaries[layout];

  buttons.forEach((item) => {
    const isActive = item.dataset.layout === layout;

    item.classList.toggle("active", isActive);
    item.setAttribute("aria-pressed", String(isActive));
  });
}

function getActiveIndex() {
  return [...buttons].findIndex((button) => button.classList.contains("active"));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    setLayout(button.dataset.layout);
  });
});

document.addEventListener("keydown", (event) => {
  const shortcuts = {
    1: "dashboard",
    2: "article",
    3: "gallery",
  };

  if (shortcuts[event.key]) {
    setLayout(shortcuts[event.key]);
    return;
  }

  if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (getActiveIndex() + direction + buttons.length) % buttons.length;

    setLayout(buttons[nextIndex].dataset.layout);
  }
});

copyButton.addEventListener("click", async () => {
  const css = `grid-template-areas:\n${templateCode.textContent};`;

  try {
    await navigator.clipboard.writeText(css);
    copyStatus.textContent = "Copied the current template.";
  } catch {
    copyStatus.textContent = "Select the code above to copy it.";
  }
});
