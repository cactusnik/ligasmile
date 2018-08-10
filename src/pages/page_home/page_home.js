const mainSlider = require('../../components/sliders/slider_main/slider_main');
const leadingSlider = require('../../components/sliders/slider_leading/slider_leading');

function init() {
    mainSlider.init();
    leadingSlider.init();
}

module.exports = {
    init: init
};