// Get the menu toggle and navigation elements
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');

// Add click event to the menu toggle button
menuToggle.addEventListener('click', function() {
  // Toggle the class to open or close the menu
  mobileNav.classList.toggle('nav-open');
});
