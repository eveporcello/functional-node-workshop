const ages = [21, 18, 42, 40, 64, 63, 34];

const maxAge = ages.reduce((max, age) => {
  console.log(`${age} > ${max} = ${age > max}`);
  if (age > max) {
    return age;
  } else {
    return max;
  }
}, 0);

console.log("maxAge", maxAge);

// Refactor

// const ages = [21, 18, 42, 40, 64, 63, 34];

// const max = ages.reduce(
//   (max, value) => (value > max ? value : max),
//   0
// );

// console.log("max", max);
