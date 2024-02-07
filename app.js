const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    secondHand.style.height ='4px';


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform =`rotate(${hoursDegrees}deg)`;
    hourHand.style.height ='12px';
    hourHand.style.width ='50%';

}
setInterval(setDate, 1000)

setInterval(() => {
    let hour = document.getElementById("hour");
    let min = document.getElementById("minute");
    let sec = document.getElementById("second");
    
    let currentTime = new Date();
    hour.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)

