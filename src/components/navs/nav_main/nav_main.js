function init() {
    const toggleMenuBtn = document.getElementsByClassName('header__toggle'),
          menu = document.querySelector('.nav.nav_main'),
          closeMenuBtn = document.getElementsByClassName('nav__close');

    if(!menu) return;
    toggleMenuBtn[0].addEventListener('click', () => {
        menu.classList.add('nav_active');
    });

    closeMenuBtn[0].addEventListener('click', () => {
        menu.classList.remove('nav_active');
    });
}

module.exports = {
    init : init
};