"use strict";

let input;
let total = 0;
const numbers = [];

do {
  input = prompt("Введите число");
  numbers.push(Number(input));
} while (input !== null);

for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
alert(`Общая сумма чисел равна ${total}`);
console.log(numbers);
