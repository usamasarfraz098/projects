const btn=document.querySelector('.btn');
const input=document.querySelector('#number');
const paragraphSection=document.querySelector('.content_paragraph')



// random data array 
const randomData=['usama','ali','has','number','generate','copy','file']

// random number 






// on click btn 
btn.addEventListener('click',function(){
  const inputValue=input.value;
  console.log(inputValue)
  if(inputValue<=0)alert('invalid number')
  for( let i=0;i<inputValue;i++){
  const generateParagraph=function(){
    let randomnumber=Math.floor(Math.random()*randomData.length)
    console.log(randomnumber)
      const html=`${randomData[randomnumber]} `
    paragraphSection.insertAdjacentHTML('beforeend',html)
  }
  generateParagraph()
  }
 
  
})
