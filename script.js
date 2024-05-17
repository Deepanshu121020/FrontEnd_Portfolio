

document.addEventListener('DOMContentLoaded', function () {
    const burger = document.getElementById('burger');
    const mobileNav = document.getElementById('mobile-nav');
    const close = document.getElementById('close');
    const navLinks = mobileNav.querySelectorAll('a');

    burger.addEventListener('click', function () {
        mobileNav.classList.add('show');
    });

    close.addEventListener('click', function () {
        mobileNav.classList.remove('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileNav.classList.remove('show');
        });
    });
});