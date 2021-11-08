export const total = (items = []) =>
  items.reduce((total, weight) => {
    return total + weight;
  }, 0);

// Refactor

// export const total = (items = []) =>
//   items.reduce((total, weight) => total + weight, 0);
