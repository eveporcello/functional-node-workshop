// Recursion

const countdown = (value, fn, delay = 1000) => {
  fn(value);
  return value > 0
    ? setTimeout(
        () => countdown(value - 1, fn, delay),
        delay
      )
    : value;
};
const log = value => console.log(value);
countdown(10, log);
