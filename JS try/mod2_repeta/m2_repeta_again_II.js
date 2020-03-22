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

// ============================================================

// // const user1 = "Max";
// // const user2 = "John";
// // const user3 = "Armen";
// // const user4 = "Gogi";
// // const user5 = "Ara";

// // const users = user1 + user2 + user3 + user4 + user5;
// // let lusers = users.split();
// // console.log(lusers);
// массив--------------------------------
// const users = ["ara", "gogi", "kiki", "luck"];
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

// ==============================================================================

// const products = ["appl", "grape", "ananas", "pineaple"];
// const sentence = "Hello my dear Bro";

// const changeProducts = products.join(","); // appl,grape,ananas,pineaple
// console.log(changeProducts);

// const changeSentence = sentence.split(" "); // (4) ["Hello", "my", "dear", "Bro"]
// console.log(changeSentence);

// ==========================================================
// Итерация по массиву, то есть перебор массива

// 1-й вариант-------------------------------------------
// const users = ["ara", "gogi", "kiki", "luck"];
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

// 2-й вариант--------------------------------------------

// const users = ["ara", "gogi", "kiki", "luck"];
// let login = prompt("enter name user:");
// const isFind = users.includes(login); // для того что бы искал в массиве необходимую инфу добавляем  .includes()

// if (login === null) {
//   console.log("sorry for your visit");
// } else if (isFind) {
//   console.log(`Find ${login}`);
// } else {
//   console.log("not to find");
// }

// 2-й(Репета) вариант------------------------------

// const users = ["Mango", "Ajax", "Poly"];
// const login = prompt("Ener your login");

// const isRegistered = users.includes(login); //ищет совпадение в users

// if (isRegistered) {
//   console.log("right name");
// } else {
//   console.log("wrong data");
// }

// ===========================================
//slice - метод копирования
// const users = ["Mango", "Ajax", "Poly", "Ara"];

// const copy = users.slice(1, 3); // to copy from 1-st index to 2-nd index ["Ajax", "Poly"]
// console.log(copy);

// ==========================================================

// const str1 = "what do you do?";
// let message = prompt(":");
// // const bigLetter = str1.toLowerCase();
// const mess = message.toLowerCase();
// const str2 = str1.toLowerCase();
// const common = str2.includes(mess);
// // console.log(common.includes(message));

// if (common) {
//   console.log(true);
// } else {
//   console.log(false);
// }
// ============================================================

// const taker = 1;
// const courier = 2;
// const post = 3;

// const promptLabel = `To change your option deliver: ${taker}-oneself, ${courier}-courier,${post}-post`;

// let userChoice = prompt(promptLabel);
// let message;

// if (userChoice === null) {
//   message = "come back anyway";
// } else {
//   userChoice = Number(userChoice);
//   switch (userChoice) {
//     case taker:
//       message = "to go oneself";
//       break;

//     case courier:
//       message = "nice choice";
//       break;

//     case post:
//       message = "wait tommorow";
//       break;

//     default:
//       message = "nothing";
//   }
// }
// console.log(message);

// ===============================================================
// Task 5 mod-1 -------------------------------------------------

// const china = "Китай";
// let chinaPrice = 100;
// const chili = "Чили";
// let chiliPrice = 250;
// const australia = "Австралия";
// let australiaPrice = 170;
// const india = "Индия";
// let indiaPrice = 80;
// const jamaika = "Ямайка";
// let jamaikaPrice = 120;

// let userChoice = prompt(
//   "Введите название страны, куда Вы хотите оформить заявку:"
// );
// let message;

// if (userChoice === null) {
//   alert("В вашей стране доставка не доступна");
// } else {
//   const searchStr = userChoice.toLowerCase();

//   switch (searchStr) {
//     case china.toUpperCase():
//     case china.toLowerCase():
//       message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
//       break;

//     case chili.toLowerCase():
//     case chili.toUpperCase():
//       message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
//       break;

//     case australia.toLowerCase():
//     case australia.toUpperCase():
//       message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
//       break;

//     case india.toUpperCase():
//     case india.toLowerCase():
//       message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
//       break;

//     case jamaika.toLowerCase():
//     case jamaika.toUpperCase():
//       message = `Доставка в ${jamaika} будет стоить ${jamaikaPrice} кредитов`;
//       break;

//     default:
//       message = "nothing";
//   }
// }
// console.log(message);

// ===============================================
//splice - удаление в массиве

// const users = ["ara", "gogi", "kiki", "luck"];
// console.log(users.splice(1, 2)); //delete ["gogi", "kiki"]
// console.log(users); //  ["ara", "luck"]

// splice - вставляем(добавляем)
// const users = ["ara", "gogi", "kiki", "luck"];
// console.log(users.splice(1, 0, "alfred")); //(5) ["ara", "alfred", "gogi", "kiki", "luck"]
// console.log(users);

// // splice - замена
// const users = ["ara", "gogi", "kiki", "luck"];
// console.log(users.splice(1, 1, "george")); // ["ara", "george", "kiki", "luck"]
// console.log(users);

// splice -перемещение карточек
//  можно как то допустим 5 карточку перенести ее на место второй?

//  1.найти 5-ю карточки ее индекс
//  2.вырезать элемент с таким индексом и сохранить
//  3.вставить её

// const cards = ["card-1", "card-2", "card-3", "card-5", "card-4"];
// const index = cards.indexOf("card-5"); // находим индекс карточки -3
// const card = cards.splice(index, 1)[0]; // удаляем карточку "card-5" и спомощью [0] делаем её строкой
// cards.splice(1, 0, card); // вставляем перед 2-м элементом
// console.log(cards);

// ==========================================================

//------------ cycle----------------------------------------------------
//  while------------------

// let value = 0;
// while (value < 10) {
//   console.log(value); // 0 1 2 3 4 5 6 7 8 9
//   value += 1;
// }

// -------------------------------------------------

// let counter = 0;
// const products = ["apple", "grape", "banan", "lemon"];

// while (counter < products.length) {
//   console.log(products[counter]);
//   counter += 1;
// }

// ==============================================
// do...while

let total = 0;
let userInput;

do {
  userInput = +prompt("Введите число:");
  total += userInput;
} while (userInput);
alert(`Общая сумма чисел равна ${total}`);

// =======================================================
