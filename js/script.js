/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
var startBtn = document.querySelector('#start');
var screens = document.querySelectorAll('.screen');
var board = document.querySelector('.board');
var timeList = document.querySelector('#time-list');
var timeGame = document.querySelector('#time');
var colors = ['#e74c3c', '#8e44ad', '#3498bd', '#e67e22', '#2ecc71'];
var time = 0;
var score = 0; // events listeners //
/////////////////////

startBtn.addEventListener('click', function (event) {
  event.preventDefault(), screens[0].classList.add('up');
}); //

timeList.addEventListener('click', function (event) {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'));
    screens[1].classList.add('up');
    startGame();
  }
}); // checked click on circle //

board.addEventListener('click', function (event) {
  if (event.target.classList.contains('circle')) {
    score++;
    event.target.remove();
    createCircles();
  }
}); // start game //
///////////////

function startGame() {
  setInterval(decreaseTime, 1000);
  createCircles();
  setTimeGame(time);
} // deacrease timer


function decreaseTime() {
  if (time === 0) {
    finshGame();
  } else {
    var currentTime = --time;

    if (currentTime < 10) {
      currentTime = "0".concat(currentTime);
    }

    setTimeGame(currentTime);
  }
}

; // timer

function setTimeGame(value) {
  timeGame.innerHTML = "00:".concat(value);
} // finish game and restart


var refreshBtn = document.querySelector('.refreshButton');

function finshGame() {
  board.innerHTML = "<h1>\u0421\u0447\u0435\u0442: <span class=\"primary\">".concat(score, "</span></h1>");
  timeGame.parentNode.classList.add('hide');
} // create circle //
//////////////////


function createCircles() {
  var circle = document.createElement('div');
  var sizeCircle = getRandomSize(15, 60);

  var _board$getBoundingCli = board.getBoundingClientRect(),
      width = _board$getBoundingCli.width,
      height = _board$getBoundingCli.height;

  var color = randomColor(); // position circle

  var x = getRandomSize(0, width - sizeCircle);
  var y = getRandomSize(0, height - sizeCircle);
  circle.style.top = "".concat(y, "px");
  circle.style.left = "".concat(x, "px"); // color

  circle.style.backgroundColor = color;
  circle.style.boxShadow = "0 0 2px 2px ".concat(color);
  circle.classList.add('circle'); // size circle

  circle.style.width = "".concat(sizeCircle, "px");
  circle.style.height = "".concat(sizeCircle, "px");
  board.append(circle);
} // random Size circle


function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
} // random color circle


function randomColor() {
  var indexColor = Math.floor(Math.random() * colors.length);
  return colors[indexColor];
}
/******/ })()
;