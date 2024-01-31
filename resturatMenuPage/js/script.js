const allBtn=document.querySelectorAll('.btn');
const breakfastBtn=document.querySelectorAll('.btn_breakfast')
const contentSection=document.querySelector('.content')

const breakfastObj={
  src:["img/breakfast_1.jpg","img/breakfast_2.jpg","img/breakfast_3.jpg","img/breakfast_4.jpg"],
  title:['breakfast-1','breakfast-2','breakfast-3','breakfast-4'],
  price:[24,35,49,30]
}
const lunchObj={
  src:["img/lunch_1.jpg","img/lunch_2.jpg","img/lunch_3.jpg","img/lunch_4.jpg"],
  title:['lunch-1','lunch-2','lunch-3','lunch-4'],
  price:[20,35,409,30]
}
const dinnerObj={
  src:["img/dinner_1.jpg","img/dinner_2.jpg","img/dinner_3.jpg","img/dinner_4.jpg"],
  title:['dinner-1','dinner-2','dinner-3','dinner-4'],
  price:[24,35,49,30]
}
const shakesObj={
  src:["img/shakes_1.jpg","img/shakes_2.jpg","img/shakes_3.jpg","img/shakes_4.jpg"],
  title:['shakes-1','shakes-2','shakes-3','shakes-4'],
  price:[24,35,49,30]
}
allBtn.forEach(btn=>btn.addEventListener('click',function(e){
  // console.log(e.target)
  const target=e.target;
  contentSection.innerHTML = '';
 if(target.id==='breakfast'){
  console.log('breakfast')
  for(i=0;i<breakfastObj.src.length;i++){
    createItem(breakfastObj.src[i],breakfastObj.title[i],breakfastObj.price[i])
  }
 } else if(target.id==='dinner'){
  console.log('dinner',contentSection.innerHTML)
  // contentSection.innerHTML=''
  for(i=0;i<dinnerObj.src.length;i++){
    createItem(dinnerObj.src[i],dinnerObj.title[i],dinnerObj.price[i])
  }
 }else if(target.id==='shakes'){
  console.log('shakes')
  for(i=0;i<shakesObj.src.length;i++){
    createItem(shakesObj.src[i],shakesObj.title[i],shakesObj.price[i])
  }
 }else if(target.id==='lunch'){
  console.log('lunch')
  for(i=0;i<lunchObj.src.length;i++){
    createItem(lunchObj.src[i],lunchObj.title[i],lunchObj.price[i])
  }
 }else if(target.id==='all'){
  console.log('all')
  for(i=0;i<breakfastObj.src.length;i++){
    createItem(breakfastObj.src[i],breakfastObj.title[i],breakfastObj.price[i])
  }
  for(i=0;i<lunchObj.src.length;i++){
    createItem(lunchObj.src[i],lunchObj.title[i],lunchObj.price[i])
  }
  for(i=0;i<dinnerObj.src.length;i++){
    createItem(dinnerObj.src[i],dinnerObj.title[i],dinnerObj.price[i])
  }
  for(i=0;i<shakesObj.src.length;i++){
    createItem(shakesObj.src[i],shakesObj.title[i],shakesObj.price[i])
  }
 }
 
}))

const createItem=function(objSrc,objTitle,objPrice){
  const html=`      <div class="content_1">

        
  <div class="content_left">
    <img class="img" src=${objSrc} alt="">
  </div>
  <div class="content_right">
    <div class="content_right_top">
       <span class="content_right_title">${objTitle}</span>
       <span class="content_right_price">$${objPrice}</span>
    </div>
    <div class="content_right_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, accusamus! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident unde debitis perspiciatis blanditiis. Architecto ullam laborum libero nobis debitis cumque dolor, quae corrupti rem cupiditate cum quaerat unde reiciendis.</div>
  </div>
  </div>`

contentSection.insertAdjacentHTML('beforeend',html)
}
// createItem(breakfastObj.src[0],breakfastObj.title[0],breakfastObj.price[0])
// createItem(breakfastObj.src[1],breakfastObj.title[1],breakfastObj.price[1])
// createItem(breakfastObj)

