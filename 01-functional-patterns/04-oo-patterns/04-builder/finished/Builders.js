import Person from "./Person.js";

// Now we'll create an employee builder class
class PersonBuilder {
  // This constructor only takes a name
  constructor(name) {
    this.name = name;
  }

  // Instead of sending employee as an argument, we will chain it as a function.
  makeEmployee() {
    this.isEmployee = true;

    // We have to return this, so that we can chain on
    // additional functions. This is an important step;
    return this;
  }

  // We will use functions to "build" the object fields
  // The Make Manger function will make an instance a manger by setting
  // the appropriate field values
  makeManager(hours = 60) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  // And a function that can be used to make this person
  // A part time employee
  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  // If they have money we can add it here
  withMoney(money) {
    this.money = money;
    return this;
  }

  // If they have a list, we will hadd it here
  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  // And the most important function in the builder, is the build function
  // It creates and returns the new object instance
  build() {
    // this represents this builder instance
    // We will send all of these fields in as a single object
    // To our person constructor. They will be used to construct the
    // Specific employee instance
    return new Person(this);
  }
}

export default PersonBuilder;
