// index.js

import {
  displayMenu,
  calculateTotal,
  recommendMeal,
  restaurantHours,
} from "./menu.js";

// Show menu
displayMenu();

// Order example: Burger & Mo:mo (IDs 1 & 3)
const order = [1, 3];
console.log(calculateTotal(order));

// Recommend a meal for $6
console.log(recommendMeal(6));

// Show restaurant hours
console.log(restaurantHours());
