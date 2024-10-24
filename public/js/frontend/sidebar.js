import { changePage } from './index.js';

export const displayOverlays = () => {
  const mainContent = document.getElementById('mainContent');

  const navbar = document.getElementById('navbar');
  const navbarText = document.getElementsByClassName('navbar-text');
  const navbarMinimize = document.getElementById('navbarMinimize');
  const navbarArrow = document.getElementById('navbarArrow');
  const navbarQuickAction = document.getElementById('navbarQuickAction');
  const mobileNavbarButton = document.getElementById('mobileNavbarButton');

  const homeLink = document.getElementById('homeLink');
  const classLink = document.getElementById('classLink');
  const peopleLink = document.getElementById('peopleLink');

  const darkModeSwitch = document.getElementById('darkModeSwitch');
  const darkModeIcon = document.getElementById('darkModeIcon');

  const moonIcon = `<path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />`;
  const sunIcon = `<path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />`;

  let navbarMinimized;
  let navbarMobileMinimized = true;

  if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    darkModeIcon.innerHTML = sunIcon;
    darkModeIcon.classList.add('rotate-90');
  } else {
    darkModeIcon.innerHTML = moonIcon;
  }

  darkModeSwitch.addEventListener('click', () => {
    if (localStorage.getItem('color-theme')) {
      if (localStorage.getItem('color-theme') === 'light') {
        changeToLight();
      } else {
        changeToDark();
      }
    } else {
      if (document.documentElement.classList.contains('dark')) {
        changeToDark();
      } else {
        changeToLight();
      }
    }
  });

  function changeToDark() {
    darkModeIcon.innerHTML = moonIcon;
    darkModeIcon.classList.remove('rotate-90');

    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
  }

  function changeToLight() {
    darkModeIcon.innerHTML = sunIcon;
    darkModeIcon.classList.add('rotate-90');

    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
  }

  function minimizeNavbar() {
    navbarArrow.classList.remove('-scale-100');
    navbar.classList.remove('w-52');
    navbar.classList.add('w-16');
    mainContent.classList.remove('md:ml-52');
    mainContent.classList.add('md:ml-16');
    for (let element of navbarText) {
      element.classList.add('hidden');
    }
    navbarQuickAction.classList.remove('mb-2');
    navbarQuickAction.classList.add('mb-14');
  }

  function maximizeNavbar() {
    navbarArrow.classList.add('-scale-100');
    navbar.classList.add('w-52');
    navbar.classList.remove('w-16');
    mainContent.classList.add('md:ml-52');
    mainContent.classList.remove('md:ml-16');
    navbar.classList.remove('-translate-x-full');
    setTimeout(() => {
      for (let element of navbarText) {
        element.classList.remove('hidden');
      }
    }, 70);
    navbarQuickAction.classList.add('mb-2');
    navbarQuickAction.classList.remove('mb-14');
  }

  function minimizeNavbarMobile() {
    navbar.classList.add('-translate-x-full');
  }

  function navbarToggleSize() {
    if (window.innerWidth >= 768) {
      if (navbarMinimized == 'true') {
        maximizeNavbar();
        navbarMinimized = 'false';
      } else {
        minimizeNavbar();
        navbarMinimized = 'true';
      }
      localStorage.setItem('navbarMinimize', navbarMinimized);
    } else {
      minimizeNavbarMobile();
      navbarMobileMinimized = true;
    }
  }

  function navbarMobileToggle() {
    if (navbarMobileMinimized) {
      maximizeNavbar();
      navbarMobileMinimized = false;
    } else {
      minimizeNavbarMobile();
      navbarMobileMinimized = true;
    }
  }

  navbarMinimize.addEventListener('click', navbarToggleSize);
  mobileNavbarButton.addEventListener('click', navbarMobileToggle);
  document.addEventListener('mousedown', (event) => {
    if (window.innerWidth <= 768 && navbarMobileMinimized === false) {
      if (!navbar.contains(event.target)) {
        minimizeNavbarMobile();
        navbarMobileMinimized = true;
      }
    }
  });

  if (
    localStorage.getItem('navbarMinimize') != null &&
    localStorage.getItem('navbarMinimize') != undefined
  ) {
    if (localStorage.getItem('navbarMinimize') === 'true') {
      minimizeNavbar();
      navbarMinimized = 'true';
    }
  } else {
    localStorage.setItem('navbarMinimize', false);
  }

  homeLink.addEventListener('click', () => {
    changePage('home');
  });
  classLink.addEventListener('click', () => {
    changePage('class');
  });
  peopleLink.addEventListener('click', () => {
    changePage('people');
  });
};
