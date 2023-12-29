// Write your code here
class Breakfast {
    constructor(food, drink) {
      this.food = food;
      this.drink = drink;
    }
  }
  
  // Class for Lunch
  class Lunch {
    constructor(salad, soup, drink) {
      this.salad = salad;
      this.soup = soup;
      this.drink = drink;
    }
  }
  
  // Class for Dinner
  class Dinner {
    #dessert;
  
    constructor(salad, soup, entree, dessert) {
      this.salad = salad;
      this.soup = soup;
      this.entree = entree;
      this.#dessert = dessert;
    }
  }

  // Creating instances for Breakfast
let breakfast1 = new Breakfast("Omelette", "Orange Juice");
let breakfast2 = new Breakfast("Pancakes", "Coffee");

console.log(breakfast1);
// Output: Breakfast { food: 'Omelette', drink: 'Orange Juice' }

console.log(breakfast2);
// Output: Breakfast { food: 'Pancakes', drink: 'Coffee' }

// Creating instances for Lunch
let lunch1 = new Lunch("Caesar Salad", "Tomato Soup", "Iced Tea");
let lunch2 = new Lunch("Greek Salad", "Minestrone Soup", "Lemonade");

console.log(lunch1);
// Output: Lunch { salad: 'Caesar Salad', soup: 'Tomato Soup', drink: 'Iced Tea' }

console.log(lunch2);
// Output: Lunch { salad: 'Greek Salad', soup: 'Minestrone Soup', drink: 'Lemonade' }

// Creating instances for Dinner
let dinner1 = new Dinner("Caprese Salad", "Lobster Bisque", "Filet Mignon", "Chocolate Cake");
let dinner2 = new Dinner("Green Salad", "Vegetable Soup", "Grilled Salmon", "Cheesecake");

console.log(dinner1);
// Output: Dinner { salad: 'Caprese Salad', soup: 'Lobster Bisque', entree: 'Filet Mignon', #dessert: 'Chocolate Cake' }

console.log(dinner2);
// Output: Dinner { salad: 'Green Salad', soup: 'Vegetable Soup', entree: 'Grilled Salmon', #dessert: 'Cheesecake' }