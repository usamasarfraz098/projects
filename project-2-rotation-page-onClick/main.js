const open = document.querySelector("#open");
const close = document.querySelector("#close");
const container = document.querySelector(".container");
open.addEventListener("click", function () {
  container.classList.add("rotate-page");
});
close.addEventListener("click", function () {
  container.classList.remove("rotate-page");
});
