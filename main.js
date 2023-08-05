let serviceCardTitles = document.querySelectorAll('.service-card__title');
let serviceCardCloseBtns = document.querySelectorAll('.service-card__close-btn');
let serviceCards = document.querySelectorAll('.service-card');


for (let i = 0; i < serviceCardTitles.length; i++) {
  serviceCardTitles[i].addEventListener('click', () => cardsTitleHandler(i));
  serviceCardCloseBtns[i].addEventListener('click', () => cardsCloseBtnHandler(i));
}

function cardsTitleHandler(num) {
  serviceCards[num].classList.add('service-card--on-click');
}

function cardsCloseBtnHandler(num) {
  serviceCards[num].classList.remove('service-card--on-click');
}
