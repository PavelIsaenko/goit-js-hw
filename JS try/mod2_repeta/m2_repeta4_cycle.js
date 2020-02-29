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

// let userInput;
// do {
//   userInput = prompt("Давай вводи число");
//   console.log(userInput);
//   //Выполняем до тех пор пока не равно null или не равно 10(цыкл прекращается)
// } while (userInput !== null && Number(userInput) !== 10);

// Пишем условия ВЫПОЛНЕНИЯ
// userInput = null;
// null !==null || Number(null) !== 10;
// false || true -> true

// userInput =10;
// 10 !== null || Number(10) !==10;
// true || false -> true

// userInput = null;
// null !== null && Number(null) !==10
// false && true -> false

// userInput = 10
// 10 !== null && Number(10) !== 10
// true && false -> false

// -------------------------------------------------
// =============================================
// for (i,j,k)

// for (let i = 0; i < 5; i += 1) {
//   console.log(i);
// }
// ---------------------------------------------------
// const products = ["apple", "grape", "banana"];
// for (let i = 0; i < 5; i += 1) {
//   // i < 5 из-за того, что масив не указан будет выведенно только три первых индекса массива, а дальше  undefined
//   console.log("i:", i);
//   console.log(`products[${i}]:`, products[i]);
// }
// -------------------------------------------------------
// const products = ["apple", "grape", "banana"];
// for (let i = 0; i < products.length; i += 1) {
//   console.log("i:", i);
//   console.log(`products[${i}]:`, products[i]);
// }
// --------------------------------------------------------

// const products = ["apple", "grape", "banana"];
// for (const product of products) {
//   console.log(product); //создаем счетчик -> apple, grape, banana
// }

// ---------------------------------------------------------
// создаем матрицу циклов

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("i:", i);
//   console.log("matrix[i]:", matrix[i]);
// }

//-------------------------------------
// создаем внутри массива цикл массива

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   console.log("i:", i);
//   console.log("matrix[i]:", matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(matrix[i][j]);
//   }
// }

// ----------------------------------------------

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   console.group(`Iteration ${i}`); // делает визуальный эффект Iteration
//   console.log("i:", i);
//   console.log("matrix[i]:", matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(matrix[i][j]);
//   }
//   console.groupEnd(`Iteration ${i}`); // делает конечный визуальный эффект Iteration
// }

// =======================================
// Задачка

// напиши скрипт, котоый проверяет произвольную строку в переменной message и находит в ней самое длинное слово, записывая его в переменную longestWord.

// 1.Сделать из строки массив
// 2. Перебрать массив в цикле
// Переменна для хранения самого длинного слова и делаем предположение что самое длинное слово это первое
// на каждой итерации сравнить текущее и новое
// если новое больше текущего то перезаписать

// const message = "May the force be with you";
// const words = message.split(" ");
// let longestWord = words[0];

// for (let i = 1; i < words.length; i += 1) {
//   console.log("i:", i);
//   console.log("words[i]:", words[i]);

// ((((Для лучшего чтения
// const currentWordLength = words[i].length;
// const longestWordLength = longestWord.length;
// if (currentWordLength > longestWordLength) {
//   longestWord = words[i];
// }))))))

//   if (words[i].length > longestWord.length) {
//     longestWord = words[i];
//   }
// }
// Инвариантные вычилсения
// console.log(words);
// console.log(longestWord); //'force'

// -------------------------------------
// также только с for...of

// const message = "May the force be with you";
// const words = message.split(" ");
// let longestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(words);
// console.log(longestWord); //'force'

// ==================================================
// const message = "qq www eeee rrr ttttt yy";
// const words = message.split(" ");
// const max = words.length - 1;
// const leftCount = 4;
// const rightCount = 5;
// let target;

// for (let i = 1; i < max; i += 1) {
//   console.log(words[i]);
//   console.log(i);

//   const prevElementLemgth = words[i - 1].length;
//   const nextElementLemgth = words[i + 1].length;

//   if (prevElementLemgth === leftCount && nextElementLemgth === rightCount) {
//     target = words[i];
//   }
// }
// console.log(words);
// console.log(target);

// ===========================================================
// 1-st variant
// const clients = ["Mango", "Poly", "Ajax"];
// const clientsNameToFind = "Poly";
// let message = "Doesnt find";

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("i:", i);
//   console.log("clients[i]:", clients[i]);
//   console.log("clientNameToFind:", clientsNameToFind);

//   if (clients[i] === clientsNameToFind) {
//     message = "Found!!!!!";
//   }
// }
// console.log(message);
// ----------------------------------------------
// 2-nd variant

// const clients = ["Mango", "Poly", "Ajax"];
// const clientsNameToFind = "Poly";
// let message;

// for (let i = 0; i < clients.length; i += 1) {
//   console.log("i:", i);
//   console.log("clients[i]:", clients[i]);
//   console.log("clientNameToFind:", clientsNameToFind);

//   if (clients[i] === clientsNameToFind) {
//     message = "Found!!!!!";
//     break;
//   }
//   message = "Doesnt find";
// }
// console.log(message);

// ==================================================
// includes

const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.includes(3));
const numberToFind = 3;
let result = false;
for (const number of numbers) {
  if (number === numberToFind) {
    result = true;
    break;
  }
}

console.log(result);
