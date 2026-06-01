let display = document.getElementById("display");
let laps = document.getElementById("laps");

let timer = null;

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

document.querySelector(".start").addEventListener("click", startTimer);
document.querySelector(".pause").addEventListener("click", pauseTimer);
document.querySelector(".reset").addEventListener("click", resetTimer);
document.querySelector(".lap").addEventListener("click", addLap);

function startTimer() {

    if (timer !== null) return;

    timer = setInterval(() => {

        milliseconds++;

        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
        }

        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }

        if (minutes === 60) {
            minutes = 0;
            hours++;
        }

        updateDisplay();

    }, 10);
}

function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {

    clearInterval(timer);
    timer = null;

    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    laps.innerHTML = "";
}

function addLap() {

    if (
        hours === 0 &&
        minutes === 0 &&
        seconds === 0 &&
        milliseconds === 0
    ) {
        return;
    }

    const lapItem = document.createElement("li");

    lapItem.textContent =
        `Lap ${laps.children.length + 1} : ${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;

    laps.prepend(lapItem);
}

function updateDisplay() {

    display.textContent =
        `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}