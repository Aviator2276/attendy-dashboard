import { backendMain, datesAttended } from '../backend/script.js';

import { displayOverlays } from './sidebar.js';
import { navbarDisplay } from './componenets/navbar.js';
import { homeView } from './componenets/home.js';
import { classView } from './componenets/class.js';
import { peopleView } from './componenets/people.js';

const navbar = document.getElementById('navbar');
const root = document.getElementById('mainContent');

export const Main = () => {
  backendMain();
  changePage(localStorage.getItem('page'));
};

export const changePage = (page) => {
  if (page === 'people') {
    navbar.innerHTML = navbarDisplay(page);
    changeToPeople();
  } else if (page === 'class') {
    navbar.innerHTML = navbarDisplay(page);
    changeToClass();
  } else {
    navbar.innerHTML = navbarDisplay(page);
    changeToHome();
  }
  localStorage.setItem('page', page);
  displayOverlays();
};

const changeToHome = () => {
  root.innerHTML = homeView();
};
const changeToClass = () => {
  root.innerHTML = classView();
};
const changeToPeople = () => {
  root.innerHTML = peopleView();
};
