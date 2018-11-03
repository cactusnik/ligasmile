function init() {
    const $modalEmail= $('.modal_email');

    if(!$modalEmail[0]) {
        return;
    }

    const modalEmailSettings = {
        items: {
            src: '#modal-email'
        },
        type: 'inline',
        mainClass: 'mfp-rotate-in-right',
        removalDelay: 300,
        showCloseBtn: false,
        closeOnContentClick: false,
        closeOnBgClick:false,
        callbacks: {
            close: function() {

            }
        }
    };

    function open() {
        $.magnificPopup.open(modalEmailSettings)
    }

    function close() {
        $.magnificPopup.close();
    }

    window.cactusnik = window.cactusnik || {};
    window.cactusnik.modaEmail = {
        open,
        close
    }
}



module.exports = {
    init: init
};

