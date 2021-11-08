import PersonBuilder from "./Builders.js";

// Now we can user these objects to effectivly construct employees and shoppers
// Let's modify the code that we are using to create the employees
let sue = new PersonBuilder("Sue")
  .makeEmployee()
  .makeManager()
  .build();
let bill = new PersonBuilder("Bill")
  .makeEmployee()
  .makePartTime()
  .build();

let charles = new PersonBuilder("Charles")
  .withMoney(200)
  .withList(["jeans", "sunglasses"])
  .build();

let cheryl = new PersonBuilder("Cheryl")
  .withMoney(1000)
  .build();

console.log("is sue manager? ", sue.isManager);
console.log("how many hours does Bill have? ", bill.hours);
console.log(cheryl);

let shoppers = [charles, cheryl];

// Then we can loop through that array and display details on both shoppers
shoppers.forEach(shopper =>
  console.log(
    `${shopper.name} has ${shopper.shoppingList.length} items to purchase with ${shopper.money} dollars.`
  )
);
