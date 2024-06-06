let millisecondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");

function padStart(value){
    return String(value).padStart(2, "0");
}

function setTime(){
    const minutes = Math.floor(millisecondsElapsed / 60000);
    const seconds = Math.floor((millisecondsElapsed % 60000)/1000);
    const milliseconds = Math.floor((millisecondsElapsed % 1000)/10);
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}:${padStart(milliseconds)}`;
}

function timer(){
    millisecondsElapsed +=10;
    setTime();
}

function startClock(){
    if(!interval){ // Only start if there's no existing interval
        interval = setInterval(timer, 10);
    }
}

function stopClock(){
    clearInterval(interval);
    interval = null; 
}

function resetClock(){
    stopClock();
    millisecondsElapsed = 0;
    setTime();
}