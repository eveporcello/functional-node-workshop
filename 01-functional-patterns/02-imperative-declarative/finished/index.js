let string = "Restaurants in Hanalei";
let urlFriendly = "";
for (let i = 0; i < string.length; i++) {
  if (string[i] === " ") {
    urlFriendly += "-";
  } else {
    urlFriendly += string[i];
  }
}
console.log(urlFriendly);

let newString = "Restaurants in Singapore";
let url = newString.replace(/ /g, "-");
console.log(url);
