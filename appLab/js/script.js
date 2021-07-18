'use strict'
let $ = document.body;
let menuBtn = $.querySelector('.menu__btn');
let navBlock = $.querySelector('.nav');

let pricesCardArray = $.querySelectorAll('.prices__card');
let previousCard = pricesCardArray[1];
let subPeriodBtnsArray = $.querySelectorAll('.sub__period_title');
let btnCover = $.querySelector('.selected__cover');
let previousPeriodBtn = subPeriodBtnsArray[0];

let pricesTrack = $.querySelector('.prices__track');

let reviewsCount = $.querySelectorAll('.reviews__item').length;
let reviewsArray = $.querySelectorAll('.reviews__item');
let reviewsTrack = $.querySelector('.reviews__track')
let btnReviewsPrevious = $.querySelector('.review__btn__previous');
let btnReviewsNext = $.querySelector('.review__btn__next');
let moveValue = 0;

let spoilerItemsArray = $.querySelectorAll('.spoiler__item');
spoilerItemsArray[0].classList.add('spoiler__active');
let previousActiveSpoiler = spoilerItemsArray[0];

spoilerItemsArray.forEach(spoiler => {
    spoiler.onclick = () => {
        spoilers(spoiler);
    }
})



btnReviewsPrevious.classList.add('btn-disable');
btnReviewsNext.onclick = () => {
    if(moveValue == reviewsCount - 2){
        btnReviewsNext.classList.add('btn-disable');
    }
    if(moveValue !== reviewsCount - 1){
        moveValue += 1;
        btnReviewsPrevious.classList.remove('btn-disable');
        reviewsTrack.style.transform = `translateX(${-moveValue * 100}%)`     
    }
    console.log(moveValue);
}
btnReviewsPrevious.onclick = () => {
    if(moveValue == 1){
        btnReviewsPrevious.classList.add('btn-disable');
    }
    if(moveValue !== 0){
        btnReviewsNext.classList.remove('btn-disable');
        moveValue -= 1;
        reviewsTrack.style.transform = `translateX(${-moveValue * 100}%)`     
    }
    console.log(moveValue);

}


if(menuBtn){
    menuBtn.onclick = () => {
        menuBtn.classList.toggle('menu__btn_close');
        navBlock.classList.toggle('nav__open')
    }
}


for(let i = 0; i < subPeriodBtnsArray.length; i++){

    subPeriodBtnsArray[i].onclick = () => {
        if(previousPeriodBtn !== subPeriodBtnsArray[i] && previousPeriodBtn){
            subPeriodBtnsArray[i].classList.add('selected')
            previousPeriodBtn.classList.remove('selected');
        }
        previousPeriodBtn = subPeriodBtnsArray[i]; 
        pricesTrack.style.transform = `translateX(${-100 * i}%)`;
        btnCover.style.transform = `translate(${i * 141.5}px)`;
    }
}

pricesCardArray.forEach((card) => {
    card.onclick = () => {
        if(previousCard && previousCard !== card){
            previousCard.classList.remove('prices__card__selected');
        }
        card.classList.add('prices__card__selected');
        previousCard = card;
    }
})

function spoilers(spoiler){
    spoiler.classList.add('spoiler__active');
    if(previousActiveSpoiler || previousActiveSpoiler !== spoiler){
        previousActiveSpoiler.classList.remove('spoiler__active');
        previousActiveSpoiler = spoiler;
    }
}

