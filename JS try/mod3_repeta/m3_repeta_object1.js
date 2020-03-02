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

const total = 100;
const ordered = 50;
let message = prompt("enter number:");

if (message > ordered) {
  console.log("На складе недостаточно твоаров!");
} else if (message < total) {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
