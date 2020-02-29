// Repeta====================================
"use strict";

// const min = 10;
// const max = 30;
// const number = 15;
// указываем промежуток между 10 и 30-тю
// const isNumberInRange = number > min && number < max;

// console.log(isNumberInRange);

//====================================================
// let input = prompt("Угадай число от 0 до 1");

// input = Number(input);

// console.log(typeof input);

// ===================================================
// Создаем логическую цепочку, где пользователь должен ввести от 1 до 10

// let input = prompt("Угадай число от 1 до 10");

// input = Number(input);

// const isCorrect = input >= 1 && input <= 10;

// console.log(isCorrect);

// ==================================================
// Number.parseInt(), нужно преобразовать 25рх в число 25 без рх

// для parseInt
// const boxWidthInPx = "25px";
// для parseFloat
// const boxWidthInPx = "25.5px";

// в этой строке идет преобразование и вывод того числа, которое указанно в кавычках, но выводится число до начало букв
// const width = Number.parseInt("25px");
// с помощью parseFloat мы даем возможность отображать число с комой
// const width = Number.parseFloat("25.5px");

// console.log(width);

// =================================================
// Преобразование числе с плавающей точкой
// console.log(0.3 === 0.2 + 0.1);-false/ в JS некоторые дробные числа не будут иметь цельную часть при сложении, поэтому и будет false

// console.log((0.2 * 10 + 0.1 * 10) / 10);
// делаем их целыми числами с помощью умножения на 10-ть, а после делим же на 10.

// ================================================
// Math

// console.log(Math);

//=============================================
// Строки, конкотенация или сшивание строк за счет "+"

// console.log(5 + "5");

// Сшиваем строки Jay и Lux
// const firstName = "Jay";
// const lastName = "Lux";
// const fullName = firstName + " " + lastName;
//  + " " +  за счет этих пустых строк можно сделать пробел
// console.log(fullName);

// при сшивание чего-либо со строкой будет строка
// console.log(5 + 5 + "6");
// будет 5+5+'6'=10+'6'='106'-строка

// ============================================
// Преобразование нижние или врехние регистры

// const name = "Mango";
// const inLowerCase = name.toLowerCase();
// console.log(inLowerCase);

//=============================================
// Преобразование строчных значений в числовые
// let str = "123";
// console.log(str);

// let num = Number(str);
// console.log(num);

// Преобразование строки в число
// let str = "123";
// alert(typeof str); // string

// let num = Number(str); // становится числом 123

// alert(typeof num); // number

// let str = "123";
// console.log(typeof str);

// let num = Number(str);
// console.log(typeof num);
// console.log(str);

// ===================================================
// вывод данных с помощью typeof

// let value = 12.4;
// let name = "Igor";
// let isActive = false;
// let type = typeof value;
// console.log(type);

// =======================
// NAME
// let name = prompt("Please entered your name:");
// console.log(name);

// if (name.length > 5) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ===========================
// PASSWORD

// const ADMIN_PASSWORD = "123qwerty";
// let message = prompt("Please entered password:");
// console.log(message);

// // if (message === ADMIN_PASSWORD) {
// //   console.log(true);
// // } else {
// //   console.log(false);
// }

// ===================================================

// let input = prompt("To guess the number from1 to 10?");
// input = Number(input);/ что бы превращало строку в число
// const isCorrect = input >= 1 && input <= 10;
// console.log(isCorrect);

// ================================================

// let input = prompt("input number");
// console.log("input before changing", input);
// input = Number(input);
// console.log("input after changing", input);
// const isNan = Number.isNaN(input);
// console.log("It is realy isNan", isNan);

// ==================================================
// Includes - включает указанное значение
// const title = "JavaScript is really hard language of programming";
// console.log(title.includes("Script")); / выведет true, потому что совпало слово с variable"title"

// const productTitle = "Samsung Note 10";
// const searchStr = "sams";
// (let searchStr = prompt("Enter world:");)
// const titleInLc = productTitle.toLowerCase();/  что бы принимал поиск маленькие буквы также
// const searchStrInLC = searchStr.toLowerCase();/  что бы принимал поиск маленькие буквы также
// const passed = titleInLc.includes(searchStrInLC);
// console.log(passed);

// ====================================================
// Шаблонные строки, интерполяция

const name = "Mask";
const age = 16;
const education = "middle";
const message = `My name is ${name}, I am ${age} years old, I have a ${education} educaion`;
console.log(message);
