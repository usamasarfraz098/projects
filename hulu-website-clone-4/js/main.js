const loginbtn = document.querySelector(".login-btn");
const model = document.querySelector(".modal");
const closebtn = document.querySelector(".close");
loginbtn.addEventListener("click", function () {
  console.log("usama");
  model.classList.add("display");
});
closebtn.addEventListener("click", function () {
  model.classList.remove("display");
});
