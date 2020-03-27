"use strict";

let country = prompt(":");
let message;
let price;

if (country === null) {
  alert("В вашей стране доставка не доступна");
}
const stringFind = country.toLowerCase();

switch (stringFind) {
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

console.log(message);

// =====================================
// const china = "Китай";
// let chinaPrice = 100;
// const chili = "Чили";
// let chiliPrice = 250;
// const australia = "Австралия";
// let australiaPrice = 170;
// const india = "Индия";
// let indiaPrice = 80;
// const jamaika = "Ямайка";
// let jamaikaPrice = 120;

// // const productTitle;
// // const searchStr = prompt("");
// let searchStr = prompt("Enter world:");
// const passed = searchStr.toLowerCase();
// // const titleInLc = productTitle.toLowerCase();
// // const searchStrInLC = searchStr.toLowerCase();
// // const passed = titleInLc.includes(searchStrInLC);
// // console.log(passed);
// if (passed === china.toLowerCase()) {
//   alert(`${china}`);
// } else if (passed === chili.toLowerCase()) {
//   alert(`${chili}`);
// } else {
//   console.log("epsent");
// }
