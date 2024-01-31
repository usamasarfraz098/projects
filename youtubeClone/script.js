var sidebar = document.querySelector(".sidebar");
var menu = document.querySelector(".menu");
var container = document.querySelector(".container");

menu.addEventListener("click", function () {
  sidebar.classList.toggle("small-sidebar");
  container.classList.toggle("large-container");
  console.log("usama");
});
