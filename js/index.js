const menu = document.getElementById('menu');
const menuLink = document.getElementById('menu-link');

menuLink.addEventListener('click', function(event) {
    event.preventDefault();

    menu.classList.toggle('dropdown-active');
});