"use strict";

// const repeatLog = function (n) {
//   for (let i = 0; i < n; i += 1) {
//     console.log(i);
//   }
// };

// repeatLog(5);

// ------------------------------==---------
// ---callback function-----

// const repeatLog = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// repeatLog(5, console.log);

// -------------------------------

// const labels = [];

// const repeatLog = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };
// const createLabel = function (index) {
//   labels.push(`Label ${index + 1}`);
// };
// repeatLog(5, createLabel); //  createLabel -- this is callback
// console.log(labels); // (5) ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// ---------------------flitet_-----------------------------

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

// const fn = function (el) {
//   return el >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5], fn)); // (3) [3, 4, 5]

// -----analog-----------

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

// console.log(
//   filter([1, 2, 3, 4, 5], function (el) {
//     return el >= 3;
//   })
// );

// console.log(
//   filter([1, 2, 3, 4, 5], function (el) {
//     return el >= 4;
//   })
// );

// console.log(
//   filter(["Dgh", "ghfghfgh", "kghf", "fghgf"], function (el) {
//     return el.length >= 4;
//   })
// ); // (3) ["ghfghfgh", "kghf", "fghgf"]

// ----------------------------------------------
//  _____----arrow function =>--------------

// const add = function (a, b) {
//   return a + b;
// };

// =----====-----------==================-----------
// const arrowFn = (a, b) => {
//   return a + b;
// };
// console.log(arrowFn(2, 3));
// -----analog----------=====----------------------

// const arrowFn = (a, b) => a + b;
// console.log(arrowFn(2, 3));

// --------------=====================-------------

// const arrowFn = (...args) => {
//   return args;
// };
// console.log(arrowFn(5, 10, 15));

// --------=========----------===========---------

// const filter = (array, testCallback) => {
//   const result = [];

//   for (const el of array) {
//     const passed = testCallback(el);

//     if (passed) {
//       result.push(el);
//     }
//   }
//   return result;
// };

// console.log(
//   filter([1, 2, 3, 4, 5], function (el) {
//     return el >= 3;
//   })
// );

// // 1-st variant
// console.log(
//   filter([1, 2, 3, 4, 5], (el) => {
//     return el >= 4;
//   })
// );

// // 2-nd vriant
// console.log(filter([1, 2, 3, 4, 5], (el) => el >= 4));

// // 3-rd variant
// console.log(
//   filter(["Dgh", "ghfghfgh", "kghf", "fghgf"], (el) => el.length >= 4)
// );

//  //  //  //  //  //  //  //  //  //------------------------------

// const add = function (a, b) {
//   return a + b + globValue;
// };
// const globValue = 10;
// console.log(add(5, 15));//30

// ----
// const add = function (a, b) {
//   return a + b + globValue;
// };
// console.log(add(5, 15)); //error/ потому что const globValue за областью доступности
// const globValue = 10;

