let screen = document.getElementsByClassName("stopwatchContainer")[0];
screen.innerHTML = "00:00"

let startButton = document.getElementById("startButton");
let stopButton = document.getElementById("stopButton");
let resetButton = document.getElementById("resetButton");

let seconds = 0;
let interval = 0;

startButton.addEventListener("click", startStopwatch);

stopButton.addEventListener("click", stopStopwatch);

resetButton.addEventListener("click", resetStopwatch);

function startStopwatch () {
    startButton.style.display = "none";
    stopButton.style.display = "inline-block";
    interval = setInterval(() => {
        seconds++;
        if (seconds > 36000 && ((seconds % 60) > 9) && (((seconds / 60) % 60) >= 10)) {
            screen.innerHTML = `${Math.floor((seconds / 60) / 60)}:${Math.floor((seconds / 60) % 60)}:${seconds % 60}`;
        } else if (seconds > 36000 && ((seconds % 60) < 10) && (((seconds / 60) % 60) >= 10)) {
            screen.innerHTML = `${Math.floor((seconds / 60) / 60)}:${Math.floor((seconds / 60) % 60)}:0${seconds % 60}`;
        } else if (seconds > 36000 && ((seconds % 60) > 9) && (((seconds / 60) % 60) < 10)) {
            screen.innerHTML = `${Math.floor((seconds / 60) / 60)}:0${Math.floor((seconds / 60) % 60)}:${seconds % 60}`;
        } else if (seconds >= 36000 && ((seconds % 60) < 10) && (((seconds / 60) % 60) < 10)) {
            screen.innerHTML = `${Math.floor((seconds / 60) / 60)}:0${Math.floor((seconds / 60) % 60)}:0${seconds % 60}`;
        } else if (seconds > 3600 && ((seconds % 60) > 9) && (((seconds / 60) % 60) >= 10)) {
            screen.innerHTML = `0${Math.floor((seconds / 60) / 60)}:${Math.floor((seconds / 60) % 60)}:${seconds % 60}`;
        } else if (seconds > 3600 && ((seconds % 60) < 10) && (((seconds / 60) % 60) >= 10)) {
            screen.innerHTML = `0${Math.floor((seconds / 60) / 60)}:${Math.floor((seconds / 60) % 60)}:0${seconds % 60}`;
        } else if (seconds > 3600 && ((seconds % 60) > 9) && (((seconds / 60) % 60) < 10)) {
            screen.innerHTML = `0${Math.floor((seconds / 60) / 60)}:0${Math.floor((seconds / 60) % 60)}:${seconds % 60}`;
        } else if (seconds >= 3600 && ((seconds % 60) < 10) && (((seconds / 60) % 60) < 10)) {
            screen.innerHTML = `0${Math.floor((seconds / 60) / 60)}:0${Math.floor((seconds / 60) % 60)}:0${seconds % 60}`;
        } else if ((seconds > 600 && seconds < 3600) && (seconds % 60) > 9) {
            screen.innerHTML = `${Math.floor(seconds / 60)}:${seconds % 60}`;
        } else if ((seconds >= 600 && seconds < 3600) && (seconds % 60) < 10) {
            screen.innerHTML = `${Math.floor(seconds / 60)}:0${seconds % 60}`;
        } else if (seconds % 60 > 9) {
            screen.innerHTML = `0${Math.floor(seconds / 60)}:${seconds % 60}`;
        } else if (seconds >= 60 && (seconds % 60) < 10) {
            screen.innerHTML = `0${Math.floor(seconds / 60)}:0${seconds % 60}`;
        } else if (seconds > 10) {
            screen.innerHTML = `00:${seconds}`;
        } else {
            screen.innerHTML = `00:0${seconds}`;
        }
    }, 1000);
}

function stopStopwatch () {
    startButton.style.display = "inline-block";
    stopButton.style.display = "none";
    clearInterval(interval);
}

function resetStopwatch () {
    screen.innerHTML = "00:00";
    seconds = 0;
    clearInterval(interval);
    stopButton.style.display = "none";
    startButton.style.display = "inline-block";
}




