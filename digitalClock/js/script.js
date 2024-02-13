const hour =document.querySelector('.hours')
const minute =document.querySelector('.min')
const second =document.querySelector('.sec')

const clock=function(){
    const date= new Date()
    // console.log(date)
    // return date;
    const hours=date.getHours()
    const minutes=date.getMinutes()
    const seconds=date.getSeconds()
    // console.log(hours,minutes,seconds)
    hour.innerHTML=hours
    minute.innerHTML=minutes
    second.innerHTML=seconds
}
setInterval(clock,1000)
clock()