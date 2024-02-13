const hour=document.querySelector('.hours')
const minute=document.querySelector('.min')
const second=document.querySelector('.sec')

const clock=function(){
    const date=new Date()
    console.log(date)
    const hours=date.getHours()
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()
    console.log(hours,minutes,seconds)
    hour.style.transform = `translate(-50%, -100%) rotate(${hours * 30}deg)`;
    minute.style.transform = `translate(-50%, -100%) rotate(${minutes * 6}deg)`;
    second.style.transform = `translate(-50%, -100%) rotate(${seconds * 6}deg)`;

}
setInterval(clock,1000)
clock()