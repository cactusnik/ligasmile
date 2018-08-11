require('magnific-popup');
const pageHome = require('../pages/page_home/page_home');
const modalEmail = require('../components/modals/modal_email/modal_email');
const modalPhone = require('../components/modals/modal_phone/modal_phone');
const modal = require('../components/modals/modal');
function init() {
    pageHome.init();

    modalEmail.init();
    modalPhone.init();

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