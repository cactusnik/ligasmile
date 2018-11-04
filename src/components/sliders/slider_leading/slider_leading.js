const Swiper = require('swiper/dist/js/swiper.min');


const sliderMainSettings = {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: document.querySelector(".slider_leading .slider__btn_next"),
        prevEl: document.querySelector(".slider_leading .slider__btn_prev"),
    },
    breakpoints: {
        // when window width is <=
        576: {
            slidesPerView: 1,
            centeredSlides: false
        },
        // when window width is <= 640px
        992: {
            slidesPerView: 2,
            spaceBetween: 10,
            centeredSlides: false
        }
    }
};

function init() {
    const sliderMain = new Swiper('.slider_leading .slider__container', sliderMainSettings)
}

module.exports = {
    init: init
};