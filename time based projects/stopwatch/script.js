const timeDisplay = document.querySelector("#timeDisplay");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resetBtn = document.querySelector("#resetBtn");

let startTIme = 0;
let elapsedTime = 0;
let currentTime = 0;
let paused = true;
let intervalId;
let hours = 0;
let minutes = 0;
let seconds = 0;

startBtn.addEventListener("click", () => {
  if (paused) {
    paused = false;
    startTIme = Date.now() - elapsedTime;
    intervalId = setInterval(updateTime, 75);
  }
});
pauseBtn.addEventListener("click", () => {
  if (!paused) {
  }
});
resetBtn.addEventListener("click", () => {});

function updateTime() {
  elapsedTime = Date.now() - startTIme;

  seconds = Math.floor((elapsedTime / 1000) % 60);
  minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);

  seconds = pad(seconds);
  minutes = pad(minutes);
  hours = pad(hours);

  timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;

  function pad(unit) {
    return ("0" + unit).length > 2 ? unit : "0" + unit;
  }
}

let array = [1, 2, 3];
array[6] = 9;
console.log(array[5]);
