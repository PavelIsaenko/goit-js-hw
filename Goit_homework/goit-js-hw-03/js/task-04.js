"use strict";

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  let count = 0;

  for (const key of values) {
    count += key;
    //  console.log(key);
  }
  return count;
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
