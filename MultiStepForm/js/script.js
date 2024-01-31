const btn=document.querySelectorAll('.btn')
const firstNameInput=document.querySelector('#firstName')
const lastNameInput=document.querySelector('#lastName')
const passwordInput=document.querySelector('#password')
const emailInput=document.querySelector('#email')
const phoneInput=document.querySelector('#phone')
const firstPage=document.querySelector('.container_content_1')
const secondPage=document.querySelector('.container_content_3')
const displaySection=document.querySelector('.container_content')

let email;
let password;

btn.forEach(btn=>btn.addEventListener('click',function(e){
  const target=e.target;
  if(target.id=='next'){
    firstPage.classList.add('translateX')
    secondPage.classList.remove('translateX_plus')
    secondPage.classList.remove('opacity')
    firstPage.classList.add('opacity')

    // console.log('next')
     email=emailInput.value;
     password=passwordInput.value;
    
  } else  if(target.id=='back'){
    // console.log('back')
    firstPage.classList.remove('translateX')
    secondPage.classList.add('translateX_plus')
    firstPage.classList.remove('opacity')
    secondPage.classList.add('opacity')

  } else  if(target.id=='submit'){
    let firstName=firstNameInput.value;
    let lastName=lastNameInput.value;
    let phone=phoneInput.value;
    const html=`  <div class="container_content_2">
    <div class="model">
        
            <div class="model_content">
                <div class="model_content_title">First Name : ${firstName}</div> 
                <div class="model_content_title">Last Name : ${lastName}</div> 
                <div class="model_content_title">Phone No : ${phone}</div> 
                <div class="model_content_title">Email : ${email}</div> 
                <div class="model_content_title">Password : ${password}</div>    
        </div> 
    </div>   
    </div>`
    secondPage.classList.add('translateX')
    secondPage.classList.add('opacity')

      displaySection.insertAdjacentHTML('beforeend',html)

    // console.log('submit')
  }
}))