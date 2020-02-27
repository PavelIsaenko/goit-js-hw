// "use strict";
// const itemName1 = "iron";
// const itemName2 = "iphone";

// const price1 = "100";
// const price2 = "10000";

// let userName = "";
// console.log("userName - ", userName);

// let itemCount = 0;

// userName = prompt("What is your name?");
// console.log("userName - ", userName);

// itemCount = prompt("How much do you want?");
// console.log("itemCount - ", itemCount);

// const itemName = prompt("what do uoy want?");
// console.log("itemName - ", itemName);

// if (itemName === itemName1) {
//    console.log(`You have ordered ${itemName} in ${itemCount} countity`);
// } else {
//    console.log(`We dont have any $ {itemName}`);
// }

// "use strict";
// const itemName1 = "iron";
// const itemName2 = "iphone";

// const price1 = "100";
// const price2 = "10000";

// const userName = prompt("What is your name?");
// const itemCount = prompt("How much do you want?");
// const itemName = prompt("what do uoy want?");

// if (itemName === itemName1) {
//   console.log(`You have ordered ${itemName} in ${itemCount} countity`);
// } else {
//   console.log(`We dont have any $ {itemName}`);
// }

// const admin = "admin";
// const superUser = "superUser";

// const value = prompt("enter your name");

// 1 variant
// if (value === admin) {
//   console.log("you are cool");
// } else if (value === superUser) {
//   console.log("you are superCool");
// }

// 2 variant
// if (value === admin) {
//   console.log("you are cool");
// } else if (value === superUser) {
//   console.log("you are superCool");
// } else {
//   console.log("you are superCool");
// }

// switch (value) {
//   case admin:
//   case superUser:
//     console.log("you are superCool");
//     break;
//   default:
//     console.log("you are brodyag");
// }

// =======Practise 21/02/2020==============

// Алгоритм
// 1. српашиваю у юзера строку
// 2. привести ее к числу
// 3. сравниваем с искомым
// 3.. приплюсовать к попыткам
// 3.1 если названо меньше - алерт(консоль) попробуй больше
// 3.2 если названо больше - алерт(консоль) попробуй меншье
// 3.3 если равно - вывести резкльтат и попытку

// const SECRET_NUMBER = 999;
// let tries = 0;
// let answer;

// do {
//   tries++;
//   answer = prompt("Gues the number");
//   if (answer === null) {
//     break;
//   }

//   if (answer > SECRET_NUMBER) {
//     console.log("Try smaller number");
//   } else if (answer < SECRET_NUMBER) {
//     console.log("Try bigger number");
//   }
// } while (Number(answer) !== SECRET_NUMBER);

// if (Number(answer) === SECRET_NUMBER) {
//   console.log(`You guess the number: ${SECRET_NUMBER} with ${tries} try`);
// } else {
//   console.log("You have cancelled");
// }
