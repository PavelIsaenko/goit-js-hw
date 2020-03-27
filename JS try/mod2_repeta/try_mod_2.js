"use strict";

// const user1 = "Max";
// const user2 = "John";
// const user3 = "Armen";
// const user4 = "Gogi";
// const user5 = "Ara";

// const users = [user1, user2, user3, user4, user5];
// let login = prompt("enter name user:");
// let message = "No to Find";

// for (const allusers of users) {
//   if (login === null) {
//     message = "sorry for your visit";
//   } else if (allusers === login) {
//     message = `Find ${login}`;
//     break;
//   }
// }

// console.log(message);

// ===========================================
// =====================
// 6-th task of 1 mod

// let total = 0;
// let input = prompt("enter number:");
// input = Number(input);

// while (input < 99) {
//   console.log(input);
//   total += 1;
// }
// ===========================================================
// const str1 = "what do you do?";
// let message = prompt(":");
// const common = str1.includes(message);

// if (common) {
//   console.log(true);
// } else {
//   console.log(false);
// }

//------------------------------------------
// let input = prompt(":");
// input = Number(input);
// for (let total = 0; total < 9999; total += 1) {}

// console.log(input);

// --------------------------------------------------

// for (let x = 0; x < 99; x += 1) {
//   console.log(x);
// }
// ========================================================
// const max = 23580;
// let sum = prompt(":");
// sum = Number(sum);
// for (let sum = 3000; sum <= max; sum += 3000) {
//   console.log(sum);
// }

// ===============================================================

// Task 6 of MOD-1 -----------------------------------
// 1-variant--------------------------
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

// =========================================================================
// 2-variant---------------------------------------------------------------
// let total = 0;
// let input = +prompt("Введите число:");
// let num = Number(input);
// while (num) {
//   total += num;
//   num = +prompt();
// }
// alert(`Общая сумма чисел равна ${total}`);

// =====================================================================
//3-variant---------------------------------------------------------------

// let total = 0;
// let input;

// do {
//   input = +prompt("Введите число:");
//   total += input;
// } while (input);
// alert(`Общая сумма чисел равна ${total}`);
// =============================================================================
// var total = 0;
// var input = +prompt();
// while(input){
// 	total += input;
// 	input = +prompt();
// };
// alert("Общая сумма чисел равна [" + total +"]");
// --------------------------------------------------------------
// Или do...while:

// var total = 0;
// do{
// var input = +prompt();
// 	total += input;
// }
// while(input);
// alert("Общая сумма чисел равна [" + total +"]");

// ----------------==================---------------

// let userName = "Вася";

// function showMessage() {
//   let message = "Привет, " + userName;
//   alert(message);
//   userName = "Петя"; // (1) изменяем значение внешней переменной
//   //   alert(message);
// }

// alert(userName); // Вася - перед вызовом функции

// showMessage(); // Привет, Вася -  перед вызовом функции

// alert(userName); // Петя -  значение внешней переменной было изменено функцией
// showMessage(); // Привет, Петя -значение внешней переменной было изменено функцией

// ===============================================================

// ==============----------------------------------------
// const numbers = [9, 2, 8, 23, 54, 4, 1];
// let min = numbers[0];
// let input = prompt("to enter lower number:");
// input = Number(input);

// for (let i = 1; i < numbers.length; i += 1) {
//   // numbers[i] > min;
//   let count = numbers[i] > min;
//   // console.log(count);
//   if (count === input) {
//     console.log(true);
//     // break;
//   } else {
//     console.log(false);
//   }
// }
// ========================================================

// const numbers = [9, 2, 8, 23, 54, 4, 1];
// let min = numbers[0];
// let input = prompt("to enter lower number:");
// input = Number(input);
// let finish;

// for (let i = 1; i < numbers.length; i += 1) {
//   numbers[i] > min;
//   min = numbers[i];
//   console.log(min);
//   finish = min;
//   if (finish === input) {
//     // let count = numbers[i];
//     // count === input;
//     console.log(true);
//     // break;
//   } else {
//     console.log(false);
//   }
// }
// ==========================-----------------------------------

// let userName = "Вася";

// function showMessage() {
//   let userName = "Петя"; // объявляем локальную переменную
//   alert(userName);
//   let message = "Привет, " + userName; // Петя
//   alert(message);
// }

// // функция создаст и будет использовать свою собственную локальную переменную userName
// showMessage();

// ==========================================

// function showMessage(from, text) {
//   from = "*" + from + "*"; // немного украсим "from"

//   alert(from + ": " + text);
// }
// let from = "Аня";
// showMessage(from, "Привет"); // *Аня*: Привет

// // значение "from" осталось прежним, функция изменила значение локальной переменной
// alert(from); // Аня

//==============================

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("А родители разрешили?");
//   }
// }

// let age = prompt("Сколько вам лет?", 18);

// if (checkAge(age)) {
//   alert("Доступ получен");
// } else {
//   alert("Доступ закрыт");
// }

// ==========================================----=====
// from me
// const double = function(array) {
//   //   console.log(array); // [1, 2, 3, 4, 5]
//   const twiceArray = array;
//   //   console.log(twiceArray);
//   for (let i = 0; i < twiceArray.length; i += 1) {
//     twiceArray[i] = twiceArray[i] * 2;
//   }
//   return twiceArray;
// };
// console.log(double([2, 3, 4, 5, 6])); //[4, 6, 8, 10, 12]

// ============================================
// ------------------some try---------------

// function sum(arg1, arg2) {
//   var a = arg1 + arg2; //1+2
//   return a;
// }
// var b = sum(1, 2); //3
// alert(b); //3

// function add() {
//   var c = 1 + sum(1, 2); //1+ (3)
//   return c;
// }
// var d = add();

// ========================---------------================
var variable = "Глобальная переменная";
function f() {
  var variable = "Локальная переменная";
  console.log(variable);
}
f(); // Локальная переменная
console.log(variable); // Глобальная переменная
