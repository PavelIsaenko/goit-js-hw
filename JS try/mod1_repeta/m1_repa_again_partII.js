// const users = ["poly", "john", "alfred"];
// const login = prompt("Enter login:");
// const isRegistered = users.includes(login);

// if (isRegistered) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// =============================================

// const number = 20.5;
// const name = "Mango";
// const isActive = false;
// const hasChildNodes = false;
// const type = typeof number;
// console.log(type); // boolean

// alert(555);
// const travel = confirm("Are you sure");
// console.log(travel);

// ===========================================
// const input = prompt("enter name:");
// console.log(input);

// ======================================
// let input = prompt("enter number:");
// input = Number(input);
// console.log(input);

// let input = prompt("enter number:");
// const numb = Number(input);
// console.log(numb);

// ========================================

// let input = prompt("Угадай число от 1 до 10");

// input = Number(input);

// const isCorrect = input >= 1 && input <= 10;

// console.log(isCorrect);

// =======================================================
// console.log(Math);

// const products = "SAMS";
// let find = prompt("enter name ofproducts:");

// inLowerCase = products.toLowerCase();
// const common = inLowerCase + products;
// // inUpperCase = products.toUpperCase();

// if (find === common) {
//   console.log("exist");
// } else {
//   console.log("epsent");
// }

// =============================================

// const string = "ASD";
// const inLC = string.toLowerCase();
// const inUC = string.toUpperCase();

// console.log(string);

// =============================================
// Находит через поиск название маленикими и большими буквами также
// const productTitle = "Samsung Note 10";
// const searchStr = prompt("");
// // (let searchStr = prompt("Enter world:");)
// const titleInLc = productTitle.toLowerCase();
// const searchStrInLC = searchStr.toLowerCase();
// const passed = titleInLc.includes(searchStrInLC);
// // console.log(passed);
// if (passed) {
//   console.log("find");
// } else {
//   console.log("epsent");
// }

// ===================================
// const products = "Samsung Note 10";
// const searchStr = prompt("Enter finding word:");

// const titlePrLC = products.toLowerCase();
// const searchStrLC = searchStr.toLowerCase();

// const find = titlePrLC.includes(searchStrLC);

// console.log(find);

// =============================================

// const min = 10;
// const max = 30;
// const value = 26;
// const acount = 12 && 28;
// console.log(value <= acount);

// ==========================================
// const numb = 1;
// let isAcount = prompt(":");
// isAcount = Number(isAcount);
// let pointer = numb => 10 && numb <= 30;
// let message;
// if (isAcount === pointer) {
//   message = true;
// } else {
//   message = false;
// }
// console.log(message);
// ===========================================

// const min = 10;
// const max = 30;
// let message = prompt(":");
// message = Number(message);
// console.log(message);
// if (message >= min && message <= max) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ==============================================
// let value = prompt(":");
// value = Number(value);
// const isRange = value > 10 && value < 30;
// console.log(value);
// if (isRange) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// ====================================================

// const taker = 0;
// const courier = 1;
// const post = 2;

// let userChoice = prompt("enter your choice:");
// // const userChoice = 2;
// userChoice = Number(userChoice);
// // console.log(userChoice);
// let message;

// if (userChoice === taker) {
//   message = "to go oneself";
// } else if (userChoice === courier) {
//   message = "nice choice";
// } else if (userChoice === post) {
//   message = "wait tommorow";
// } else {
//   message = "nothing";
// }
// console.log(message);

// =========================================================
// const taker = 1;
// const courier = 2;
// const post = 3;
// let userChoice = prompt("enter your choice:");
// // const userChoice = 2;
// userChoice = Number(userChoice);
// // console.log(userChoice);
// let message;

// if (userChoice === taker) {
//   message = "to go oneself";
// } else if (userChoice === courier) {
//   message = "nice choice";
// } else if (userChoice === post) {
//   message = "wait tommorow";
// } else {
//   message = "nothing";
// }

// console.log(message);

// =============================================
// const taker = 0;
// const courier = 1;
// const post = 2;
// let userChoice = 1;
// // let userChoice = prompt(":");
// // userChoice = Number(userChoice); // for prompt
// let message;

// switch (userChoice) {
//   case taker:
//     message = "to go oneself";
//     break;

//   case courier:
//     message = "nice choice";
//     break;

//   case post:
//     message = "wait tommorow";
//     break;

//   default:
//     message = "nothing";
// }
// console.log(message);

// =====================================================

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

// ================================================

// let result = prompt("");
// if (result === null) {
//   console.log("null");
// } else if (Number.isInteger(Number(result))) {
//   console.log("int");
// } else {
//   console.log("rest");
// }

const productTitle = "samsung Note 10";
// const searchStr = prompt("");
let searchStr = prompt("Enter world:");

const titleInLc = productTitle.toLowerCase();
const searchStrInLC = searchStr.toLowerCase();
const passed = titleInLc.includes(searchStrInLC);
// console.log(passed);
if (passed) {
  alert("find");
} else {
  console.log("epsent");
}
