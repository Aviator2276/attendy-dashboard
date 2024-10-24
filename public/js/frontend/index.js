import { backendMain, getDatesAttended } from '../backend/script.js';

import { displayOverlays } from './sidebar.js';
import { navbarDisplay } from './componenets/navbar.js';
import {
  homeView,
  offloadHome,
  loadHomeTheme,
  updateHomeTheme,
} from './componenets/home.js';
import {
  classView,
  offloadClass,
  loadClassTheme,
  updateClassTheme,
} from './componenets/class.js';
import { studentView } from './componenets/student.js';

const navbar = document.getElementById('navbar');
const root = document.getElementById('mainContent');

export const main = () => {
  backendMain();
  console.log(localStorage.getItem('page'));
  changePage(localStorage.getItem('page'));
};

export const changePage = (page) => {
  console.log(page);
  if (page === 'home') {
    navbar.innerHTML = navbarDisplay(page);
    changeToHome();
    setTimeout(() => {
      loadHomeTheme();
    }, 10);
  } else if (page === 'student') {
    navbar.innerHTML = navbarDisplay(page);
    changeTostudent();
  } else if (page === 'class') {
    navbar.innerHTML = navbarDisplay(page);
    changeToClass();
    setTimeout(() => {
      loadClassTheme();
    }, 10);
  }
  localStorage.setItem('page', page);
  displayOverlays();
};

const changeToHome = () => {
  root.innerHTML = homeView();
  offloadClass();
};
const changeToClass = () => {
  root.innerHTML = classView();
  offloadHome();
};
const changeTostudent = () => {
  root.innerHTML = studentView();
  offloadHome();
  offloadClass();
};

export const updateTheme = () => {
  updateHomeTheme();
  updateClassTheme();
};
