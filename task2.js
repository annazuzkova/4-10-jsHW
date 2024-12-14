const secondTimer = document.querySelector("#second-timer");
const secondButton = document.querySelector("#second-timer-button");
let seconds;
let miliseconds = 30000;
let time;
const timerSecondHandler = () => {
  time = setInterval(updateTime, 10);
};
const updateTime = () => {
  miliseconds = miliseconds - 10;
  if (miliseconds === 10000) {
    document.body.style.backgroundColor = "red";
  }
  if (miliseconds === 0) {
    clearInterval(time);
    document.body.style.backgroundColor = "black";
  }
  secondTimer.textContent = formatTime(miliseconds);
};
const formatTime = (miliseconds) => {
  const totalSeconds = Math.floor(miliseconds / 1000);
  const seconds = totalSeconds % 60;
  return `${seconds.toString().padStart(2, "0")}`;
};
secondButton.addEventListener("click", timerSecondHandler);
