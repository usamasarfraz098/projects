const btnDecrease= document.querySelector('.btn_decrease');
const btnIncrease= document.querySelector('.btn_increase');
const btnReset= document.querySelector('.btn_reset');
const Counter=document.querySelector('.container_content_number');

let num=3;

btnDecrease.addEventListener('click',function(){
    num=num-1;
    Counter.innerHTML=num;
});
btnReset.addEventListener('click', function () {
  num = 0;
  Counter.innerHTML = num;
});

btnIncrease.addEventListener('click', function () {
  num = num + 1;
  Counter.innerHTML = num;
});
// btnrest.addEventListener('click',function(){
//   num=0;
//   Counter.innerHTML=num;
// });
// btnIncrease.addEventListener('click',function(){
//   num=num+1;
//   Counter.innerHTML=num;
// });