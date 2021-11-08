import Logger from "./Logger.js";

class Shopper {
  constructor(name, money = 0) {
    this.name = name;
    this.money = money;
    Logger.log(
      `New Shopper: ${name} has ${money} in their account.`
    );
  }
}

export default Shopper;
