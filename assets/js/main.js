/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById('theme-button');
const themeIcon = document.getElementById('theme-icon') ?? null;

if (themeIcon) {
  const darkTheme = 'dark-theme';
  const iconTheme = 'uil-sun';

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () =>
    themeIcon.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
      darkTheme
    );
    themeIcon.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](
      iconTheme
    );
  }

  themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeIcon.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
  });
}

/*========================================== TOGGLE MENU ==========================================*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('btn-toggle');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
});

/*========================================== REMOVE MENU MOBILE ==========================================*/
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  //When we click on each nav-link, we remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*========================================== SET DATE DYNAMICALLY ==========================================*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
