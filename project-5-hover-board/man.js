const container = document.querySelector(".container");

let SQUARES = 500;
let colors = ["#e74c3c", "#e35e3c", "#e75c3c", "#e74c9c", "#e74c2c", "#e74d3c"];
for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));
  container.appendChild(square);
}

function setColor(e) {
  console.log(e);
  const color = getRandomColor();
  console.log(color);
  e.style.background = color;
  e.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
}
function removeColor(e) {
  e.style.background = "#1d1d1d";
  e.style.boxShadow = "0 0 2px #000";
}
function getRandomColor() {
  return colors[Math.trunc(Math.random() * colors.length - 1)];
}
