const boxes = document.querySelectorAll(".box");
window.addEventListener("scroll", boxDisplay);

function boxDisplay() {
  const trigger = window.innerHeight / 2;
    console.log(trigger);
  boxes.forEach((box) => {
    const boxHeight = box.getBoundingClientRect().top;
    console.log(boxHeight)
    if (trigger > boxHeight) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
