const mainSlider = require('../../components/sliders/slider_main/slider_main');
const leadingSlider = require('../../components/sliders/slider_leading/slider_leading');
const menuHeader = require('../../components/navs/nav_main/nav_main');

function init() {
    mainSlider.init();
    leadingSlider.init();
    menuHeader.init();
}

module.exports = {
    init: init
};