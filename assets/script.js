var quizIntro = document.getElementById("start-page");
var startQuiz = document.getElementById("start-button");
var quizTimer = document.getElementById("timer");
var quizBody = document.getElementById("questions-page");
var quizQuestion = document.getElementById("question");
var quizChoices= document.getElementById("choice-buttons");
var resultEl = document.getElementById("result");
var endScore = document.getElementById("end-score");
var initialInput = document.getElementById("initials");
var highScorePage = document.getElementById("score-page");
var startTime = 120;
var indexQuestion= 0;
// var timerState;
quizBody.style.display ="none";
startQuiz.addEventListener("click", startGame);
//Quiz questions

var questions = [
    {
        title: "What does HTML stand for?",
        choices: ["Hey That's My Lunch", "How to Meet Ladies","Hyper Text Markup Language", "Head Text Made Large"],
        answer: "Hyper Text Markup Language"
    },
    {
        title: "How many elements can an ID attribute be applied to?",
        choices: ["4", "5", "1", "There is no limit."],
        answer: "1"
    },
    {
        title: "Which HTML attribute references an image?",
        choices: ["img", "href", "image", "p"],
        answer: "img"
    },
    {
        title: "Which operator is used to assign a variable in JavaScript?",
        choices: ["$", "+", "-", "=" ],
        answer:  "="
    },
    {
        title: "Are elements in JavaScript case sensitive?",
        choices: ["Yes", "Sometimes", "No", "No but I am"],
        answer: "Yes"
    },
    {
        title: "What is used to style a webpage?",
        choices: ["HTML", "jQuery", "Farley", "CSS"],
        answer: "CSS"
    },
    {
        title: "What does DOM stand for?",
        choices: ["Family", "Document Object Model", "Double Ox Meat", "Document Orientation Model"],
        answer: "Document Object Model"
    },
    {
       title: "Arrays in JavaScript can be used to store",
       choices: ["Other arrays", "strings", "numbers", "All of the above"],
       answer: "All of the above"
    },
    {
        title: "What does a comment look like in CSS?",
        choices: ["!--Comment", "/* Comment", "//Comment", "--Comment"],
        answer: "/* Comment"
    },
    {
        title: "Which boolean operator represents 'or'?",
        choices: ["||", "*", "&&", "?!"],
        answer: "||"
    }

]

// Game Start Function

function startGame(){
    quizIntro.style.display="none";
    console.log("game started");
var timerState
timerState = setInterval(function(){
    quizTimer.innerHTML="Time: " + startTime;
    startTime--;
if (startTime == 0){
    clearInterval(timerState);
    alert("Out of time!")
 }
 }, 1000); 
 quizBody.style.removeProperty("display");   
 nextQuestion()
}

function nextQuestion() {
    var currentQuestion = questions[indexQuestion]
    quizQuestion.innerHTML=currentQuestion.title
    quizChoices.innerHTML=""
    currentQuestion.choices.forEach(function(responses){
        var questionBtn=document.createElement("button")
        questionBtn.setAttribute=("value",responses)
        questionBtn.textContent=responses
        questionBtn.onclick=selectAnswer
        quizChoices.append(questionBtn)
    })
}
function selectAnswer() {
    console.log(selectAnswer)
    if (questions.value==questions[indexQuestion].answer){
        alert("Correct!")
    }
    else 
    {alert("Wrong!")
    startTime = startTime-10
    quizTimer.textContent=startTime
}
indexQuestion++
if (indexQuestion==quizQuestion.length) {
    alert("Game over")
    gameOver()
}
else {nextQuestion()}
}