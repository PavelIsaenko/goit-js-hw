"use strict";

// создадим функцию  - создания рандомного иденитификатора  !!!!
function generateId() {
  const randomNumber = Math.random();
  return randomNumber.toString().slice(2, 9); // задаем slice(2,9), что бы сократить чило id
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

  // раздел сотрудников - Obj
  staff: {
    "1": { name: "1", age: 1, salary: 1, education: ["school"] },
    [generateId()]: {
      name: "Staff 1",
      age: 30,
      salary: 1000,
      education: ["school", "university"],
    },
    [generateId()]: {
      name: "Staff 2",
      age: 25,
      salary: 1001,
      education: ["university"],
    },
  },

  // метод показа сотрудников
  showStaff() {
    //   вариант 1 - цикл for in
    //  for (const key in this.staff) {
    //    const { name, age, salary } = this.staff[key];
    //    console.log(`${key} - name:${name}, age: ${age}, salary: ${salary}`);
    //  }
    //  ---------------------------------------
    // вариант 2 - цикл for of
    //  const keys = Object.keys(this.staff);
    //  for (const key of keys) {
    //    const { name, age, salary } = this.staff[key];
    //    console.log(`${key} - name:${name}, age: ${age}, salary: ${salary}`);
    //  }
    //  -------------------------------------
    //  // пример ииспользования без ключа - key
    //  const values = Object.values(this.staff);
    //  for (const value of values) {
    //    const { name, age, salary } = value;
    //    console.log(` name:${name}, age: ${age}, salary: ${salary}`);
    //  }
    //--------------------------------------------
    // вариант 3 - цикл for of - entries

    const entries = Object.entries(this.staff);
    for (const entry of entries) {
      const [key, value] = entry; // id_1: - key { name: "Staff 1", age: 30, salary: 1000 } - value
      const { name, age, salary, education } = value;
      console.log(
        `${key} - name:${name}, age: ${age}, salary: ${salary}, Education: ${education}`
      );
    }
  },

  // добавления сотрудника в раздел - staff
  addStaff(name, age, salary) {
    const newStaff = { name, age, salary };
    this.staff[generateId()] = newStaff;

    //  аналог------------------
    //  const newId = generateId();
    //  this.staff[newId] = newStaff;
  },

  // метод удаления staff
  removeStaff(id) {
    delete this.staff[id];
  },

  //   метод добавления
  updateStaff(id, newValues) {
    this.staff[id] = { ...this.staff[id], ...newValues };
  },

  // поиск совпадений
  getSraffById(id) {
    return this.staff[id];
  },

  //
  //   getStaffByStringField(fieldName, fieldValue) {
  //     let result = [];
  //     const values = Object.values(this.staff);
  //     for (const value of values) {
  //       if (value[fieldName].toLowerCase().includes(fieldValue.toLowerCase())) {
  //         result.push(value);
  //       }
  //     }
  //     return result;
  //   },
  // вызов массив -id
  getStaffByStringField(fieldName, fieldValue) {
    let result = [];
    const entries = Object.entries(this.staff);
    for (const [key, value] of entries) {
      if (value[fieldName].toLowerCase().includes(fieldValue.toLowerCase())) {
        result.push(key);
      }
    }
    return result;
  },

  //
  getStaffByIncludesField(fieldName, fieldValue) {
    let result = [];
    const entries = Object.entries(this.staff);
    for (const [key, value] of entries) {
      if (value[fieldName].includes(fieldValue)) {
        result.push(key);
      }
    }

    return result;
  },

  //   поиск по заданным критериям от и до
  getStaffByRange(fieldName, rangeStart, rangeEnd) {
    let result = [];
    const entries = Object.entries(this.staff);
    for (const [key, value] of entries) {
      const currentFieldValue = value[fieldName];
      if (currentFieldValue >= rangeStart && currentFieldValue <= rangeEnd) {
        result.push(key);
      }
    }
    return result;
  },
};

// shop.showStaff(); // id_1 - name:Staff 1, age: 30, salary: 1000
// id_2 - name:Staff 2, age: 25, salary: 1001

// shop.addStaff("Staff 3", 32, 1500);
// shop.showStaff();
// shop.removeStaff("1");
// console.log("----------------------");
// shop.showStaff();

// shop.showStaff();
// shop.updateStaff("1", { name: "Staff!!!!", age: 50, salary: 23 });
// console.log("----------------------");
// shop.showStaff();

// console.log(shop.getSraffById("1"));

// console.log(shop.getStaffByStringField("name", "a"));

// ----------------------------------
// удвление staff
// const staffToRemove = shop.getStaffByStringField("name", "a");
// for (const staffId of staffToRemove) {
//   shop.removeStaff(staffId);
// }
// shop.showStaff();

// ---------------------------------------
//

// const staffWithUniversityEducation = shop.getStaffByIncludesField(
//   "education",
//   "university"
// );

// for (const staffId of staffWithUniversityEducation) {
//   shop.removeStaff(staffId);
// }

// shop.showStaff(); // 1 - name:1, age: 1, salary: 1, Education: school

// ---------------------------------------------

// const ageMore18 = shop.getStaffByRange("age", 18, 100);
// for (const staffId of ageMore18) {
//   shop.removeStaff(staffId);
// }
// shop.showStaff(); // 1 - name:1, age: 1, salary: 1, Education: school

// --------------------------------------------

let array = [1, 2, 3, 4, 5, 6, 7];
let indexToRemove = 3;

for (let i = 0; i < array.length; i += 1) {
  console.log(i, array[i]);
  if (i === indexToRemove) {
    // array.splice(i, 1);
    array = [
      ...array.slice(0, indexToRemove),
      ...array.slice(indexToRemove + 1),
    ];
  }
}

console.log("_____________");
console.log(array);
