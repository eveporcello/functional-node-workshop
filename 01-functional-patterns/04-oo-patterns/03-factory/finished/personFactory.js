// The Person Factory contains all the types that we will use
// It will decide when to use an Employee or a shopper
import Employee from "./Employee.js";
import Shopper from "./Shopper.js";

const personFactory = (name, money = 0, type, employer) => {
  if (type === "employee") {
    return new Employee(name, money, employer);
  } else {
    return new Shopper(name, money);
  }
};

export default personFactory;
