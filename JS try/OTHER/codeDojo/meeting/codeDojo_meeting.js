"use strict";

// ==============================================================

//-------------------------------- #4 --------------------------------

// let name = prompt("Enter your name:");

// if (name === null) {
//   alert("nothing");
// } else if (name === "") {
//   name = prompt("Please, enter your name:");
// } else {
//   alert(name + ", at last you did it, my congratulation");
// }

// ===========================================================

// -------------------#5 -loop - цыклы----------------------

// let name = prompt("Enter your name:");

// while (name !== null) {
//   // while - будет выскакивать диалоговое окно пока не будет нажато (null)
//   name = prompt("Please, enter your name:");
// }

// alert(name + ", at last you did it, my congratulation");

// ================================================================

// Задача на угадывание числа
// let name = prompt("Enter your name:");

// while (name == "" || name == null) {
//   name = prompt("Please, enter your name:");
// }
// alert(name + ", I guess number from 1 to 1000. Let to geuss");

// let number = 42; // фиксированное число
// let guess = prompt("What is number I guess?");
// let numberofGuesses = 0; // количество попыток задаем 0 для дальнейшего подсчета и через let, что бы работало корректно
// while (guess != number) {
//   if (guess > number) {
//     guess = prompt("Biggest, try again");
//     numberofGuesses = numberofGuesses + 1;//создаем счетчик поыток
//   }

//   if (guess < number) {
//     guess = prompt("Smaller, try again");
//     numberofGuesses = numberofGuesses + 1;
//   }
// }
// alert(
//   "You guess, it is number " +
//     number +
//     " you needed at least " +
//     numberofGuesses +
//     " trying."
// );

// ===============================================================

// ----------------#6- random numbers-------------------

// let number = Math.random() * 100; // умножаем на 100 для того, что бы получить целое число
// number = Math.ceil(number); // округляем число

// корокая запись двух кодов в один

// let number = Math.ceil(Math.random() * 100);
// alert(number);

//======================================================
// ----------задача на угадывание числа случайного от ... и до ....

// let name = prompt("Enter your name:");

// while (name == "" || name == null) {
//   name = prompt("Please, enter your name:");
// }
// alert(name + ", I guess number from 1 to 1000. Let to geuss");

// let number = Math.ceil(Math.random() * 100);
// let guess = prompt("What is number I guess?");
// let numberofGuesses = 0; // количество попыток задаем 0 для дальнейшего подсчета и через let, что бы работало корректно
// while (guess != number) {
//   if (guess > number) {
//     guess = prompt("Biggest, try again");
//     numberofGuesses = numberofGuesses + 1; //создаем счетчик поыток
//   }

//   if (guess < number) {
//     guess = prompt("Smaller, try again");
//     numberofGuesses = numberofGuesses + 1;
//   }
//   // numberofGuesses = numberofGuesses + 1;
// }
// alert(
//   "You guess, it is number " +
//     number +
//     " you needed at least " +
//     numberofGuesses +
//     " trying."
// );

// ==========================================================
// -----------------#7 function-----------------------------

// function random() {
//   let number = Math.ceil(Math.random() * 100);
//   // alert(number);
//   return number;
// }

// let numb = random();
// alert(numb);

// short sentence-------------------------------------

// function random() {
//   return Math.ceil(Math.random() * 100);
// }

// let numb = random();
// alert(numb);

// ------- задаем от 1 и до 10_---------------------

// function random(number) {
//   return Math.ceil(Math.random() * number);
// }

// let numb = random(100);
// alert(numb);

// =====================================
// вставим функцию в обычный код

// function random(number) {
//   return Math.ceil(Math.random() * number);
// }

// let name = prompt("Enter your name:");

// while (name == "" || name == null) {
//   name = prompt("Please, enter your name:");
// }
// alert(name + ", I guess number from 1 to 1000. Let to geuss");

// let numb = random(100);
// alert(numb); // что бы знать результат
// let guess = prompt("What is number I guess?");
// let numberofGuesses = 0;
// while (guess != numb) {
//   if (guess > numb) {
//     guess = prompt("Biggest, try again");
//     numberofGuesses = numberofGuesses + 1;
//   }

//   if (guess < numb) {
//     guess = prompt("Smaller, try again");
//     numberofGuesses = numberofGuesses + 1;
//   }
// }
// alert(
//   "You guess, it is number " +
//     numb +
//     " you needed at least " +
//     numberofGuesses +
//     " trying."
// );

// =======================================================

// -------#8 рефакторинг---чистый код, не повторяющийся---------------

function random(number) {
  return Math.ceil(Math.random() * number);
}

let greeting = "Enter your name:"; // создали данную переменную, что бы сократить повторений
let name = prompt(greeting);

while (name == "" || name == null) {
  name = prompt(greeting);
}
alert(name + ", I guess number from 1 to 1000. Let to geuss");

let numb = random(100);
alert(numb); // что бы знать результат
let guess = prompt("What is number I guess?");
let numberofGuesses = 1;
while (guess != numb) {
  numberofGuesses = numberofGuesses + 1;

  if (guess > numb) {
    guess = prompt("Biggest, try again");
  } else if (guess < numb) {
    guess = prompt("Smaller, try again");
  }
}
alert(
  "You guess, it is number " +
    numb +
    " you needed at least " +
    numberofGuesses +
    " trying."
);
