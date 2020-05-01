"use strict";

// ----------------------------------
// var arr = [3, 2, 5, 6];
// function arraySum(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   console.log(sum);
// }
// arraySum(arr);
// ----------------------------======================
// сумирование чисел массива!!!!!!!!!!!!!!!!!1-------------------
// let numb = [3, 2, 5, 6];
// let sum = numb.join(); //создаем строку с массива
// // console.log(sum);
// let clearStr = sum.replace(/[\s.,%]/g, ""); // убираем запятые в строке-массив
// clearStr = clearStr.toString();
// // console.log(clearStr);

// let count = 0; //создаем переменную для подсчета чисел

// for (i = 0; i < clearStr.length; i += 1) {
//   // count += Number(clearStr[i]);
//   count += Number(clearStr[i]);
// }
// console.log(count);

// -------------------------------------------------------

// let sum = 0,
//   i;

// let len = 33721;
// len = len.toString();
// for (i = 0; i < len.length; i++) {
//   sum += Number(len[i]);
// }

// console.log(sum);
// ------------------------------------------------------

// alert("Hello");

// setTimeout(function () {
//   alert("Francis");
// }, 50);
// alert("I am ");

// ------------------------------------------------------

// var fruits = [];
// fruits.push("банан", "яблоко", "персик");
// console.log(fruits.length);
// fruits[5] = "манго";
// console.log(fruits[5]); // 'манго'
// console.log(fruits);
// console.log(Object.keys(fruits)); // ['0', '1', '2', '5']
// console.log(fruits.length);

// ---------------------------------------------

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length] = "Lemon";
// console.log(fruits); // (5) ["Banana", "Orange", "Apple", "Mango", "Lemon"]

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits[fruits.length - 1] = "Lemon";
// console.log(fruits); // (4) ["Banana", "Orange", "Apple", "Lemon"]

// -=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=--=--=-=-=-=-=-=-=-=-

// let fruits = ["orange", "bananas", "lemon", "grape"];
// // fruits = fruits.join(" ");
// // console.log(fruits); // orange bananas lemon grape
// fruits = fruits.join("-");
// console.log(fruits); //orange-bananas-lemon-grape

// -----======--------------------=================-------------
//сумирование чисел массива!!!!!!!!!!!!!!!!!!!1
// let numbers = [1, 2, 3, 4, 5, 6];
// numbers = numbers.join("");
// console.log(numbers);

// let count = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//   count += Number(numbers[i]);
// }
// console.log(count); // 21

// -------------------------------------
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var x = fruits.pop();
// console.log(x);
// console.log(fruits);
// var y = fruits.pop();
// console.log(y);
// console.log(fruits);
// var z = x + y;

// ==============================-------------------==========================

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits);
// fruits[(fruits.length = 0)] = "Kiwi";
// console.log(fruits);

// -----------------------------------------------------------

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// --------------------------====================--------------

// var myGirls = ["Cecilie", "Lone"];
// var myBoys = ["Emil", "Tobias", "Linus"];
// var myChildren = myGirls.concat(myBoys);
// console.log(myChildren); // (5) ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin", "Morgan"];
// var myChildren = arr1.concat(arr2, arr3);
// console.log(myChildren); // (7) ["Cecilie", "Lone", "Emil", "Tobias", "Linus", "Robin", "Morgan"]

// var arr1 = ["Cecilie", "Lone"];
// var myChildren = arr1.concat(["Emil", "Tobias", "Linus"]);
// console.log(myChildren); // (5) ["Cecilie", "Lone", "Emil", "Tobias", "Linus"]

// ---------------------------------------------------

// let input = prompt("Number:");
// input = Number.parseInt(input);

// console.log(input);

// ----------------------------------------------------------
// перебор массива и найти подходящее значение с указанием номера индекса

// let array = ["a", "b", "c", "d", "f", "g"];
// const elementToFind = prompt("Enter"); // c
// let positionOfElement;

// for (let i = 0; i < array.length; i += 1) {
//   //   console.log(`iteration ${i}`);

//   if (array[i] === elementToFind) {
//     positionOfElement = i; // указывает позицию елемента введеного
//     break;
//   }
// }

// console.log(`position of element: ${positionOfElement}`); // position of element: 2

// --------------------------------------------=========-------------

// let country = prompt(":");
// let message;
// let price;

// if (country === null) {
//   alert("В вашей стране доставка не доступна");
// } else {
//   const stringFind = country.toLowerCase();

//   switch (stringFind) {
//     case "китай":
//       price = 100;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case "чили":
//       price = 250;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case "австралия":
//       price = 170;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case "индия":
//       price = 80;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case "ямайка":
//       price = 120;
//       message = `Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     default:
//       message = "nothing";
//   }
// }

// console.log(message);

// --------------------------------------

// let china = "China";
// let priceOfChina = 100;
// let chili = "Chili";
// let priceOfChili = 180;

// let country = prompt("Enter country:");
// // country = country.toLowerCase();

// if (country === null) {
//   alert("You are wrong");
// } else {
//   country = country.toLowerCase();
//   if (country === china.toLowerCase()) {
//     alert(`You order ${china} and it cost ${priceOfChina}`);
//   } else if (country === chili.toLowerCase()) {
//     alert(`You order ${chili} and it cost ${priceOfChili}`);
//   } else {
//     alert("nothing");
//   }
// }

// ======------======--------------=========----===---
// ----------------------------======================
// сумирование чисел массива!!!!!!!!!!!!!!!!!1-------------------
// let numb = [3, 2, 5, 6];
// let sum = numb.join(); //создаем строку с массива
// // console.log(sum);
// let clearStr = sum.replace(/[\s.,%]/g, ""); // убираем запятые в строке-массив
// clearStr = clearStr.toString();
// // console.log(clearStr);

// let count = 0; //создаем переменную для подсчета чисел

// for (let i = 0; i < clearStr.length; i += 1) {
//   //   count += clearStr[i]; // видит как строку, а не числа
//   count += Number(clearStr[i]); //превращает в числовые значение
// }
// console.log(count);

// -------------------------------------------------------

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
//     //  case china.toUpperCase():
//     case china.toLowerCase():
//       message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
//       break;

//     case chili.toLowerCase():
//       //  case chili.toUpperCase():
//       message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
//       break;

//     case australia.toLowerCase():
//       //  case australia.toUpperCase():
//       message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
//       break;

//    //   case india.toUpperCase():
//     case india.toLowerCase():
//       message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
//       break;

//      case jamaika.toLowerCase():
//    //  case jamaika.toUpperCase():
//       message = `Доставка в ${jamaika} будет стоить ${jamaikaPrice} кредитов`;
//       break;

//     default:
//       message = "nothing";
//   }
// }
// console.log(message);

// ----------------------====================-----------------======

