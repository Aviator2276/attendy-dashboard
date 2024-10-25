import { backendMain, getDatesAttended } from '../backend/script.js';

import { displayOverlays } from './sidebar.js';
import { navbarDisplay } from './componenets/navbar.js';
import {
  homeView,
  offloadHome,
  loadHomeTheme,
  updateHomeTheme,
  updateHomeCharts,
} from './componenets/home.js';
import {
  classView,
  offloadClass,
  loadClassTheme,
  updateClassTheme,
  updateClassCharts,
} from './componenets/class.js';
import {
  studentView,
  offloadStudent,
  loadStudentTheme,
  updateStudentTheme,
  updateStudentCharts,
  runStudentBackground,
} from './componenets/student.js';

const navbar = document.getElementById('navbar');
const root = document.getElementById('mainContent');

const updateInterval = 5000000;

let homeDataRefresh;
let classDataRefresh;
let studentDataRefresh;

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
  homeDataRefresh = setInterval(() => {
    updateHomeCharts();
  }, updateInterval);
};
const changeToClass = () => {
  root.innerHTML = classView();
  clearInterval(homeDataRefresh);
  offloadHome();
  offloadStudent();
  setTimeout(() => {
    loadClassTheme();
  }, 10);
  setTimeout(() => {
    updateClassCharts();
  }, updateInterval);
};
const changeTostudent = () => {
  root.innerHTML = studentView();
  clearInterval(homeDataRefresh);
  offloadHome();
  offloadClass();
  setTimeout(() => {
    runStudentBackground();
    loadStudentTheme();
  }, 10);
};

export const updateTheme = () => {
  updateHomeTheme();
  updateClassTheme();
  updateStudentTheme();
};
