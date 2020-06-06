// Repeta=====OBJECT-1==============================
"user strict";

// =============================================
// Object

// const product = {
//   name: "Wonder Warfare",
//   description: "It is a big problem",
//   price: 30
// };
// const key = "price";
// console.log(product.price);
// console.log(product[key]);

// -----------------------------------------------------------

// const key = "name";
// const value = 10;

// const obj = {
//   a: 1,
// };

// obj[key] = value; // добавляем объекту obj значение "keу" и  "value"
// console.log(obj);
// ----------------------------------------
// другой вариант присваивания значения объекту

// const key = "name";
// const value = 10;

// const obj = {
//   a: 1,
//   [key]: value
// };

// console.log(obj);

// ===================================================================
// formData

// const target = {
//   name: "email",
//   value: "mail@mail.com"
// };

// const formData = {
//   [target.name]: target.value
// };
// console.log(formData); //

// ==================================================================
// again -----------------------------

// const product = {
//   name: "Wunder Waffles",
//   description: "In hac inhability",
//   price: 30
// };
// console.log(product);

// const key = "price";
// console.log(product[key]); // 30

// // записываем изменения

// product.price = 50;
// console.log(product);

// ------------=--=-=-=---=-==---====---
// ----====-------------------------===
// -------------====-----====---
// ----=====-----

// ----------------------again_Repeta-------------------

// const product = {
//   name: "Wuvdfb cvbck",
//   descriptin: "If you konw what I want",
//   price: 30,
// };
// const varity = "price";

// console.log(product[varity]);
// console.log(product.price);

// -----------------constructor--(ShortHand properties)---------

// const makeProduct = (name, price) => {
//   // return {
//   //   name: name,
//   //   price: price,
//   // };
//   // Alternative

//   return {
//     name,
//     price,
//   };
// };

// console.log(makeProduct("Orange", 50)); // {name: "Orange", price: 50}
// console.log(makeProduct("Apples", 40)); // {name: "Apples", price: 40}

// ---------------===============--------------------------
// -----------------Computed properties--------------------
// ------------(присваивание значению свойства)-------------

// const key = "name";
// const value = 10;

// const obj = {
//   a: 1,
//   [key]: value,// new version
// };
// // obj [key] = value;

// console.log(obj); // {a: 1, name: 10}

// ---------------------------------------------
// -----------------formData-------------

// const target = {
//   name: "email",
//   value: "mail@mail.com",
// };

// const formData = {
//   [target.name]: target.value,
// };
// console.log(formData); // {email: "mail@mail.com"}

//---

// const data = {
//   name: "pasha",
//   email: "pasha@gmail.com",
// };

// const output = {
//   [data.name]: data.email,
// };

// console.log(output);// {pasha: "pasha@gmail.com"}

// -----------------------============---------------

// const value = 10;
// const key = `key value ${2 + 2}`;

// const obj = {
//   a: 1,
//   [`key value ${2 + 2}`]: value,
// };

// console.log(obj); // {a: 1, key value 4: 10}

// ------------==========---------

// const product = {
//   name: "Wuvdfb cvbck",
//   descriptin: "If you konw what I want",
//   price: 30,
//   changePrice(newPrice) {
//     console.log(newPrice);
//   },
// };

// product.changePrice(100);

// ----------this----------

// const product = {
//   name: "Wuvdfb cvbck",
//   descriptin: "If you konw what I want",
//   price: 30,
//   changePrice(newPrice) {
//     this.price = newPrice;
//   },
// };

// product.changePrice(200);
// console.log(product.price); //200

// ---------============---------------==----==---===--

// const storage = {
//   items: [
//     { id: "id-1", name: "apples", price: 30 },
//     { id: "id-2", name: "grapes", price: 40 },
//   ],
//   getItems() {
//     return this.items;
//   },
// };

// // console.log(storage.getItems());
// console.table(storage.getItems()); //

// -----------------------========-----------------=======---
//  work with collection---------
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
//   removeProduct(
//     id // удалить
//   ) {
//     for (let i = 0; i < this.items.length; i += 1) {
//       const product = this.items[i];

//       if (product.id === id) {
//         console.log("i:", i);
//         console.log("product:", product);
//         this.items.splice(i, 1);
//       }
//     }
//   },
// };

// // console.log(storage.getItems());
// console.table(storage.getItems()); //

// storage.addProduct({ id: "id-3", name: "carrots", price: 20 });
// console.table(storage.getItems());

// storage.removeProduct("id-2"); // i: 1 / product: {id: "id-2", name: "grapes", price: 40}
// storage.removeProduct("id-3"); // i: 2 / product: {id: "id-3", name: "carrots", price: 20}

// console.table(storage.getItems());

// ----------------------------===================
// -----for.....in========------------------

//  оператор in проверяет есть ли в объекте данное значение -----
// const product = {
//   name: "wafles",
//   price: 50,
//   quanity: 20,
// };
// console.log("name" in product); // true

// ------------------======================------

// const product = {
//   name: "wafles",
//   price: 50,
//   quanity: 20,
// };

// for (const key in product) {
//   console.log(key); // name / price / quanity
//   console.log(product[key]); // name  wafles/ price  50/ quanity 20
//   console.log(`key:${key}, value: ${product[key]}`);
// }

// --------------------------================---------------

// const product = {
//   name: "wafles",
//   price: 50,
//   quanity: 20,
// };

// const keys = Object.keys(product); // получаем массив ключей
// console.log(keys); // (3) ["name", "price", "quanity"]

// for (const key of keys) {
//   console.log(`key:${key}, value: ${product[key]}`);
// }

// ------------------------------------

// const salary = {
//   bob: 100,
//   mary: 200,
//   dick: 300,
// };

// let total = 0;

// // for (const key in salary) {
// //   console.log(`key:${key}, value: ${salary[key]}`);

// //   total += salary[key];
// // }

// // console.log("total:", total); // total: 600

// const salaryKeys = Object.keys(salary);
// console.log(salaryKeys);

// for (const key of salaryKeys) {
//   console.log(key);
//   total += salary[key];
// }
// console.log("total:", total);

// ------------------===========================-----========--

// const name = "mango";

// console.log(name); // mango
// console.log("mango".toUpperCase()); // MANGO

// --------==============
// -------task_1-----------
/*
  Напиши скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.
  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/

// const taskCompleted = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };

// let max = 0;
// let name;

// const keys = Object.keys(taskCompleted); // доступ к ключам
// console.log(keys); // ["ann", "david", "helen", "lorence"]

// for (const key of keys) {
//   //перебор ключей
//   console.log(key);
//   console.log(taskCompleted[key]);

//   if (max < taskCompleted[key]) {
//     max = taskCompleted[key];
//     name = key;
//   }
// }
// console.log("max:", max); // max: 99
// console.log("name:", name); // name: lorence

// ------------------=====-----------------
// -------task_1(with function)-----------

// const findPersonWithMaxTasks = function (stats) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(stats);
//   console.log(keys);

//   for (const key of keys) {
//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }
//   }

//   // return name;

//   return {
//     name,
//     tasksCompleted: max,
//   };
// };

// console.log(
//   findPersonWithMaxTasks({
//     ann: 29,
//     dima: 50,
//     jack: 148,
//     florence: 90,
//   })
// );

// -----------------------------------------------

// const taskCompleted = {
//   ann: 29,
//   dima: 50,
//   jack: 148,
//   florence: 90,
// };

// let max = 0;
// let name;

// const keys = Object.keys(taskCompleted);
// console.log(keys); //  ["ann", "dima", "jack", "florence"] // получаем доступ к ключам

// for (const key of keys) {
//   // console.log(key);
//   console.log(taskCompleted[key]); // 29 50 148 90 // доступ к свойствам

//   if (max < taskCompleted[key]) {
//     max = taskCompleted[key];
//     name = key;
//   }
// }

// console.log("max:", max); // max: 148
// console.log("name:", name); // name: jack
// console.log(`${name}: ${max}`); // jack: 148

// ------analog task with function-------------------
// const taskCompleted = {
//   ann: 29,
//   dima: 50,
//   jack: 148,
//   florence: 90,
// };

// const findPersonWithMaxTasks = function (stats) {
//   let max = 0;
//   let name;

//   const keys = Object.keys(stats);
//   console.log(keys);

//   for (const key of keys) {
//     if (max < stats[key]) {
//       max = stats[key];
//       name = key;
//     }
//   }
//   // return name;

//   return {
//     name,
//     taskCompleted: max,
//   };
// };

// // console.log(findPersonWithMaxTasks(taskCompleted));

// console.log(
//   findPersonWithMaxTasks({
//     ann: 29,
//     dima: 50,
//     jack: 148,
//     florence: 90,
//   })
// );

// ------task_2--------------------=====------------------

/*
  Напиши функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа.
  Возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

// const users = [
//   { name: "Poly", age: 7, mood: "happy" },
//   { name: "Mango", age: 4, mood: "blissful" },
//   { name: "Ajax", age: 3, mood: "tired" },
// ];

// const getAllPropValues = function (users, key) {
//   const values = [];
//   // for (const user of users) {
//   //   // console.log(user[key]); // выводит требуемое значиние ключа

//   //   values.push(user[key]); // push-им нужные ключи/свойства
//   // }
//   // return values;

//   // для проверки свойства active
//   for (const user of users) {
//     if (key in user) {
//       values.push(user[key]);
//     }
//   }
//   return values;
// };

// console.log(getAllPropValues(users, "name")); // (3) ["Poly", "Mango", "Ajax"]
// console.log(getAllPropValues(users, "mood")); // (3) ["happy", "blissful", "tired"]
// console.log(getAllPropValues(users, "active")); // []

// ----task_3 ---------==================-------

// filter -> пришла статистика загрузок и надо выбрать те что больше процента

// const uploads = [
//   { name: "pdf", percentage: 14 },
//   { name: "psd", percentage: 21 },
//   { name: "mp3", percentage: 3 },
//   { name: "flac", percentage: 7 },
// ];

// const filterUploadsWithThreshold = function (uploads, threshold) {
//   // console.log(uploads);
//   // console.log(threshold);
//   const filterUploads = [];
//   for (const upload of uploads) {
//     if (upload.percentage >= threshold) {
//       filterUploads.push(upload);
//     }
//   }
//   return filterUploads;
// };

// console.table(filterUploadsWithThreshold(uploads, 10));
// console.table(filterUploadsWithThreshold(uploads, 20));

// -------------------task 4-------------------

/*
 * Есть два массива names и prices с именами и ценами товаров.
 * Напишите функцию combine(names, prices), которая получает
 * эти два массива и возвращает массив объектов со свойствами name и price.
 */

// const names = [
//   "Радар",
//   "Сканер",
//   "Дроид",
//   "Захват",
//   "Двигатель",
//   "Топливный бак",
// ];
// const prices = [1000, 2000, 1500, 2700, 1600, 8000];

// const combine = function (names, prices) {
//   const combined = [];
//   console.table(names);
//   console.table(prices);

//   for (let i = 0; i < names.length; i += 1) {
//     // console.log(names[i]);
//     // console.log(prices[i]);

//     const obj = {
//       name: names[i],
//       price: prices[i],
//     };
//     combined.push(obj);
//     console.log(obj);
//   }
//   return combined;
// };

// const products = combine(names, prices);
// console.table(products);

// ---------------------

