import Person from "./Person.js";

class Shopper extends Person {
  constructor(name, money = 0) {
    super(name);
    this.money = money;
    this.employed = false;
  }
}

export default Shopper;
