let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeBtnOne = document.getElementById("home-score-btn-1");
let homeBtnTwo = document.getElementById("home-score-btn-2");
let homeBtnTree = document.getElementById("home-score-btn-3");
let homeResetBtn = document.getElementById("home-reset-btn");

let guestBtnOne = document.getElementById("guest-score-btn-1");
let guestBtnTwo = document.getElementById("guest-score-btn-2");
let guestBtnTree = document.getElementById("guest-score-btn-3");
let guestResetBtn = document.getElementById("guest-reset-btn");

let homeScore = 0;
let guestScore = 0;

// << Home Score Start >>

function increaseHomeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function resetHomeScore() {
  homeScoreEl.textContent = 0;
}

// << Home Score End >>

// << Guest Score Start >>

function increaseGuestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

function resetGuestScore() {
  guestScoreEl.textContent = 0;
}

// << Guest Score End >>
