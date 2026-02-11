const hamburgerBtn = document.querySelector('.hamburger-btn');
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Toggle menu open/close
function toggleMenu() {
  const isOpen = hamburgerMenu.classList.toggle('show-menu');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
}

// Close menu
function closeMenu() {
  hamburgerMenu.classList.remove('show-menu');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}

// Click hamburger button
hamburgerBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Click outside menu closes it
document.addEventListener('click', (e) => {
  if (
    hamburgerMenu.classList.contains('show-menu') &&
    !hamburgerMenu.contains(e.target) &&
    !hamburgerBtn.contains(e.target)
  ) {
    closeMenu();
  }
});

// Prevent clicks inside menu from closing it
hamburgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
});

// Escape key closes menu and focuses button
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && hamburgerMenu.classList.contains('show-menu')) {
    closeMenu();
    hamburgerBtn.focus();
  }
});
