let menuBar = document.querySelector('.menu-bar');
let navbar = document.querySelector('.navbar');


menuBar.addEventListener('click', () => {
    navbar.classList.toggle('show');
});