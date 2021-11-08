class Person {
  constructor(builder) {
    this.name = builder.name;
    this.isEmployee = builder.isEmployee || false;
    this.isManager = builder.isManager || false;
    this.hours = builder.hours || 0;
    this.money = builder.money || 0;
    this.shoppingList = builder.shoppingList || [];
  }
}

export default Person;
