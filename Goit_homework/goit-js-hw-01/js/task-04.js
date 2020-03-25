"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Какое количество дроидов Вы хотите купить?");
let total;

if (message === null) {
  console.log("Отменено пользователем!");
} else {
  let input = Number(message);
  total = input * pricePerDroid;
  if (total > credits) {
    console.log("Недостаточно средств на счету!");
  } else {
    let count = credits - total;
    console.log(
      `Вы купили ${input} дроидов, на счету осталось ${count} кредитов.`
    );
  }
}
