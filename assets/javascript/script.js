var quiz = [{
    problem: "Where can you make your webpage or app look aesthetically pleasing?",
    option: ["index.html", "script.js", "style.css", "all of the above" ],
    correctAnswer: "all of the above"
  }, {
    problem: "What is CSS used for?",
    option: ["To add style and design to webpages", "Cranky, Sluthy, Salamanders", "Idk man, I just work here.", "example add this in later"],
    correctAnswer: "To add style and design to webpages"
  }, {
    problem: "What does Javascript do?",
    option: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "Adds functionality to websites", "example add this in later"],
    correctAnswer: "Adds functionality to websites"
  }];

var questionIndex = 0;

var quizStartEl = document.querySelector('#quiz-start');
var questionPageEl = document.querySelector('#question-page');
var quizEndEl = document.querySelector('#quiz-end');
var startBtn = document.querySelector('#quiz-start');
var problemEl = document.querySelector('#question');
var optionEl = document.querySelector('#option');
var timerEl = document.querySelector('#timer');
var timer;
var timerCount;
var quizScore = 0;

    quizStartEl.setAttribute('class', 'visible');
    questionPageEl.setAttribute('class', 'hidden');
    quizEndEl.setAttribute('class', 'hidden');
    timerEl.setAttribute('class', 'countdown');

function quizStart() {
    timerCount = 60;
    quizStartEl.setAttribute('class', 'hidden');
    questionPageEl.setAttribute('class', 'visible');
    beginQuestions();
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

function generateQuestion() {
    let currentQuestion = questions[questionIndex];
    problemEl.textContent = currentQuestion.problem;
    optionEl.innerHTML = "";
};







var startButton = document.querySelector("#start-button");
var endButton = document.querySelector("quiz-end");
var userInitials = document.querySelector("#user-initials");
var initialsButton = document.querySelector("#initials-button");
var score = document.querySelector("#scores");

initialsButton.addEventListener('click', function(){
    var user = {
        userInitials:userInitials.value,
        score:quizScore,
    }
}
)







startBtn.onclick = quizStart;