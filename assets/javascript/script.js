var questions = [{
  problem: "Where can you make your webpage or app look aesthetically pleasing?",
  option: ["index.html", "script.js", "style.css", "all of the above"],
  correctAnswer: "all of the above"
},{
  problem: "What is || used for?",
  option: ["AND", "NOT", "OR", "none of the above"],
  correctAnswer: "OR"
}, {
  problem: "What does 'Hoisting' mean?",
  option: ["is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their method, before their execution", "is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution", "is the process where the interpreter moves the declaration of classes, functions, or variables to the bottom of their scope, before their execution", "is the process where the interpreter moves the declaration of only classes to the top of their scope, before their execution"],
  correctAnswer: "is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution",
}];

var questionIndex = 0;

var startScreen = document.querySelector('#homepage');

var startQuestionsEl = document.querySelector('#start-questions');
var optionsPageEl = document.querySelector('#options-page');
var endQuestionsEl = document.querySelector('#end-questions');
var startBtn = document.querySelector('#start-button');
var problemEl = document.querySelector('#problem');
var optionEl = document.querySelector('#options');
var timerEl = document.querySelector('#timer');
var timer;
var timerCount;
var quizScore = 0;

startQuestionsEl.setAttribute('class', 'hidden');
optionsPageEl.setAttribute('class', 'hidden');
endQuestionsEl.setAttribute('class', 'hidden');
timerEl.setAttribute('class', 'countdown');

function startQuiz() {
  timerCount = 30;
  startScreen.setAttribute('class', 'hidden');
  startQuestionsEl.setAttribute('class', 'visible');
  optionsPageEl.setAttribute('class', 'visible');
  generateQuiz();
  beginTimer();
};

function beginTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerEl.textContent = timerCount;
    if (timerCount <= 0) {
      clearInterval(timer);
      lostGame();
    }
  }, 1000);
};
function lostGame() {
  localStorage.setItem("recentScore", quizScore);
};

function generateQuiz() {
  
  var currentQuestion = questions[questionIndex];
  console.log(currentQuestion);
  var quizQuestions = currentQuestion.option;
  problemEl.textContent = currentQuestion.problem;
  optionsPageEl.innerHTML = "";

  for (let i = 0; i < quizQuestions.length; i++) {
    var tempBtn = document.createElement("button");
    tempBtn.textContent = quizQuestions[i];
    tempBtn.setAttribute('class', 'problem-box');
    tempBtn.setAttribute("id", currentQuestion.option[i]);

    tempBtn.onclick = validateAnswer
    optionsPageEl.appendChild(tempBtn)
  }


};

function validateAnswer() {
  if (this.id !== questions[questionIndex].correctAnswer) {
    alert("Incorrect...");
    subtractQuizTimer();
  } else {
    alert("Correct!");
    quizScore += 10;
    questionIndex++;

    if (questionIndex >= questions.length) {
      endQuiz();
    } else {
      generateQuiz();
    };
  }
};

function endQuiz() {
  startQuestionsEl.setAttribute('class', 'hidden');
  optionsPageEl.setAttribute('class', 'hidden');
  endQuestionsEl.setAttribute('class', 'visible');
  localStorage.setItem("recentScore", quizScore);
  clearInterval(timer);
};

function subtractQuizTimer() {
  timerCount -= 10;
};

var startButton = document.querySelector("#start-button");
var endButton = document.querySelector("quiz-end");
var userInitials = document.querySelector("#user-initials");
var enterButton = document.querySelector("#initials-button");
var score = document.querySelector("#score");
var userInput = JSON.parse(localStorage.getItem('scores')) || [];

enterButton.addEventListener('click', function () {
  var Player = {
    userInitials: userInitials.value,
    score: quizScore,
  };
  userInput.push(Player);
  localStorage.setItem("hiscores", JSON.stringify(userInput));
  console.log(userInput)
  for (let i = 0; i < userInput.length; i++) {
    var p = document.createElement('p')
    p.textContent = "User: " + userInput[i].userInitials + " Score: " + userInput[i].score;
    console.log(score);
    score.appendChild(p)
  };
}
);



startButton.addEventListener('click', startQuiz);