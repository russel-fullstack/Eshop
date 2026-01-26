// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');
// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
// });
// // Close the menu when a link is clicked (for better UX on mobile)
// navLinks.querySelectorAll('a').forEach(link => {
//     link.addEventListener('click', () => {
//         navLinks.classList.remove('active');
//     });
// });
// // Optional: Close the menu when clicking outside of it
// document.addEventListener('click', (event) => {
//     if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
//         navLinks.classList.remove('active');
//     }
// });

// // Smooth scrolling for anchor links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) { 
//         e.preventDefault();
//         const targetId = this.getAttribute('href').substring(1);
//         const targetElement = document.getElementById(targetId);                
//         if (targetElement) {
//             targetElement.scrollIntoView({ behavior: 'smooth' });
//         }
//     });
// });