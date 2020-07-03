"use strict";

// const shopDB = {
//   name: "Shop #1",
//   address: "Kiev",
//   items: [{ name: "Test item", price: 100, amount: 2, category: "" }],
//   showItems() {
//     for (const item of this.items) {
//       const { name, price, amount } = item;
//       console.log(`${name}: ${price}, ${amount}`);
//     }
//   },
//   addItem(name, price, amount, category) {
//     const newItem = { name, price, amount, category };
//     this.items.push(newItem);
//   },
// };
// shopDB.addItem(name);
// shopDB.showItems();

// -----------------------------------again--------------------
// создадим функцию  - создания рандомного иденитификатора  !!!!
function generateId() {
  const randomNumber = Math.random();
  return randomNumber.toString().slice(2);
}

const shop = {
  name: "Shop #1",
  address: "Kiev",
  items: [
    { id: "1", name: "Test item", price: 100, amount: 200, category: "fruits" },
    { id: "2", name: "apples", price: 90, amount: 105, category: "fruits" },
    { id: "3", name: "grape", price: 190, amount: 205, category: "fruits" },
    { id: "4", name: "pinapples", price: 390, amount: 45, category: "fruits" },
    { id: "5", name: "lemons", price: 10, amount: 145, category: "fruits" },
  ],

  // метод показа товара:
  showItems() {
    for (const item of this.items) {
      // console.log(`${item.name}: ${item.price} $, amount: ${item.amount}`);

      // делаем дестуктиризацию для короткой записи
      const { id, name, price, amount } = item;
      console.log(`${id}, ${name}:${price}$, amount: ${amount}`);
    }
  },

  // Метод - должно добавлять товар:
  addItem(name, price, amount, category) {
    const newItem = { id: generateId(), name, price, amount, category };
    this.items.push(newItem);
  },

  // метод удаления
  removeItem(id) {
    const indexToDelete = this.getItemPositionById(id);

    if (indexToDelete !== -1) {
      this.items = [
        ...this.items.slice(0, indexToDelete),
        ...this.items.slice(indexToDelete + 1),
      ];
    }
  },

  // метод добавления товара - для поиска используем - for
  updateItem(id, newValues) {
    const indexToUpdate = this.getItemPositionById(id);
    const itemToUpdate = this.getItemById(id);

    // itemToUpdate аналог без метода - getItemById
    // let itemToUpdate = this.items[indexToUpdate];

    this.items[indexToUpdate] = { ...itemToUpdate, ...newValues };
    // itemToUpdate = { ...itemToUpdate, ...newValues };
  },

  // метод поиска id
  getItemPositionById(id) {
    let index = -1;
    for (let i = 0; i < this.items.length; i += 1) {
      const currentItem = this.items[i];

      if (currentItem.id === id) {
        index = i;
        break;
      }
    }
    return index;
  },

  //
  getItemById(id) {
    const indexToUpdate = this.getItemPositionById(id);
    return this.items[indexToUpdate];
  },

  // метод поиска по значению
  getItemByValue(fieldName, fieldValue) {
    const items = this.items;
    let result = [];

    for (const item of items) {
      if (item[fieldName] === fieldValue) {
        result.push(item);
      }
    }
    return result;
  },

  // метод поиска в диапазоне
  getItemsByRange(fieldName, rangeStart, rangeEnd) {
    const items = this.items;
    let result = [];

    for (const item of items) {
      const fieldValue = item[fieldName];
      if (fieldValue >= rangeStart && fieldValue <= rangeEnd) {
        result.push(item);
      }
    }
    return result;
  },
};

// shop.addItem("Apples", 1, 200, "Fruits");
// shop.showItems(); // показали первый товар

// // for example------
// shop.removeItem("10202745625447007");
// shop.showItems();

// shop.showItems();
// shop.updateItem("1", { name: "New test name", price: 201, amount: 101 }); // изменили значение товара - id:1
// shop.showItems();

// shop.addItem("ice cream", 10, 10, "freeze");
// console.table(shop.getItemByValue("category", "fruits"));
// console.table(shop.getItemByValue("price", 100));

// console.table(shop.getItemsByRange("price", 80, 300));

// // // // // --------------------удалиние товора---------------
// shop.showItems();
// const priceLessThen100 = shop.getItemsByRange("price", 0, 99);
// for (const item of priceLessThen100) {
//   const { id } = item; // destruction
//   shop.removeItem(id);
// }

// console.log("--------------------------------");
// shop.showItems();

// // //---добавление цены к товорам + заданное число------------

shop.showItems();
const priceLessThen50 = shop.getItemsByRange("price", 0, 50);
for (const item of priceLessThen50) {
  const { id, price } = item;
  shop.updateItem(id, { price: price + 20 });
}

console.log("--------------------------------");
shop.showItems();
