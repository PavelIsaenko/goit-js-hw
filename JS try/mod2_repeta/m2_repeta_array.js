// Repeta=====array===============================
"use strict";

// примитивы
// let a = 5;
// let b = a;
// console.log("a:", a); //5
// console.log("b:", b); //5
// a = 10;
// console.log("a:", a); //10
// console.log("b:", b); //5
// ------------------------------------------------------------
//сложные типы 21:36
// const a = [1, 2, 3];
// const b = a; // одно и тоже потому что указывается один и тот же адрес

// console.log(a === b);
// console.log("a:", a); //[1, 2, 3];
// console.log("b:", b); //[1, 2, 3];
// a[3] = 4;
// console.log("a:", a); //[1, 2, 3, 4]
// console.log("b:", b); //[1, 2, 3, 4]

// =================================================================

// let a = 5;
// let b = 5;

// console.log(a === b); //true
// =======================================

// ================================================================
// методы массивов

// const products = ["apple", "grapes", "bananas"];
// const message = "Lorem ipon unput sit";
// console.log(message);

// const words = message.split(" "); // split делат массивом строку с разделителм
// console.log(words); //["Lorem", "ipon", "unput", "sit"]

// const snakeCaseMessage = words.join("_"); //join делает с массива строку обратное значение split
// console.log(snakeCaseMessage); //Lorem_ipon_unput_sit

// ====================================================================
// Методы indexOf() и includes()

// const products = ["apple", "grapes", "bananas"];
// const indexOfApples = products.indexOf("apple"); // определить индекс в массиве
// const isInProducts = products.includes("bananas"); // определяет содержит ли массив такой элемент

// console.log(indexOfApples); // 0
// console.log(isInProducts); // true

// ------------------------------------------------------------
// Человек хочет залогинеться (совпадение)

// const users = ["Mango", "Ajax", "Poly"];
// const login = prompt("Ener your login");

// const isRegistered = users.includes(login); //ищет совпадение в users

// if (isRegistered) {
//   console.log("right name");
// } else {
//   console.log("wrong data");
// }

// =================================================
// push/pop
// const numbers = [1, 2, 3];
// numbers.push(4, 5, 6); // numbers.pop(4);// numbers.pop(5);// numbers.pop(6);
// console.log(numbers);

// // =================================================
// // shift/unshift
// const numbers = [1, 2, 3];
// numbers.shift(0,1,2); //numbers.unshift(0,1,3);
// console.log(numbers);

// ==================================================
//slice - копия
//
// const numbers = [0, 1, 2, 3, 4, 5];

// const copy = numbers.slice(0, 4); // делается копия массива по указаннім индексам (1, 4) -> [0, 1, 2, 3]
// console.log(copy);

// ======================================================
// splice

// 1-й
// const cards = ["card-1", "card-2", "card-3", "card-4"];
// cards.splice(0, 3); //удаляет с 0-го индекса данные массива по 3-й, то есть заданный.
// console.log(cards);

// 2-й
// const cards = ["card-1", "card-2", "card-3", "card-4"];
// console.log(cards);
// cards.splice(1, 0, "card-5");
// console.log(cards);

// =====================================================
//1. найти 5-ю карточку ее индекс
//2. Вырезать элемент стаким индексом и сохранить
//3. Вставить ее

// const cards = ["card-1", "card-2", "card-3", "card-5", "card-4"];
// const index = cards.indexOf("card-5"); // ищем индекс 5-й карточки
// console.log(index); // 3

// const card = cards.splice(index, 1)[0]; // удаляем card-5 и сохраняем ее
// console.log(card);

// // cards.splice(1, 0, card); // Вставить ее
// // console.log(cards);

// cards.splice(1, 1, card, "card-6"); // Удаление card-2 со ваствкой card-5 и card-6
// console.log(cards);

// ====================================

