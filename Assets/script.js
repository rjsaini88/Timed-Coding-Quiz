function qs(id) {
  return document.querySelector(id);
}
var time = qs("#time");
var startBtn = qs("#startBtn");
var resetBtn = qs("#reset");
var scoreEl = qs("#score");
var qn = qs("#questionNumber");
var dQ = qs("#displayQuestion");
var opt1 = qs("#option1");
var opt2 = qs("#option2");
var opt3 = qs("#option3");
var opt4 = qs("#option4");
var over = qs("#gameOver");
var options = qs("#options");
var interval;
var gameRunning = false;
var timeLeft = 50;
var score = 0;
var hsEl = qs("#hs");
var int = qs("#int");
var savebtn = qs("#save");
var db = qs("#displayboard");
var currentScore = 0;
var highScore = 0;

var questionList = [
  {
    question:
      "Inside the HTML document, where do you place your JavaScript code?",
    a: "Inside the <script> element",
    b: "Inside the <link> element",
    c: "In the <footer> element",
    d: "Inside the <head> element",

    correctAnswer: "a",
  },
  {
    question: "What operator is used to assign a value to a declared variable?",

    a: "Double-equal (==)",
    b: "Colon (:)",
    c: "Equal sign (=)",
    d: "Question mark (?)",

    correctAnswer: "c",
  },
  {
    question: "What are the six primitive data types in JavaScript?",

    a: "sentence, int, truthy, bigInt, symbol, undefined",
    b: "string, number, boolean, bigInt, symbol, undefined",
    c: "sentence, float, data, bigInt, symbol, undefined",
    d: "string, num, falsy, bigInt, symbol, undefined",
    correctAnswer: "b",
  },
  {
    question: "What is the difference between && and ||?",
    a: "The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true.",
    b: "The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true.",
    c: "The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true.",
    d: "The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true.",

    correctAnswer: "b",
  },
  {
    question: "How do we declare a conditional statement in JavaScript?",
    a: "for loop",
    b: "while loop",
    c: "difference...between]",
    d: "if...else",

    correctAnswer: "d",
  },
  {
    question:
      "From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd']",

    a: "0",
    b: "2",
    c: "1",
    d: "3",

    correctAnswer: "c",
  },
];

var timer = function () {
  interval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft == 0) {
      gameOver();
    }
  }, 1000);
};

var resetGame = function () {
  location.reload();
};

startBtn.addEventListener("click", startQuiz);
resetBtn.addEventListener("click", resetGame);
opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);

var currentQuestionIndex = 0;
var lastQ = questionList.length - 1;
var correctAnswer = "";
var currentQuestion = questionList[currentQuestionIndex];
console.log(currentQuestion.question);
console.log(currentQuestion.a);
console.log(currentQuestion.b);
console.log(currentQuestion.c);
console.log(currentQuestion.d);
console.log(currentQuestion.correctAnswer);

options.style.display = "none";
savebtn.style.display = "none";
int.style.display = "none";

function startQuiz() {
  dQ.textContent = currentQuestion.question;
  options.style.display = "block";
  opt1.textContent = currentQuestion.a;
  opt2.textContent = currentQuestion.b;
  opt3.textContent = currentQuestion.c;
  opt4.textContent = currentQuestion.d;
  startBtn.remove();
  timer();
}

function nextQuestion() {
  console.log("current q index", currentQuestionIndex);
  currentQuestionIndex++;
  currentQuestion = questionList[currentQuestionIndex];
  if (!currentQuestion) return gameOver();
  dQ.textContent = currentQuestion.question;
  opt1.textContent = currentQuestion.a;
  opt2.textContent = currentQuestion.b;
  opt3.textContent = currentQuestion.c;
  opt4.textContent = currentQuestion.d;
}

function checkAnswer(event) {
  //clarify
  var btnThatWasClicked = event.target;
  var userInput = btnThatWasClicked.dataset.answer;
  console.log("you picked answer --- ", userInput);
  if (userInput === currentQuestion.correctAnswer) {
    score++;
    db.textContent = "Correct!!! 😃";
    scoreEl.textContent = score;
  } else {
    timeLeft -= 5;
    db.textContent = "Wrong! 😭";
  }
  nextQuestion();
  console.log("your are on question number ", currentQuestionIndex);
}

var gameOver = function () {
  console.log("ENDING GAME");
  clearInterval(interval);
  if (!currentQuestion);
  over.textContent = "GAME OVER";
  dQ.textContent = "Thank you for Playing!!!";
  gameRunning = false;
  timeLeft = 50;
  options.style.display = "none";
  savebtn.style.display = "block";
  int.style.display = "block";
};

var highScoreArray = [];

savebtn.addEventListener("click", function (event) {
  event.preventDefault();
  int.style.display = "none";
  savebtn.style.display = "none";
  resetBtn.textContent = "Play Again";

  var userInfo = {
    score: score,
    name: int.value,
  };

  highScoreArray.push(userInfo);
  // highScores.push(currentScore);
  // highScores.splice(5);
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));
});
const getHighScore = () => {
  var high = 0;
  var name = "";
  var x = [];
  for (var i = 0; i < highScoreArray.length; i++) {
    if (highScoreArray[i].score > high) {
      high = highScoreArray[i].score;
      name = highScoreArray[i].name;
    }
    x.push(highScoreArray[i].score);
  }
  console.log(x.sort());
  hsEl.textContent = high + " " + name;
};
const updateOldScores = () => {
  var highScore = JSON.parse(localStorage.getItem("highScore"));
  console.log(highScore);
  if (highScore !== null) {
    highScoreArray = highScore;
    getHighScore();
  }
};
updateOldScores();

//create a function
//have event listener in the function, when I click show high score it will bring up a list of previous 5 high scores.
//by running a for loop around high score array, same intention as line 217. to get high score.
//instead of geting one value, sort through the highest scores.

// var initialHS = JSON.parse(localStorage.getItem ("highScore"))
// hs.textContent = highScore;

//[[]]
// localStorageArray = [...initialHS];

// var currentScore = {
//   int: int.value.trim(),
//   score: score,

//check this<-----
highScoreArray.push(currentScore);
// localStorage.setItem("highScore", JSON.stringify(highScoreArray))

int.addEventListener("keyup", () => {
  savebtn.disabled = !int.value;
});
