'use strict'
//menu
let $ = document.body;
let menuBtn = $.querySelector('.menu__btn');
let navBlock = $.querySelector('.nav');
//menu

//sub pediod
let pricesCardArray = $.querySelectorAll('.prices__card');
let previousCard = pricesCardArray[1];
let subPeriodBtnsArray = $.querySelectorAll('.sub__period_title');
let btnCover = $.querySelector('.selected__cover');
let previousBtn = subPeriodBtnsArray[0];
//sub period

//prices
let pricesTrack = $.querySelector('.prices__track');
//prices

//review
let reviewsCount = $.querySelectorAll('.reviews__item').length;
let reviewsArray = $.querySelectorAll('.reviews__item');
let reviewsTrack = $.querySelector('.reviews__track')
let btnPrevious = $.querySelector('.review__btn__previous');
let btnNext = $.querySelector('.review__btn__next');
let moveValue = 0;
//review

//review
btnPrevious.classList.add('btn-disable');
btnNext.onclick = () => {
    if(moveValue == reviewsCount - 2){
        btnNext.classList.add('btn-disable');
    }
    if(moveValue !== reviewsCount - 1){
        moveValue += 1;
        btnPrevious.classList.remove('btn-disable');
        reviewsTrack.style.transform = `translateX(${-moveValue * 100}%)`     
    }
    console.log(moveValue);
}
btnPrevious.onclick = () => {
    if(moveValue == 1){
        btnPrevious.classList.add('btn-disable');
    }
    if(moveValue !== 0){
        btnNext.classList.remove('btn-disable');
        moveValue -= 1;
        reviewsTrack.style.transform = `translateX(${-moveValue * 100}%)`     
    }
    console.log(moveValue);

}
//review


//menu 
if(menuBtn){
    menuBtn.onclick = () => {
        menuBtn.classList.toggle('menu__btn_close');
        navBlock.classList.toggle('nav__open')
    }
}
//menu 

//sub pediod

for(let i = 0; i < subPeriodBtnsArray.length; i++){

    subPeriodBtnsArray[i].onclick = () => {
        if(previousBtn !== subPeriodBtnsArray[i] && previousBtn){
            subPeriodBtnsArray[i].classList.add('selected')
            previousBtn.classList.remove('selected');
        }
        previousBtn = subPeriodBtnsArray[i]; 
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
//sub pediod

