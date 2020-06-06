"use strict";
// ----method push
// let array = [1, 2, 3, 4, 5, 6];
// array.length += 1;
// array[array.length - 1] = "new value"; // получаем доступ к последнему елементу

// console.log(array);

// function push(array, newElement) {
//   array.length += 1;
//   array[array.length - 1] = "new value";
// }

// --------------------------------------------------------

// let array = [1, 2, 3, 4, 5, 6];

// function push(array, newElement) {
//   array.length += 1;
//   array[array.length - 1] = newElement;
//   return array;
// }

// console.log(push(array, 1)); // (7) [1, 2, 3, 4, 5, 6, 1]

// -----------------

// function push(array, newElement) {
//   array.length += 1;
//   array[array.length - 1] = newElement;
// }

// let a = [1, 2];
// push(a, 3);
// console.log(a); // (3) [1, 2, 3]

// push(a, 7);
// push(a, 5);
// push(a, 4);
// console.log(a); // (6) [1, 2, 3, 7, 5, 4]

// ------------------------------------============-----

// function push(array, newElement) {
//   array.length += 1;
//   array[array.length - 1] = newElement;
// }

// let a = [1, 2];
// push(a, 3);
// console.log(a); //  [1, 2, 3]

// ------------------------=======================

// function testArgs() {
//   console.log(arguments);
// }

// testArgs(1, 2);

// --------------==============-------------------

// function push() {
//   const argsArray = Array.from(arguments);
//   // console.log(argsArray); // (5) [Array(2), 3, 4, 5, 6]
//   const paramsToAdd = argsArray.slice(1);
//   // console.log(paramsToAdd); // копирует массив с 1-го индекса (4) [3, 4, 5, 6]
//   let array = argsArray[0];
//   // array.length += paramsToAdd.length;
//   for (let i = 0; i < paramsToAdd.length; i += 1) {
//     array.length += 1; //увеличиваем каждый раз массив на 1
//     array[array.length - 1] = paramsToAdd[i]; // добавляем елемент [i] после каждой итерации
//   }
// }

// let a = [1, 2];
// push(a, 3, 4, 5, 6);
// console.log(a); // (6) [1, 2, 3, 4, 5, 6]

// -------------======================----------------

// function push() {
//   const argsArray = Array.from(arguments);
//   const paramsToAdd = argsArray.slice(1);

//   let array = argsArray[0];

//   for (let i = 0; i < paramsToAdd.length; i += 1) {
//     array.length += 1;
//     array[array.length - 1] = paramsToAdd[i];
//   }

//   return array.length;
// }

// let a = [1, 2];
// let result = push(a, 3, 4, 5, 6);
// console.log(a, result); // [1, 2, 3, 4, 5, 6] 6

// ---------------==================-------

// let a = [1, 2, 3];
// let b = a.slice(2, a.length);
// console.log(b);

// function push() {
//   const argsArray = Array.from(arguments);
//   const paramsToAdd = argsArray.slice(1);

//   let array = argsArray[0];

//   for (let i = 0; i < paramsToAdd.length; i += 1) {
//     array.length += 1;
//     array[array.length - 1] = paramsToAdd[i];
//   }

//   return array.length;
// }

// let c = [1, 2, 3];
// let d = c;
// push(c, 3, 4, 5, 6);
// console.log(c, d, c === d); //(7) [1, 2, 3, 3, 4, 5, 6] (7) [1, 2, 3, 3, 4, 5, 6] true

// ---------------------------

// function ourFunstionSlice(array, start, end) {
//   let result = [];

//   for (let i = start; i < end; i += 1) {
//     result.push(array[i]);
//   }

//   return result;
// }

// let a = [1, 2, 3, 4, 5];
// let b = ourFunstionSlice(a, 0, 2);
// console.log(b); // (2) [1, 2]

// ------------------===============------------
// ----function expression----=====--------

// const add = function (a, b) {
//   return;
// };

// ---------arrow function------------====-------

function hugeScript() {
  //
  //
  //
  const logging = (status, message) => {
    if (status === "normal") {
      console.log(message);
    } else if (status === "warning") {
      console.warn(message);
    } else if (status === "error") {
      console.error(message);
    }
  };

  logging("warning", "we have warning");
  logging("error", "we have error");
  logging("normal", "we have normal");

  // const addz = (a, b) => a + b;
}

hugeScript(); // we have warning // we have error // we have normal
