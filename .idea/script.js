var universalScore = 0;
var disneyScore = 0;
var result = document.getElementById("result");

var questionCount = 0;
/*Add your JavaScript here*/
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2")

function Universal() {
    universalScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + "universalScore = " + disneyScore);

    if (questionCount >= 3) {
        console.log("The quiz is done!")
        updateResult();
    }
}

function Disney() {
    disneyScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + "disneyScore = " + disneyScore);

    if (questionCount >= 3) {
        console.log("The quiz is done!")
        updateResult();
    }
}

var restart = document.getElementById("restart");

//event listeners
q1a1.addEventListener("click", Universal);
q1a2.addEventListener("click", Disney);
q2a1.addEventListener("click", Disney);
q2a2.addEventListener("click", Universal);
q3a1.addEventListener("click", Disney);
q3a2.addEventListener("click", Universal);
restart.addEventListener("click", restartQuiz);

function updateResult() {
    if (universalScore >= 2) {
        result.innerHTML = "You should head to Universal Studios!";
        console.log("You should head to Universal Studios!");
    } else if (disneyScore >= 2) {
        result.innerHTML = "You should head to Disneyland!"
        console.log("You should head to Universal Studios!");
    }
}

function restartQuiz() {
    result.innerHTML = "Your result is...";
    questionCount = 0;
    universalScore = 0;
    disneyScore = 0;
}

const popup = document.getElementById("popup");
const openBtn = document.getElementById("open-popup");
const closeBtn = document.getElementById("close-popup");

openBtn.addEventListener("click", () => {
    popup.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
    popup.classList.add("hidden");
});


