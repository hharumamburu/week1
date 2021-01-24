'use strict';

import Lunchmenu from '../assets/fazer-menu.json';

console.log("menu json", Lunchmenu);

let courses = [];

const parseFazerMenu = (fazerDailyMenu) => {
  const courses = Object.values(fazerDailyMenu);
  for (const course of courses) {
    courses.push(course.Name);
  }
};

parseFazerMenu(Lunchmenu, courses);

const FazerData = {courses};

export default FazerData;
