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

