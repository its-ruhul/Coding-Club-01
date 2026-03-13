let score = 0;
let time = 2000;
let alive = true;
let deadline = 0;

let dot = document.getElementById('dot');

function showDot() {
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;

  dot.style.left = 50 + (x - 100) + 'px';
  dot.style.top = 50 + (y - 100) + 'px';

  deadline = Date.now() + time;
  requestAnimationFrame(check);
}

function hit() {
  score++;
  time = time * 0.9;
  showDot();
}

function check() {
  if  (!alive) return;
  if (Date.now() > deadline) return end();

  requestAnimationFrame(check);
}

function end() {
  alive = false;
  localStorage.setItem('score', score);
  window.location.href ='./end.html';
}

showDot();