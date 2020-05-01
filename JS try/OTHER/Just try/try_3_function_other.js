"use strict";
// --------function---------------
// const add = function (x, y) {
//   //   console.log(x);
//   let z = x + y;
//   return z;
// };

// // console.log(add(2, 3));//5

// let count = add(2, 3);
// console.log(count); //5
// let smile = add(4, 7);
// console.log(smile); //11

// --------zzzz------------

// const add = function () {
//   //   console.log(x);
//   //   let z = x + y;
//   return 57;
// };

// // console.log(add(3, 4));

// let count = add();
// console.log(count);

// ==============zzzzzzzzz=============
// -------longest word-----------------
// -----array
// const string = "Loren ipsonerest non clau da Vila";
// const sentence = string.split(" ");
// console.log(sentence);
// let longestWord = sentence[0];

// for (let i = 0; i < sentence.length; i += 1) {
//   if (sentence[i].length > longestWord.length) {
//     longestWord = sentence[i];
//   }
// }
// console.log(longestWord);

// ------------------function longest word---------
// const string = "Loren ipsonerest non clau da Vila";

// const add = function (str) {
//   const sentence = string.split(" ");
//   let longestWord = sentence[0];

//   for (let word of sentence) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(add(string)); // обрабатываем переменную const string

// -------2-й вариант -------------------

// const string = "Loren ipsonerest non clau da Vila";

// const add = function (str) {
//   const sentence = string.split(" ");
//   let longestWord = sentence[0];

//   for (let i = 0; i < sentence.length; i += 1) {
//     if (sentence[i].length > longestWord.length) {
//       longestWord = sentence[i];
//     }
//   }
//   return longestWord;
// };

// console.log(add(string));

//----------3-й вариант----------------------------

// const add = function (str) {
//   const sentence = str.split(" ");
//   let longestWord = sentence[0];

//   for (let i = 0; i < sentence.length; i += 1) {
//     if (sentence[i].length > longestWord.length) {
//       longestWord = sentence[i];
//     }
//   }
//   return longestWord;
// };

// console.log(add("Loren ipsonerest non clau da Vila"));
// ------------------------------------
// -------------array includes------------

// const includes = function (value, compare) {
//   let mod = value.includes(compare);
//   return mod;
// };

// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));
// console.log(includes(["mango", "ajax", "poly"], "mango"));

// -----------------======-------------
// const includes = function (value, compare) {
//   //value - [1, 2, 3]
//   //compare - 4
//   for (const item of value) {
//     if (item === compare) {
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3], 4));
// console.log(includes([1, 2, 3, 4, 5], 2));
// console.log(includes(["mango", "ajax", "poly"], "mango"));

// -------zzzzz----------=============--------------zzzzzzzzzzz----
// ------------подсчет за гравировку-----=======------
// const calculate = function (text, costPerWord) {
//   const sentence = text.split(" ");
//   let total = 0;

//   for (const word of sentence) {
//     total += costPerWord;
//   }
//   return total;
// };

// console.log(calculate("Loren ipsonerest non clau da Vila", 10));

// ------------------=========-------
// const double = function (array) {
//   console.log("function array:", array);

//   array[0] = 10;
// };
// const numbers = [1, 2, 3, 4, 5, 6];
// double(numbers);
// console.log(numbers);
//  // /// /// /// /// //// /// // //

// const double = function (array) {
//   console.log(array);
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * 2;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// double(numbers);
// console.log(double(numbers));

// ------предикантная функция--------

// const predict = function (a, b) {
//   return a === b;
// };

// console.log(predict(5, 3)); //fasle
// console.log(predict(5, 4));// false
// console.log(predict(5, 5));// true

// ------arguments---------

// const add = function () {
//   let total = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }
//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));
// -------------------

// const add = function () {
//   let total = 0;
//   const mult = arguments[0]; // извлекаем 1-й эелемент значений

//   for (let i = 1; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }
//   return total * mult; // умножаем на первый элемент
// };

// console.log(add(5, 1, 2, 3));
// console.log(add(10, 1, 2, 3, 4));
// console.log(add(15, 1, 2, 3, 4, 5));

//--------------------------------------------------------

// const add = function () {
//    let total = 0;
//    const mult = arguments[0]; // извлекаем 1-й эелемент значений

//    for (let i = 1; i < arguments.length; i += 1) {
//      total += arguments[i] * mult;
//    }

//    return total;
//  };

//  console.log(add(5, 1, 2, 3));//30
//  console.log(add(10, 1, 2, 3, 4));//100
//  console.log(add(15, 1, 2, 3, 4, 5));//225

// -------------------------------------------------------------

// const add = function () {
//   let args = Array.from(arguments);
//   const mult = args[0];
//   args = args.slice(1);
//   //   args.shift();

//   console.log(args);

//   let total = 0;

//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total * mult;
// };

// console.log(add(5, 1, 2, 3));
// console.log(add(10, 1, 2, 3, 4));
// console.log(add(15, 1, 2, 3, 4, 5));

// --------

// const clients = ["Mango", "Ajax", "Poly", "Kiwi"];
// console.log(clients.slice(1)); // (3) ["Ajax", "Poly", "Kiwi"]

// zzzz-------------------zzzzz----------------------=======
// const pricePerDroid = 5;

// const fn = function (price, count) {
//   return price * count;
// };

// const calc = fn(pricePerDroid, 5);
// console.log(calc);

// // console.log(fn(pricePerDroid, 5)); //25

// ----------------------------------------------

// const greeter = function (name) {
//   alert("Hello " + name);
// };

// const yourName = prompt("Say your name");
// greeter(yourName);
