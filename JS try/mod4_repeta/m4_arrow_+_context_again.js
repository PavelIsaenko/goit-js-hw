"use strict";

// function repeat(n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// }

// repeat(10, console.log);

// ---------------------------------------------------
// ---------------push--------------------------------
// const labels = [];

// const repeat = function (n, action) {
//   for (let i = 0; i < n; i += 1) {
//     action(i);
//   }
// };

// const createLabel = function (index) {
//   labels.push(`Label ${index + 1}`);
// };

// repeat(5, createLabel);

// console.log(labels);

// ----------------------------------------------------
// -------------------filter---------------------------

// const filter = function (array, test) {
//   const result = [];
//   for (let i = 0; i < array.length; i += 1) {
//     console.log(array[i]);
//     const passed = test(array[i]);

//     if (passed) {
//       result.push(array[i]);
//     }
//   }

//   for (const el of array) {
//     console.log(el);
//     const passed = test(el);
//     //  console.log(passed);
//     if (passed) {
//       result.push(el);
//     }
//   }

//   return result;
// };

// const fnGt3 = function (el) {
//   return el >= 3;
// };

// console.log(filter([1, 2, 3, 4, 5, 6, 7], fnGt3));

// -----------------------------------------------------
// ------------context-----------------------------//---

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this.label);
//   },
// };

// product.showLabel();

// -----------------------------------------------

// const printLabel = function (callback) {
//   const label = callback();
//   console.log(`Product label:${label}`);
// };

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(product.label);
//   },
// };
// // product.showLabel();
// printLabel(product.showLabel);

// -------------------------------------------------
// --------------метод  call-----------------------

// const sell = function (product) {
//   console.log(`Manager ${this.name} sold ${product}`);
//   this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 21,
// };

// sell.call(mango, "TV"); // метод call
// sell.call(poly, "Mobile"); // метод call

// console.log(mango.sales); // 11

// ----------------------------------------------------------
// -----------------------apply---------

// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for price:${price}`);
//   this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 21,
// };

// sell.call(mango, "TV", 45); // метод call
// sell.call(poly, "Mobile", 56); // метод call

// sell.apply(mango, ["TV", 24]); // метод apply
// sell.apply(poly, ["Mobile", 45]); // метод apply

// console.log(mango.sales); // 11

// --------------------------------------------------------
// ---------------------bind--------------------------------

// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} for price:${price}`);
//   this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 21,
// };

// const polySell = sell.bind(poly, "TV", 50);
// const mangoSell = sell.bind(mango, "Mobile", 120);

// polySell();
// mangoSell();

// --------------------------------------------------------------------
// --------------------constructor ------------------------------------

const Manager = function (name, sales) {
  this.name = name;
  this.sales = sales;
};

const mango = new Manager("Mango", 5);
console.log(mango);

const poly = new Manager("Poly", 10);
console.log(poly);
