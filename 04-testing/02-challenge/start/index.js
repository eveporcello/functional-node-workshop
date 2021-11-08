export const total = (items = []) =>
  items.reduce((total, weight) => total + weight, 0);
