"use strict";
// ===========================================
// length

// const products = ["apples", "grapes", "bananas", "plur"];
// console.log(products.length); // будет цыфра - тоесть длина массива - 4

// products[0] = "chicken"; // замена "apples" на "chicken"
// console.log(products);

// ==============================================
// обращение к массиву-матрица

// const board = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// console.log(board[0][2]); // 3
// console.log(board[1][2]); //6
// console.log(board[0][1]); //2

// =====================================================

//TRY TO EXECUTED 4-th task of 1-st MODULE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = 1 + pricePerDroid;
// const let = prompt("enter count of pricePerDroid:");

// ================================================================
// for (let x = 3000; x < 23580; x *= 2) {
//   console.log(x);
// }
// ========================================================
// const max = 23580;
// let sum = prompt(":");
// sum = Number(sum);
// for (let sum = 3000; sum <= max; sum += 3000) {
//   console.log(sum);
// }
// ================================================
// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = prompt(":");
// totalPrice = Number(totalPrice);
// const counter = totalPrice * pricePerDroid;
// while (counter < credits) {
//   console.log(counter);
//   counter += 1;
// }
// ===========================================

// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice = prompt(":");
// totalPrice = Number(totalPrice);
// // const counter = (totalPrice * pricePerDroid) / 3000;
// const counter = totalPrice * pricePerDroid;
// // for (let counter = totalPrice * pricePerDroid ) {
// //   console.log(counter);
// // }
// let numb;
// if ((numb = counter / 3000) * 3000 < credits) {
//   console.log(`You can buy ${numb} Droid`);
//   //   console.log(numb);
// } else if ((numb = counter / 3000) * 3000 > credits) {
//   console.log(false);
//   console.log(numb);
// } else {
//   console.log("nothing");
// }

// ===========================================

// Completed 4-task of 1 MOD-------------!!!!!!!!!!!!!!!!!!!!
// const credits = 23580;
// const pricePerDroid = 3000;
// let message = prompt("Какое количество дроидов Вы хотите купить?");
// // message = Number(message);
// const totalPrice = message * pricePerDroid;
// let counter;
// let lost;
// if (message === null) {
//   console.log("Отменено пользователем!");
// } else if ((counter = totalPrice / 3000) * 3000 < credits) {
//   message = Number(message);
//   console.log(
//     `Ты можешь купить ${counter} Дроидов на сумму ${totalPrice}, и у тебя еще осталось ${credits -
//       totalPrice}`
//   );
// } else if ((lost = (counter = totalPrice / 3000) * 3000) > credits) {
//   message = Number(message);

//   console.log(
//     `Извини друг, но ты не можешь купить ${counter} дроидов, не более 7-ми и у тебя осталось 420`
//   );
// }
