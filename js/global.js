const menuBtn = document.getElementById('menu-toggle');
const primaryNav = document.getElementById('primary-nav');

menuBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('show-nav');
});

document.body.addEventListener('click', (e) => {
    if (e.target !== menuBtn && !primaryNav.contains(e.target)) {
        primaryNav.classList.remove('show-nav');
    }
});