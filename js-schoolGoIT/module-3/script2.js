// function getRandomInt(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function toUpper(string) {
//   const array = string.split("_");
//   const joinedString = array.join("_");
//   const joinedStringUpperCased = joinedString.toUpperCase();
//   return joinedStringUpperCased;
// }

// Аналог выше функции
// function toUpper(string) {

//   return string
//     .split(" ")
//     .join("_")
//     .toUpperCase();
// }
// console.log(toUpper("Hello world"));

// function toUpper(string) {
//   if (string === undefined) {
//     return "";
//   }
//   return string
//     .split(" ")
//     .join("_")
//     .toUpperCase();
// }
// console.log(toUpper(" "));

function toUpper(string) {
  if (string === undefined) {
    return "";
  }
  return string
    .split(" ")
    .join("_")
    .toUpperCase();
}
console.log(toUpper(" "));
