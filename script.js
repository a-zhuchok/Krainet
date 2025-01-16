document.getElementById('burgerMenu').addEventListener('click', function () {
    document.getElementById('headerMenu').classList.add('open');
    document.getElementById('header').classList.add('show');
    document.querySelector('.header__content').classList.add('shift');
});

document.getElementById('closeMenu').addEventListener('click', function () {
    document.getElementById('headerMenu').classList.remove('open');
    document.getElementById('header').classList.remove('show');
    document.querySelector('.header__content').classList.remove('shift');
});