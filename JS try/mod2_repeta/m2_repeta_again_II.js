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
//итерация массива(перебор массива)
// let counter = 0;
// const products = ["apple", "grape", "banan", "lemon"];

// while (counter < products.length) {
//   console.log(products[counter]);
//   counter += 1;
// }

// ==============================================
// do...while

// пока не нажмет "кенсел" будет появляться табло "Введите число:"
// let total = 0;
// let userInput;

// do {
//   userInput = +prompt("Введите число:");
//   total += userInput;
// } while (userInput);
// alert(`Общая сумма чисел равна ${total}`);

// =======================================================
// Выполняем до тех пор пока не равно = null и введено число 10
// let userInput;

// do {
//   userInput = prompt("Введите число 10:");
//   console.log(userInput);
// } while (Number(userInput) !== 10);

// ===============================================================
// // цикл for- со счетчиком

// const products = ["apples", "grapes", "bananas", "plur"];

// for (let i = 0; i < products.length; i += 1) {
//   console.log(i); //0 1 2 3
//   console.log(`products${i}:`, products[i]); // apples grapes bananas plur
// }

// -----------------------------------------------

// const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(i); //0 1 2 3
//   console.log(`numbers${i}:`, numbers[i]); //

//   numbers[i] = numbers[i] * 2; //  изменен массив, то есть умножен * 2 [2, 4, 6, 8, 10]
// }
// console.log(numbers);

//------------------------------------------------------
// // ситуация с for...of

// const numbers = [1, 2, 3, 4, 5];

// for (let numb of numbers) {
//   numb = numb * 2;
//   console.log(numb); // 2 4 6 8 10
// }
// console.log(numbers); // массив остается тот же [1, 2, 3, 4, 5]

// ==============================================================
// цикл  for..of- более современный метод

// const products = ["apples", "grapes", "bananas", "plur"];

// for (const prod of products) {
//   console.log(prod);
// }

// -----------------------------------------------------

// ==========================================================
//вложенные цыклы-------------------------------------
//-------------------------------------
// создаем внутри массива цикл массива

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   // сначала мі обрабатівем основной индекс массива
//   console.log("i:", i);
//   console.log("matrix[i]:", matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     //здесь уже подиндекс в массиве
//     console.log(matrix[i][j]);
//   }
// }

// ----------------------------------------------
//console.group();

// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];
// for (let i = 0; i < matrix.length; i += 1) {
//   console.group(`Iteration${i}`);
//   console.log("i:", i);
//   console.log("matrix[i]:", matrix[i]);

//   for (let j = 0; j < matrix[i].length; j += 1) {
//     console.log(matrix[i][j]);
//   }
//   console.groupEnd(`Iteration ${i}`);
// }

// ===========================================================
// =======================================
// Задачка

// напиши скрипт, котоый проверяет произвольную строку в переменной message и находит в ней самое длинное слово, записывая его в переменную longestWord.

// 1.Сделать из строки массив
// 2. Перебрать массив в цикле
// Переменна для хранения самого длинного слова и делаем предположение что самое длинное слово это первое
// на каждой итерации сравнить текущее и новое
// если новое больше текущего то перезаписать
//-------

// const message = "May the force be with you";
// const words = message.split(" "); //to create massive
// let longestWord = words[0]; // дулаем предположение, что 1-е слово самое длинное, поэтому в итерации мы не будем начинать проверку не с 0, а с 1 (let i = 1)

// // сначала перебор массива с помощью -for-
// for (let i = 1; i < words.length; i += 1) {
//   console.log("i:", i);
//   console.log("words[i]:", words[i]);

//   if (words[i].length > longestWord.length) {
//     // добавили .length что бы сравнивало именно строки
//     longestWord = words[i];
//   }
// }
// console.log(words);
// console.log(longestWord);

// ==========================================================================
//без предположения большого слова

//(((( const message = "May the force be with you";
// const words = message.split(" "); //to create massive
// let longestWord = "";

// for (let i = 0; i < words.length; i += 1) {
//   if (words[i].length > longestWord.length) {
//     // добавили .length что бы сравнивало именно строки
//     longestWord = words[i];
//   }
// }
// console.log(words);
// console.log(longestWord);))))))

// -------------------------------------
// также только с for...of

// const message = "May the force be with you";
// const words = message.split(" ");
// let longestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }
// console.log(words);
// console.log(longestWord);

// ======================================

//найти самое большое и самое маленькое число в массиве
// const maxNum = [5, -1, 40, 355, 17, 3];
// let bigNum = maxNum[0];

// for (let i = 0; i < maxNum.length; i += 1) {
//   if (maxNum[i] > bigNum) {
//     bigNum = maxNum[i];
//   }
// }
// console.log(bigNum);

// =============================================================
//найти слово у которого слева слово из 4-х букв, а справа из 5-ти

// const message = "qq www eeee rrr ttttt yy";
// const words = message.split(" ");
// const max = words.length - 1;
// const leftCount = 4;
// const rightCount = 5;
// let target;

// for (let i = 1; i < max; i += 1) {
//   console.log(words[i]); // www eeee rrr ttttt
//   console.log(i);
//   // const prevIdx = i - 1;
//   // const prevElementLength = words[prevIdx].length;
//   // const nextIdx = i + 1;
//   // const nextElementLength = words[nextIdx].length;
//   const prevElementLemgth = words[i - 1].length;
//   const nextElementLemgth = words[i + 1].length;

//   if (prevElementLemgth === leftCount && nextElementLemgth === rightCount) {
//     target = words[i];
//   }
// }
// console.log(words);
// console.log(target); // rrr

// ============================================================
// break

// const clients = ["max", "poly", "john", "eric"];
// const clientFind = prompt("enter name clients:");
// let message;
// for (let i = 0; i < clients.length; i += 1) {
//   if (clients[i] === clientFind) {
//     message = `To find ${clientFind}`;
//     break;
//   } else {
//     message = "Not to find";
//   }
// }
// console.log(message);

// ================================================================

// const numbers = [1, 2, 3, 4, 5];
// // console.log(numbers.includes(3));
// // const numberToFind = 3;
// let numberToFind = prompt("Enter from 1 to 5:");
// let result;

// for (const numb of numbers) {
//   numberToFind = Number(numberToFind);

//   if (numb === numberToFind) {
//     result = `Find ${numberToFind}`;
//     break;
//   }
// }
// console.log(result);

// =================================================================
//---------------function------------------------------------

// ----Training for understand function-----------------------------------------

// const add = function(x, y) {
//   //   console.log(x);
//   //   console.log(y);
//   let plus = x + y;
//   return plus;
//   //   console.log(plus);
//   //   let minus = y - x;
//   //   console.log(minus);
// };
// // console.log(plus);

// console.log(add(2, 3)); //5
// // add(4, 5);

// ==============================================================
// нахождение самого длинного слова в строке

// without function method--------------

// const string = "Aeeene imperdient cras non dolor";
// const words = string.split(" "); //создаем массив
// console.log(words);

// let longestWord = words[0];// предположения
// // let shortestWord = words[0];

// for (const word of words) {
//   if (word.length > longestWord.length) {
//     longestWord = word;
//   }
// }

// console.log(longestWord);

// -----with function-----------------------------------

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

// //Два варианта вывода функции
// // 1-й
// const variable = findLongestWord("Aeeene imperdient cras non dolor");
// console.log(variable);
// 2-й
// console.log(findLongestWord("Aeeene imperdient cras non dolor"));

// ===========================================================
// includes - поиск совпадений

// const includes = function(array, value) {
//   for (const item of array) {
//     if (item === value) {
//       // перебираем весь массив и ввыводит совпадение, если нету то выводит "фолс"
//       return true;
//     }
//   }
//   return false;
// };

// console.log(includes([1, 2, 3], 2));
// console.log(includes([1, 2, 3, 4], 4));

// =====================================================================
// Посчитать сколько будет стоить гравировка
// Стоимост одного слова 10 кредитов

// const calculateCost = function(string, costPerWord) {
//   let total = 0; //предположение
//   const words = string.split(" "); //создаем массив

//   for (const item of words) {
//     total += costPerWord;
//   }
//   return total; // сюда возвращаем, что бы for (const item of words) прошло весь цикл итерации
// };

// // 1-st option
// const sentences = "sdfsd dghf dsge hfghf ddf";
// const price = calculateCost(sentences, 20);
// console.log(price);

// // 2-nd option
// console.log(calculateCost("asafas asafaf dfdf dfdf", 20));
// console.log(calculateCost("Aenene imperdiet cras non dolor", 25));

//2-й вариант решения -------========================------------

// const calculateCost = function(string, costPerWord) {
//   const words = string.split(" "); //создаем массив
//   const length = words.length; // что бы можно было перебрать слова в строке для подсчета
//   const total = length * costPerWord; // соответсвенно умножаем каждое слово

//   //   const total = words.length * costPerWord;

//   return total;
// };

// // 1-st option
// const sentences = "sdfsd dghf dsge hfghf ddf";
// const price = calculateCost(sentences, 20);
// console.log(price);

// // 2-nd option
// console.log(calculateCost("asafas asafaf dfdf dfdf", 20));
// console.log(calculateCost("Aenene imperdiet cras non dolor", 25));
// ===============================================================

// const double = function(array) {
//    //   console.log(array); // [1, 2, 3, 4, 5]
//    const twiceArray = array;
//    //   console.log(twiceArray);
//    for (let i = 0; i < twiceArray.length; i += 1) {
//      twiceArray[i] = twiceArray[i] * 2;
//    }
//    return twiceArray;
//  };
//  console.log(double([2, 3, 4, 5, 6])); //[4, 6, 8, 10, 12]

// ==============================================================
// передача по сылке

// const double = function(array) {
//   console.log(array); // [1, 2, 3, 4, 5];
//   array[0] = 10;
// };

// const numbers = [1, 2, 3, 4, 5];
// double(numbers);
// console.log(numbers); // [10, 2, 3, 4, 5]

// ===================================================

// ------------Предикантная функция --------------

// const isEqual = function(a, b) {
//   return a === b; // Предикантная функция
// };

// console.log(isEqual(5, 2)); //false - потому что значения не совпадают по условию
// console.log(isEqual(2, 2)); //true - условия совпадают

//------------------
