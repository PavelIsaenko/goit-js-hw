"use strict";

// -------object----------------------
// let car = {
//   color: "green",
//   maxSpeed: 250,

// };

// // 1
// // car.color = "red";

// // 2
// // car['color'] = "red";

// // 3
// /*
// let carPop = "color";
//  car[carPop] = "red";
// */
// console.log(typeof car);
// console.log(car);

// ================================================

// let car = {
//   color: "green",
//   maxSpeed: 250,
//   audio: {
//     brand: "Sony",
//     speakers: 12
//   }
// };

// car.color = "red";
// console.log(typeof car);
// console.log(car.audio);

// -------------- if...else-----------------------------
// let car = {
//   color: "red",
//   maxSpeed: 250,
//   audio: {
//     brand: "Sony",
//     speakers: 12
//   }
// };

// if (car.color === "red") {
//   console.log("Car is red");
// } else if (car.color === "green") {
//   console.log("Car is green");
// } else {
//   console.log("Color ia undefined");
// }

// --------------------function--------------------------

// let car = {
//   color: "red",
//   maxSpeed: 250,
//   audio: {
//     brand: "Sony",
//     speakers: 12
//   }
// };

// car.color = "green"; // changing color on 'green'
// console.log(car.color);

// function colorReset() {
// car.color = "red"; //reset color on 'red'
//   console.log(car.color);
// }

// colorReset(); // to trigger(вызываем) function

// -------------change color with function---------------

// -My variant--=====

// let car = {
//   color: "red"
// };

// let car2 = {
//   color: "green"
// };

// colorChange(car);
// colorChange(car2);
// function colorChange() {
//   let color = "yellow";
//   console.log(color);
// }

// --Him variant -----==========

// let car = {
//   color: "red"
// };

// let car2 = {
//   color: "red"
// };

// changeColor(car);
// changeColor(car2);

// function changeColor(car) {
//   car.color = "yellow";
// }
// console.log("car: " + car.color);
// console.log("car2: " + car2.color);

// -----Обращение через переменную функции---------

// let car = {
//   maxspeed: 250
// };

// // speedChange(); //250

// let speed = speedChange;
// speed(); //250

// function speedChange() {
//   console.log(car.maxspeed);
// }

// -===========---------------==========

// let car = {
//   maxspeed: 250,
//   update: speedChange
// };

// car.update();
// function speedChange() {
//   console.log(car.maxspeed);
// }

// ===============================================

// function watch(message = "dka-develop") {
//   console.log(message);
// }

// watch(); //"dka-develop"

// =====================================================
// -----fucnion- return---------------

// function watch(message) {
//   return message;
// }

// // console.log(watch("simple words"));

// let message = watch("simple words");
// console.log(message); // "simple words;

// =======================================================
// анонимные функции-----------------

// (function() {
//   console.log("we are annonymous witout identificator");
// })(); // вызывается с помощью скобок

// ===============================================
// стрелочная функиця =>   ---------------------

// let anonym = function() {
//   console.log('you are anonymous');
// };

// let anonym = () => "you are anonymous"; // код без фигурных скобок в стрелочной функции автоматичске выплняте -return-

// console.log(anonym());

// ========================================================
//если больше одного кода в => тогда нужно записывать -return-

// let anonym = message => {
//   let count = 2;
//   return message + 2;
// };

// console.log(anonym("you are anonymous "));

// =========================================================
// создаем метод-------------------------------------

// function getMessage() {
//   console.log("I am function");
// }
// getMessage(); //вызываем функцию

// let car = {
//   getMessage: function() {
//     console.log("I am method");
//   }
// };
// car.getMessage(); // вызывем метод

// =========================================================
// создаем метод в объекте---------------------------

// 1---
// let car = {
//   color: "red",
//   open: function() {
//     //allthis - method
//     // anonymous function
//     console.log("opened");
//     console.log("opened-2");
//   }
// };

// car.open();

// 2---

// let car = {
//   color: "red",
//   open: function(message) {
//     console.log(message);
//   }
// };

// car.open("Open-1");

// 3--=== 2

// let car = {
//   color: "red",
//   open(message) {
//     console.log(message);
//   }
// };

// car.open("Open-1");

// 4 ---===3 ===2

// let car = {
//   color: "red",
//   open() {
//     console.log("Open-1");
//   }
// };

// car.open();

// -------------===========---------------------------
// ---------------цикл---------------------------

// for (let i = 0; i < 100; i++) {
//   console.log("Iron, Mark - " + i);
// }

// let i = 10;
// console.log(i++); //10
// console.log(i); //11

// =================================

let hater = {
  firstName: "Bill",
  lastName: "Geits",
  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
};
console.log(hater.getName());
