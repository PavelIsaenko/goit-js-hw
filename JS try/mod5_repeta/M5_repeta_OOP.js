"use strict";

// const products = [];

// const addProduct = () => {};

// const storage = {
//   product: [],
//   addProduct() {},
// };

// ///////////////-------------------------------===============

// const Fn = function (maxSpeed) {
//   this.maxSpeed = maxSpeed;
// };

// const ex = new Fn(100);

// -----------------------///////--------------=============
// --------------------Prototype-------------------------
// [[]]

// const animal = {
//   barks: true,
// };

// const dog = {
//   sound: "woof",
// };

// dog.__proto__ = animal; // дает ссылку на другой объект, но это старый метод

// console.log("animal", animal);
// console.log("dog", dog);

// console.log(dog.sound); //woof
// console.log(dog.barks); // true - потому что у объекта (dog) есть ссылка на (animal)

// -------------------------------------------

// const animal = {
//   barks: true,
// };

// // const dog = {
// //   sound: "woof",
// // };

// // dog.__proto__ = animal; // дает ссылку на другой объект, но это старый метод

// // более новый метод создать ссылку через прототип
// const dog = Object.create(animal);
// dog.sound = "woof";

// // console.log("animal", animal);
// console.log("dog", dog); // dog {sound: "woof"}
// console.log(dog.hasOwnProperty("sound")); // true- потому что его собственное
// console.log(dog.hasOwnProperty("barks")); // false - а здесь, потому что не его собственное...

// ---------------------for in--hasOwnProperty---====================

// const animal = {
//   barks: true,
// };

// const dog = Object.create(animal);
// dog.sound = "woof";

// console.log(dog);

// //перебирает свойства и его свойств по сслыке
// // for (const key in dog) {
// //   console.log(key); // sound  / barks
// // }

// // только его собственные
// for (const key in dog) {
//   if (!dog.hasOwnProperty(key)) continue;
//   console.log(key); // sound
// }

// ----------------------------------------------------------------
// --------------create constructor--------------------------------

// const Hero = function (name, xp) {
//   // this= {}
//   //this.__proto__ = Hero.prototype
//   //аталогично
//   // this = Object.create(Hero.prototype)
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.coolProp = "cool prop";
// console.log("Hero.prototype:", Hero.prototype); // Hero.prototype: {coolProp: "cool prop", constructor: ƒ}

// const mango = new Hero("Mango", 1000);
// console.log(mango); // Hero {name: "Mango", xp: 1000}
// console.log(mango.coolProp); //  cool prop

// ----------------------------------------=============-=--------------

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.changeName = function (name) {
//   console.log("this:", this); // this: Hero {name: "Mango", xp: 1000}
//   this.name = name; // poly.changeName("Ploy change name") ссылается на this.name = name --> Hero {name: "Ploy change name", xp: 2000}
// };

// // console.log("Hero.prototype:", Hero.prototype);

// const mango = new Hero("Mango", 1000);
// mango.changeName("Pasha"); // change name on "Pasha" // вызываем простотип - prototype.changeName
// console.log(mango); // Hero {name: "Pasha", xp: 1000}

// const poly = new Hero("Poly", 2000);
// poly.changeName("Ploy change name");
// console.log(poly); // Hero {name: "Ploy change name", xp: 2000}

// ///// //// //// /// // // / // / ///// / ////////////////////
// ----------creatr link each other obj---compare !!!!!!!!!!!

const Hero = function (name) {
  this.name = name;
};

Hero.prototype.changeName = function (name) {
  console.log("this:", this);
  this.name = name;
};

console.log("Hero.prototype:", Hero.prototype);

const mango = new Hero("Mango", 1000);
mango.changeName("Pasha");
console.log(mango);

console.log(
  "mango.__proto__===Hero.prototype:",
  mango.__proto__ === Hero.prototype
);

const poly = new Hero("Poly", 2000);
poly.changeName("Ploy change name");
console.log(poly);

console.log(
  "poly.__proto__===Hero.prototype:",
  poly.__proto__ === Hero.prototype
);
