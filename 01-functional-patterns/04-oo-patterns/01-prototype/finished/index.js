import Shopper from "./Shopper.js";

let alex = new Shopper("Alex Banks");
alex.addItemToList("camping knife");
alex.addItemToList("tent");
alex.addItemToList("backpack");
alex.addItemToList("map");
alex.addItemToList("slingshot");

let eve = new Shopper("Eve Porcello");
eve.addItemToList("camping knife");
eve.addItemToList("tent");
eve.addItemToList("backpack");
eve.addItemToList("map");
eve.addItemToList("reading light");

console.log(alex.shoppingList);
console.log(eve.shoppingList);
