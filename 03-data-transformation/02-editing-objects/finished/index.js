let schools = [
  { name: "Michigan" },
  { name: "Wisconsin" },
  { name: "Indiana" }
];

const editName = (oldName, name, arr) =>
  arr.map(item =>
    item.name === oldName ? { ...item, name } : item
  );

let updatedSchools = editName(
  "Indiana",
  "Indiana University",
  schools
);

console.log(updatedSchools[2]);
console.log(schools[2]);
