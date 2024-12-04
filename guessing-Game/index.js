let userInput = document.querySelector("#guessField");
let submitButton = document.querySelector("#subt");
let previousGuesses = document.querySelector(".guesses");
let remainingGuesses = document.querySelector(".remaining");
let gap = document.querySelector(".difference");
let resultPara = document.querySelector(".result");

let randomNumber = parseInt(Math.random() * 100 + 1);
const newPara = document.createElement("p");

let prevGuess = [];
let numOfGuess = 1;

let playGame = true;

if (playGame) {
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    let number = parseInt(userInput.value);

    validateGuess(number);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Enter a valid number");
  } else if (guess < 1) {
    alert("Enter number greater than 0");
  } else if (guess > 100) {
    alert("Enter number smaller than 101");
  } else {
    prevGuess.push(guess);
    if (numOfGuess > 10) {
      //displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg("You guessed the right number...");
    endGame();
  } else if (guess < randomNumber) {
    displayMsg("number is small");
  } else if (guess > randomNumber) {
    displayMsg("number is large");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  previousGuesses.innerHTML += `${guess} `;
  numOfGuess++;
  remainingGuesses.innerHTML = `${11 - numOfGuess}`;
}

function displayMsg(message) {
  gap.innerHTML = `<h2>${message}</h2>`;
}

function newGame() {
  const newButton = document.querySelector("#newGame");
  newButton.addEventListener("click", function (event) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numOfGuess = 1;
    previousGuesses.innerHTML = "";
    remainingGuesses.innerHTML = 10;
    userInput.removeAttribute("disabled");
    resultPara.removeChild(newPara);
    gap.innerHTML = ``;
    playGame = true;
  });
}

function endGame() {
  playGame = false;
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  newPara.classList.add("button");
  newPara.innerHTML = `<button id='newGame'> Start New Game</button>`;
  resultPara.appendChild(newPara);

  newGame();
}
