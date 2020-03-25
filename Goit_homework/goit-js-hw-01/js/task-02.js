"use strict";

const total = 100;
let ordered = prompt("единиц товара в заказе:");
ordered = Number(ordered);
// let ordered = 20;
// let ordered = 50;
// let ordered = 80;
// let ordered = 130;

if (ordered > total) {
  console.log("На складе недостаточно товаров!");
} else {
  console.log("Заказ оформлен, с вами свяжется менеджер");
}
