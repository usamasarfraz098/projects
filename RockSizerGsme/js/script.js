const btn=document.querySelectorAll('.img')
const userScore=document.querySelector('.user_score')
const compScore=document.querySelector('.comp_score')
const displayScore=document.querySelector('.content_text')
let i=0
let j=0;
let score=[i,j];
let test=['rock','paper','sizer']

const getRandomComp=function(){
   const randomNumber=Math.floor(Math.random()*test.length)
    return test[randomNumber]
}
// getRandomNumber()
btn.forEach(btn=>btn.addEventListener('click',function(e){
  const compValue=getRandomComp()
  console.log(compValue)
  // console.log(e.target)
  const target=e.target;
  if(target.id==='rock'){
    
    // conditions for rock
    if(compValue==='rock'){
      // console.log(`Rock Beat Scissor. You win`)
      displayScore.innerHTML='DRAW'

    }else if(compValue==='paper'){
      // console.log('lose')
      displayScore.innerHTML='LOSE'
      j=j+1;
      compScore.innerHTML=j;
    }else{
      // console.log('win')
      displayScore.innerHTML=`Rock Beat ${compValue}. You win`
      i=i+1;
      userScore.innerHTML=i;
    }
  }else if(target.id==='paper'){
   
    // conditions for paper
    if(compValue==='rock'){
      // console.log('win')
      displayScore.innerHTML=`Paper Beat ${compValue}. You win`
      i=i+1;
      userScore.innerHTML=i;
    }else if(compValue==='paper'){
      // console.log('draw')
      displayScore.innerHTML='DRAW'

    }else{
      // console.log('lose')
      displayScore.innerHTML='LOSE'
      j=j+1
      compScore.innerHTML=j;
    }
  } else if(target.id==='sizer'){
    
    // conditions for sizer 
    if(compValue==='rock'){
      // console.log('lose')
      displayScore.innerHTML='LOSE'
      j=j+1;
      compScore.innerHTML=j;
    }else if(compValue==='paper'){
      // console.log('win')
      displayScore.innerHTML=`Sizer Beat ${compValue}. You win`
      i=i+1;
      userScore.innerHTML=i
    }else{
      // console.log('draw')
      displayScore.innerHTML='DRAW'
    }
  }
}))
