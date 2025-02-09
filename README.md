# lab2-JS-Frameworks
# Restaurant Menu System

This is a simple JavaScript-based restaurant menu system that allows users to:

- Display the menu
- Calculate the total cost of an order
- Recommend a meal based on a budget
- Show restaurant hours

## 📜 Files Overview

### `index.js`
This file imports functions from `menu.js` and demonstrates their usage:

- Calls `displayMenu()` to show available menu items.
- Uses `calculateTotal(order)` to compute the total price of a selected order.
- Calls `recommendMeal(budget)` to suggest meals within a given budget.
- Displays restaurant hours using `restaurantHours()`.

### `menu.js`
This file contains four main functions:

1. **`displayMenu()`** – Displays all menu items and their prices.
2. **`calculateTotal(order)`** – Takes an array of menu item IDs and returns the total cost.
3. **`recommendMeal(budget)`** – Suggests the first meal that fits within a given budget.
4. **`restaurantHours()`** – Returns the restaurant’s operating hours.

## 💻 How to Run the Code

1. Clone this repository:
   ```sh
   git clone <https://github.com/samisadevpro/lab2-JS-Frameworks.git>
   cd <https://github.com/samisadevpro/lab2-JS-Frameworks.git>

