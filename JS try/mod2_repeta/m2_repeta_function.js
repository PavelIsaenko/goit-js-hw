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
// let userName = "Вася";

// function showMessage() {
//   let message = "Привет, " + userName;
//   alert(message);
//   userName = "Петя"; // (1) изменяем значение внешней переменной
// }
// alert(userName); //Вася
// showMessage(); //Привет, Вася
// alert(userName); //Петя
// showMessage(); //Привет, Петя

// ----------------------------------------------------------------------
// function showMessage() {
//   alert("Всем привет!");
//   alert("Fuck off!");
// }

// showMessage();

// ====================================================
// Again Repeta

// const add = function(x, y) {
//   console.log(x);
//   console.log(y);
//   const summ = x + y;
//   console.log(summ); // 2+3 =5/ 5+12=17 /5 +17 =22
//   console.log("to call function add");
// };

// add(2, 3); //x=2 y=3
// add(5, 12); //x=5 y=12
// add(5, 17); //x=5 y =17

// -----------------------------------------------------
// return ---------------------

// const add = function(x, y) {
//   const summ = x + y;

//   console.log("to call function add");
//   return summ; // возвращаем операцию summ = x + y в функцию и подставляем числа с resA =add(2, 3), которые вне функции
// };

// const resA = add(2, 3); // summ = x + y = 5
// console.log("result 2+3:", resA); // result 2+3: 5

//------------------------------------------------------------------

// const add = function(x, y) {
//   const summ = x + y;

//   console.log("to call function add");
//   return summ; // возвращаем операцию summ = x + y в функцию и подставляем числа с resA =add(2, 3), которые вне функции
// };

// const resA = add(2, 3); // 5
// console.log("result 2+3:", resA); //
// let resB = add(4, 5); // 9
// console.log("result 2+3:", resB); //
// // let resB = add(8, 5); // нельзя указывать одинаковым переменным resB функкцию с разными и одинаковыми значениями, не будет работать
// // console.log("result 2+3:", resB); //
// let resC = add(4, 6); //  10
// console.log("result 2+3:", resC); //

// -------------------------------------------------------------------
// else variant

// const add = function(a, b) {
//   const count = a + b;
//   return count;
// };

// // add(2, 3); //5
// console.log("result 2+3:", add(2, 3)); // result 2+3: 5
// console.log("reuslt 2+3:", add(4, 5)); //result 2+3: 9

// ==============================================================
// функциональное объявление может делать вызов више функции, то есть до функции

// add1(2, 3); //5
// function add1(x, y) {
//   const sum = x + y;
//   console.log(sum); //5
//   return sum;
// }
// console.log(add1(2, 3)); //5

// ====================================================
// Функция нахождениясамого длинного слова в строке

// const string = "Aenene imperdiet cras non dolor";

// const findLongestWord = function(string) {
//   const words = string.split(" ");
//   let longestWord = words[0];

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord("Aenene imperdiet cras non dolor"));
// console.log(findLongestWord("Ae s dsdgsdgnene imperdiet cras non dolor"));
// console.log(findLongestWord("Ae imprdiet d cras erer non dolordddddddd"));
// // либо так вывести
// // const longWord = findLongestWord("Aenene imperdiet cras non dolor");
// // console.log(longWord);

// ======================================================
// Array includes - своими руками (найти совпадающий елемент массива со значением)

// const includes = function(array, value) {
//   for (const item of array) {
//     // перебирается весь массив
//     if (item === value) {
//       return true;
//     } //не используем "else if" что бы весь массив перебрал цикл для поиска совпадения и выводим return-> true или false
//   }
//   return false;
// };

// console.log(includes([1, 2, 3], 4)); //false
// console.log(includes([1, 2, 3, 4, 5], 2)); // true
// console.log(includes(["mango", "ajax", "poly"], "mango")); //true

// ===============================================================
// Посчитать сколько будет стоить гравировка
// Стоимост одного слова 10 кредитов

// const calculatePrice = function(string, costPerWord) {
//   let total = 0;
//   const words = string.split(" ");

//   for (const word of words) {
//     total += costPerWord;
//   }
//   return total;
// };

// const message = "Aenene imperdiet cras non dolor";
// const price = calculatePrice(message, 20);
// console.log(price);

//  // через console.log();

// console.log(calculatePrice("Aenene imperdiet cras non dolor", 20));
// console.log(calculatePrice("Aenene imperdiet cras non dolor", 25));
// console.log(calculatePrice("Aenene imperdiet cras non dolor", 40));

// другой вариант решения-------------------------------------------------

// const calculatePrice = function(string, costPerWord) {
//   const words = string.split(" ");
//   const length = words.length;
//   const total = length * costPerWord;

//   return total;
// };

// // const message = "Aenene imperdiet cras non dolor";
// // const price = calculatePrice(message, 20);
// // console.log(price);

// console.log(calculatePrice("Aenene imperdiet cras non dolor", 20));
// console.log(calculatePrice("Aenene imperdiet cras non dolor", 25));
// console.log(calculatePrice("Aenene imperdiet cras non dolor", 40));

// eщe один вариант решения - параметр по умолчанию-----------------------

// const calculatePrice = function(string, costPerWord = 23) {
//   const words = string.split(" ");
//   const length = words.length;
//   const total = length * costPerWord;

//   return total;
// };

// console.log(calculatePrice("Aenene imperdiet cras non dolor"));

// ===================================================================
// 50 minutes - Repeta

// const double = function(array) {
//   console.log(array); // [1, 2, 3, 4, 5];
//   array[0] = 10;
// };

// const numbers = [1, 2, 3, 4, 5];
// double(numbers);
// console.log(numbers); // [10, 2, 3, 4, 5]

// -------------------========-------------------------

// const double = function(array) {
//   console.log(array); // [1, 2, 3, 4, 5]
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = array[i] * 2;
//   }
// };

// const numbers = [1, 2, 3, 4, 5];
// double(numbers);
// console.log(numbers); // [2, 4, 6, 8, 10]

// ===========================================================
// Предикантная функция -  возвращает True или False
// Array.isArray
// Number.isNaN
// Number.isInteger

// const isEqual = function(a, b) {
//   return a === b;
// };

// console.log(isEqual(2, 2)); // true a=2 b=2
// console.log(isEqual(4, 3)); // false a=4 b=3

// ==========================-=-=-=-=-=-=-=-=-=-=-=-=-=-=---------
// Функция сложения произвольного кол-ва чисел
// ---------------arguments--------------------------

// const add = function() {
//   // console.log(arguments);
//   let total = 0;
//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }
//   return total;
// };

// console.log(add(1, 2, 3)); // 6
// console.log(add(1, 2, 3, 4, 5)); // 15
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9)); //45

// =====================================================================
// --здесь мы первый числа типа 5/10/15 умножаем на сумму остальных---

// const add = function() {
//   console.log(arguments);
//   const mult = arguments[0];
//   let total = 0;
//   for (let i = 1; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }
//   return total * mult;
// };

// console.log(add(5, 1, 2, 3)); //30
// console.log(add(10, 1, 2, 3, 4, 5)); //150
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9)); //675

// -------------------------------========================-------------
// создание из псевдомассива arguments массив Array.from

// const add = function() {
//   // console.log(arguments);
//   const args = Array.from(arguments); // Это копия аргумента
//   console.log(args); // [5, 1, 2, 3]

//   const mult = args[0];
//   args.shift();
//   console.log(args); // убрали первую цифру [1, 2, 3] и так далее
// };

// console.log(add(5, 1, 2, 3));
// // console.log(add(10, 1, 2, 3, 4, 5));
// // console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// ----еще один вариант удаления 1-й цифры из массива

// const add = function() {
//   let args = Array.from(arguments); // const заменили на let
//   console.log(args); // [5, 1, 2, 3]

//   const mult = args[0];
//   args = args.slice(1); // вместо shift()
//   console.log(args); // убрали первую цифру [1, 2, 3] и так далее
// };

// console.log(add(5, 1, 2, 3));

// ===========================================
// ------------------------------------------
// =====подсчет=====================

// const add = function() {
//   let args = Array.from(arguments);
//   // console.log(args);

//   const mult = args[0];
//   args = args.slice(1);
//   // console.log(args);

//   let total = 0;
//   for (let i = 0; i < args.length; i += 1) {
//     total += args[i];
//   }
//   return total * mult;
// };

// console.log(add(5, 1, 2, 3));
// console.log(add(10, 1, 2, 3, 4, 5));
// console.log(add(15, 1, 2, 3, 4, 5, 6, 7, 8, 9));

// =============---------------++++++++++++++++++
//операция rest преобразование всех аргументов в массив

// const add = function(...args) {
//   console.log(args); // на выходе массив
//   let total = 0;

//   for (let i = 0; i < arguments.length; i += 1) {
//     total += arguments[i];
//   }

//   return total;
// };

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5));
// console.log(add(1, 2, 3, 4, 5, 6, 7, 8, 9));

// ==============================

