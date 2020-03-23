"use strict";

const china = "Китай";
let chinaPrice = 100;
const chili = "Чили";
let chiliPrice = 250;
const australia = "Австралия";
let australiaPrice = 170;
const india = "Индия";
let indiaPrice = 80;
const jamaika = "Ямайка";
let jamaikaPrice = 120;

let userChoice = prompt(
  "Введите название страны, куда Вы хотите оформить заявку:"
);
let message;

if (userChoice === null) {
  alert("В вашей стране доставка не доступна");
} else {
  const searchStr = userChoice.toLowerCase();

  switch (searchStr) {
    case china.toUpperCase():
    case china.toLowerCase():
      message = `Доставка в ${china} будет стоить ${chinaPrice} кредитов`;
      break;

    case chili.toLowerCase():
    case chili.toUpperCase():
      message = `Доставка в ${chili} будет стоить ${chiliPrice} кредитов`;
      break;

    case australia.toLowerCase():
    case australia.toUpperCase():
      message = `Доставка в ${australia} будет стоить ${australiaPrice} кредитов`;
      break;

    case india.toUpperCase():
    case india.toLowerCase():
      message = `Доставка в ${india} будет стоить ${indiaPrice} кредитов`;
      break;

    case jamaika.toLowerCase():
    case jamaika.toUpperCase():
      message = `Доставка в ${jamaika} будет стоить ${jamaikaPrice} кредитов`;
      break;

    default:
      message = "nothing";
  }
}
console.log(message);
