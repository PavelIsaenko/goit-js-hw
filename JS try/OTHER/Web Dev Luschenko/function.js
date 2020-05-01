"use strict";

// =============--------------===================
// function count() {
//   let b = 7;

//   let a = 0;
//   a++;
//   console.log(a);
//   console.log(b);
// }

// let snake = count();
// console.log(snake());

// ===============---------------================
function cs2() {
  let c = 1;
  return function() {
    c++;
    console.log(c);
  };
}

let d = cs2();
d();
