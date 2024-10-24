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
import {
  studentView,
  offloadStudent,
  loadStudentTheme,
  updateStudentTheme,
} from './componenets/student.js';

const navbar = document.getElementById('navbar');
const root = document.getElementById('mainContent');

export const main = () => {
  backendMain();
  changePage(localStorage.getItem('page'));
};

export const changePage = (page) => {
  if (page === 'home') {
    navbar.innerHTML = navbarDisplay(page);
    changeToHome();
  } else if (page === 'class') {
    navbar.innerHTML = navbarDisplay(page);
    changeToClass();
  } else if (page === 'student') {
    navbar.innerHTML = navbarDisplay(page);
    changeTostudent();
  }
  localStorage.setItem('page', page);
  displayOverlays();
};

const changeToHome = () => {
  root.innerHTML = homeView();
  offloadClass();
  offloadStudent();
  setTimeout(() => {
    loadHomeTheme();
  }, 10);
};
const changeToClass = () => {
  root.innerHTML = classView();
  offloadHome();
  offloadStudent();
  setTimeout(() => {
    loadClassTheme();
  }, 10);
};
const changeTostudent = () => {
  root.innerHTML = studentView();
  offloadHome();
  offloadClass();
};

export const updateTheme = () => {
  updateHomeTheme();
  updateClassTheme();
  updateStudentTheme();
};
