import Shopper from "./Shopper.js";
import Employee from "./Employee.js";

let alex = new Shopper("Alex Banks", 100);
let eve = new Employee(
  "Eve Porcello",
  100,
  "This and That"
);

eve.payDay(100);

console.log(eve);
