var questions = [{
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

var questionIndex = 0;

var startQuestionsEl = document.querySelector('#start-questions');
var optionsPageEl = document.querySelector('#options-page');
var endQuestionsEl = document.querySelector('#end-questions');
var startBtn = document.querySelector('#start-button');
var problemEl = document.querySelector('#problem');
var optionEl = document.querySelector('#option');
var timerEl = document.querySelector('#timer');
var timer;
var timerCount;
var quizScore = 0;

    startQuestionsEl.setAttribute('class', 'visible');
    optionsPageEl.setAttribute('class', 'hidden');
    endQuestionsEl.setAttribute('class', 'hidden');
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

function generateQuiz() {
    let currentQuestion = questions[questionIndex];
    problemEl.textContent = currentQuestion.questions;
    optionsPageEl.innerHTML = "";
};

for (let i = 0; i < 4; i++) {
    var tempBtn = document.createElement("button");
        tempBtn.textContent = currentQuestion.problem[i]; 
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