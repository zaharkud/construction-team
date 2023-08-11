let serviceCardTitles = document.querySelectorAll('.service-card__title');
let serviceCardCloseBtns = document.querySelectorAll('.service-card__close-btn');
let serviceCards = document.querySelectorAll('.service-card');

let showServicesBtn = document.querySelector('.services__btn');
showServicesBtn.addEventListener('click', showServicesHandler);

//Для слайдера с проектами
let porfolioProjects = document.querySelectorAll('.pf-project');
let nextProjectBtn = document.querySelector('.portfolio__next-btn');
let projectCount = 0;
let projectTumbler = 0;

let priceListTables = document.querySelectorAll('.pl-table');
let priceListCategoryBtns = document.querySelectorAll('.pl-menu__link');

//Собираем кноппки на слайдер с фотографиями для проекта из портфолио
let projectSliderBtns = document.querySelectorAll('.pf-project--accent .slider-btn');
projectSliderBtnsEventCreator(projectSliderBtns);

//Собираем кнопки на сладйер с промо-блока
let promoSliderBtns = document.querySelectorAll('.promo .slider-btn');
promoSliderBtnsEventCreator(promoSliderBtns);

nextProjectBtn.addEventListener('click', () => nextProjectBtnHandler());

for (let i = 0; i < priceListCategoryBtns.length; i++) {
  priceListCategoryBtns[i].addEventListener('click', () => priceListTableHandler(i));
}

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

function nextProjectBtnHandler() {
  if (projectTumbler == -1) {
    porfolioProjects[0].classList.remove('pf-project--promo');
    porfolioProjects[0].classList.add('pf-project--accent');
    porfolioProjects[1].classList.add('pf-project--promo');
    porfolioProjects[projectCount + 1].classList.remove('pf-project--accent');
    projectTumbler = 0;
    projectCount = 0;
  } else {
    porfolioProjects[projectCount].classList.remove('pf-project--accent');
    porfolioProjects[projectCount + 1].classList.remove('pf-project--promo');
    porfolioProjects[projectCount + 1].classList.add('pf-project--accent');

    if (porfolioProjects.length > projectCount + 2) {
      porfolioProjects[projectCount + 2].classList.remove('pf-project--accent');
      porfolioProjects[projectCount + 2].classList.add('pf-project--promo');
      projectCount += 1;
    } else {
      porfolioProjects[0].classList.add('pf-project--promo');
      projectTumbler = -1;
    }
  }
  projectSliderBtns = document.querySelectorAll('.pf-project--accent .slider-btn');
  projectSliderBtnsEventCreator(projectSliderBtns);
}

function priceListTableHandler(num) {
  document.querySelector('.pl-menu__link--active').classList.remove('pl-menu__link--active');
  priceListCategoryBtns[num].classList.add('pl-menu__link--active');

  document.querySelector('.pl-table--active').classList.remove('pl-table--active');
  priceListTables[num].classList.add('pl-table--active');
}

function simpleSliderHandler(num, sliderImgClass, sliderParentClass, sliderBtns) {
  let activeImage = document.querySelector(`.${sliderParentClass} .${sliderImgClass}--active`);
  activeImage.classList.remove(`${sliderImgClass}--active`);

  let sliderImgs = document.querySelectorAll(`.${sliderParentClass} .${sliderImgClass}`);
  sliderImgs[num].classList.add(`${sliderImgClass}--active`);

  document.querySelector(`.${sliderParentClass} .slider-btn--active`).classList.remove('slider-btn--active');
  sliderBtns[num].classList.add('slider-btn--active');
}

function doubleSliderHandler(num, sliderImgClass, sliderParentClass, sliderBtns) {
  let activeImages = document.querySelectorAll(`.${sliderParentClass} .${sliderImgClass}--active`);
  for (let i = 0; i < activeImages.length; i++) {
    activeImages[i].classList.remove(`${sliderImgClass}--active`);
  }

  let sliderImgs = document.querySelectorAll(`.${sliderParentClass} .${sliderImgClass}`);
  switch (num) {
    case 0:
      sliderImgs[0].classList.add(`${sliderImgClass}--active`);
      sliderImgs[1].classList.add(`${sliderImgClass}--active`);
      break;
    case 1:
      sliderImgs[2].classList.add(`${sliderImgClass}--active`);
      sliderImgs[3].classList.add(`${sliderImgClass}--active`);
      break;
    case 2:
      sliderImgs[4].classList.add(`${sliderImgClass}--active`);
      sliderImgs[5].classList.add(`${sliderImgClass}--active`);
      break;
  }

  document.querySelector(`.${sliderParentClass} .slider-btn--active`).classList.remove('slider-btn--active');
  sliderBtns[num].classList.add('slider-btn--active');
}

function projectSliderBtnsEventCreator(projectSliderBtnsArr) {
  for (let i = 0; i < 3; i++) {
    projectSliderBtnsArr[i].addEventListener('click', () => simpleSliderHandler(i, 'pf-project__slider-img', 'pf-project--accent', projectSliderBtns));
  }
}

function promoSliderBtnsEventCreator(promoSliderBtnsArr) {
  for (let i = 0; i < 3; i++) {
    promoSliderBtnsArr[i].addEventListener('click', () => doubleSliderHandler(i, 'slider__image', 'promo__slider', promoSliderBtns));
  }
}

function showServicesHandler() {
  for (i = 0; i < serviceCards.length; i++) {
    serviceCards[i].style.display = 'flex';
  }
  showServicesBtn.style.display = 'none';
  serviceCards[3].classList.remove('service-card--last');
}


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};