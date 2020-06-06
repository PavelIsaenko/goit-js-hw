"use strict";

// const add = function (value, ...args) {
//   console.log(value); // первый аргумент
//   console.log(args); // массив всех остальных аргументов
// };

// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// ------------------------------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Объявим переменные и присвоим им значения из объекта
// const { name, stars, status } = hotel;

// console.log(name, stars, status); // "Resort Hotel", 5, undefined
// console.log(stars); // 5 // это значение переменной взято с объекта
// console.log(hotel.stars); // 5  это сразу с объекта значение свойства

// ------------------------------------------========-------
// ------- spread-----------------------------------------------
// const add = (a, b, c) => a + b + c;

// const add = function (a, b, c) {
//   console.log(a, b, c);
// };
// const numbers = [1, 2, 3];

// // console.log(add(numbers[0], numbers[2], numbers[1]));
// // analog- spread
// console.log(add(...numbers));

// ---------

// const numbers = [1, 5, -7, 19, 34, -6, 8];
// console.log(Math.min(numbers)); // NaN
// console.log(Math.min(...numbers)); // -7

// ------------------------распылить массив - сделать копию

// const numbers = [1, 5, -7, 19, 34, -6, 8];

// // const copyOfNumbers = numbers.slice();
// // ----analog numbers.slice()
// const copyOfNumbers = [...numbers];

// console.log(numbers === copyOfNumbers);
// console.log(copyOfNumbers); // (7) [1, 5, -7, 19, 34, -6, 8]

// -----------------------------------------------
// const numb = [1, 2, 5, 3, 6];
// const rulo = [6, 2, 48, 9, 9];

// const spread = [...numb, ...rulo];
// console.log(spread); // (10) [1, 2, 5, 3, 6, 6, 2, 48, 9, 9]

// -----spread obj---------------------------------

// const objA = {
//   a: 1,
//   b: 2,
// };

// const objB = {
//   b: 3,
//   c: 5,
// };

// // const objC = Object.assign({}, objA, objB);// old method

// const objC = { ...objA, ...objB }; // new method
// console.log(objC);

// -------------------rest ------------==================

// const fn = (...args) => {
//   //   console.log(args);
//   return args;
// };

// console.log(fn(1, 2, 3, 4, 5)); //  [1, 2, 3, 4, 5]

// =-----------------------------
// console.log(...[1, 2, 3, 45]); // 1 2 3 45

// console.log(...{a:1, b:2}); // error // объукты распыляются только в объекте
//

// --------деструктуризация объектов -----------------
// const name = name.user;
// const room = room.user;
// const type = type.user;

// const { name, room, type } = {
//   name: "Mango",
//   room: 24,
//   type: "vip",
// };

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "vip",
// };
// const { room, type, name } = user;

// const message = `Client ${name} caming in room number ${room} and he watch ${type} apartment`;

// console.log(message);

// ----------------===-----------------=====-------------

// const user = {
//   name: "Mango",
//   room: 24,
//   type: "vip",
// };

// // const greeter = (user) => {
// //   const { room, type, name } = user;
// //   return `Guest ${name} came how is ${type} in room ${room}`;
// // };

// // analog view---------------
// const greeter = ({ room, type, name }) => {
//   // const { room, type, name } = user;
//   return `Guest ${name} came how is ${type} in room ${room}`;
// };

// console.log(greeter(user));

// -------=========--------------=============
// ---------------глубокая деструктуризация---------------------

// const profile = {
//   name: "Poly",
//   email: "poly@gmail.com",
//   address: {
//     city: "Kiev",
//     country: "Ukraine",
//     street: "Zoologic 4",
//   },
// };

// // const { name, email, address } = profile;
// // console.log(address); // {city: "Kiev", country: "Ukraine", street: "Zoologic 4"} // провели дестуркт первой части объекта

// // const { city, country, street } = address;
// // console.log(city); // Kiev // деструкт второй части объекта

// // глубокая деструкт
// const { name, email, address: { city, country, street } = {} } = profile;

// console.log(city); // Kiev
// console.log(email); // poly@gmail.com
// console.log(profile.address);

// --------------------------============-------------

// const tasks = {
//   ann: 30,
//   boris: 50,
//   george: 40,
// };

// let inner;

// const entries = Object.entries(tasks);
// console.table(entries);

// for (const entry of entries) {
//   const name = entry[0];
//   const value = entry[1];
//   console.log(entry, name, value);
// }

// // array destraction
// for (const [name, value] of entries) {
//   //   const name = entry[0];
//   //   const value = entry[1];
//   console.log(name, value);
// }

//just try---
// for (const entry of entries) {
//   //   const name = entry[0];
//   //   const value = entry[1];
//   console.log(entry);
//   inner = entries;
// }

// console.log(inner);

// -----------------------------------=======--------

// const numbers = [1, 2, 3, 4, 5];

// const [value1, ...rest] = numbers;
// console.log(value1, rest); // 1 (4) [2, 3, 4, 5]

// -------

// const { a, ...rest } = { a: 1, b: 2, c: 5 };
// console.log(rest); // {b: 2, c: 5}

// ----------------------=========-------------------
// --------------task --------------------

// const storage = {
//   items: [
//     { id: "id-1", name: "apples", price: 30 },
//     { id: "id-2", name: "grapes", price: 40 },
//   ],
//   getItems() {
//     // получить
//     return this.items;
//   },
//   addProduct(
//     product // добавление продуктов
//   ) {
//     this.items.push(product);
//   },
//   findProduct(id) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i]; // ссылка на объект id: "id-.."

//       if (product.id === id) {
//         return product;
//       }
//     }
//   },
//   removeProduct(
//     id // удалить
//   ) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i]; // ссылка на объект id: "id-.."

//       if (product.id === id) {
//         console.log("i:", i);
//         console.log("product:", product);
//         this.items.splice(i, 1);
//         return;
//       }
//     }
//   },
//   changePrice(id, price) {
//     const product = this.findProduct(id);
//     product.price = price;
//   },
//   changeName(id, name) {
//     const product = this.findProduct(id);
//     product.name = name;
//   },
// };

// console.table(storage.getItems());

// storage.addProduct({ id: "id-3", name: "carrots", price: 20 });
// console.table(storage.getItems());

// storage.removeProduct("id-1");
// console.table(storage.getItems());

// storage.changePrice("id-3", 100);
// console.table(storage.getItems());

// storage.changeName("id-3", "Apple");
// console.table(storage.getItems());

// -----------===---

const storage = {
  items: [
    { id: "id-1", name: "apples", price: 30 },
    { id: "id-2", name: "grapes", price: 40 },
  ],
  getItems() {
    // получить
    return this.items;
  },
  addProduct(
    product // добавление продуктов
  ) {
    this.items.push(product);
  },
  findProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i]; // ссылка на объект id: "id-.."

      if (product.id === id) {
        return product;
      }
    }
  },
  removeProduct(id) {
    for (let i = 0; i < this.items.length; i += 1) {
      const product = this.items[i]; // ссылка на объект id: "id-.."

      if (product.id === id) {
        console.log("i:", i);
        console.log("product:", product);
        this.items.splice(i, 1);
        return;
      }
    }
  },
  changePrice(id, price) {
    const product = this.findProduct(id);
    // guard clause-- если все плохо выходим!
    if (!product) {
      return;
    }
    product.price = price;
  },
  changeName(id, name) {
    const product = this.findProduct(id);
    product.name = name;
  },
  //   добавляем массивы
  getProductNames() {
    const names = [];

    //  for (const item of this.items) {
    //    names.push(item.name);
    //  }

    // destruction
    for (const { name } of this.items) {
      names.push(name);
    }

    return names;
  },

  filterWithPrice(threshold) {
    const filtered = [];

    for (const item of this.items) {
      if (item.price >= threshold) {
        filtered.push(item);
      }
    }
    return filtered;
  },
};

console.table(storage.getItems());

storage.addProduct({ id: "id-3", name: "carrots", price: 20 });
console.table(storage.getItems());

storage.removeProduct("id-1");
console.table(storage.getItems());

storage.changePrice("id-3", 100);
console.table(storage.getItems());

storage.changePrice("id-5", 300);
console.table(storage.getItems());

storage.changeName("id-3", "Apple");
console.table(storage.getItems());

console.table(storage.getProductNames());

console.table(storage.filterWithPrice(70));
