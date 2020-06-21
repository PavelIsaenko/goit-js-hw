"use strict";

const countProps = function (obj) {
  const value = Object.values(obj);
  let total = 0;

  for (let i = 0; i < value.length; i += 1) {
    total = value.length;
  }
  return total;
};

console.log(countProps({}));

console.log(countProps({ name: "Mango", age: 2 }));

console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
