"use strict";

// ----
// let array2 = [];
// console.log(array2);
// let array = ["apples", "grape", "pineappple", "orange"];
// console.log(array);

// array[2] = "new apple";
// console.log(array);

// array2 = array;
// console.log(array2);

// console.log(array === array2);

// --------split-----------------

// const message = "How is your deal";
// const array = message.split(" ");
// console.log(array);
// const snakeCase = array.join("_");
// console.log(snakeCase);

// ---------indexOf---------------

// const array = ["apples", "grape", "pineappple", "orange"];
// let findWord = array.indexOf("orange");

// if (findWord !== -1) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// ---------------------------------------------------
// const array = ["apples", "grape", "pineappple", "orange"];
// let findWord = prompt("");
// let register = array.includes(findWord);

// if (register) {
//   console.log("Yes, I have");
// } else {
//   console.log("Sorry Michael");
// }

// ------slice-!!!!!!!!!!!!!!!!!!!!--------------------------------

// const numbers = [1, 2, 3, 4, 5, 6];
// console.log(numbers); //(6) [1, 2, 3, 4, 5, 6]
// numbers.slice(2, 4);
// console.log(numbers); //(6) [1, 2, 3, 4, 5, 6]
// const copy = numbers.slice(1, 4);
// copy[2] = 88;
// console.log(copy);//(3) [2, 3, 88]

//-------------splice !!!!!!!!!!!!!!!!!-----

// const cards = ["card1", "card2", "card3", "card4", "card5", "card6"];
// // console.log(cards.splice(2, 3));//(3) ["card3", "card4", "card5"]
// console.log(cards); //(6)["card1", "card2", "card3", "card4", "card5", "card6"]
// cards.splice(2, 3);
// console.log(cards); // (3) ["card1", "card2", "card6"]

// cards.splice(2, 0, "new_card1", "new_card2");
// console.log(cards); //(5) ["card1", "card2", "new_card1", "new_card2", "card6"]

// перемещение -splice-
// const cards = ["card1", "card2", "card3", "card4", "card5", "card6"];
// console.log(cards);
// const index = cards.splice(3, 1)[0]; // вырезаем card5 и даем ей индекс [0], что бы можно было потом вставить как элемент
// console.log(index);
// console.log(cards);

// cards.splice(1, 0, index);
// console.log(cards);

// -----slider------------

// const images = ["img-1", "img-2", "img-3", "img-4", "img-5"];
// let currentImageIdx = 0;
// console.log(images[currentImageIdx]); // img-1

// currentImageIdx += 1;
// console.log(images[currentImageIdx]); // // img-2

// currentImageIdx += 1;
// console.log(images[currentImageIdx]); // // img-3
//
// -----------=========-------=============----==---==
// -------------------cycle----------------------
// --------------while------------

// let value = 0;

// while (value < 10) {
//   console.log(value);
//   value += 1;
// }

// ----------

// const products = ["apple", "grape", "lemon", "orange"];
// let counter = 0;

// while (counter < products.length) {
//   console.log(products[counter]);
//   counter += 1;
// }

// ------do while ----------------------

// ----improvization------
// let userInput;
// let counter = 0;
// let guessOfNumbers = 0;

// do {
//   userInput = +prompt("Let enter something");
//   counter += userInput;
//   guessOfNumbers = guessOfNumbers + 1;
//   // console.log(userInput);
// } while (userInput);
// console.log(`counter:${counter} and you needed ${guessOfNumbers}`);

// let userInput;
// do {
//   userInput = prompt(":");
//   // userInput = Number(userInput);
//   // Number(userInput);
//   console.log(userInput);
// } while (userInput !== null && Number(userInput) !== 10);

// --------------------for--------------------------------

// const products = ["apple", "orange", "lemon"];

// for (let i = 0; i < products.length; i += 1) {
//   console.log(`products ${i}:`, products[i]);
// }

// ------------for of -------

// const products = ["apple", "orange", "lemon"];

// for (const prod of products) {
//   console.log(prod);
// }

// --------------------------------------

// const numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log([i]);
//   console.log(numbers[i]);

//   for (let j = 0; j < numbers[i].length; j += 1) {
//     console.log(numbers[i][j]);
//   }
// }

// --to fond the longest word-----------------

// const message = "May goes at home with my fiends our";
// const words = message.split(" ");
// console.log(words);
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1) {
//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }

// // for (const word of words) {
// //   if (word.length < longestWord.length) {
// //     longestWord = word;
// //   }
// // }
// console.log(longestWord);
// 00000000000000000000000000000000000000000000000000
// const string = "Loren ipsoner cras non dolor";
// const sentence = string.split(" ");
// console.log(sentence);

// let wdLong = sentence[0];

// for (let i = 1; i < sentence.length; i += 1) {
//   console.log(sentence[i]);
//   if (wdLong.length < sentence[i].length) {
//     wdLong = sentence[i];
//   }
// }

// console.log(wdLong);
// 0000000000000000000000000000000000000000000000000000
// --------------=============-------------
// const clients = ["Mango", "Poly", "Ajax"];
// const clientsNameToFind = prompt("Enter name:");
// let message;

// for (let i = 0; i < clients.length; i += 1) {
//   if (clients[i] === clientsNameToFind) {
//     message = "To find";
//     break;
//   }
//   message = "Doesnt find";
// }
// console.log(message);

// ------------------------------------
// =====================-----function!!!!!!!!!------========================

// const add = function (x, y) {
//   let z = x + y;
//   console.log(z);
//   return z;
// };
// let val = add(2, 3);
// // add(2, 3);
// console.log(val);

// --------------------==================-------

// const add = function (x, y) {
//   const summ = x + y;
//   return summ;
// };
// //1-й вариант
// console.log(add(2, 3));
// // 2-й вариант
// let resF = add(2, 3);
// console.log(resF);

// -----------------------=========--------
// ----longest and shortest word-----------

// const string = "Loren ipsoner cras non dolor";

// const add = function (str) {
//   const words = str.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(add("Loren ipsoner cras non dolor"));

// ---------------------------------===================-----
// -----includes ----------

// const includes = function (array, value) {
//   let comparison = array.includes(value);
//   return comparison;
// };

// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));
// console.log(includes(["mango", "ajax", "poly"], "mango"));

// ----------------------------------------------------

// const includes = function (array, value) {
//   //array[1,2,3]
//   //value 4
//   for (const item of array) {
//     if (item === value) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));
// console.log(includes(["mango", "ajax", "poly"], "poly"));

// ----------===========----------
// ---------подсчет за гравировку, мои варианты

// const calculator = function (str) {
//   const sentence = str.split(" ");
//   console.log(sentence);

//   let price = 10;
//   let total;
//   for (let i = 0; i < sentence.length; i += 1) {
//     total = price * sentence.length;
//   }
//   return total;
// };

// console.log(calculator("Loren ipsoner cras non proeb"));

// // ----------------------
// const string = "Loren ipsoner cras non dolor sos Rogon";
// const sentence = string.split(" ");
// let price = 10;
// let total;
// total = price * sentence.length;

// // for (let i = 0; i < sentence.length; i += 1) {
// //   total = price * sentence.length;
// // }
// console.log(total);

// --------варианты Репеты---------------------

// const calculateCost = function (string, costPerWord) {
//   let total = 0;
//   const words = string.split(" ");

//   // ---------------------
// for (const word of words) {
//   total += costPerWord;
// }
//   // -------------------------
//   // total = words.length * costPerWord;
//   // ---------------------------------
//   for (let i = 0; i < words.length; i += 1) {
//     total += costPerWord;
//   }
//   // ----------------
//   return total;
// };

// const senten = "Per dar gosjlsd fdbjl";
// let price = calculateCost(senten, 10);
// console.log(price);

// console.log(calculateCost("Per dar gosjlsd fdbjl", 10));

// -------------another option ------------

// const calculateCost = function (string, costPerWord) {
//   const words = string.split(" ");
//   const sentence = words.length;
//   const totalPrice = sentence * costPerWord;

//   return totalPrice;
// };

// console.log(calculateCost("Don Kichot go at home", 10));

// ----=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

// const calculateCost = function (string, costPerWord) {
//   let total = 0;
//   const words = string.split(" ");

//   for (const word of words) {
//     total += costPerWord;
//   }
//   return total;
// };
// const message = "Per dar gosjlsd fdbjl";
// const price = calculateCost(message, 10);
// console.log(price);

// ----zzzz-----====---------
// console.log(calculateCost("Per dar gosjlsd fdbjl", 10));

//z/z------=========================
//

// const double = function (array) {
//   console.log("function array:", array);
//   // return array;
//   array[0] = 10;
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// double(numbers);
// console.log(numbers);

// // const numb = double(numbers);
// // console.log(numb);

// ------------=======--------------

// const double = function (array) {
//   console.log("function:", array);
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = 2 * array[i];
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// double(numbers);
// console.log("numbers", numbers);

// ---------------------==========------

// const add = function () {
//   console.log(arguments);
//   // return arguments;
//   let total = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));
// ----zzzz------zzzz-----zzzzz--------------

// let fruits = ["яблоко", "банан", "клубника", "персик"];

// for (let i = 0; i < fruits.length; i++) {
//   // console.log(fruits[i].length); // 6 5 8 6
//   // console.log(fruits[i]); // яблоко банан клубника персик
//   console.log(fruits.length); // 4
// }

// ----

// var arr = [];
// arr.length = 15;
// console.log(arr.length); // 15
// arr[4] = "apple";
// console.log(arr); // (15) [empty × 4, "apple", empty × 10]
// arr[9] = "new avlue";
// console.log(arr.length); //15
// console.log(arr); //(15) [empty × 4, "apple", empty × 4, "new avlue", empty × 5]

// ------------------------===============------

// let fruits = ["Яблоко", "Апельсин", "Слива"];
// // let fruits = ["12312", "3232", "3234234"];
// for (let i = 0; i < fruits.length; i += 1) {
//   //   console.log(fruits[i]);
//   //   console.log(fruits.indexOf(fruits[i]));
//   console.log(`${fruits[i]} : ${fruits.indexOf(fruits[i])}`);
//   //Яблоко : 0
//   //Апельсин : 1
//   //Слива : 2
// }

// ----------------------------------------
// let styleMus = ["jaz", "bluz"];
// styleMus.length += 1;
// styleMus[styleMus.length - 1] = "rock";
// console.log(styleMus); //(3) ["jaz", "bluz", "rock"]
// console.log(styleMus[styleMus.length - 1]); // rock

// ----------------------------=-----

// let styleMus = ["jaz", "bluz"];
// console.log(styleMus);
// styleMus.push("rock");
// console.log(styleMus);
// console.log(styleMus.shift());
// console.log(styleMus);
// styleMus.unshift("rep", "regi");
// console.log(styleMus);

// -------------------=======----------------

// let total = 0;
// let input;

// do {
//   input = +prompt("Введите число:");
//   total += input;
// } while (input);
// alert(`Общая сумма чисел равна ${total}`);

// --------------------------------------------
// let total = 0;
// let input = +prompt("Введите число:");
// let num = Number(input);
// while (num) {
//   total += num;
//   num = +prompt();
// }
// alert(`Общая сумма чисел равна ${total}`);
// --------------------------------------------------------

// let input;
// let total = 0;

// while (input !== null) {
//   input = prompt("Please enter a number:");

//   if (input !== null) {
//     let num = Number(input);

//     if (Number.isNaN(num)) {
//       alert("Было введено не число, попробуйте еще раз");
//     } else {
//       total += num;
//     }
//   }
// }

// alert(`Общая сумма чисел равна ${total}`);
// ------------------------------------------------------

// ====Working option============

// let total = 0;
// let input;
// // let input = prompt("Введите число:");
// // let num = Number(input);
// while (input !== null) {
//   input = prompt("Введите число:");
//   let num = Number(input);
//   total += num;
// }
// alert(`Общая сумма чисел равна ${total}`);

// ---------------------------------------

let total = 0;
let input;

do {
  input = prompt("Введите число:");
  let num = Number(input);
  total += num;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
