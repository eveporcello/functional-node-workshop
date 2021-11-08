import Logger from "./Logger.js";
import Shopper from "./Shopper.js";
import Store from "./Store.js";

Logger.log("app starting");

let alex = new Shopper("alex", 500);

let ski_shop = new Store("Steep and Deep Supplies", [
  {
    item: "Downhill Skis",
    qty: 5,
    price: 750
  },
  {
    item: "Knit Hat",
    qty: 35,
    price: 5
  }
]);

Logger.log("finished working...");

console.log(`${Logger.count} logs total`);
Logger.logs.map(log => console.log(`   ${log.message}`));
