// it doctor================================
//--------------------------------------------------
// let counter = 0;
// while (counter < 12) {
//   console.log("counter: ", counter);
//   counter += 2; // указываем на какое количество увеличиваем +=2 (то есть на 2)
// }

// =================================================
//цыклы "while"

// let carCounted = 0;
// while (carCounted < 10) {
//   console.log("Counting cars:" + carCounted + "!");
//   carCounted++;
// }

//--------------------------------------------------
//цыклы "for" аналогично выполняет задачи как и " while"

// for (let carCounted = 0; carCounted < 10; carCounted++) {
//   console.log("Counting cars:" + carCounted + "!");
// }

//--------------------------------------------
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(i);
// }
// -------------------------------------------------
// for для массива
// let animals = ["lion", "beer", "wolf", "snake"];
// for (let i = 0; i < animals.length; i++) {
//   console.log("There are:" + animals[i] + ".");
// }
// --------------------------------------------------------
// for для "строки"
// let name = "Nick";
// for (let i = 0; i < name.length; i++) {
//   console.log("In my name is letter:" + name[i] + ".");
// }
// ----------------------------------------------------------
for (let x = 2; x < 10000; x *= 2) {
  console.log(x);
}
