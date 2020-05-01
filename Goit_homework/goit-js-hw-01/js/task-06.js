"use strict";

let total = 0;
let input;

do {
  input = prompt("Введите число:");
  let num = Number(input);
  total += num;
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);

// ---------------еще один вариант решения-----
// ---по сути тотже

// let total = 0;
// let input;
// while (input !== null) {
//   input = prompt("Введите число:");
//   let num = Number(input);
//   total += num;
// }
// alert(`Общая сумма чисел равна ${total}`);
