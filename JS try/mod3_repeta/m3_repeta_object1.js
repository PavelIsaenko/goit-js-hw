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
// console.log(formData);

// ==================================================================
// again -----------------------------

const product = {
  name: "Wunder Waffles",
  description: "In hac inhability",
  price: 30
};
console.log(product);

const key = "price";
console.log(product[key]); // 30

// записываем изменения

product.price = 50;
console.log(product);
