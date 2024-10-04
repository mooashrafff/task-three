// Smooth Scroll Navigation
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dynamic Year in Footer
const yearSpan = document.getElementById('year');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;
