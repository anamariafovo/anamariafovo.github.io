/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById('theme-button');
const lightThemeIcon = document.getElementById('light-theme-button');
const darkThemeIcon = document.getElementById('dark-theme-button');

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
  document.body.classList.contains('dark-theme') ? 'dark' : 'light';

if (localStorage.getItem('selected-theme') == 'dark') {
  document.body.classList.add('dark-theme');
  darkThemeIcon.style.display = 'inline';
  lightThemeIcon.style.display = 'none';
} else {
  document.body.classList.remove('dark-theme');
  darkThemeIcon.style.display = 'none';
  lightThemeIcon.style.display = 'inline';
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');

  if (getCurrentTheme() == 'dark') {
    darkThemeIcon.style.display = 'inline';
    lightThemeIcon.style.display = 'none';
    localStorage.setItem('selected-theme', 'dark');
  } else {
    darkThemeIcon.style.display = 'none';
    lightThemeIcon.style.display = 'inline';
    localStorage.setItem('selected-theme', 'light');
  }
});

document.onscroll = function() {
  if (window.innerHeight + window.scrollY > document.body.clientHeight) {
      document.getElementById('presentation-navbar').style.display='none';
  } else {
    document.getElementById('presentation-navbar').style.display='flex';
  }
}

/*========================================== TOGGLE MENU ==========================================*/

/*========================================== REMOVE MENU MOBILE ==========================================*/

/*========================================== SHOW PROJECT LIST ==========================================*/

/*========================================== SET DATE DYNAMICALLY ==========================================*/
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();
