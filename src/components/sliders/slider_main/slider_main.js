const Swiper = require('swiper/dist/js/swiper.min');


const sliderMainSettings = {
    loop: true,
    navigation: {
        nextEl: document.querySelector(".slider_main .slider__btn_prev"),
        prevEl: document.querySelector(".slider_main .slider__btn_next"),
    },
};

function init() {
    const sliderMain = new Swiper('.slider_main .slider__container', sliderMainSettings)
}

module.exports = {
    init: init
};