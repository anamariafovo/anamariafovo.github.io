/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById("theme-button");
const lightThemeIcon = document.getElementById("light-theme-button");
const darkThemeIcon = document.getElementById("dark-theme-button");

const storedTheme = localStorage.getItem("selected-theme");

const systemPrefersDark = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;

(function initTheme() {
  let themeToApply;

  if (storedTheme) {
    themeToApply = storedTheme;
  } else {
    themeToApply = systemPrefersDark ? "dark" : "light";
  }

  applyTheme(themeToApply);
})();

function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
    darkThemeIcon.style.display = "inline";
    lightThemeIcon.style.display = "none";
  } else {
    document.body.classList.remove("dark-theme");
    darkThemeIcon.style.display = "none";
    lightThemeIcon.style.display = "inline";
  }
}

themeButton.addEventListener("click", () => {
  const newTheme = document.body.classList.contains("dark-theme")
    ? "light"
    : "dark";

  applyTheme(newTheme);
  localStorage.setItem("selected-theme", newTheme);
});

/*========================================== TOGGLE NAVBAR MENU ==========================================*/
var navbar = document.querySelector(".navbar-fixed");
var navbarButton = document.getElementById("navbarButton");

if (window.innerWidth > 768) {
  navbarButton.style.display = "none";
} else {
  navbarButton.style.display = "block";
}

navbarButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbar.classList.toggle("expanded");
});

/*========================================== HIDE PROJECT MENU ON SCROLL ==========================================*/
var projectMenu = document.getElementById("projectPresentationNavbar");

if (projectMenu) {
  document.onscroll = function () {
    if (window.innerHeight + window.scrollY > document.body.clientHeight) {
      projectMenu.style.display = " none";
    } else {
      projectMenu.style.display = "flex";
    }
  };
}

/*========================================== TOGGLE PROJECT MENU ==========================================*/
var projectPresentationNavbarButton = document.getElementById(
  "projectPresentationNavbarButton"
);

if (projectPresentationNavbarButton) {
  if (window.innerWidth > 768) {
    projectPresentationNavbarButton.style.display = "none";
  } else {
    projectPresentationNavbarButton.style.display = "block";
  }

  projectPresentationNavbarButton.addEventListener("click", (event) => {
    event.preventDefault();
    projectPresentationNavbarButton.innerText =
      projectPresentationNavbarButton.innerText === "Open Menu"
        ? "Close Menu"
        : "Open Menu";
    projectMenu.classList.toggle("show-project-presentation-navbar");
  });
}

/*========================================== SET DATE DYNAMICALLY ==========================================*/
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/*========================================== DESKTOP BUTTON ==========================================*/
const desktopButton = document.getElementById("desktopButton");
const isDesktop = window.innerWidth > 968;
if (isDesktop) {
  desktopButton.style.display = "block";
} else {
  desktopButton.style.display = "none";
}

/*========================================== SKILLS GLOBE ==========================================*/
window.onload = function () {
  const canvas = document.getElementById("tagcanvas");

  function resizeCanvas() {
    const isMobile = "ontouchstart" in window || window.innerWidth <= 768;
    let baseSize = Math.min(window.innerWidth * 0.8, 500);

    let width = isMobile
      ? baseSize + 55
      : Math.min(baseSize + 100, window.innerWidth);
    let height = isMobile ? baseSize + 60 : baseSize;

    canvas.width = width;
    canvas.height = height;

    TagCanvas.Start("tagcanvas", "skill-tags", {
      textColour: "#3c3f46",
      outlineThickness: 0,
      outlineColour: "rgba(0,0,0,0)",
      reverse: true,
      depth: 0.8,
      maxSpeed: 0.05,
      initial: [0.1, -0.1],
      wheelZoom: false,
      dragControl: isMobile,
      pinchZoom: isMobile,
      noSelect: true,
    });
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
};
