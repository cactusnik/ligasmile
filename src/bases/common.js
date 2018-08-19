require('magnific-popup');
require('@fancyapps/fancybox');
const pageHome = require('../pages/page_home/page_home');
const modalEmail = require('../components/modals/modal_email/modal_email');
const modalPhone = require('../components/modals/modal_phone/modal_phone');
const modal = require('../components/modals/modal');
const pageLeading = require('../pages/page_leading/page_leading');

function init() {
    pageHome.init();

    modalEmail.init();
    modalPhone.init();
    pageLeading.init();


    $(document).on('click', '.js-popup-modal', function (e) {
        e.preventDefault();
        let popupElem = $(this).attr('href');

        modal.openModal(popupElem);
    });

    $(document).on('click', '.js-close-modal', function () {
        modal.closeModal();
    });
}

module.exports = {
    init: init
};