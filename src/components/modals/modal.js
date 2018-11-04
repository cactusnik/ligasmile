require('magnific-popup');
module.exports = {
    openModal(elem) {
        $.magnificPopup.open({
            items: {
                src: elem
            },
            type: 'inline',
            preloader: false,
            fixedContentPos: true
        });
    },
    closeModal() {
        $.magnificPopup.close();
    },
    errorModal(str) {
        $.magnificPopup.open({
            items: {
                src: `
                    <div class="modal modal_error">
                      <div class="modal__text">${str}</div>
                    </div>
                `,
                type: 'inline'
            }
        });
    },
    successModal(str) {
        $.magnificPopup.open({
            items: {
                src: `
                    <div class="modal modal_success">
                        <div class="modal__container">
                            <div class="modal__close js-close-modal"></div>
                            <div class="modal__header">
                                <div class="modal__title">${str}</div>
                            </div>
                        </div>
                    </div>
                `,
                type: 'inline',
                showCloseBtn: true
            }
        });
    }
};