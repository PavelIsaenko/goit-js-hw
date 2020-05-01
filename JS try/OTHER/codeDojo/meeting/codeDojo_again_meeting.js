// -------------------------#4 ----------------------------------

// let name = prompt("Hello! What is your name?");

// // alert(`${name}, to guess number from 1 to 100`);

// if (name == "" || name == null) {
//   name = prompt("Hello! What is your name?");

// }
// alert(`${name}, to guess number from 1 to 100`);

// while (name == "") {
//   alert("Please enter your name:");
//   name = prompt("Hello! What is your name?");
// }
// alert(`${name}, to guess number from 1 to 100`);

// --------------------------------------------#5----------------------------

// let name = prompt("Hello! What is your name?");

// while (name == "" || name == null) {
//   name = prompt("Hello! What is your name?");
// }

// alert(`${name}, to guess number from 1 to 100`);

// let number = 42;
// let guess = prompt("What number am I guessing?");
// let guessOfNumbers = 0;

// while (guess != number) {
//   if (guess > number) {
//     guess = prompt("Try the less number");
//     guessOfNumbers = guessOfNumbers + 1;
//   }
//   if (guess < number) {
//     guess = prompt("Try the biggest number");
//     guessOfNumbers = guessOfNumbers + 1;
//   }
// }

// alert(`You are right this is ${number} and you needed ${guessOfNumbers}`);

// -------------------#6 random number--------------------------------

// let number = Math.ceil(Math.random() * 100);
// // number = Math.ceil(number);

// alert(number);

// -----------------
// let name = prompt("Hello! What is your name?");

// while (name == "" || name == null) {
//   name = prompt("Hello! What is your name?");
// }

// alert(`${name}, to guess number from 1 to 100`);

// let number = Math.ceil(Math.random() * 100);
// let guess = prompt("What number am I guessing?");
// let guessOfNumbers = 0;

// while (guess != number) {
//   if (guess > number) {
//     guess = prompt("Try the less number");
//     guessOfNumbers = guessOfNumbers + 1;
//   }
//   if (guess < number) {
//     guess = prompt("Try the biggest number");
//     guessOfNumbers = guessOfNumbers + 1;
//   }
// }

// alert(`You are right this is ${number} and you needed ${guessOfNumbers}`);

// ---------------------------#7 function ---------------------------------

// function random() {
//   let number = Math.ceil(Math.random() * 100);
//   alert(number);
// }

// random();

// ----------------====-----------

// function random() {
//   let number = Math.ceil(Math.random() * 100);
//   return number;
// }

// let numb = random();
// alert(numb);
// ----------------=====----------

// function random(randnumb) {
//   return Math.ceil(Math.random() * randnumb);
// }

// let numb = random(100);
// alert(numb);

// -----------------======-------------------

function random(randnumb) {
  return Math.ceil(Math.random() * 100);
}

let name = prompt("Hello! What is your name?");

while (name == "" || name == null) {
  name = prompt("Hello! What is your name?");
}

alert(`${name}, to guess number from 1 to 100`);

let number = random(100);
alert(number); // выдаест случайное число
let guess = prompt("What number am I guessing?");
let guessOfNumbers = 0;

while (guess != number) {
  if (guess > number) {
    guess = prompt("Try the less number");
    // guessOfNumbers = guessOfNumbers + 1;
  }
  if (guess < number) {
    guess = prompt("Try the biggest number");
    // guessOfNumbers = guessOfNumbers + 1;
  }
  guessOfNumbers = guessOfNumbers + 1;
}

alert(`You are right this is ${number} and you needed ${guessOfNumbers}`);

// -----------# 8 -refactoring ----------------------------------

// function random(randnumb) {
//   return Math.ceil(Math.random() * 100);
// }
// let grate = "Enter your name:";
// let name = prompt(grate);

// while (name === "" || name === null) {
//   name = prompt(grate);
// }

// alert(`${name}, to guess what number am I thinking?`);

// let numb = random(100);
// alert(numb);

// let guess = prompt("Enter your number:");
// let guessofNumb = 1;

// while (numb != guess) {
//   if (numb < guess) {
//     guess = prompt("Try the less number");
//   } else if (numb > guess) {
//     guess = prompt("Try the biggest number");
//   }
//   guessofNumb = guessofNumb + 1;
// }

// alert(`You entered ${numb} of number, from ${guessofNumb} trying`);
