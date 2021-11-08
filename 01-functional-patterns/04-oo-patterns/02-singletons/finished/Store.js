import Logger from "./Logger.js";

class Store {
  constructor(name, inventory = []) {
    this.name = name;
    this.inventory = inventory;
    Logger.log(
      `New Store: ${name} has ${inventory.length} items in stock.`
    );
  }
}

export default Store;
