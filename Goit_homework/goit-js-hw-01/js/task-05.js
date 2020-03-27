"use strict";
let country = prompt(
  "Введите название страны, куда Вы хотите оформить заявку:"
);

let message;
let price;

if (country === null) {
  alert("В вашей стране доставка не доступна");
} else {
  country = country.toLowerCase();
  switch (country) {
    case "китай":
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "чили":
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "австралия":
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "индия":
      price = 80;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
    case "ямайка":
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;

    default:
      message = "nothing";
  }
}
alert(message);
