const questions = [
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: [
      { text: "parse()", correct: false },
      { text: "stringify()", correct: true },
      { text: "convert()", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which object in Javascript doesn’t have a prototype?",
    answers: [
      { text: "Base Object", correct: true },
      { text: "All objects have a prototype", correct: false },
      { text: "None of the objects have a prototype ", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which of the following are closures in Javascript",
    answers: [
      { text: "Variables", correct: false },
      { text: "Functions", correct: false },
      { text: "Objects", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following are not server-side Javascript objects?",
    answers: [
      { text: "Date", correct: false },
      { text: "FileUpload", correct: false },
      { text: "Function", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question: "Which of the following is not a Javascript framework?",
    answers: [
      { text: "Node", correct: false },
      { text: "Vue", correct: false },
      { text: "React", correct: false },
      { text: "Cassandra", correct: true },
    ],
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "Both", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
      { text: "document.write()", correct: false },
      { text: "console.log()", correct: false },
      { text: "window.alert()", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementbyId()", correct: false },
      { text: "getElementByClassName()", correct: false },
      { text: "Both", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How to stop an interval timer in Javascript?",
    answers: [
      { text: "clearInterval", correct: true },
      { text: "clearTimer", correct: false },
      { text: "intervalOver", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "How can a datatype be declared to be a constant type?",
    answers: [
      { text: "const", correct: true },
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "constant", correct: false },
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
