const Swiper = require('swiper/dist/js/swiper.min');


const sliderMainSettings = {
    loop: true,
    navigation: {
        nextEl: document.querySelector(".slider_main .slider__btn_next"),
        prevEl: document.querySelector(".slider_main .slider__btn_prev"),
    },
    breakpoints: {
        // when window width is <= 1200px
        1200: {
            navigation: {
                nextEl: '',
                prevEl: '',
            }
        }
    },
    autoplay: {
        delay: 4000,
    },
};

function init() {
    const sliderMain = new Swiper('.slider_main .slider__container', sliderMainSettings)
}

module.exports = {
    init: init
};