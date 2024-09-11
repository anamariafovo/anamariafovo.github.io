/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById('theme-button');
const lightThemeIcon = document.getElementById('light-theme-button');
const darkThemeIcon = document.getElementById('dark-theme-button');

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains('dark-theme') ? 'dark' : 'light';

themeButton.addEventListener('click', () => {
  if (getCurrentTheme() == 'dark') {
    document.body.classList.remove('dark-theme');
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'inline';
  } else {
    document.body.classList.add('dark-theme');
    darkThemeIcon.style.display = 'inline';
    lightThemeIcon.style.display = 'none';
  }

  localStorage.setItem('selected-theme', getCurrentTheme());
});

/*========================================== TOGGLE MENU ==========================================*/

/*========================================== REMOVE MENU MOBILE ==========================================*/

/*========================================== SHOW PROJECT LIST ==========================================*/

/*========================================== SET DATE DYNAMICALLY ==========================================*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
