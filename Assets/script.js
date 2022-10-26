/*when I click on start quiz, time starts and are displayed with questions to answer.
when I click reset, it cancels the quiz.
when i click view high score, it grants me score for local storage of my past scores
score board shows the current questions I answered correctly



GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
 */

function qs(id) {
  return document.querySelector(id);
}
var time = qs("#time");
var startBtn = qs("#startBtn");
var resetBtn = qs("#reset");
var scoreEl = qs("#score");
var qn = qs("questionNumber");
var dQ = qs("#displayQuestion");
var opt1 = qs("#option1");
var opt2 = qs("#option2");
var opt3 = qs("#option3");
var opt4 = qs("#option4");
var over = qs("#gameOver");
var interval;
var gameRunning = false;
var timeLeft = 30;
var score = 0;

var questionList = [
  {
    question:
      "Inside the HTML document, where do you place your JavaScript code?",
    // answers:{
    a: "Inside the <script> element",
    b: "Inside the <link> element",
    c: "In the <footer> element",
    d: "Inside the <head> element",

    correctAnswer: "a",
  },
  {
    question: "What operator is used to assign a value to a declared variable?",

    // answers: {
    a: "Equal sign (=)",
    b: "Colon (:)",
    c: "Double-equal (==)",
    d: "Question mark (?)",
    // },
    correctAnswer: "a",
  },
  {
    question: "What are the six primitive data types in JavaScript?",
    // answers:
    // {
    a: "string, number, boolean, bigInt, symbol, undefined",
    b: "sentence, int, truthy, bigInt, symbol, undefined",
    c: "sentence, float, data, bigInt, symbol, undefined",
    d: "string, num, falsy, bigInt, symbol, undefined",
    correctAnswer: "a",
  },
];
console.log(questionList.length);
// guard clause
// var timeInterval;
// var wins = 0;
// var losses = 0;

// var startGame = function () {               //Clarify

//   timer();
// };
// gameRunning = true;
// console.log("Start the game")

var timer = function () {
  interval = setInterval(function () {
    timeLeft--;
    time.textContent = timeLeft;
    if (timeLeft == 0) {
      gameOver();
    }
  }, 1000);
};
//check this logic for scoreboard
var gameOver = function () {
  console.log("ENDING GAME");
  clearInterval(interval);
  over.textContent = "GAME OVER";
  gameRunning = false;
  timeLeft = 30;
  // score--;

  syncLocalStorage();
  // alert("Ahhh Out of Time!!!")
};

var resetGame = function () {
  //clarify
  // clearInterval(interval);
  // gameRunning = false;
  // timeLeft = 30;
  location.reload();
};

var syncLocalStorage = function () {
  localStorage.setItem("score", score);
};

startBtn.addEventListener("click", startQuiz);
// startBtn.addEventListener("click", nextQuestion);
resetBtn.addEventListener("click", resetGame);

opt1.addEventListener("click", checkAnswer);
opt2.addEventListener("click", checkAnswer);
opt3.addEventListener("click", checkAnswer);
opt4.addEventListener("click", checkAnswer);

var currentQuestionIndex = 0; //current question
var lastQ = questionList.length - 1;
// var question = 0;
var correctAnswer = "";
var currentQuestion = questionList[currentQuestionIndex]; // current question index = 0 from question list
console.log(currentQuestion); // console log the first question for the array at index 0.
//attach event listener to btns
console.log(currentQuestion.question);
console.log(currentQuestion.a);
console.log(currentQuestion.b);
console.log(currentQuestion.c);
console.log(currentQuestion.d);
console.log(currentQuestion.correctAnswer);

function startQuiz() {
  dQ.textContent = currentQuestion.question;
  opt1.textContent = currentQuestion.a;
  opt2.textContent = currentQuestion.b;
  opt3.textContent = currentQuestion.c;
  opt4.textContent = currentQuestion.d;
  startBtn.remove();
  timer();

  // startBtn.textContent = "Next";
  // correctAnswer = currentQuestion.correctAnswer;
  // nextQuestion();
}
// function() {nextQuestion(questionList[currentQuestionIndex])}

function nextQuestion() {
  // for (i=0; i<questionList.length,i++;){                  clarify
  console.log("current q index", currentQuestionIndex);
  currentQuestionIndex++;
  //after incrementing the index. check to see if there's a next question, it'll be undefined if no more question
  currentQuestion = questionList[currentQuestionIndex];
  if (!currentQuestion) return gameOver();
  dQ.textContent = currentQuestion.question;
  opt1.textContent = currentQuestion.a;
  opt2.textContent = currentQuestion.b;
  opt3.textContent = currentQuestion.c;
  opt4.textContent = currentQuestion.d;
  startBtn.textContent = "Next";
  // currentQuestion++
  // correctAnswer = currentQuestion.correctAnswer;
  // nextQuestion();
  // checkAnswer()
}
console.log(currentQuestion.correctAnswer);

function checkAnswer(event) {
  //clarify
  var btnThatWasClicked = event.target;
  var userInput = btnThatWasClicked.dataset.answer;
  console.log("you picked answer --- ", userInput);
  if (userInput === currentQuestion.correctAnswer) {
    score++;
    scoreEl.textContent = score;
  } else {
    timeLeft -= 5;
  }
  // if (currentQuestion.a === currentQuestion.correctAnswer)

  // else
  //at this point currentQuestion is still the previous question
  nextQuestion();
}

// questionList = question[currentQuestionIndex];
// function nextQuestion() {
//   // for (i=0; i< questionList.length, i++;) {
//   if (currentQuestion[currentQuestionIndex]) {
//     dQ.textContent = currentQuestion.question;
//     opt1.textContent = currentQuestion.a;
//     opt2.textContent = currentQuestion.b;
//     opt3.textContent = currentQuestion.c;
//     opt4.textContent = currentQuestion.d;
//     startBtn.textContent = "Next";
//     correctAnswer = currentQuestion.correctAnswer;
//     console.log (currentQuestion.correctAnswer)

//     currentQuestion++;
//   }
// }
//correct answer is = to currentQuestion.correctAnswer

//user input is click event
//click event add l

// startQuiz.addEventListener("click", timer);

var randomQuestion = function (arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
};

// TODO - checkout the class example on localStorage, storing arrays or objects under 1 key val pair USE JSON.something
// TODO - in endGame function, remove the question and answers, and put in input Element to take user initials
// TODO - on submit of the input form, store in localStorage
// TODO - when app loads, pull up highscores from localStorage if there are any

// function (start){
//     start.preventDefault();

// What is the difference between && and ||? *
// 		The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true. - true
// 		The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true. - false
// 		The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true. - false
// 		The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true. - false

// How do we declare a conditional statement in JavaScript? *
// 		if...else - true
// 		for loop - false
// 		while loop - false
// 		difference...between] - false

// From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd'] *
// 		1
// 		0
// 		2
// 		3

// How do we stop a loop from from repeating indefinitely? *
// 		A loop will stop executing when the condition is false.
// 		A loop will stop executing when the condition is true.
// 		When we have iterated through half of the condition.
// 		We have to explicitly end the loop with the break keyword.

// Which statement below is not true about functions in JavaScript? *
// 		A function must always be assigned an identifier
// 		Functions can be reused throughout your code
// 		Functions are able to be recursive.
// 		Functions can receive arguments that can alter the output of a function

// What are the two types of scope JavaScript uses? *
// 		Global and Local
// 		Surrounding and Inner
// 		Outside and Inside
// 		Abroad and Local

//     As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use? *
// 		pop() and unshift()
// 		push() and sort()
// 		forEach() and pop()
// 		concat() and shift()

//     How do we access a value stored in an object? *
// 		Dot notation, Bracket notation
// 		Period notation, Square bracket notation
// 		Dot notation, Curl bracket notation
// 		Equal notation, Abstract notation

//     What is an object method? *
// 		A function associated with an object
// 		An array saved inside of an object
// 		Keys in an object that have a number assigned to it
// 		A function that takes an object for an argument

//     What is the purpose of the 'This' operator? *
// 		The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.
// 		This' keyword allows us to specify certain variables to it which can be used in the global scope.
// 		This' keyword lets us make a reference to our window gives us access to special object methods.
// 		This' is an array where we can easily store global variables for when we need access to them.

//     We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch? *
// 		git checkout test-branch
// 		git change test branch
// 		git merge test-branch
// 		git commit test-branch

// From the reason listed below which is NOT true about JavaScript. *
// 		JavaScripts handles numbers better than most programming languages.
// 		JavaScript increases interactivity of our websites.
// 		Javascript allows developers to create richer interfaces for the users.
// 		JavaScript lets provide the user immediate feedback upon an action.

// ]

// */
