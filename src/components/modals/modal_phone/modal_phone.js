function init() {
    const $modalPhone= $('.modal_phone');

    if(!$modalPhone[0]) {
        return;
    }

    const modalPhoneSettings = {
        items: {
            src: '#modal-email'
        },
        type: 'inline',
        mainClass: 'mfp-rotate-in-right',
        removalDelay: 300,
        showCloseBtn: false,
        callbacks: {
            close: function() {

            }
        }
    };

    function open() {
        $.magnificPopup.open(modalPhoneSettings)
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

