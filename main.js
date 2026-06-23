let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark'); // Toggles the X icon for closing the navbar
    navbar.classList.toggle('active');     // Toggles the active class for the navbar
};
