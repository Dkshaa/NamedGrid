const grid = document.querySelector("[data-grid]");
const buttons = document.querySelectorAll("[data-layout]");
const templateCode = document.querySelector("[data-template-code]");

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

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const layout = button.dataset.layout;

    grid.className = `container layout-${layout}`;
    templateCode.textContent = templates[layout];

    buttons.forEach((item) => {
      const isSelected = item === button;

      item.classList.toggle("active", isSelected);
      item.setAttribute("aria-pressed", String(isSelected));
    });
  });
});
