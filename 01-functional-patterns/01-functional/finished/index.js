const log = function (message) {
  console.log(message);
};

console.log("In JavaScript, functions are variables");

const obj = {
  message: "They can be added to objects like variables",
  log(message) {
    console.log(message);
  }
};
obj.log(obj.message);

const messages = [
  "They can be inserted into arrays",
  message => console.log(message),
  "like variables",
  message => console.log(message)
];

messages[1](messages[0]); // They can be inserted into arrays
messages[3](messages[2]); // like variables

const insideFn = logger => {
  logger(
    "They can be sent to other functions as arguments"
  );
};
insideFn(message => console.log(message));
// They can be sent to other functions as arguments
