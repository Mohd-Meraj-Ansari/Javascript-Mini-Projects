const questions = [
  {
    question: 'In avaition, what does "V1" refer to?',
    answers: [
      { text: "Maximum Landing Speed", correct: false },
      { text: "Takeoff Decision Speed", correct: true },
      { text: "Speed with Afterburners", correct: false },
      { text: "Stall Speed", correct: false },
    ],
  },
  {
    question: 'what does "ICAO" stands for?',
    answers: [
      { text: "International Civil Aviation Organization", correct: true },
      { text: "INTERNATIONAL Cargo Aviation Oganization", correct: false },
      { text: "International Civil Aviation Office", correct: false },
      { text: "International Commercial Air Operations", correct: false },
    ],
  },
  {
      question : "Which is the world's 1st 5th generation aircraft?",
      answers: [
        { text: "F-117", correct: false },
        { text: "F-35", correct: false },
        { text: "F-22", correct: true },
        { text: "SU-57", correct: false },
      ],
  },
  {
    question : "Which aircraft manufacturer is absed in Toulouse, France?",
    answers: [
      { text: "Airbus", correct: true },
      { text: "Boeing", correct: false },
      { text: "Embraer", correct: false },
      { text: "Ilyushin", correct: false },
    ],
},
];

const questionId = document.querySelector("#question");
const answerId = document.querySelector("#answers");
const nextButton = document.querySelector("#next-btn");

let currentQueIndex = 0;
let score = 0;

function startQuiz() {
  currentQueIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestions();
}

function showQuestions() {
  resetQuestions();
 
  let currentQuestion = questions[currentQueIndex];
  let questionNo = currentQueIndex + 1;
  questionId.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerId.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectedAnswer);
  });
}

function resetQuestions() {
  nextButton.style.display = "none";
  while (answerId.firstChild) {
    answerId.removeChild(answerId.firstChild);
  }
}

function selectedAnswer(event) {
  const selectedBtn = event.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("inCorrect");
  }

  Array.from(answerId.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetQuestions();
  questionId.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function nextButtonHandle() {
  currentQueIndex++;
  if (currentQueIndex < questions.length) {
    showQuestions();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQueIndex < questions.length) {
    nextButtonHandle();
  } else {
    startQuiz();
  }
});

startQuiz();
