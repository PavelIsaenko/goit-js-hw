"use strict";

const credits = 23580;
const pricePerDroid = 3000;
let message = prompt("Какое количество дроидов Вы хотите купить?");
// message = Number(message);
const totalPrice = message * pricePerDroid;
let counter;
let lost;
if (message === null) {
  console.log("Отменено пользователем!");
} else if ((counter = totalPrice / 3000) * 3000 < credits) {
  message = Number(message);
  console.log(
    `Ты можешь купить ${counter} Дроидов на сумму ${totalPrice}, и у тебя еще осталось ${credits -
      totalPrice}`
  );
} else if ((lost = (counter = totalPrice / 3000) * 3000) > credits) {
  message = Number(message);

  console.log(
    `Извини друг, но ты не можешь купить ${counter} дроидов, не более 7-ми и у тебя осталось 420`
  );
}
