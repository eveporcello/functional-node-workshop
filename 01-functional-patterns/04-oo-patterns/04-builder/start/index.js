import Person from "./Person.js";

// Employees
let sue = new Person("Sue", true, true, 60, false);
let bill = new Person("Bill", true, false, 20, false);
let phil = new Person("Phil", true, false);

// Shoppers
let charles = new Person(
  "Charles",
  false,
  false,
  0,
  true,
  500,
  ["jeans", "sunglasses"]
);
let tabbitha = new Person(
  "Tabbitha",
  false,
  false,
  0,
  true,
  1000
);

// Let's see if sue is a manager, or how many hours bill has
console.log("is sue manager? ", sue.isManager);
console.log("how many hours does Bill have? ", bill.hours);

// Let's create an array of shoppers
var shoppers = [charles, cheryl];

// Then we can loop through that array and display details on both shoppers
shoppers.forEach(shopper =>
  console.log(
    `${shopper.name} has ${shopper.shoppingList.length} items to purchase with ${shopper.money} dollars.`
  )
);
