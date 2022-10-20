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
var reset = qs("#reset");
var score = qs("#score");
var questions = qs("#questions");
var option1 = qs("#option1");
var option2 = qs("#option2");
var option3 = qs("#option3");
var option4 = qs("#option4");
var over = qs("#over");
var timeInterval;

// startQuiz.addEventListener("click", timer);

// startQuiz.addEventListener ("click", questionPage);

// function questionPage() {

// questions.textContent = "What is this";
// option1.textContent = "Wrong";
// option2.textContent = "Try again";
// option3.textContent = "Not yet";
// option4.textContent = "Almost";
// }

// function (start){
//     start.preventDefault();

// guard clause
var gameRunning = false;
var timeLeft = 3;
var timeInterval;
var wins = 0;
var losses = 0;

var startGame = function () {
  if (gameRunning) return;

  console.log("Start the game");
  gameRunning = true;
  timer();
};
// gameRunning = true;
// console.log("Start the game")

var timer = () => {
  var timeInterval = setInterval(function () {
    // timeLeft--;
    time.textContent = timeLeft--;
    if (timeLeft === 0) {
      gameOver();
    }
  }, 1000);
};
//check this logic for scoreboard
var gameOver = function () {
  clearInterval(timeInterval);
  over.textContent = "GAME OVER";
  //   losess++;
  //   losses
  gameRunning = false;
  timeleft = 3;
};

var syncLocalStorage = function () {
  localStorage.setItems("Score");
};

startBtn.addEventListener("click", timer);

// function timer() {
//   var timeLeft = 3;
//   var timeInterval = setInterval(function () {
//     time.textContent = timeLeft--;
//     if (timeLeft < 0) {
//       clearInterval(timeInterval);
//       alert("Ahh out of time");
//     }
//   }, 1000);
// }

//build an array of questions. for loop, iterations. iteration is equal to number of questions
//
/*
[Questions
  Inside the HTML document, where do you place your JavaScript code? *
		Inside the <script> element - true
		Inside the <link> element - false
		In the <footer> element - false
		Inside the <head> element - false

What operator is used to assign a value to a declared variable? *
		Equal sign (=) - true
		Colon (:) - false
		Double-equal (==) - false
		Question mark (?) - false

What are the six primitive data types in JavaScript? *
		string, number, boolean, bigInt, symbol, undefined - true
		sentence, int, truthy, bigInt, symbol, undefined - false
		sentence, float, data, bigInt, symbol, undefined - false
		string, num, falsy, bigInt, symbol, undefined - false

What is the difference between && and ||? *
		The logical operator && returns true if both expressions are true while the logical operator || returns true if one expression or the other returns true. - true
		The logical operator && returns true if one expression is true while the logical operator || returns true if both expressions returntrue true. - false
		The logical operator && returns true if none of the expressions are true while the logical operator || returns true if one expression or the other returns true. - false
		The logical operator && returns true if both expressions are true while the logical operator || returns false if one expression or the other returns true. - false

How do we declare a conditional statement in JavaScript? *
		if...else - true
		for loop - false
		while loop - false
		difference...between] - false

From the given array which index is the letter 'b' on? ['a', 'b', 'c', 'd'] *
		1
		0
		2
		3

How do we stop a loop from from repeating indefinitely? *
		A loop will stop executing when the condition is false.
		A loop will stop executing when the condition is true.
		When we have iterated through half of the condition.
		We have to explicitly end the loop with the break keyword.

Which statement below is not true about functions in JavaScript? *
		A function must always be assigned an identifier
		Functions can be reused throughout your code
		Functions are able to be recursive.
		Functions can receive arguments that can alter the output of a function
    
What are the two types of scope JavaScript uses? *
		Global and Local
		Surrounding and Inner
		Outside and Inside
		Abroad and Local

    As a developer, I want to be able to remove the last element of my array and I want to also be able to add a new element to the beginning of my array. Which two array methods should I use? *
		pop() and unshift()
		push() and sort()
		forEach() and pop()
		concat() and shift()

    How do we access a value stored in an object? *
		Dot notation, Bracket notation
		Period notation, Square bracket notation
		Dot notation, Curl bracket notation
		Equal notation, Abstract notation

    What is an object method? *
		A function associated with an object
		An array saved inside of an object
		Keys in an object that have a number assigned to it
		A function that takes an object for an argument

    What is the purpose of the 'This' operator? *
		The keyword 'This' refers to the object it is in. 'This' changes based on which object it is in when being called.
		This' keyword allows us to specify certain variables to it which can be used in the global scope.
		This' keyword lets us make a reference to our window gives us access to special object methods.
		This' is an array where we can easily store global variables for when we need access to them.

    We create a new branch off of our main branch with  'git branch test-branch'. How do we switch to our newly created branch? *
		git checkout test-branch
		git change test branch
		git merge test-branch
		git commit test-branch

From the reason listed below which is NOT true about JavaScript. *
		JavaScripts handles numbers better than most programming languages.
		JavaScript increases interactivity of our websites.
		Javascript allows developers to create richer interfaces for the users.
		JavaScript lets provide the user immediate feedback upon an action.





]



*/
