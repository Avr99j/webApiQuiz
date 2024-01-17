//Initialising the Ids
const timeEl = document.getElementById("time");
const startScreenEl = document.getElementById("start-screen");
const startButtonEl = document.getElementById("start");
const questionsEl = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScreenEl = document.getElementById("end-screen");
const submitButtonEl = document.getElementById("submit");
const feedbackel = document.getElementById("feedback");
const finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getAnimations("initials");

// Inititalise variables
var score = 0;
var secondsLeft = 60;


startButtonEl.addEventListener('click', startQuiz);

function startQuiz(event) {
    event.preventDefault();
    console.log(event);

}

