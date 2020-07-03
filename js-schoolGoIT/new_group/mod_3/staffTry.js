"use strict";

const staffShop = {
  staff: {
    id_1: { name: "Max", age: 17, salary: 50 },
    id_2: { name: "Kolya", age: 11, salary: 150 },
  },

  showStaff() {
    const entries = Object.entries(this.staff);
    //  console.log(entries);

    for (const entry of entries) {
      const [key, value] = entry;

      // console.log(key, value);
      const { name, age, salary } = value;
      console.log(`${key} - Name: ${name}, Age: ${age}, Salary : ${salary}`);
    }
  },
};

staffShop.showStaff();
