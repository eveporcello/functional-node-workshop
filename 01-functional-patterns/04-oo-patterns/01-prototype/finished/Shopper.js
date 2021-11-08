class Shopper {
  constructor(name = "unnamed person") {
    this._name = name;
    this._shoppingList = [];
  }

  set name(name) {
    this._name = name;
  }

  get shoppingList() {
    return this._shoppingList.join(", ");
  }

  addItemToList(item) {
    this._shoppingList.push(item);
  }
}

export default Shopper;
