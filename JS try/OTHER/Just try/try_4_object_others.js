"use strict";

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
//   showName() {
//     console.log(this.name);
//   },
//   changeCapacity(value) {
//     this.capacity = value;
//   },
// };

// hotel.showName(); // Resort Hotel

// hotel.changeCapacity(300);
// console.log(hotel.capacity); // 200

// ------------------------------------------------

// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const hot in hotel) {
//   console.log("Key: ", hot);
// }
// ------------======================--------------
// const hotel = {
//   name: "Resort Hotel",
//   stars: 5,
//   capacity: 100,
// };

// for (const old in hotel) {
//   console.log("Value: ", hotel[old]);
// }
// 0-----------================----------------

const hotel = {
  name: "Resort Hotel",
  stars: 5,
  capacity: 100,
};

/*
 * Посмотрите в консоли из каких двух элементов состоит каждый подмассив.
 * Первый элемент это ключ свойства, второй это значение.
 */
const entries = Object.entries(hotel);

/*
 * На каждой итерации по entries выберем первый элемент подмассива (ключ)
 * в переменную key, а второй (значение) в переменную value
 */
// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log(`${key}: ${value}`);
// }

for (let i = 0; i < entries.length; i += 1) {
  console.log(entries[i]);
  //   const key = entries[0];
  //   const value = entries[1];

  //   console.log(`${key}: ${value}`);
}

/*
 * name: Resort Hotel
 * stars: 5
 * capacity: 100
 */
