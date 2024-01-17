//Initialising the Ids
const timeEl = document.getElementById("time");
const startScreenEl = document.getElementById("start-screen");
const startButtonEl = document.getElementById("start");
const questionsEl = document.getElementById("questions");
const questionTitleEl = document.getElementById("question-title");
const choicesEl = document.getElementById("choices");
const endScreenEl = document.getElementById("end-screen");
const submitButtonEl = document.getElementById("submit");
const feedbackEl = document.getElementById("feedback");
const finalScoreEl = document.getElementById("final-score");
const initialsEl = document.getAnimations("initials");

// Inititalise variables
var currentQuestion = 0;
var score = 0;
var secondsLeft = 60;
var timeInterval;

//Initialising the sound variables
const correctAudio = new Audio("challenge/starter/assets/sfx/correct.wav");
const incorrectAudio = new Audio("challenge/starter/assets/sfx/incorrect.wav");

//event Listener to start the quiz
startButtonEl.addEventListener('click', startQuiz);

//function to start the quiz game
function startQuiz(event) {
    event.preventDefault();
    // console.log(event);
    startTimer();
    setQuestion();
    setScore();

}

// setting the score
function setScore() {
    score = secondsLeft;
    finalScoreEl.textContent = score;
}

//to start the timer
function startTimer() {
    timeInterval = setInterval(function () {
        secondsLeft--;

        timeEl.textContent = secondsLeft;

        if (secondsLeft <= 0) {
            clearInterval(timeInterval);
            setScore();
            questionsEl.classList.add("hide");
            feedbackEl.classList.add("hide");
            endScreenEl.classList.remove("hide");
        }
    }, 1000);
}

function setQuestion() {
    startScreenEl.classList.add("hide");
    questionsEl.classList.remove("hide");
    feedbackEl.classList.remove("hide");

    var questionCurrent = quiz[currentQuestion];
    // console.log(questionCurrent)
    questionTitleEl.innerText = questionCurrent.question;
    choicesEl.innerHTML = "";
    questionCurrent.options.forEach((option, index) => {
        var button = document.createElement("button");
        button.textContent = option;
        choicesEl.appendChild(button);
        button.addEventListener("click", () => choseAnswer());
    });
}

function choseAnswer(selectedOption) {
    var questionCurrent = quiz[currentQuestion];
    currentQuestion++;

    if (selectedOption === questionCurrent.answer) {
        feedbackEl.textContent = "Correct 😀";
        correctAudio.play();
    }
    else {
        feedbackEl.textContent = "Wrong 😟"
        incorrectAudio.play();
        secondsLeft = -10;

        if (secondsLeft <= 0) {
            secondsLeft = 1;
        }
    }

    setScore();

    if (currentQuestion < quiz.length) {
        setQuestion();
    }
    else {
        timeEl.textContent = secondsLeft;
        questionsEl.classList.add("hide");
        feedbackEl.classList.add("hide");
        endScreenEl.classList.remove("hide");
        clearInterval(timeInterval);
    }
}

