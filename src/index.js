'use strict';

import SodexoData from './modules/sodexo-data';
import FazerData from './modules/fazer-data';
import FazerDataEn from './modules/fazer-data-en';

let languageSetting = 'fi';


/**
 * Displays lunch menu items as html list
 *
 * @param {Array} menu - Lunch menu array
 */
const renderSodexoMenu = (menu) => {
  const list = document.querySelector('#sodexo');
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }

};

const renderFazerMenu = (menu) => {
  const list = document.querySelector('#fazer');
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
};

const renderFazerMenuEn = (menu) => {
  const list = document.querySelector('#fazer');
  list.innerHTML = '';
  for (const item of menu) {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    list.appendChild(listItem);
  }
}


/**
 * Switch app lang en/fi
 */
const switchLanguage = () => {
  if (languageSetting === 'fi') {
    languageSetting = 'en';
    renderSodexoMenu(SodexoData.coursesEn);
    renderFazerMenu(FazerData.courses);
  } else {
    languageSetting = 'fi';
    renderSodexoMenu(SodexoData.coursesFi);
    renderFazerMenuEn(FazerDataEn.courses);
  }
  console.log('change language to: ', languageSetting);
};

/**
 * Sorts menu alphapetically
 *
 * @param {Array} menu
 * @param {string} order
 * @returns Sorted menu array
 */
const sortMenu = (menu, order) => {
  if (order == 'desc') {
    return menu.sort().reverse();
  } else {
    return menu.sort();
  }
};

/**
 * Eventhandler for sort menu button
 */
const renderSortedMenu = () => {
  if (languageSetting === 'en') {
    renderSodexoMenu(sortMenu(SodexoData.coursesEn, 'asc'));
  } else {
    renderSodexoMenu(sortMenu(SodexoData.coursesFi, 'desc'));
  }
};

/**
 * Picks a random dish from lunch menu array
 *
 * @param {Array} menu
 * @returns string dish name
 */
const pickRandomDish = (menu) => {
  const randomIndex = Math.floor(Math.random() * menu.length);
  return menu[randomIndex];
};

const displayRandomDish = () => {
  alert(pickRandomDish(SodexoData.coursesFi));
};





const init = () => {
  document.querySelector('#switch-lang').addEventListener('click', switchLanguage);
  document.querySelector('#sort-menu').addEventListener('click', renderSortedMenu);
  document.querySelector('#pick-dish').addEventListener('click', displayRandomDish);
  renderSodexoMenu(SodexoData.coursesFi);
  renderFazerMenuEn(FazerData.courses);
};
init();


