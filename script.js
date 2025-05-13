
//-------------------------------------------------- hamberger menu --------------------------------
  // Toggle Mobile Menu
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('show');
  });

  // Toggle Dark/Light Mode Icon
  const modeToggle = document.getElementById('modeToggle');
  const body = document.body;

  modeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');

    if (body.classList.contains('dark-mode')) {
      modeToggle.textContent = '☀️'; // Sun Icon for Light Mode
    } else {
      modeToggle.textContent = '🌙'; // Moon Icon for Dark Mode
    }
  });
