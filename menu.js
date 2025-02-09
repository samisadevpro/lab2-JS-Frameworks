// menu.js
/* Here we define function to manage the restaurant menu
 */

// Function 1: Display menu items
export function displayMenu() {
  const menu = [
    { id: 1, name: "Burger", price: 5.99 },
    { id: 2, name: "Pizza", price: 8.99 },
    { id: 3, name: "Mo:mo", price: 7.99 },
    { id: 4, name: "Egg", price: 4.99 },
  ];

  console.log("Restaurant Menu:");
  menu.forEach((item) => {
    console.log(`${item.id}. ${item.name} - $${item.price.toFixed(2)}`);
  });
}

// Function 2: Calculate total cost based on selected items
export function calculateTotal(order) {
  const menu = {
    1: 5.99, // Burger
    2: 8.99, // Pizza
    3: 7.99, // Mo:mo
    4: 4.99, // Egg
  };

  let total = order.reduce((sum, itemId) => sum + (menu[itemId] || 0), 0);
  return `Total cost: $${total.toFixed(2)}`;
}

// Function 3: Recommend a meal based on budget
export function recommendMeal(budget) {
  const menu = [
    { name: "Burger", price: 5.99 },
    { name: "Pizza", price: 8.99 },
    { name: "Mo:mo", price: 7.99 },
    { name: "Egg", price: 4.99 },
  ];

  const affordableMeals = menu.filter((item) => item.price <= budget);

  if (affordableMeals.length === 0) {
    return "Sorry, no meals available within your budget!";
  }

  return `Recommended meal: ${
    affordableMeals[0].name
  } - $${affordableMeals[0].price.toFixed(2)}`;
}

// Function 4: Display restaurant hours
export function restaurantHours() {
  return "Restaurant is open from 10 AM to 11 PM.";
}
