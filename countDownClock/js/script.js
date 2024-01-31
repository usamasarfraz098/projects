const day=document.querySelector('.days')
const hour=document.querySelector('.hours')
const minute=document.querySelector('.minutes')
const second=document.querySelector('.second')


const giveAwayTime={
  day:12,
  month:2,
  hour:12,
  minute:30,
  second:40
}
console.log(giveAwayTime)

const setTimer=function(){

  const date=new Date()
  // const days=date.getDay()
  // const hours=date.getHours()
  // const minutes=date.getMinutes()
  // const seconds=date.getSeconds()
  // console.log(hours,days,minutes,seconds)
  const remainingTime = new Date(
    giveAwayTime.month + "/" + giveAwayTime.day + "/" +  date.getFullYear() +
    " " +  giveAwayTime.hour+ ":" + giveAwayTime.minute + ":" + giveAwayTime.second
  ) - date;

  console.log(date,remainingTime)

  if (remainingTime > 0) {
    const remainingDays = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const remainingHours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const remainingMinutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const remainingSeconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    day.innerHTML = remainingDays;
    hour.innerHTML = remainingHours;
    minute.innerHTML = remainingMinutes;
    second.innerHTML = remainingSeconds;
  } else {
    // Giveaway time has passed
    day.innerHTML = 0;
    hour.innerHTML = 0;
    minute.innerHTML = 0;
    second.innerHTML = 0;
  }
  
  // const getDay=giveAwayTME.day-days
  // day.innerHTML=getDay
  // const getHour=giveAwayTME.hour-hours;
  // hour.innerHTML=getHour;
  // const getMinutes=minutes-giveAwayTME.minute;
  // minute.innerHTML=getMinutes;
  // const getSeconds=giveAwayTME.second-seconds;
  // second.innerHTML=getSeconds;



}
setInterval(setTimer,1000);
setTimer()