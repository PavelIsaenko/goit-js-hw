"use strict";

// const Hero = function (name, xp) {
//   this.name = name;
//   this.xp = xp;
// };

// Hero.prototype.gainXp = function (amount) {
//   console.log(`${this.name} gained ${amount} experience points`);
//   this.xp += amount;
// };

// const Warrior = function (name, xp, weapon) {
//   // this = Object.create(Warrior.prototype);
//   Hero.call(this, name, xp);

//   // this: {name: 'Mango', xp: 1000}

//   this.weapon = weapon;
// };

// Warrior.prototype = Object.create(Hero.prototype);
// // {__proto__: Hero.prototype}

// Warrior.prototype.constructor = Warrior;
// // {__proto__: Hero.prototype, constructor: Warrior}

// Warrior.prototype.attack = function () {
//   console.log(`${this.name} attacks with ${this.weapon}`);
// };

// const mango = new Warrior("Mango", 1000, "halberd");

// console.log(mango); // Warrior {name: "Mango", xp: 1000, weapon: "halberd"}

// mango.gainXp(2000); // Mango gained 2000 experience points

// -------------------------ES 6 -------------------------------

// class Hero {
//   constructor(name) {
//     this.name = name;
//   }

//   gainXp() {}
// }

// ключевое слово - extends
// class Warrior extends Hero {
//   constructor(name, weapon) {
//     super(name);

//     this.weapon = weapon;
//   }
// }

// const mango = new Warrior("Mango", "axe");
// console.log(mango);// Warrior {name: "Mango", weapon: "axe"}

