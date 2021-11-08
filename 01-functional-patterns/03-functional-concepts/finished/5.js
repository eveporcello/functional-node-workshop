// Composition

// const template = "hh:mm:ss tt";
// const clockTime = template
//   .replace("hh", "03")
//   .replace("mm", "33")
//   .replace("ss", "33")
//   .replace("tt", "PM");
// console.log(clockTime);

const createClockTime = date => ({ date });

const appendAMPM = ({ date }) => ({
  date,
  ampm: date.getHours() >= 12 ? "PM" : "AM"
});

const civilianHours = clockTime => {
  const hours = clockTime.date.getHours();
  return {
    ...clockTime,
    hours: hours > 12 ? hours - 12 : hours
  };
};

const removeDate = clockTime => {
  let newTime = { ...clockTime };
  delete newTime.date;
  return newTime;
};

// A more elegant approach to composition

const compose =
  (...fns) =>
  arg =>
    fns.reduce((composed, f) => f(composed), arg);

const oneFunction = compose(
  createClockTime,
  appendAMPM,
  civilianHours,
  removeDate
);

console.log(oneFunction(new Date()));
