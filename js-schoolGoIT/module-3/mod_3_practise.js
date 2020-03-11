// const EN = {
//   HELLO_USER: "Hello, user",
//   GODBAY_USER: "Goodbay, user"
// };

// const RU = {
//   HELLO_USER: "Привет, пользователь",
//   GODBAY_USER: "Прощай, пользователь"
// };

// const UA = {
//   HELLO_USER: "Привіт, коричстувач",
//   GODBAY_USER: "Бувай, користувач"
// };

// const renderHelloUser = locale => {
//   console.log(locale.HELLO_USER);
// };

// renderHelloUser(EN);
// renderHelloUser(UA);

// ==============================================

const data = [
  {
    day: "sat",
    from: "10:00",
    to: "23:00"
  },
  {
    day: "mon",
    from: "11:00",
    to: "23:00"
  },
  {
    day: "tue",
    from: "11:00",
    to: "23:00"
  },
  {
    day: "wed",
    from: "11:00",
    to: "23:00"
  },
  {
    day: "thu",
    from: "12:00",
    to: "23:00"
  },
  {
    day: "fri",
    from: "12:00",
    to: "23:00"
  },
  {
    day: "sun",
    from: "11:00",
    to: "23:00"
  }
];

const day = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const getTimeByDay = day => {
  for (const dayObject of data) {
    if (dayObject.day === day) {
      return [dayObject.from, dayObject.to];
    }
  }
};
console.log(getTimeByDay("mon"));
