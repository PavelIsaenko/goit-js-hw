"use strict";
// Repeta module 2 -cycle

// ======================================
// цыкл while
// let value = 0;
// while (value < 10) {
//   console.log(value);
//   value += 1;
// }
// -------------------------------------------------

// let counter = 0;
// const products = ["apple", "orange", "grape"];
// while (counter < products.length) {
//   console.log(products[counter]);
//   counter += 1;
// }
// console.log("after while"); // что бы цыкл тормозился

// =========================================
// do...while

// let userInput;
// do {
//   userInput = prompt("Давай вводи что-то!, при отмене будет null");
//   console.log(userInput);
// } while (userInput !== null);

let userInput;
do {
  userInput = prompt("Давай вводи число");
  console.log(userInput);
  //Выполняем до тех пор пока не равно null или не равно 10(цыкл прекращается)
} while (userInput !== null && Number(userInput) !== 10);
