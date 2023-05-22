





var quiz = [{
    question1: "Where can you make your webpage or app look aesthetically pleasing?",
    option1: ["index.html", "script.js", "sylte.css", "all of the above" ],
    correctAnswer1: "all of the above",

},{
    question2: "What does the following logical operator mean: ||",
    option2: ["AND", "NOT", "OR", "none of the above"],
    correctAnswer2:"OR",
},{
    question3: "What does 'Hoisting' mean?",
    option3: ["is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their method, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution","is the process where the interpreter moves the declaration of classes, functions, or variables to the bottom of their scope, before their execution","is the process where the interpreter moves the declaration of only classes to the top of their scope, before their execution"],
    correctAnswer3:"is the process where the interpreter moves the declaration of classes, functions, or variables to the top of their scope, before their execution",
},{
    question4: "What does CSS stand for? ",
    option4: ["Concatenating Service Sheet", "Collaborating Style Sheets", "Cascading Style Sheet", "Central Style Sheet"],
    correctAnswer4:"Cascading Style Sheet",
}];

var startButtonEl = $('#button');

startButtonEl.on('click', function(){
    alert('Beginning Quiz Challenge!')




});

var count = 15;
var interval = setInterval(function(){
    document.getElementById('timer').innerHTML=count;
    count--;
    if (count <= 0){
        clearInterval(interval);
    
        document.getElementById('timer').innerHTML='Done';
            alert("You're out of time! Better luck next time!")
    }
}, 1000);






