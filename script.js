const dayss=document.getElementById("days");
const hourss=document.getElementById("hours");
const minss=document.getElementById("mins");
const secondss=document.getElementById("seconds");



const definedDate= "1 jan 2021";


function countdown() {
  const newYearDate= new Date(definedDate)
  const presentDate=new Date();
  const timeRemainig=(newYearDate-presentDate)/1000;

  const days=Math.floor(timeRemainig/60/60/24);
  const hours=Math.floor((timeRemainig/60/60)%24);
  const minutes=Math.floor((timeRemainig/60)%60);
  const seconds=Math.floor(timeRemainig%60);


  dayss.innerHTML=formatTime(days);
  hourss.innerHTML=formatTime(hours);
  minss.innerHTML=formatTime(minutes);
  secondss.innerHTML=formatTime(seconds);

}
function formatTime(time) {
  return time<10 ? `0${time}`: time;
}

countdown();
setInterval(countdown,1000);