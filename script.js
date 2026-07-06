/* ESTRELLAS */

const starsContainer = document.getElementById('stars');

for(let i = 0; i < 150; i++){

  let star = document.createElement('div');

  star.classList.add('star');

  const size = (Math.random() * 2.5 + 1).toFixed(1);

  star.style.width = size + 'px';
  star.style.height = size + 'px';

  star.style.top = Math.random() * 100 + '%';

  star.style.left = Math.random() * 100 + '%';

  star.style.animationDuration =
  (Math.random() * 3 + 2) + 's';

  starsContainer.appendChild(star);

}

/* ESTRELLAS FUGACES */

function createShootingStar(){

  const shoot = document.createElement('div');
  shoot.classList.add('shooting-star');

  shoot.style.top = Math.random() * 60 + '%';
  shoot.style.left = Math.random() * 80 + '%';

  const duration = (Math.random() * 1.2 + 0.8).toFixed(2);
  shoot.style.animationDuration = duration + 's';

  const distance = Math.floor(Math.random() * 250 + 150);
  shoot.style.setProperty('--travel', distance + 'px');

  const scale = (Math.random() * 1.3 + 0.5).toFixed(2);
  shoot.style.transform = `scale(${scale})`;

  starsContainer.appendChild(shoot);

  setTimeout(() => shoot.remove(), duration * 1000);

  const nextDelay = Math.random() * 5000 + 2000;
  setTimeout(createShootingStar, nextDelay);

}

setTimeout(createShootingStar, 2000);

/* CONTADOR */

const startDate = new Date(2026, 3, 4, 9, 10, 0);
// Año, Mes (0=enero, 3=abril), Día, Hora, Minutos, Segundos

function updateCounter() {

    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

updateCounter();
setInterval(updateCounter, 1000);

/* CARTAS */

function toggleText(element){
  element.classList.toggle('open');
}

/* MUSICA */

const music =
document.getElementById('music');

music.volume = 0.05;

function toggleMusic() {
  const moonBtn = document.getElementById('moonBtn');
  if (music.paused) {
    music.play();
    moonBtn.classList.add('playing');
  } else {
    music.pause();
    moonBtn.classList.remove('playing');
  }
}
/* AUTOPLAY */

window.addEventListener('click', () => {
  music.play().catch(() => {});
  document.getElementById('moonBtn').classList.add('playing');
}, { once:true });

/* MEMORIES FLIP */

const memoryCards =
document.querySelectorAll('.memory-card');

memoryCards.forEach(card => {

  card.addEventListener('click', () => {

    card.classList.toggle('active');

  });

});

/* FLOWER CARDS */

const flowerCards =
document.querySelectorAll('.flower-card');

flowerCards.forEach(card => {

  card.addEventListener('click', () => {

    card.classList.toggle('active');

  });

});

/* ANIMACION SCROLL */
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
sections.forEach(s => observer.observe(s));

/* CARTA SELLADA - CONTADOR Y APERTURA */

const targetDate = new Date(2027, 3, 4, 9, 10, 0);
// Año, Mes (0=enero, 3=abril), Día, Hora, Minutos, Segundos
const openBtn = document.getElementById('openLetterBtn');
const lockView = document.getElementById('lockView');
const letterReveal = document.getElementById('letterReveal');

function updateLockCounter(){

  const now = new Date();
  const diff = targetDate - now;

if(diff <= 0){

    document.getElementById('ldays').innerText = 0;
    document.getElementById('lhours').innerText = 0;
    document.getElementById('lminutes').innerText = 0;
    document.getElementById('lseconds').innerText = 0;

    openBtn.classList.add('ready');

    return;
  }

  const d = Math.floor(diff / (1000*60*60*24));
  const h = Math.floor((diff / (1000*60*60)) % 24);
  const m = Math.floor((diff / (1000*60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('ldays').innerText = d;
  document.getElementById('lhours').innerText = h;
  document.getElementById('lminutes').innerText = m;
  document.getElementById('lseconds').innerText = s;

}

setInterval(updateLockCounter, 1000);
updateLockCounter();

const notYetPopup = document.getElementById('notYetPopup');
const closeLetterBtn = document.getElementById('closeLetterBtn');

closeLetterBtn.addEventListener('click', () => {

  letterReveal.classList.remove('visible');

  setTimeout(() => {
    letterReveal.classList.remove('show');
    document.getElementById('sealedLetter').classList.remove('expanded');
    lockView.classList.remove('hide');
  }, 800);

});

openBtn.addEventListener('click', () => {

  const now = new Date();

  if(now < targetDate){

    notYetPopup.classList.add('show');

    setTimeout(() => {
      notYetPopup.classList.remove('show');
    }, 3000);

    return;
  }

lockView.classList.add('hide');

  document.getElementById('sealedLetter').classList.add('expanded');

  letterReveal.classList.add('show');

  setTimeout(() => {
    letterReveal.classList.add('visible');
  }, 50);

});

/* TOOLTIP DE LA LUNA */

window.addEventListener('load', () => {

  const tooltip = document.getElementById('moonTooltip');

  setTimeout(() => {
    tooltip.classList.add('show');
  }, 1200);

  setTimeout(() => {
    tooltip.classList.remove('show');
  }, 6000);

});