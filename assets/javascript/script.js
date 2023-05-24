var quiz = [{
    question: "Where can you make your webpage or app look aesthetically pleasing?",
    option: ["index.html", "script.js", "style.css", "all of the above" ],
    correctAnswer: "all of the above"
  }, {
    question: "What is CSS used for?",
    option: ["To add style and design to webpages", "Cranky, Sluthy, Salamanders", "Idk man, I just work here.", "example add this in later"],
    correctAnswer: "To add style and design to webpages"
  }, {
    question: "What does Javascript do?",
    option: ["It's a coffee maker, duh.", "Sir, this is a Wendy's.", "Adds functionality to websites", "example add this in later"],
    correctAnswer: "Adds functionality to websites"
  }];

var questionsIndex = 0;

var quizStartEl = document.querySelector('#quiz-start');
var startQuestionEl = document.querySelector('#question-page');
var startEndEL = document.querySelector('#quiz-end');
var startBtn = document.querySelector('#quiz-start');
var questionEl = document.querySelector('#question');
var optionEl = document.querySelector('#option');
var timerEl = document.querySelector('#timer');
var timer;
var timerCount;
var quizScore = 0;