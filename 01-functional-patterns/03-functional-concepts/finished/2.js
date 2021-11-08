// Pure Functions

const jennifer = {
  name: "Jennifer Wilson",
  canSki: false,
  canSnowboard: false
};
function selfTeach() {
  jennifer.canSki = true;
  jennifer.canSnowboard = true;
  return jennifer;
}
selfTeach();
console.log(jennifer);

// Make a pure function

// const jennifer = {
//   name: "Jennifer Wilson",
//   canSki: false,
//   canSnowboard: false
// };
// function selfTeach(person) {
//   return {
//     ...person,
//     canSki: true,
//     canSnowboard: true
//   };
// }
// console.log(selfTeach(jennifer));
// console.log(jennifer);
