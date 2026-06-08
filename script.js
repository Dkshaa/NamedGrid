const grid = document.querySelector("[data-grid]");
const buttons = document.querySelectorAll("[data-layout]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const layout = button.dataset.layout;

    grid.className = `container layout-${layout}`;

    buttons.forEach((item) => {
      item.classList.toggle("active", item === button);
    });
  });
});
