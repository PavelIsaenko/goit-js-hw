// Repeta M1_vebinar_part2

"use strict";

// =========================================
// && -and
// const min = 10;
// const max = 30;
// const value = 25;
// const isInRange = value > 10 && value < 30; // true - 25 между 10-тю и 30-тю
// console.log(isInRange);

// const min = 10;
// const max = 30;
// const value = 25;
// const isInRange = value > 10 && value >= 30; // false - 25, больше 10-ти и меньше 30-ти
// console.log(isInRange);

// =========================================
//  || -or

// const min = 10;
// const max = 30;
// const value = 25;
// const isInRange = value > 10 || value > 30; // true
// console.log(isInRange);

// const min = 10;
// const max = 30;
// const value = 25;
// const isInRange = value < 10 || value > 30; //false
// console.log(isInRange);

// =============================================
// !- not

// console.log(!""); // true
// console.log(!"0"); // false
// console.log(!"1"); // false
// console.log(!true); //false
// console.log(!false); //true
// console.log(!null); //true

// ==================================================
// ветвление

// const message = prompt("enter number:");
// if (message > 10 && message < 30) {
//   console.log("right number");
// } else {
//   console.log("wrong number");
// }
// ----------------------------------------
// const min = 10;
// const max = 30;
// const value = prompt("enter:");
// const isInRange = value >= min && value < max;
// if (isInRange) {
//   console.log("Number is in range! Awesome!");
// } else {
//   console.log("after if");
// }
//-------------------------------------------
// const min = 10;
// const max = 30;
// const value = 25;
// const isInRange = value > 10 && value < 30;
// if (isInRange) {
//   console.log("Number is in range! Awesome!");
// } else {
//   console.log("after if");
// }
// ---------------------------------------------
// const min = 10;
// const max = 30;
// const value = 25; // "Number is in range! Awesome!"
// // const value = 125; // "after if"
// let message;
// const isInRange = value > 10 && value < 30;
// if (isInRange) {
//   message = "Number is in range! Awesome!";
// } else {
//   message = "after if";
// }
// console.log(message);
// -----------------------------------------------

// const min = 10;
// const max = 30;
// const value = 25;
// let message;
// if (value < 10) {
//   message = "Less then 10";
// } else if (value > 20 && value < 50) {
//   message = "Greater then 20";
// } else {
//   message = ":(";
// }
// console.log(message);

// =================================================
// variables scope - области видимости

// if (true) {
//   const value = 5;
//   console.log(value);
//   //A
//   if (true) {
//     const value = 10;
//     console.log(value);
//     //B
//   }
// }
// if (true) {
//   const value = 15;
//   console.log(value);
//   //C
// }

// ================================================================
// тернарный оператор

// const isActive = true;
// //записуем тернарный оператор
// const message = isActive ? "Active" : "InActive";
// console.log(message);

// ============================================
// const TAKEOUT = 0;
// const COURTER = 1;
// const POST = 2;
// const userChoise = 2;
// let message;

// if (userChoise === TAKEOUT) {
//   message = "So, Ok";
// } else if (userChoise === COURTER) {
//   message = "Super, for your money";
// } else if (userChoise === POST) {
//   message = "Without you";
// } else {
//   message = "Nothing";
// }
// console.log(message);

// ==============================================================
// switch

// const TAKEOUT = 0;
// const COURTER = 1;
// const POST = 2;
// const promptUsCh = `To change a way deliver: ${TAKEOUT}-selfone, ${COURTER}-courter, ${POST}-post`;

// let userChoise = prompt(promptUsCh);
// let message;

// if (userChoise === null) {
//   message = "It is very bad"; // при нажатие на cancel
// } else {
//   //"1"
//   userChoise = Number(userChoise); // преобразование строки в число
//   // 1-number

//   switch (userChoise) {
//     case TAKEOUT:
//       message = "TAKEOUT some else";
//       break;

//     case COURTER:
//       message = "To deliver";
//       break;

//     case POST:
//       message = "To post";
//       break;

//     default:
//       message = "Nothing";
//   }
// }
// console.log(message);
// --------------------------------------------------------

// const TAKEOUT = 0;
// const COURTER = 1;
// const POST = 2;
// let userChoise = prompt("enter:");
// let message;
// userChoise = Number(userChoise); // преобразовываем в числовое значение для  выбора закза
// switch (userChoise) {
//   case TAKEOUT:
//     message = "TAKEOUT some else";
//     break;
//   case COURTER:
//     message = "SUPER";
//     break;
//   case POST:
//     message = "TOMMorow";
//     break;
//   default:
//     message = "Nothing";
// }
// console.log(message);

// ===================================
//проверка на целые числа

const result = prompt("");

if (result === null) {
  console.log("null");
} else if (Number.isInteger(Number(result))) {
  console.log("int");
} else {
  console.log("rest");
}
console.log();
