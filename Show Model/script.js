'use strict';
const modal = document.querySelector('.modal');
const btn = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-modal');
console.log(modal);

const openFunction = function () {
  console.log('button click');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

console.log(btn[0]);
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener('click', openFunction);
  closeModel.addEventListener('click', closeFunction);
  overlay.addEventListener('click', closeFunction);
}
document.addEventListener('keydown', function (e) {
  //   console.log(e);
  if (e.key == 'Escape') {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
    // console.log('a');
  }
  //    else {
  //     console.log('b');
  //   }
});
