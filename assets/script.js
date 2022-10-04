var quizIntro = document.getElementById("start-page");
var startQuiz = document.getElementById("start-button");
var quizTimer = document.getElementById("timer");
var quizBody = document.getElementById("questions-page");
var quizQuestion = document.getElementById("question");
var quizChoices= document.getElementById("choice-btn");
var resultEl = document.getElementById("result");
var endScore = document.getElementById("end-score");
var initialInput = document.getElementById("initials");
var highScorePage = document.getElementById("score-page");
var startTime = 120;

startQuiz.addEventListener("click", startGame);
//Quiz questions

var questions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hey That's My Lunch", "How to Meet Ladies","Hyper Text Markup Language", "Head Text Made Large"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "How many elements can an ID attribute be applied to?",
        choices: ["4", "5", "1", "There is no limit."],
        answer: "1"
    },
    {
        question: "Which HTML attribute references an image?",
        choices: ["img", "href", "image", "p"],
        answer: "img"
    },
    {
        question: "Which operator is used to assign a variable in JavaScript?",
        choices: ["$", "+", "-", "=" ],
        answer:  "="
    },
    {
        question: "Are elements in JavaScript case sensitive?",
        choices: ["Yes", "Sometimes", "No", "No but I am"],
        answer: "Yes"
    },
    {
        question: "What is used to style a webpage?",
        choices: ["HTML", "jQuery", "Farley", "CSS"],
        answer: "CSS"
    },
    {
        question: "What does DOM stand for?",
        choices: ["Family", "Document Object Model", "Double Ox Meat", "Document Orientation Model"],
        answer: "Document Object Model"
    },
    {
       question: "Arrays in JavaScript can be used to store",
       choices: ["Other arrays", "strings", "numbers", "All of the above"],
       answer: "All of the above"
    },
    {
        question: "What does a comment look like in CSS?",
        choices: ["!--Comment", "/* Comment", "//Comment", "--Comment"],
        answer: "/* Comment"
    },
    {
        question: "Which boolean operator represents 'or'?",
        choices: ["||", "*", "&&", "?!"],
        answer: "||"
    }

]

// Game Start Function

function startGame() {
    startQuiz.setAttribute("class", "hide")
    timerState=setInterval(function(){
        startTime--
        quizTimer.textContent="Timer: "+ startTime
    }
}