// Typed.js effect for hero section
const typed = new Typed('.typed-text', {
  strings: [
    "Web Developer 💻",
    "JavaScript Enthusiast ⚡",
    "Open Source Contributor 🌍",
    "UI/UX Designer 🎨"
  ],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: tr
});

// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form basic validation
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message!');
    form.reset();
  });
}
// ...existing code...

// Simple form submission alert
document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting me! I’ll get back to you soon.");
  this.reset();
});