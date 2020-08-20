"use strict";

// ----------------callback function-------------------
// function plus(a, b, typeOfLogging) {
//   const result = a + b;

//   if (typeOfLogging === "Log") {
//     console.log(result);
//   } else if (typeOfLogging === "Warn") {
//     console.warn(result);
//   } else if (typeOfLogging === "Alert") {
//     alert(result);
//   }
// }

// console.log(plus(1, 2, "Log"));
// console.log(plus(1, 2, "Warn"));
// console.log(plus(1, 2, "Alert"));

// ------------------------------------

// function plus(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// plus(1, 2, console.log);
// plus(1, 2, console.warn);
// plus(1, 2, console.error);
// plus(1, 2, alert);

// ------------------------------------------------

// function plus(a, b, callback) {
//   let result = a + b;
//   callback(result);
// }

// const a = 2;
// const b = 5;

// const callback = function (result) {
//   console.log(`${a} + ${b}= ${result}`);
// };

// plus(a, b, callback);

// ===============================================
// --------------method-forEach----------------------

// function forEach(array, callback) {
//   let result =0;
//   for (let i=0; i<array.length; i+=1) {
//     result +=array[i];
//   }
// }

// ---short version-----

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i]);
//   }
// }

// // const consoleArray = function (element) {
// //   console.log(element); // данная функция выводит данные
// // };
// // forEach([1, 2, 3], consoleArray);

// let result = 0;
// const callback = function (elementOfArray) {
//   console.log(`element: ${elementOfArray}`);
//   result += elementOfArray;
// };
// console.log(`result: ${result}`); // 0 -потому что перед итерацией
// forEach([1, 2, 3, 4, 5], callback);
// console.log(`result: ${result}`); // 15 -результат после всех итераций и добавления чисел

// -----------------------------------------------------------------

// function forEach(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// }

// let result = 0;
// const callback = function (elementOfArray, indexOfArray, array) {
//   console.log(`element:${indexOfArray}: ${elementOfArray}- array: ${array}`);
//   result += elementOfArray;
// };

// forEach([1, 2, 3, 4, 5], callback);
// console.log(`result: ${result}`); // element:0: 1- array: 1,2,3,4,5
// // element:1: 2- array: 1,2,3,4,5
// // element:2: 3- array: 1,2,3,4,5
// // element:3: 4- array: 1,2,3,4,5
// // element:4: 5- array: 1,2,3,4,5

// --------------------------------------------------------------------
// --------------------------------------------------------------------
// ------------------------method-find---------------------------------

// let array = [{ test: 1 }, { test: 2, a: "str" }, { test: 3 }, { b: 0 }];
// function find(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     let resultOfCallback = callback(array[i]);
//     if (resultOfCallback) {
//       return array[i];
//     }
//   }
// }

// const callbasa = function (element) {
//   // return element.a = "str";

//   return element.test === 3; // обращаемся к -->let array = [{ test: 1 }, { test: 2 }, { test: 3 }, { b: 0 }];
// };

// const ourElement = find(array, callbasa);
// console.log(ourElement); // {test: 3}

// -----------analog with array---------------------------------------------

// let array = [1, 2, 3, 45, "str"];
// function find(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     let resultOfCallback = callback(array[i]);
//     if (resultOfCallback) {
//       return array[i];
//     }
//   }
// }

// const callbasa = function (element) {
//   return element === "str"; // обращение сразу к елементу массива
//   return element === 45;

// };

// const ourElement = find(array, callbasa);
// console.log(ourElement); // "str", 45

// ------------

// let array = [1, 2, 3, 45, "str"];
// function find(array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     let resultOfCallback = callback(array[i]);
//     if (resultOfCallback) {
//       return array[i];
//     }
//   }
//   return null;
// }

// const callbasa = function (element) {
//   return element === 90;
// };

// const ourElement = find(array, callbasa);
// console.log(ourElement); // будет null - потому что нет такого елемента в массиве

// --------------------------------------------------------------
// -----------universal--------------------------

// const repeatAction = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// }; // repeatAction вызывает callback для выполнения задачи

// function logEveryElement(array) {
//   const callback = function (element) {
//     console.log(element);
//   };
//   repeatAction(array, callback);
// }
// logEveryElement([1, 2, 3]); // 1 2 3

// ------------to continue___-----------------------------

// const repeatAction = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// }; // repeatAction вызывает callback для выполнения задачи

// function logEveryElement(array) {
//   repeatAction(array, function (element) {
//     console.log(element);
//   });
// }
// // logEveryElement([1, 2, 3]); // 1 2 3

// function find(array, callback) {
//   let result = null;
//   repeatAction(array, function (elementOfArray) {
//     let resultOfFindCallback = callback(elementOfArray);
//     if (resultOfFindCallback) {
//       result = elementOfArray;
//     }
//   });
//   return result;
// }

// const result = find(
//   [
//     { a: 1, i: 0 },
//     { a: 4, i: 1 },
//     { a: 2, i: 3 },
//     { a: 1, i: 3 },
//   ],
//   function (element) {
//     return element.a === 1;
//   }
// );
// console.log(result); // {a: 1, i: 3}

// -----------------------------------------

// const repeatAction = function (array, callback) {
//   for (let i = 0; i < array.length; i += 1) {
//     callback(array[i], i, array);
//   }
// }; // repeatAction вызывает callback для выполнения задачи

// // function logEveryElement(array) {
// //   repeatAction(array, function (element) {
// //     console.log(element);
// //   });
// // }
// // // logEveryElement([1, 2, 3]); // 1 2 3

// function find(array, callback) {
//   let result = null;

//   let callbackForRepeatAction = function (elementOfArray) {
//     if (result === null) {
//       let resultOfFindCallback = callback(elementOfArray);
//       if (resultOfFindCallback) {
//         result = elementOfArray;
//       }
//     }
//   };
//   repeatAction(array, callbackForRepeatAction);
//   return result;
// }

// const result = find(
//   [
//     { a: 1, i: 0 },
//     { a: 4, i: 1 },
//     { a: 2, i: 3 },
//     { a: 1, i: 3 },
//   ],
//   function (element) {
//     return element.a === 1;
//   }
// );
// console.log(result); //{a: 1, i: 0}

// /-------------------===============---------------
// -------------замыкание-----------------------------

// const variable = 1;
// const test = function () {
//   console.log(variable);
// };

// ---------------==============------------------------
// ----------- наглядный пример замыкания --------------
function find(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    let resultOfCallback = callback(array[i]);
    if (resultOfCallback) {
      return array[i];
    }
  }
  return null;
}

const array = [{ a: 1 }, { a: 2 }, { a: 3 }, { a: 4 }];

const byFieldName = function (fieldName, fieldValue) {
  return function (elementOfArray) {
    return elementOfArray[fieldName] === fieldValue;
  };
};

const callback = byFieldName("a", 1);

const element = find(array, callback);
console.log(element); // {a: 1}
