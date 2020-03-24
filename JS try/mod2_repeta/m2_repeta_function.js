// Repeta M2_vebinar_part3

"use strict";

// function

// функциональное выражение
// const add = function(x, y) {
//   console.log(x); // присвоили значение 2 с add(2, 3);
//   console.log(y); // присвоили значение 3 с add(2, 3);

//   const sum = x + y;
//   console.log(sum); // 5

//   console.log("вызов функции add");
// };

// add(2, 3);
// add(5, 5); //реюз функции
// add(15, 5); // реюз функции

// ----------------------------------------------
// другое(функциональное объявление)

// add1(2,3);
// function add1() {
// const sum = x + y;
// console.log("вызов функции add");
// return sum;
// }

// -----------------------------------------------------

// const add = function(x, y) {
//   const sum = x + y;

//   console.log("вызов функции add");
//   return sum;
// };

// const resA = add(2, 3);

// console.log(resA); // 5
// ------------------------------------

// const add = function(x, y) {
//   const sum = x + y;

//   // console.log("вызов функции add");
//   return sum;
// };

// const x = add(2, 3); // на место вызова add(2, 3) приходит значение 5

// console.log(x);

// ------------------------------------

// const qwe = function(a, b) {
//   const plis = a + b;
//   return plis;
// };
// const r = qwe(2, 3);
// console.log(r);
// // qwe(2, 3);
// // console.log(qwe);

// ==============================================================
// ==============================================================
// try ftom learn.js.ru

// let userName = "Max";

// function showName() {
//   userName = "Jack";
//   let sayHi = "Hi," + userName;
//   console.log(sayHi);
//   console.log(userName);
// }

// console.log(userName);
// showName();
// console.log(welcome);
// ----------------------------------------------------------------------
// function showMessage() {
//   alert("Всем привет!");
// }

// showMessage();
// showMessage();
// -------------------------------------------------------------------
// function showMessage() {
//   let message = "Привет, я JavaScript!"; // локальная переменная
//   const name = "Kolya";

//   const calling = `${name} ` + message;
//   console.log(calling);
// }

// showMessage();

// -------------------------------------------------
let userName = "Вася";

function showMessage() {
  userName = "Петя"; // (1) изменяем значение внешней переменной

  let message = "Привет, " + userName;
  alert(message);
}

alert(userName); // Вася перед вызовом функции

showMessage();
