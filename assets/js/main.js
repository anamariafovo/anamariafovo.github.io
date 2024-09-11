/*========================================== DARK/LIGHT THEME ==========================================*/
/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById('theme-button');

if (themeIcon) {
  const lightThemeIcon = document.getElementById('light-theme-button');
  const darkThemeIcon = document.getElementById('dark-theme-button');

  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-theme-icon');

  const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
  const getCurrentIcon = () =>
    themeIcon.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';

  if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
      darkTheme
    );
    themeIcon.classList[selectedIcon === 'dark-theme-button' ? 'add' : 'remove'](
        lightThemeIcon
    );
  }

  themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeIcon.classList.toggle(iconTheme);
    // Save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-theme-icon', getCurrentIcon());
  });
}

/*========================================== TOGGLE MENU ==========================================*/

/*========================================== REMOVE MENU MOBILE ==========================================*/

/*========================================== SHOW PROJECT LIST ==========================================*/

/*========================================== SET DATE DYNAMICALLY ==========================================*/

