let hours = document.getElementById('hours');
let minutes = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

function displayTime(){
    let date = new Date();

    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    let hrsRotation = 30*hrs + mins/2;
    let minRotation = 6*mins;
    let secRotation = 6*secs;


    hours.style.transform = `rotate(${hrsRotation}deg)`;
    minutes.style.transform = `rotate(${minRotation}deg)`;
    seconds.style.transform = `rotate(${secRotation}deg)`;
}

setInterval(displayTime, 1000)