// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-button');
  const navMenu = document.querySelector('.nav-menu');
  
  menuBtn.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });
  
  // Form submission
  const contactForm = document.getElementById('email-form');
  if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Add form submission logic
    });
  }
});
