// Higher Order Functions

const invokeIf = (condition, fnTrue, fnFalse) =>
  condition ? fnTrue() : fnFalse();
const showWelcome = () => console.log("Welcome!!!");
const showUnauthorized = () =>
  console.log("Unauthorized!!!");
invokeIf(true, showWelcome, showUnauthorized);
invokeIf(false, showWelcome, showUnauthorized);
