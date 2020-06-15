"use strict";

// const Counter = function ({ initialValue = 0, step = 1 }) {
//   //this = {} // получает ссылку на пустой объект конструктора (new Counter)
//   this.initalValue = initialValue;
//   this.step = step;

//   //return this;
// };

// //[[Construct]]
// const counterA = new Counter({ initialValue: 10, step: 5 }); //function constructor
// // можем сделать многое количество new Counter...
// const counterB = new Counter({ initialValue: 7, step: 15 });
// const counterC = new Counter({ initialValue: 50, step: 25 });
// console.log(counterA); // Counter {initalValue: 10, step: 5}
// console.log(counterB); // Counter {initalValue: 7, step: 15}
// console.log(counterC); // Counter {initalValue: 50, step: 25}

// /////////////////////-----------------new constructor-------------

// const Counter = function ({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;

//   this.increment = function () {
//     this.value += this.step;
//   };
// };

// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log(`counterA value: ${counterA.value}`); // 10
// counterA.increment(); // to switch increment and to add +5 -step
// console.log(`counterA value(increment): ${counterA.value}`); //15

// //

// const counterB = new Counter({ initialValue: 100, step: 55 });
// console.log(`counterB value: ${counterB.value}`); //100
// counterB.increment(); // 55
// console.log(`counterB value(increment): ${counterB.value}`); // 155

// -----------------------==================--------------------------
// ------------ new constructor -с прототипным наследованием----------

// const Counter = function ({ initialValue = 0, step = 1 }) {
//   this.value = initialValue;
//   this.step = step;
//   //this = {}
//   // this.__proto__= Counter.prototype;
// };

// // Counter.prototype.increment - заменяет this.increment и делает мнее загруженный код, потому что прототип только в одном месте и не дублируется...
// Counter.prototype.increment = function () {
//   this.value += this.step;
// };

// Counter.prototype.asd = function () {
//   this.step += this.step;
// };
// // Counter.prototype.asd = function () {
// //   this.step = 3 * this.step;
// // };

// console.dir(Counter);

// const counterA = new Counter({ initialValue: 10, step: 5 });
// console.log(counterA); // Counter {value: 10, step: 5}
// console.log(`counterA value: ${counterA.value}`); //10
// counterA.increment();
// console.log(`counterA value(increment): ${counterA.value}`); //15

// console.log(`counterA step: ${counterA.step}`); // 5
// counterA.asd();
// console.log(`counterA (step): ${counterA.step}`); // 10

// //

// const counterB = new Counter({ initialValue: 100, step: 55 });
// // console.log(`counterB value: ${counterB.value}`);
// // counterB.increment();
// // console.log(`counterB value(increment): ${counterB.value}`);

// --------------------------------------------------------------------
// ---------------push with constructor-(пример для ДЗ)---------------

// const TodoEditor = function (todos = []) {
//   this.todos = todos;
// };

// TodoEditor.prototype.saveTodo = function (todo) {
//   this.todos.push(todo);
// };

// const editor = new TodoEditor();
// editor.saveTodo({ text: "new todo" });
// console.log(editor);

// ------------------------------------------------------------------
////////////////////////////////////////////////////////////////////

