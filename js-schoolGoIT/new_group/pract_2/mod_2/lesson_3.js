"use strict";

// let a = [1, 2, 3];
// a.push(4, 5, 6);
// console.log(a);

//--- push array ---

// let array = [1, 2, 3, 4, 5, 6];
// // array.length +=1;
// // array[array.length - 1] = 'new value';// добавиили значение массива в конец
// array.push("new value");
// console.log(array);

// ---pop array---------

// let array = [];
// const nextLengthofArray = array.length - 1;
// if (nextLengthofArray >= 0) {
//   array.length = nextLengthofArray;
// }
// console.log(array);

// ------shift array ------------!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!=====

// let array = [0, 14, 25, 33];
// // for (let i = 0; i < array.length - 1; i += 1) {
// //   array[i] = array[i + 1];
// // }

// for (let i = 0; i < array.length; i += 1) {
//   array[i - 1] = array[i];
// }
// array.length -= 1;
// console.log(array);

// --------unshift----------------

// let array = [1, 2, 3];
// array.length += 1;
// for (let i = array.length - 1; i > 0; i -= 1) {
//   //   console.log(i);
//   array[i] = array[i - 1];
// }
// array[0] = "new value";
// console.log(array);

// -------------join(string)---------------------

// let array = [1, true, "b", false, 3, "c"];
// let result = "";
// const delimiter = "";
// for (let i = 0; i < array.length; i += 1) {
//   // result += delimiter;
//   // result +=array[i];
//   result += `${delimiter}${array[i]}`;
// }

// console.log(result);
// ----------------------=================------------------------
// ------------=====================================--------------

// let i = 3;
// while (i !== 0) {
//   alert(i);
//   i--;
// }

// let i = 0;
// while (i < 5) {
//   alert(i);
//   i++;
// }
// ---------------------------
// let i = 0;

// do {
//   alert(i);
//   i++;
// } while (i < 3);

// --------------again-----------------
// ====================================
// ------------------------------------
// -------push_array-------------------
// let array = [1, 2, 3, 4, 5];
// array.length = array.length + 1; // добавляем одну ячейку в массив
// // array.length +=1;
// // array[array.length - 1] = "new"; // (6) [1, 2, 3, 4, 5, "new"]
// array[array.length] = "new"; // (7) [1, 2, 3, 4, 5, empty, "new"]
// console.log(array);

// ----pop-------------------------

// let array = [1, 2, 3, 4];
// array.length -= 1;
// console.log(array); // (3) [1, 2, 3]

// let array = [1, 2, 3];
// array.pop();
// console.log(array); // (2) [1,2]

// let array = [1, 2, 3, 4];
// let array = [];
// let nextOfLength = array.length - 1;
// if (nextOfLength >= 0) {
//   array.length = nextOfLength;
// }
// console.log(array); // []

// -------------shift-----------

// 1-й вариант
// let array = [1, 21, 3, 4, "new"];
// for (let i = 0; i < array.length - 1; i += 1) {
//   array[i] = array[i + 1]; // смещаем на один назад
// }
// array.length -= 1; // удаляем последнюю ячейку
// console.log(array); // (4) [21, 3, 4, "new"]

// 2-й вариант
// let array = [1, 21, 3, 4, "new"];
// for (let i = 1; i < array.length; i += 1) {
//   array[i - 1] = array[i]; // ставим на предшествующию ячейку
// }
// array.length -= 1; // удаляем последнюю ячейку
// console.log(array); // (4) [21, 3, 4, "new"]

// -------unshift------------------------

// let array = [1, 2, 3];
// array.length += 1; // расстягиваем массив;
// // console.log(array); //(4) [1, 2, 3, empty]
// for (let i = array.length - 1; i > 0; i -= 1) {
//   // console.log(i); // итерация в обратном порядке 3,2,1
//   array[i] = array[i - 1]; // в текущий ставим предыдущий, (4) [1, 1, 2, 3]
// }
// array[0] = "new value"; //(4) ["new value", 1, 2, 3]
// console.log(array);

// ---join------------------------

// let array = [1, true, "b", false, 3, "c"];
// let result = "";
// let delimiter = " "; // создаем разделитель
// for (let i = 0; i < array.length; i += 1) {
//   // result += delimiter;
//   // result += array[i];
//   result += `${delimiter}${array[i]}`;
// }
// console.log(result);

// ---------------split------(01:22)----
// let string = a + b + c;
// let result = [];
// const delimiter = "+";
// for (let i = 0; i < string.length; i += 1) {
//   if (string[i] === delimiter) {
//   }
// }

// ----------------indexOf--------
let array = ["a", "b", "c", "d", "e"];
const elementToFind = "c";
let positionOfElement;

for (let i = 0; i < array.length; i += 1) {
  console.log(`iteration ${i}`);
  if (array[i] === elementToFind) {
    positionOfElement = i;
    break;
  }
}

console.log(`position of element: ${positionOfElement}`);
