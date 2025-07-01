cancel = false;
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function loadStuffs() {
  if (cancel === true) {
    cancel = false;
  }
  const bar = document.getElementsByClassName("bar")[0];
  document.getElementsByTagName("body")[0].style.cssText +=
    "background-color: rgba(0, 0, 0, 0.8);";
  vals = [];
  for (let i = 0; i < 1000; i += 1) {
    if (!cancel) {
      bar.style.transform = `scaleX(${i / 1000})`;
      await sleep((i * 10) / 1000);
    }
  }
  document
    .getElementsByTagName("body")[0]
    .style.removeProperty("background-color");
}
function reset() {
  cancel = true;
  const bar = document.getElementsByClassName("bar")[0];
  bar.style.transform = `scaleX(0)`;
  document
    .getElementsByTagName("body")[0]
    .style.removeProperty("background-color");
}
