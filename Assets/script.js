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
var start = qs("#start");
// var time = document.querySelector("#time");
var secondsLeft = 5;

function timer() {
  var timeInterval = setInterval(function () {
    // secondsLeft--; = secondsLeft +1;
    time.textContent = secondsLeft--;
    if (secondsLeft === 0) {
      alert("Ahh out of time");
      clearInterval(timeInterval);

    }
  }, 1000);
}

start.addEventListener("click", timer);


// function (start){
//     start.preventDefault();
