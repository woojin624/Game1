const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const ryans = document.querySelectorAll(".ryan");
let lastHole;
let timeUp = false;
let score = 0;

function randomtime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function whick() {
  const time = randomtime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add("up");
  setTimeout(() => {
    hole.classList.remove("up");
    if (!timeUp) whick();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  timeUp = false;
  score = 0;
  whick();
  setTimeout(() => (timeUp = true), 10000);
}

function saud(e) {
  if (!e.isTrusted) return; // cheaten
  score++;
  this.classList.remove("up");
  scoreBoard.textContent = score;
}

ryans.forEach(ryan => ryan.addEventListener("click", saud));
