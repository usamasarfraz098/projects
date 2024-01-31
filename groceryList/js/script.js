const submitBtn=document.querySelector('.btn');
const deleteBtn=document.querySelectorAll('.delete');
const clearBtn=document.querySelector('.clear_btn');
const editBtn=document.querySelector('.edit');
const sectionGrocery=document.querySelector('.content_items')
const input=document.querySelector('#text')
// const editGeneratedBtn=document.querySelector('.btnEdit_1');

let data=[]


// function to generate and display item 

const generateItem=function(inputValue){
    
  const html=` <div class="content_item_1">
  <div class="title">${inputValue}</div>
  <div class="content_item_btn">
    <i class=" delete fa fa-trash btn_curser" aria-hidden="true"></i>
    <i class=" edit fas fa-edit btn_curser"></i>
  </div>
</div>`
sectionGrocery.insertAdjacentHTML('beforeend',html)

}

// Function to display existing data
const displayData = function () {
  sectionGrocery.innerHTML = ''; 
  data.forEach((item) => generateItem(item));
};
// submitbtn 
submitBtn.addEventListener('click',function(){
  
  const inputValue=input.value;
  generateItem(inputValue);
  data.push(inputValue)
  console.log(data)
  // console.log(sectionGrocery.children[0])
  // const generatItemChildren=sectionGrocery.children[0]
  // console.log(generatItemChildren.children[0].innerHTML)
  // const getinputData=generatItemChildren.children[0].innerHTML
  // console.log(getinputData)
  // data.push(getinputData)
  // console.log(data)
  
});

sectionGrocery.addEventListener('click', function (e) {
  if (e.target.classList.contains('delete')) {
    // Handle delete 
    console.log('Delete button clicked');
   
    e.target.closest('.content_item_1').remove();
  }else if(e.target.classList.contains('edit')){
     console.log('edit')
    const target = e.target.closest('.content_item_1')
    console.log(target.children[0])
    const currentText = target.children[0].textContent;
    const html=`<span class="content_inputData">
    <span class="input"><input type="text" placeholder="${currentText}" name="text" id="text_2"></span>
    <span class="btnEdit_1">Submit</span>
   </span>`
    
    console.log(currentText)
    target.children[0].innerHTML = '';
    target.children[0].insertAdjacentHTML('beforeEnd',html);
 
  const editGeneratedBtn = target.querySelector('.btnEdit_1');
  const editGeneratedText = target.querySelector('#text_2');

  // editGeneratedFunction 
  const editGeneratedFunction=function(){
    console.log(editGeneratedText.value)
    // const target = e.target.closest('.content_item_1')
    target.children[0].innerHTML=''
    const html=`${editGeneratedText.value}`
    target.children[0].insertAdjacentHTML('beforeEnd',html);
 }
  editGeneratedBtn.addEventListener('click', editGeneratedFunction);   
  }

 

});

// clear btn 
clearBtn.addEventListener('click',function(){
  console.log('usama')
  sectionGrocery.innerHTML=''

})
console.log(data)
displayData()











