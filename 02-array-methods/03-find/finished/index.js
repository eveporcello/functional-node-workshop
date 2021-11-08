const inventory = [
  {
    name: "Powder Skis",
    price: 999,
    type: "equipment",
    inStock: 7
  },
  {
    name: "Warm Hoodie",
    price: 50,
    type: "clothes",
    inStock: 15
  },
  {
    name: "Crampons",
    price: 199,
    type: "equipment",
    inStock: 2
  },
  {
    name: "Avalanche Level One",
    price: 599,
    type: "course",
    inStock: 100
  },
  {
    name: "Avalanche Level Two",
    price: 599,
    type: "course",
    inStock: 100
  },
  {
    name: "Hat",
    price: 5,
    type: "clothes",
    inStock: 4
  }
];

const under100 = item => item.price < 100;
const isEquipment = item => item.type === "equipment";

let results = inventory.find(under100);
console.log(results);
results = inventory.find(isEquipment);
console.log(results);

const findCrampons = item => item.name === "Crampons";
const findAVIOne = item =>
  item.name === "Avalanche Level One";

console.log(inventory.find(findCrampons));

console.log(inventory.find(findAVIOne));
