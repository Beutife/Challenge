const seconHand = document.querySelector('.sec-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){

    const now = new Date();

    const seconds = now.getSeconds();
    const secondDegree = ((seconds/ 60) * 360) + 90;
    seconHand.style.transform = `rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute / 60) * 360) + ((seconds/60)*6)+90;
    minsHand.style.transform = `rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

 setInterval(setDate, 1000);

 setDate();