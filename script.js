// Ensure the DOM elements are fully linked before binding events
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            // Toggles our active layout class back and forth
            navMenu.classList.toggle('is-active');
        });
    }
}); 