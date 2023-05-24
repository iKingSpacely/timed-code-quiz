var quiz = [{
    problem: "Where can you make your webpage or app look aesthetically pleasing?",
    option: ["index.html", "script.js", "style.css", "all of the above" ],
    correctAnswer: "all of the above"
  }, {
    problem: "What is CSS used for?",
    option: ["AND", "NOT", "OR", "none of the above"],
    correctAnswer: "OR"
  }, {
    problem: "What does 'Hoisting' mean?",
    option: ["is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their method, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the bottom of their scope, before their execution","is the process where the interpreter moves the declaration of only classes to the top of their scope, before their execution"],
    correctAnswer: "is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution",
  }];

let questionIndex = 0;

let quizStartEl = document.querySelector('#quiz-start');
let questionPageEl = document.querySelector('#question-page');
let quizEndEl = document.querySelector('#quiz-end');
let startBtn = document.querySelector('#start-button');
let problemEl = document.querySelector('#problem');
let optionEl = document.querySelector('#option');
let timerEl = document.querySelector('#timer');
let timer;
let timerCount;
let quizScore = 0;

    quizStartEl.setAttribute('class', 'visible');
    questionPageEl.setAttribute('class', 'hidden');
    quizEndEl.setAttribute('class', 'hidden');
    timerEl.setAttribute('class', 'countdown');

function startQuiz() {
    timerCount = 30;
    quizStartEl.setAttribute('class', 'hidden');
    questionPageEl.setAttribute('class', 'visible');
    generateQuestions();
    beginTimer();
};

function beginTimer() {
    timer = setInterval(function(){
     timerCount--;
     timerEl.textContent = timerCount;
     if(timerCount <= 0) {
        clearInterval(timer);
        lostGame();
     }
    },1000);
};
    function lostGame() {
        localStorage.setItem("recentScore", quizScore);
    };

function generateQuestions() {
    let currentQuestion = option[questionIndex];
    problemEl.textContent = currentQuestion.problem;
    optionEl.innerHTML = "";
};

for (let i = 0; i < 4; i++) {
    let tempBtn = document.createElement("button");
        tempBtn.textContent = currentQuestion.option[i]; 
        tempBtn.setAttribute('class', 'problem-box'); 
        tempBtn.setAttribute("id", currentQuestion.option[i]);
  
    tempBtn.onclick = validateAnswer
    optionEl.appendChild(tempBtn)
  } if (currentQuestion === 0){
    endQuiz();
  };

  function validateAnswer(){
    if (this.id !== questions[questionIndex].correctAnswer) {
        alert("Incorrect...");
        subtractQuizTimer();
    } else {
        alert("Correct!");
        quizScore += 10;
    }
    questionIndex++;
    if (questionIndex >= problem.length) {
        endQuiz();
    } else {
        generateQuestion();
    };
  };

  function endQuiz() {
    quizStartEl.setAttribute('class', 'hidden');
    quizEndEl.setAttribute('class', 'reveal');
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
var score = document.querySelector("#scores");
var userInput = JSON.parse(localStorage.getItem('scores')) && [];

enterButton.addEventListener('click', function(){
    var Player = {
        userInitials:userInitials.value,
        score:quizScore,
    };
}
);

userData.push(user);  
localStorage.setItem("hiscores", JSON.stringify(userData));

for (let i = 0; i < userData.length; i++) {
  var p = document.createElement('p') 
  p.textContent = "User: " + userInput[i].userInitials + " Score: " + userInput[i].score; 
  score.append(p)   
};

startBtn.onclick = quizStart;