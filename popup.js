const clearButton = document.querySelector("#clear-btn");
const body = document.querySelector(".space");
let detectionSize = 10;

const renderSafe = () => {
  clearButton.disabled = true;
  const markup = `
    <img src="safe.png" alt="" />
        <h5>Your computer is safe</h5>
    `;
  body.innerHTML = markup;
};

const renderUnsafe = (size) => {
  clearButton.disabled = false;
  const markup = `
    <img src="unsafe.png" alt="" />
        <h5>${size} number of malicious cookies detected</h5>
    `;
  body.innerHTML = markup;
};

const startExtension = () =>
  detectionSize > 0 ? renderUnsafe(detectionSize) : renderSafe();

clearButton.addEventListener("click", () => {
  alert("cookies cleared successfully");
  detectionSize = 0;
  startExtension();
});

startExtension();
