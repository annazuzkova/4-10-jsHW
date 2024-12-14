const hourTimer = document.querySelector("#hour-timer");
const hourButton = document.querySelector("#hour-timer-button");
let miliseconds = 3600000;
let time;
const timerHourHandler = () => {
  time = setInterval(updateTime, 10);
};
const updateTime = () => {
  miliseconds = miliseconds - 10;
  if (miliseconds === 1800000) {
    alert("залишилось менше половини часу");
  }
  if (miliseconds === 0) {
    clearInterval(time);
  }
  hourTimer.textContent = formatTime(miliseconds);
};
const formatTime = (miliseconds) => {
  const totalSeconds = Math.floor(miliseconds / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

hourButton.addEventListener("click", timerHourHandler);
