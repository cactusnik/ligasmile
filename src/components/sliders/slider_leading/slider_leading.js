const Swiper = require('swiper/dist/js/swiper.min');


const sliderMainSettings = {
    effect: 'flip',
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: document.querySelector(".slider_leading .slider__btn_next"),
        prevEl: document.querySelector(".slider_leading .slider__btn_prev"),
    },
};

function init() {
    const sliderMain = new Swiper('.slider_leading .slider__container', sliderMainSettings)
}

module.exports = {
    init: init
};