"use strict";

// spread----------------------------

// const add = (a, b, c) => a + b + c;
// const numbers = [1, 2, 3];

// // old  variant
// // add(numbers[0], numbers[1], numbers[2]); // 6
// // new variant - spread
// console.log(add(...numbers)); // 6

// --------------------------

// const numbers = [1, 2, 3, -7, 6, -19];

// console.log(Math.min(...numbers)); // -19

// ------------copy array----------------------

// const numbers = [1, 2, 3, 4, 5];
// // const copyOfNumbers = numbers.slice();

// // spread - analog
// const copyOfNumbers = [...numbers];

// console.log(numbers === copyOfNumbers); // false
// console.log(copyOfNumbers); // (5) [1, 2, 3, 4, 5]

// //-----------------------=============--------------===-

// Spread obj

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = {
//   a: 3,
//   c: 4,
// };

// // old method - spread
// // const objC = Object.assign({}, objA, objB);
// // console.log(objC); // {a: 3, b: 2, c: 4}

// // new method - spread
// const objC = { ...objA, ...objB };
// console.log(objC); // {a: 3, b: 2, c: 4}

// --------------------------

// const defaultSett = {
//   theme: "ligth",
//   showBar: true,
//   isHidden: false,
// };

// const update = {
//   theme: "dark",
//   showBar: false,
// };

// const currentSett = { ...update, ...defaultSett };
// console.log(currentSett); // {theme: "ligth", showBar: true, isHidden: false}

// ---------------------------------------------============----
// ------============--------------------------
// -----------------rest-------------------

// const fn = (...args) => {
//   console.log(args);
// };
// fn(1, 2, 3, 4, 5);

// ----------------------------------------------------------------
// ---------!!!!!-Деструктиризация---!!!!!!!!!!--------------------

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "Vip",
// };

// const message = `Guest ${user.name} coming how ${user.type} in apartment ${user.room}`;

// console.log(message);

//
// ---new destruct----------------------
//

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "Vip",
// };

// const { name, room, type } = user;
// const message = `Guest ${name} coming how ${type} in apartment ${room}`;

// console.log(user); // {name: "Mango", room: 24, type: "Vip"}
// console.log(message); // Guest Mango coming how Vip in apartment 24

// ----------------------------------------------

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "Vip",
// };

// const greeter = (user) => {
//   const { room, type, name } = user;
//   return `Guest ${name} coming how ${type} in apartment ${room}`;
// };

// console.log(greeter(user));

// -------------------------------================

// 1)
// const user = {
//   name: "Mango",
//   room: 24,
// };

// const greeter = (user) => {
//   const { room, type = "regular", name } = user;
//   return `Guest ${name} coming how ${type} in apartment ${room}`;
// };

// console.log(greeter(user));

// ----------===========-----------========analog notes_------

//2)
// const user = {
//   name: "Mango",
//   room: 24,
// };

// const greeter = ({ room, type = "regular", name }) => {
//   return `Guest ${name} coming how ${type} in apartment ${room}`;
// };

// console.log(greeter(user));

// -----------------------------------------------------------
// -----------======================================----------
// ------------------глубокая деструктеризация----------------

// const profile = {
//   name: "Mango",
//   email: "mango@mail.com",
//   adress: {
//     city: "Zimbabe",
//     country: "Nigeria",
//     street: "Aveneu 24",
//   },
// };

// const {
//   name,
//   email,
//   adress: { city, country, street },
// } = profile;
// console.log(city);

// --------------------------------------

// const profile = {
//   name: "Mango",
//   email: "mango@mail.com",
//   adress: {
//     city: "Zimbabe",
//     country: "Nigeria",
//     street: "Aveneu 24",
//   },
// };

// const {
//   name,
//   email,
//   adress: { city, country, street },
// } = profile;
// console.log(city);

// --------------
//---------------with the same name-----------------

// const profile = {
//   name: "Mango",
//   email: "mango@mail.com",
//   adress: {
//     name: "Poly",
//     city: "Zimbabe",
//     country: "Nigeria",
//     street: "Aveneu 24",
//   },
// };

// const {
//   name,
//   email,
//   adress: { name: adressName, city, country, street },
// } = profile;
// console.log(city); // Zimbabe

// console.log(adressName); // Poly

// // console.log(profile.address.name)

// --------------------------------------------------------
// -------------------деструктеризация массивов------------

const tasks = {
  ann: 30,
  boris: 50,
  jack: 56,
};

const entries = Object.entries(tasks);
console.table(entries);

// for (const entry of entries) {
//   const name = entry[0];
//   const value = entry[1];
//   console.log(entry);
// }

for (const [name, value] of entries) {
  console.log(name, value);
  // console.log(entries);
}
