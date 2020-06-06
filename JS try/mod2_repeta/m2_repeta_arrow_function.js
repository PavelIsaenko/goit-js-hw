"use strict";

// const onGeolocationSuccess = function (position) {
//   console.log(position);
// };

// const onGeolocationError = function (error) {
//   console.log(error);
// };

// // window.navigator.geolocation.getCurrentPosition(
// //   onGeolocationSuccess,
// //   onGeolocationError,
// // );
// // 1 - выполнится успешно
// // 2 - выполнится с ошибкой

// const getCurrentPosition = function (onSuccess, onError) {};

// -----------------------------------------------------------------
// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }
// repeat(5, console.log); // console.log вызывает функцию каждый раз при "for" и называется такая функция callback

// ---------------==================-------------------

// const labels = [];

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// const createLabel = function (index) {
//   labels.push(`Label ${index + 1}`);
// };

// repeat(5, createLabel);
// console.log(labels); //(5) ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// -------------------------------------------------------------

// const filter = function (array, testCallback) {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// // ------------------------
// // const fnGt3 = function (el) {
// //   return el >= 3;
// // };

// // console.log(filter([1, 2, 3, 4, 5], fnGt3)); // (3) [3, 4, 5]
// // ------------------------
// // ---alternativa------

// console.log(
//   filter([1, 2, 3, 4, 5], function (number) {
//     return number >= 3;
//   })
// ); // (3) [3, 4, 5]

// console.log(
//   filter([1, 2, 3, 4, 5], function (el) {
//     return el >= 4;
//   })
// ); // (2) [4, 5]

// console.log(
//   filter(["Loren", "Isinergfa", "Fgds;sd", "sfsdfsfsd", "fds"], function (
//     word
//   ) {
//     return word.length >= 4;
//   })
// ); // (4) ["Loren", "Isinergfa", "Fgds;sd", "sfsdfsfsd"]

// ---------------=============----------------------------------
// -------------------AGAIN------------------------------------
// -----------------============---------------------------------

// const fn = x => {
//   return x * 2;
// };
// ---Alternativa------
// const fn = (x) => x * 4;

// console.log(fn(2));

// ---========---------
// const labels = [];

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const createLabel = function (index) {
//   labels.push(`${index + 1}`);
// };

// repeat(5, createLabel);
// console.log(labels); // (5) ["1", "2", "3", "4", "5"]

// ------------------filter-callback------------------

// const filter = function (array, testCallback) {
//   const result = []; // create variable for push
//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// // const fn = function (el) {
// //   return el >= 3;
// // };

// console.log(
//   filter([1, 2, 3, 4, 5], function (el) {
//     return el >= 3;
//   })
// );

// console.log(
//   filter([1, 2, 3, 4, 5, 6, 7, 8], function (el) {
//     return el >= 3;
//   })
// );

// console.log(
//   filter(["Espanio", "dsd", "ssdwelj", "sdln"], function (word) {
//     return word.length >= 5;
//   })
// );

// ------------------arrow function--------------------------

// const arrowFn = (a, b) => a + b; // если только одна операция тогда такая запись
// console.log(arrowFn(2, 4));

// когда больше чем одна опеарция в теле
// const arrowFn = (a, b)=> {
//   console.log(a);
//   console.log(b);
//   return a + b;
// };
// console.log(arrowFn(2, 4));

// const arrowFn = (a, b) => {
//   return a+b;
// }
// console.log(arrowFn(2,4));

// ---------------==-----===----===---===
// const filter = function (value, callback) {
//   const result = [];
//   for (const elements of value) {
//     const passed = callback(elements);
//     if (passed) {
//       result.push(elements);
//     }
//   }

//   return result;
// };

// // const fn = function (elements) {
// //   return elements >= 2;
// // };

// console.log(filter([1, 2, 3, 4, 5], (elements) => elements >= 2));

// --------------====----------===============================

// const a = 5;

// if (true) {
//   console.log(a);
// }

const fn = function () {
  console.log(a);
};
const a = 5;

fn();
