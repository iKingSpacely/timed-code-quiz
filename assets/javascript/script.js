var count;
var interval;
var buttonEl = document.querySelector(".start")
    buttonEl.addEventListener('click', function(){
        buttonEl.classList.add("hidden")
        count = 30;
        interval = setInterval(function(){
            count--;
            document.getElementById('timer').innerHTML=count;
            if (count < 0){  
                document.getElementById('timer').innerHTML=count;
                alert("You're out of time! Better luck next time!")
                document.getElementById('timer').innerHTML='Done';
                clearInterval(interval);
            }
        }, 1000);
        question1El.textContent = quiz[0].question;
        option1El.textContent = quiz[0].option[0];
        option2El.textContent = quiz[0].option[1];
        option3El.textContent = quiz[0].option[2];
        option4El.textContent = quiz[0].option[3];
        counter++;
    });

var counter = 0;
var question1El = document.querySelector("#question1");

var option1El = document.querySelector("#option1");
    option1El.addEventListener('click', nextQuestion)
var option2El = document.querySelector("#option2");
    option2El.addEventListener('click', nextQuestion)
var option3El = document.querySelector("#option3");
    option3El.addEventListener('click', nextQuestion)
var option4El = document.querySelector("#option4");
    option4El.addEventListener('click', nextQuestion)

function nextQuestion(event){
    if (event.target.textContent == quiz[counter].correctAnswer) {
        alert("Correct!")
    } else {
        alert("Incorrect")
        count-= 5;
    }
    question1El.textContent = quiz[counter].question;
    option1El.textContent = quiz[counter].option[0];
    option2El.textContent = quiz[counter].option[1];
    option3El.textContent = quiz[counter].option[2];
    option4El.textContent = quiz[counter].option[3];
    counter++;
}


var quiz = [{
    question: "Where can you make your webpage or app look aesthetically pleasing?",
    option: ["index.html", "script.js", "sylte.css", "all of the above" ],
    correctAnswer: "all of the above",

},{
    question: "What does the following logical operator mean: ||",
    option: ["AND", "NOT", "OR", "none of the above"],
    correctAnswer:"OR",
},{
    question: "What does 'Hoisting' mean?",
    option: ["is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their method, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the bottom of their scope, before their execution","is the process where the interpreter moves the declaration of only classes to the top of their scope, before their execution"],
    correctAnswer:"is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution",
},{
    question: "What does CSS stand for? ",
    option: ["Concatenating Service Sheet", "Collaborating Style Sheets", "Cascading Style Sheet", "Central Style Sheet"],
    correctAnswer:"Cascading Style Sheet",
}];







