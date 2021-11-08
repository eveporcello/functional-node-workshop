import fetch from "node-fetch";

const loadPets = async (url, onerror = f => f) =>
  await fetch("http://pet-library.moonhighway.com/api/pets")
    .then(res => res.json())
    .catch(onerror);

const byCategory = category => pet =>
  pet.category === category;

async function main() {
  const pets = await loadPets(console.error);

  const cats = pets.filter(pet => pet.category === "CAT");

  console.log(
    "cats: ",
    cats.map(pet => pet.name).join(", ")
  );
  const totalPets = pets.length;
  const totalCats = pets.filter(byCategory("CAT")).length;
  const totalDogs = pets.filter(byCategory("DOG")).length;
  const remainingPets = totalPets - totalCats - totalDogs;

  console.log("total pets: ", totalPets);
  console.log("dogs: ", totalDogs);
  console.log("cats: ", totalCats);
  console.log("other: ", remainingPets);

  const petWeight = pets.reduce(
    (total, pet) => total + pet.weight,
    0
  );

  console.log(petWeight);
}

main();
