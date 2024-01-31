const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrolstart = false;

btn.addEventListener("click", navToggle);
// document.addEventListener("scroll", scrollPage);
document.addEventListener("scroll", scrollpage);

function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}
function scrollpage() {
  const scrolpos = window.scrollY;
  if (scrolpos > 100 && !scrolstart) {
    upcounter();
    scrolstart = true;
  } else if (scrolpos < 100 && scrolstart) {
    reset();
    scrolstart = false;
  }
}

function upcounter() {
  counters.forEach((counter) => {
    counter.innerHTML = "0";
    // console.log(counter);
    const updateCounter = () => {
      const target = +counter.getAttribute("data-target");
      // console.log(target);
      const c = +counter.innerHTML;
      // const increment = target;
      // if (c < target) {
      counter.innerHTML = `${Math.ceil(target)}`;
      setTimeout(updateCounter, 9000);
    };
    // };
    updateCounter();
  });
}

function reset() {
  counters.forEach((count) => {
    count.innerHTML = "0";
  });
}
