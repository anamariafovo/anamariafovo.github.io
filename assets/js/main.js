/*========================================== DARK/LIGHT THEME ==========================================*/
const themeButton = document.getElementById("theme-button");
const lightThemeIcon = document.getElementById("light-theme-button");
const darkThemeIcon = document.getElementById("dark-theme-button");

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () =>
  document.body.classList.contains("dark-theme") ? "dark" : "light";

if (localStorage.getItem("selected-theme") == "dark") {
  document.body.classList.add("dark-theme");
  darkThemeIcon.style.display = "inline";
  lightThemeIcon.style.display = "none";
} else {
  document.body.classList.remove("dark-theme");
  darkThemeIcon.style.display = "none";
  lightThemeIcon.style.display = "inline";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (getCurrentTheme() == "dark") {
    darkThemeIcon.style.display = "inline";
    lightThemeIcon.style.display = "none";
    localStorage.setItem("selected-theme", "dark");
  } else {
    darkThemeIcon.style.display = "none";
    lightThemeIcon.style.display = "inline";
    localStorage.setItem("selected-theme", "light");
  }
});

/*========================================== TOGGLE NAVBAR MENU ==========================================*/
var navbarElements = document.getElementById("navbarElements");
var navbarButton = document.getElementById("navbarButton");

if (window.innerWidth > 768) {
  navbarButton.style.display = "none";
} else {
  navbarButton.style.display = "block";
}

navbarButton.addEventListener("click", (event) => {
  event.preventDefault();
  navbarElements.classList.toggle("show-navbar-elements");
});

if (window.innerWidth <= 768) {
  var navbarLinks = document.getElementById("navbarLinks").children;
  for (i = 0; i < navbarLinks.length; ++i) {
    navbarLinks[i].addEventListener("click", () => {
      navbarElements.classList.remove("show-navbar-elements");
    });
  }
}

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

/*========================================== SKILLS GLOBE ==========================================*/
window.onload = function () {
  TagCanvas.Start("tagcanvas", "skill-tags", {
    textColour: "#3c3f46",
    outlineThickness: 0,
    outlineColour: "rgba(0,0,0,0)",
    reverse: true,
    depth: 0.8,
    maxSpeed: 0.05,
    wheelZoom: false,
  });
};
