// main.js

document.addEventListener("DOMContentLoaded", function() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');

    // Toggle Menu
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('show-menu');
        });
    }
});
//Change Background header
 const bgHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header')
                    : header.classList.remove('bg-deader')
 }
window.addEventListener('scroll', bgHeader)


