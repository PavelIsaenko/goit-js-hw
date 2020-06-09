"use strict";

// ---------------------------this----------------------------=====---

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this.label); // this - Это обращение к этому объекту "product" во время вызова - product.showLabel();
//   },
// };

// product.showLabel(); // Adidas

//_______________________________________________________--

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this); // {label: "Adidas", showLabel: ƒ}
//     console.log(this.label); // Adidas
//   },
// };

// product.showLabel();

// 00--------------------==================--------------

// const showLabel = function () {
//   console.log(this); //
//   console.log(this.label); // this -определяется не место объявления, а местом вызова!!!!
// };

// const product = {
//   label: "Adidas",
// };

// product.showLabel = showLabel;
// product.showLabel();

// ---------------------function with callback----------------

// const showLabel = function () {
//   console.log(this); //
//   console.log(this.label);
// };

// --------------------==================----------------

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this);
//     console.log(this.label);

//     const fn = () => {
//       console.log(this);
//     }; // контекст стрелочной функции определяется не тем где она и как она вызвана, а тем где она объявлена и запоминается во время объявления!!!!

//     // const fn = function() {
//     //    console.log(this);
//     // }; // если слева от fn() ничего не стоит, то объект будет undefined

//     fn();
//   },
// };

// product.showLabel();

// ===================------------------=================

// -------------Методы функций call, apply, bind----

// const mango = {
//   name: "Mango",
//   sales: 10,
//   sell(product) {
//     console.log(`Manager ${this.name} sold ${product}`);
//     this.sales += 1;
//   },
// };

// mango.sell("TV"); // Manager Mango sold TV
// console.log(mango.sales); // 11

// const poly = {
//   name: "Poly",
//   sales: 20,
//   sell(product) {
//     console.log(`Manager ${this.name} sold ${product}`);
//     this.sales += 1;
//   },
// };

// poly.sell("Laptop"); // Manager Poly sold Laptop
// console.log(poly.sales); // 21

// -------------------------=======------------------===---
//    выносим функцию -sell- для общего использования
//  -----------------call-----------------
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
//   sales: 20,
// };

// // вызываем через call

// sell.call(mango, "TV"); // mango - obj, "TV" - product
// sell.call(poly, "Laptop"); // Manager Poly sold Laptop

// --------------------------apply------------------------

// const sell = function (product) {
//   console.log(
//     `Manager ${this.name} sold ${product}`
//   );
//     this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 20,
// };

// // вызываем через apply- как массив элементов

// sell.apply(mango, ["TV"]);
// sell.apply(poly, ["Laptop"]);

// -----------------just different try----------------------

// const sell = function (product, price) {
//   console.log(
//     `Manager ${
//       this.name
//     } sold ${product} is ${price} amounts ${(this.sales += 1)}`
//   );
//   //   this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 20,
// };

// // вызываем через apply- как массив элементов

// sell.apply(mango, ["TV", 50]); // Manager Mango sold TV is 50 amounts 11
// sell.apply(mango, ["TV-charge", 60]); // Manager Mango sold TV-charge is 60 amounts 12
// sell.apply(poly, ["Laptop", 100]); // Manager Poly sold Laptop is 100 amounts 21

// ---------------------------------------------------------------
// ------------------------bind--------------------
// --------------------bind -больше используется когда метод объекта передается как callback!!!!!!-------------------------------------

// const product = {
//   label: "Adidas",
//   showLabel() {
//     console.log(this); // {label: "Adidas", showLabel: ƒ}
//     console.log(this.label); // Adidas

//     return this.label;
//   },
// };

// const printLabel = function (callback) {
//   const label = callback();
//   console.log(`Product label: ${label}`);
// };

// const boundShowLabel = product.showLabel.bind(product);

// // boundShowLabel();//   Adidas

// printLabel(boundShowLabel); // Product label: Adidas

// ------------------------------------------------===-----
// ========================================================

// const sell = function (product, price) {
//   console.log(`Manager ${this.name} sold ${product} is ${price}`);
//   //   this.sales += 1;
// };

// const mango = {
//   name: "Mango",
//   sales: 10,
// };

// const poly = {
//   name: "Poly",
//   sales: 20,
// };

// const polySell = sell.bind(poly, "TV", 50);
// const mangoSell = sell.bind(mango, "GPU", 100);

// polySell(); // Manager Poly sold TV is 50
// mangoSell(); // Manager Mango sold GPU is 100

// -----------------------------------------------------------------===--

// --------------------constructor function--------------------------------

// const Manager = function (name, sales = 0) {
//   //this = {}

//   this.name = name;
//   this.sales = sales;

//   //return this;
// };

// const mango = new Manager("Mango", 5);
// console.log(mango); // Manager {name: "Mango", sales: 5}

// const poly = new Manager("Poly", 10);
// console.log(poly); // Manager {name: "Poly", sales: 10}

// ---------------------===================--------------
//  -----------analog with method-----------------------------

// const Manager = function (name, sales = 0) {
//   //this = {}

//   this.name = name;
//   this.sales = sales;

//   this.sell = function (product, price) {
//     console.log(`Manager ${this.name} sold ${product} for ${price}`);
//     this.sales += 1;
//   };
//   //return this;
// };

// const mango = new Manager("Mango", 5);
// console.log(mango); // Manager {name: "Mango", sales: 5}
// mango.sell("TV", 50); // Manager Mango sold TV for 50

// const poly = new Manager("Poly", 10);
// console.log(poly); // Manager {name: "Poly", sales: 10}
// poly.sell("GPU", 150); // Manager Poly sold GPU for 150
// ----------------------------------------------------------------

// ----------------------different situation-----------------

// 1)
// const makeSound = function () {
//   console.log(this.sound); // woof
// };

// const dog = {
//   sound: "woof",
// };

// dog.bark = makeSound;
// dog.bark();

// -----------=-=======-----------------

// 2)
const makeSound = function () {
  console.log(this.sound);
};

const dog = {
  sound: "woof",
};

dog.bark = makeSound;

const fn = function (callback) {
  callback();
};

// fn(dog.bark); // error
// makeSound(); //  .. вызов без контекста
// dog.bark(); //  .. вызов без контекста

fn(dog.bark.bind(dog)); // woof // вызов с контекстом
