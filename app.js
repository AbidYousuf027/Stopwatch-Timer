let fixedMinute = 5;
let second = 0;
let intervalId;

let timer = document.querySelector(".timerDisplay");
let timerBtn = document.getElementById("timerBtn");
let zoomIcon = document.querySelector(".timerZoom");
let soundIcon = document.querySelector(".timerSpk");
let bottomLine = document.getElementById("underLineDiv");

let btn_30Sec = document.getElementById("plus30Sec");
let btn_1mint = document.getElementById("plus1Min");
let btn_5mint = document.getElementById("plus5Mins");

let playBtn = document.getElementById("playTimer");
let stopBtn = document.getElementById("stopTimer");
let resetBtn = document.getElementById("resetTimer");
let btnCont = document.getElementById("btnCont");
let newPlayBtn = document.getElementById("newPlayTimer");
let timerCont = document.getElementById("timerCont");

btn_30Sec.innerHTML = "+0:30";
btn_1mint.innerHTML = "+1:00";
btn_5mint.innerHTML = "+5:00";

btn_30Sec.addEventListener("click", () => {
  second += 30;
  if (second >= 60) {
    fixedMinute += 1;
    second -= 60;
  }
  displayTimer();
});

btn_1mint.addEventListener("click", () => {
  fixedMinute += 1;
  displayTimer();
});
btn_5mint.addEventListener("click", () => {
  fixedMinute += 5;
  displayTimer();
});

timerBtn.addEventListener("click", () => {
  console.log("timer was clicked");
  if (timerCont) {
    timerCont.style.display = "none";
    stpwchContDiv.style.display = "flex";
  }
});

function displayTimer() {
  let seconds = second < 10 ? "0" + second : second;
  timer.innerHTML = `${fixedMinute}:${seconds}`;
  newPlayBtn.style.display = "none";
}

displayTimer();

function startTimer() {
  clearInterval(intervalId);

  intervalId = setInterval(() => {
    if (second === 0 && fixedMinute === 0) {
      clearInterval(intervalId);
      audioElement.muted = false;
      audioElement.play();
    } else {
      if (second === 0) {
        fixedMinute -= 1;
        second = 59;
      } else {
        second -= 1;
      }
      displayTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

playBtn.addEventListener("click", () => {
  startTimer();
  playBtn.style.display = "none";
  btnCont.style.visibility = "hidden";
  stopBtn.style.display = "flex";
  resetBtn.style.display = "flex";
});

stopBtn.addEventListener("click", () => {
  stopBtn.style.display = "none";
  newPlayBtn.style.display = "flex";
  btnCont.style.visibility = "visible";
  btn_5mint.style.display = "none";
  changeModeClass();
  stopTimer();
});

newPlayBtn.addEventListener("click", () => {
  stopBtn.style.display = "flex";
  newPlayBtn.style.display = "none";
  btnCont.style.visibility = "hidden";
  changeModeClass();
  startTimer();
});

resetBtn.addEventListener("click", () => {
  stopBtn.style.display = "flex";
  newPlayBtn.style.display = "none";
  btnCont.style.visibility = "visible";
  btn_5mint.style.display = "block";
  newPlayBtn.style.display = "none";
  playBtn.style.display = "flex";
  stopBtn.style.display = "none";
  resetBtn.style.display = "none";
  resetTimer();
  resetToOriginalMode();
});

function resetTimer() {
  clearInterval(intervalId);
  fixedMinute = 5;
  second = 0;
  displayTimer();
}
function resetToOriginalMode() {
  newPlayBtn.classList.add("startTimer");
  newPlayBtn.classList.remove("newStartTimer");

  timerCont.classList.add("timerContClass");
  timerCont.classList.remove("newTimerContClass");

  timerBtn.classList.add("timerbtn");
  timerBtn.classList.remove("newTimerBtnClass");

  zoomIcon.classList.add("timerZoom");
  zoomIcon.classList.remove("newSpkZoomClass");

  soundIcon.classList.add("timerZoom");
  soundIcon.classList.remove("newSpkZoomClass");

  timer.classList.add("timerDisplay");
  timer.classList.remove("newClassTimerDisplay");

  bottomLine.classList.add("underLine");
  bottomLine.classList.remove("newUnderLineClass");

  btn_30Sec.classList.add("plus30Sec");
  btn_30Sec.classList.remove("newClassPlusbtns");

  btn_1mint.classList.add("plus1Min");
  btn_1mint.classList.remove("newClassPlusbtns");

  btn_5mint.classList.add("plus5Mins");
  btn_5mint.classList.remove("newClassPlusbtns");

  resetBtn.classList.add("resetTimer");
  resetBtn.classList.remove("newClassResetTimer");
}
function changeModeClass() {
  newPlayBtn.classList.toggle("startTimer");
  newPlayBtn.classList.toggle("newStartTimer");

  timerCont.classList.toggle("timerContClass");
  timerCont.classList.toggle("newTimerContClass");

  timerBtn.classList.toggle("timerbtn");
  timerBtn.classList.toggle("newTimerBtnClass");

  zoomIcon.classList.toggle("timerZoom");
  zoomIcon.classList.toggle("newSpkZoomClass");
  soundIcon.classList.toggle("timerZoom");
  soundIcon.classList.toggle("newSpkZoomClass");

  timer.classList.toggle("timerDisplay");
  timer.classList.toggle("newClassTimerDisplay");

  bottomLine.classList.toggle("underLine");
  bottomLine.classList.toggle("newUnderLineClass");

  btn_30Sec.classList.toggle("plus30Sec");
  btn_30Sec.classList.toggle("newClassPlusbtns");

  btn_1mint.classList.toggle("plus1Min");
  btn_1mint.classList.toggle("newClassPlusbtns");

  btn_5mint.classList.toggle("plus5Mins");
  btn_5mint.classList.toggle("newClassPlusbtns");

  resetBtn.classList.toggle("resetTimer");
  resetBtn.classList.toggle("newClassResetTimer");
}

zoomIcon.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    timerCont.classList.add("fullscreen-timer");
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      timerCont.classList.remove("fullscreen-timer");
    }
  }
});

let isMuted = false;
let audioElement = document.getElementById("timerSound");
soundIcon.addEventListener("click", function () {
  isMuted = !isMuted;

  if (isMuted) {
    soundIcon.classList.replace("fa-volume-high", "fa-volume-mute");
    audioElement.muted = true;
    console.log("Sound is muted");
  } else {
    soundIcon.classList.replace("fa-volume-mute", "fa-volume-high");
    audioElement.muted = false;
    audioElement.play();
    console.log("Sound is unmuted");
  }
});





// Stopwatch Function.....

let milsec = 0;
let sec = 0;
let mints = 0;
let hours = 0;
let interval;



let stopWatchDiv = document.getElementById("stopwchDisplay");
let stpwchContDiv = document.getElementById("stopwchContDiv");
let stopWchBtn = document.getElementById("stopwchBtn");
let stpZoom = document.querySelector(".stopwchZoom");
let stpSpk = document.querySelector(".stopwchSpk");

let playBtnStopwatch = document.getElementById("playBtnStopwch");
let newPlayBtnStopwatch = document.getElementById("newPlayBtnStopwch");
let stopBtnStopwatch = document.getElementById("stopBtnStopwch");
let resetBtnStopwatch = document.getElementById("resetBtnStopwch");

stopWchBtn.addEventListener("click", () => {
  console.log("stopwatch was click");
  if (stpwchContDiv) {
    timerCont.style.display = "flex";
    stpwchContDiv.style.display = "none";
  }
});

function displayStopwatch() {
  // let displayText = "";
  newPlayBtnStopwatch.style.display = "none";
  let formattedMilsec = milsec < 10 ? "0" + milsec : milsec;
  let formattedSec = sec < 10 ? "0" + sec : sec;

  if (mints > 0) {
    let formattedMints = mints < 10 ? "0" + mints : mints;
    displayText = `${formattedMints}:${formattedSec}.${formattedMilsec}`;
  } else {
    displayText = `${formattedSec}.${formattedMilsec}`;
  }

  if (hours > 0) {
    let formattedHours = hours < 10 ? "0" + hours : hours;
    displayText = `${formattedHours}:${displayText}`;
  }

  stopWatchDiv.innerHTML = displayText;
}

function startStopwatch() {
  interval = setInterval(() => {
    milsec += 1;
    if (milsec === 100) {
      milsec = 0;
      sec += 1;
    }
    if (sec === 60) {
      sec = 0;
      mints += 1;
    }
    if (mints === 60) {
      mints = 0;
      hours += 1;
    }

    displayStopwatch();
  }, 10);
}

function stopStopwatch() {
  clearInterval(interval);
}

function resetStopwatch() {
  clearInterval(interval);
  milsec = 0;
  sec = 0;
  mints = 0;
  hours = 0;
  displayStopwatch();
}

displayStopwatch(); 

playBtnStopwatch.addEventListener("click", () => {
  startStopwatch();
  playBtnStopwatch.style.display = "none";
  stopBtnStopwatch.style.display = "flex";
  resetBtnStopwatch.style.display = "flex";
});

stopBtnStopwatch.addEventListener("click", () => {
  stopStopwatch();
  newPlayBtnStopwatch.style.display = "flex";
  stopBtnStopwatch.style.display = "none";
  changeMode();
});

newPlayBtnStopwatch.addEventListener("click", () => {
  startStopwatch();

  stopBtnStopwatch.style.display = "flex";
  newPlayBtnStopwatch.style.display = "none";

  changeMode();
});

resetBtnStopwatch.addEventListener("click", () => {
  resetStopwatch();

  stpwchContDiv.classList.add("stopwchCont");
  stpwchContDiv.classList.remove("newClassStopwchCont");

  stopWchBtn.classList.add("stopwchBtn");
  stopWchBtn.classList.remove("newClassStopwchBtn");

  resetBtnStopwatch.classList.add("resetStopwch");
  resetBtnStopwatch.classList.remove("newClassResetStopwch");

  stpSpk.classList.add("stopwchSpk");
  stpSpk.classList.remove("newStopwchSpk");
  stpZoom.classList.add("stopwchSpk");
  stpZoom.classList.remove("newStopwchSpk");

  newPlayBtnStopwatch.classList.add("startStopwch");
  newPlayBtnStopwatch.classList.remove("newClassPlayBtnStopwch");

  playBtnStopwatch.style.display = "flex";
  newPlayBtnStopwatch.style.display = "none";
  stopBtnStopwatch.style.display = "none";
  resetBtnStopwatch.style.display = "none";
});

function changeMode() {
  newPlayBtnStopwatch.classList.toggle("newClassPlayBtnStopwch");
  newPlayBtnStopwatch.classList.toggle("startStopwch");

  stpwchContDiv.classList.toggle("newClassStopwchCont");
  stpwchContDiv.classList.toggle("stopwchCont");

  stopWchBtn.classList.toggle("newClassStopwchBtn");
  stopWchBtn.classList.toggle("stopwchBtn");

  resetBtnStopwatch.classList.toggle("newClassResetStopwch");
  resetBtnStopwatch.classList.toggle("resetStopwch");

  stpSpk.classList.toggle("newStopwchSpk");
  stpSpk.classList.toggle("stopwchSpk");
  stpZoom.classList.toggle("newStopwchSpk");
  stpZoom.classList.toggle("stopwchSpk");
}


stpZoom.addEventListener("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    stpwchContDiv.classList.add("fullscreen-stopwatch")
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      stpwchContDiv.classList.remove("fullscreen-stopwatch")
    }
  }
});

let isinMuted = false;
stpSpk.addEventListener("click", function () {
  isinMuted = !isinMuted;

  if (isinMuted) {
    stpSpk.classList.replace("fa-volume-high", "fa-volume-mute");
    console.log("Sound is muted");
  } else {
    stpSpk.classList.replace("fa-volume-mute", "fa-volume-high");
    console.log("Sound is unmuted");
  }
});
