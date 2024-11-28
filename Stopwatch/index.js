const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const second = document.getElementsByClassName("sec")[0];
const miliSecond = document.getElementsByClassName("msec")[0];
const minute = document.getElementsByClassName("minute")[0];
const laps = document.getElementsByClassName("laps")[0];
const clearLaps = document.getElementsByClassName("lap-clear")[0];


let isPlay = false;
let isReset = false;
let secId;
let secCounter = 0;
let miliSecId;
let msecCounter = 0;
let minId;
let minCounter = 0;
let lapCounter = 0;

const toggleButton = () => {
  lapButton.classList.remove("hidden");
  resetButton.classList.remove("hidden");
};

const play = () => {
  if (!isPlay && !isReset) {
    playButton.innerHTML = "Pause";
    
    minId = setInterval(() => {
      minute.innerHTML = `${++minCounter} :&nbsp;`;
    }, 1000*60);
    
    secId = setInterval(() => {
      if(secCounter === 60){
        secCounter = 0;
      }
      second.innerHTML = `&nbsp;${++secCounter} :&nbsp;`;
    }, 1000);

    miliSecId = setInterval(() => {
      if (msecCounter === 100) {
        msecCounter = 0;
      }
      miliSecond.innerHTML = `${++msecCounter}`;
    }, 10);
    isPlay = true;
    isReset =true;
  } else {
    clearInterval(secId);
    clearInterval(miliSecId);
    clearInterval(minId);
    playButton.innerHTML = "Play";
    isPlay = false;
    isReset = false;
  }
  toggleButton();
};

const reset = () => {
  isReset = true;
  play();
  lapButton.classList.add("hidden");
  resetButton.classList.add("hidden");
  minute.innerHTML = "00 :";
  second.innerHTML = "&nbsp;00 :";
  miliSecond.innerHTML = "&nbsp;00";
  clear();
};

const lap = () =>{
  const li = document.createElement('li');
  const number = document.createElement('span');
  const timeStamp = document.createElement('span');

  li.setAttribute('class', 'lap-items');
  number.setAttribute('class','lap-number');
  timeStamp.setAttribute('class', 'lap-time');

  number.innerHTML = `Lap ${++lapCounter}`;
  timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${msecCounter}`;

  li.append(number, timeStamp);
  laps.append(li);

  clearLaps.classList.remove("hidden");

}

const clearAllLaps = () =>{
  clear();
}

function clear(){
  lapCounter = 0;
  laps.innerHTML = '';
  laps.append(clearLaps);
  clearLaps.classList.add("hidden");
}

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener('click', lap);
clearLaps.addEventListener('click', clearAllLaps);
