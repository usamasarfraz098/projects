'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
console.log(btnsOpenModal);

// selecting element
// document.documentElement
// document.querySelector('.btn')
// document.querySelectorAll('.btn')
// document.getElementById('btn')
// document.getElementsByClassName('btn')
// document.getElementsByTagName('div')

// create element .
// const msg = document.createElement('div');
// document.insertAdjacentHtml;
// msg.innerHTML = 'usam <button class="btn">user</button>';

// Headers.append(meg);
// Headers.prepend(msg);

// Headers.before(msg);
// Headers.after(msg);

// MessageChannel.remove()

// style

// Message.style.backgroundColor='#111111'
// Message.style.color=getComputedStyle('msg').color

// Number.parseFloat(getComputedStyle('msg').height)+30+px;
// document.documentElement.style.setProperty('color','red');

// attribute
// const logo = document.querySelector('img');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);
// console.log(logo.getAttribute('designer'));
// console.log();
// logo.setAttribute('name', 'usama');

// window funtions

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function (e) {
  const s1corrd = section1.getBoundingClientRect();
  // e.target.getBoundingClientRect();
  // console.log(window.pageXOffset, pageYOffset);
  // console.log(document.documentElement.clientHeight);

  // scrolling
  // window.scrollTo(
  //   s1corrd.left + window.pageXOffset,
  //   s1corrd.top + window.pageYOffset,

  // );

  // window.scrollTo({
  //   left: s1corrd.left + window.pageXOffset,
  //   top: s1corrd.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});
// setTimeout(function(){

// },3000)
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  console.log(e.target.getAttribute('href'));
  const targetBtn = e.target.getAttribute('href');
  document.querySelector(targetBtn).scrollIntoView({ behavior: 'smooth' });
});

// const h = document.querySelector('h1');
// h.parentElement;
// h.childNodes;
// h.children;
// h.parentNode;
// console.log(h.previousElementSibling);
// console.log(h.previousSibling);
// console.log(h.nextElementSibling);
// console.log(h.nextSibling);
// console.log(h.parentElement.children);

const operationsBtn = document.querySelector('.operations__tab-container');
console.log(operationsBtn.children);
operationsBtn.addEventListener('click', function (e) {
  console.log(e.target.closest('.operations__tab'));
  const target = e.target.closest('.operations__tab');
  document
    .querySelectorAll('.operations__tab')
    .forEach(t => t.classList.remove('operations__tab--active'));
  target.classList.add('operations__tab--active'); // Corrected class name

  console.log(target.dataset.tab);
  document
    .querySelectorAll('.operations__content')
    .forEach(t => t.classList.remove('operations__content--active'));

  document
    .querySelector(`.operations__content--${target.dataset.tab}`)
    .classList.add('operations__content--active');
});

// nav shadeout
const nav = document.querySelector('.nav');

const hoverhandle = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const sibling = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');
    sibling.forEach(el => {
      if (el !== link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', function (e) {
  hoverhandle(e, 0.5);
});

nav.addEventListener('mouseout', function (e) {
  hoverhandle(e, 1);
});

// sticky nav

// const screen = document.querySelector('#section--2').getBoundingClientRect();
// window.addEventListener('scroll', function (e) {
//   // console.log(e);
//   console.log(window.scrollY > screen.top);
//   if (window.scrollY > screen.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// insection new keyword  :sticky nav

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// reveal section using intersection

const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSection.forEach(function (section) {
  // sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// img target

const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);
const loadImg = function (entries, observer) {
  const [entry] = entries;

  console.log(entry, entries, imgTarget);

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});
imgTarget.forEach(img => imgObserver.observe(img));

// slider slide
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right'); // Corrected variable name
let curSlide = 0;
const maxSlide = slides.length; // Corrected property name
const slider = document.querySelector('.slider');
slider.style.transform = 'scale(0.4) translateX(-800px)';
slider.style.overflow = 'visible';
slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};
goToSlide(0);

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide); // Pass the slide index to the function
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide); // Pass the slide index to the function
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

////////////////////////////////////////
// // slider slide
// const slides = document.querySelector('.slide');
// const btnLeft = document.querySelector('.slider__btn--left');
// const btnRight = document.querySelector('.slider__btn--right');
// const curSlide = 0;
// const maxSlide = slides.lenght;
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';
// slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));

// const goToSlide = function (slide) {
//   slides.forEach(
//     (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}% )`)
//   );
// };
// goToSlide(0);
// const nextSlide = function () {
//   if (curSlide === maxSlide - 1) {
//     curSlide = 0;
//   } else {
//     curSlide++;
//   }
//   goToSlide();
// };

// const prevSlide = function () {
//   if (curSlide === 0) {
//     curSlide = maxSlide - 1;
//   } else {
//     curSlide--;
//   }
//   goToSlide();
// };
// btnRigth.addEventListener('click', nextSlide);
// btnLeft.addEventListener('click', prevSlide);

// -----------------------
// const imgTarget = document.querySelectorAll('.img');
// console.log(imgTarget);

// const loadImg = function (entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       const img = entry.target;

//       img.src = img.dataset.src;
//       img.addEventListener('load', function () {
//         img.classList.remove('lazy-img');
//       });

//       observer.unobserve(img);
//     }
//   });
// };

// const imgObserver = new IntersectionObserver(loadImg, {
//   root: null,
//   threshold: 0,
// });

// imgTarget.forEach(img => imgObserver.observe(img));

// const operationsBtn = document.querySelector('.operations__tab-container');
// console.log(operationsBtn.children);
// operationsBtn.addEventListener('click', function (e) {
//   console.log(e.target.closest('.operations__tab'));
//   const target = e.target.closest('.operations__tab');
//   document
//     .querySelectorAll('.operations__tab')
//     .forEach(t => t.classList.remove('operations__tab--active'));
//   target.classList.add('operations__tab--active'); // Corrected class name

// });

// event listener

window.addEventListener('beforeunload', function (e) {
  e.returnValue = 'message';
  e.preventDefault();
});
