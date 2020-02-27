// IT DOCTOR

// ===================================
// let str = "so longer string";
// console.log(str);

// console.log(str.slice(0, 1));

// ======================================
// math
// const x = 15;
// const y = 7;
// const z = 9;

// console.log(x + y + z);
// console.log(x - y + z);
// console.log(z * y - x);

// let value = 10;
// value += 5;
// console.log(x);

// let n1 = 1 + 3;
// let n2 = 8;
// console.log(n2 / n1);
// let sInM = 60;
// let mInH = 60;
// console.log(sInM * mInH);

// =====================
// инкримент и дискримент
// let n = 5;
// console.log(++n);/увеличелось на 1
// console.log(--n);/уменьшилось на 1

// =============================
// строки!!!!!!!!!!!!!!!!

// let string = "Hello world";
// console.log(string);
// console.log(typeof string);
// console.log(string.length); /показывает длину строки 11

// let name = "Alex";
// console.log(name[0]);/ выводит только 0 по индексу букву А

// let name = "Alex";
// console.log(name.slice(1, 4)); /выведет lex, то есть с 1-й по 3-ю включительно
// console.log(name.slice(1));/ в этом случае с l и до конца выведет текст(масив)

// let name = "Alex";
// console.log(name.toUpperCase()); / ALEX большими

// let name = "Alex";
// console.log(name.toLowerCase());/alex

// let string = "hI mRT roUND";
// let firstChar = string[0].toUpperCase();/ задаем первой букве переменной "string" Большой - Н
// let str2 = string.slice(1).toLowerCase();/ что бы со 2-й буквы все были маленькие
// let allstr = firstChar + str2; /оъеденяем две переменные в одну
// console.log(allstr);/ выводим на екран

// ======================================
// Boolean!!!!!!!!!!!
// const num = 10;
// const result = num >= 9 && num <= 31;
// console.log(result); /true

// let age = 16;
// let accept = true;
// let result = age >= 17 || accept;
// console.log(result); /true

// =============================
// // Massive!!!!!!!!!!!

// const listName = ["Nick", "John", "Alex"];
// console.log(listName);
// listName[0] = "Woodie";
// console.log(listName);/замена 0-го индекса
// listName[3] = "Rix";/ добавляем 3-й индекс
// console.log(listName);

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// console.log(client);
// console.log(client[2][1]);/ to output - Frog

// const client = [4, "Fox", ["Dog", "Frog", 11.5]];
// console.log(client.length);/ длину масива получаем 3

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// console.log(client.push("45fm"));/ добавляе еще одно значение "45fm" в массив 'сlient'
// console.log(client);

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// console.log(client.push("45fm"));
// console.log(client.unshift("Lion"));
// console.log(client);
// Другая форма записи.....
// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// client.push("45fm");
// client.unshift("Lion");
// console.log(client);

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// const server = [45, ["Link", "Chain", 56.6], "Georgeo"];
// const togServ = client.concat(server); / объеденяем два массива 'client' & 'server'
// console.log(togServ); / output -(7) [4, "Fox", Array(3), 45.6, 45, Array(3), "Georgeo"]

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// const server = [45, ["Link", "Chain", 56.6], "Georgeo"];
// const togServ = client.concat(server, client);
// console.log(togServ);

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// console.log(client.indexOf("Fox")); / to output - 1
// console.log(client[1]); / to output - 'Fox'

// const client = [4, "Fox", ["Dog", "Frog", 11.5], 45.6];
// console.log(client.join("-"));
// console.log(client.join("/"));

// =======================================================
// Random, Floor e.t.c

// let phrase = [
//   "Yes, of course",
//   "Maybe, but not today",
//   "Tommorow",
//   "No, it is not"
// ];
// alert("I need to study this info?");
// alert(phrase[Math.floor(Math.random() * phrase.length)]);/ выюирает любое значение с переменной "phrase"

// ===================================================
// Цыклы if....else

// const name = "Chrisian";
// console.log("Hello," + name);
// if (name.length > 6) {
//   console.log("So is longer your name"); /выводит "So is longer your name" потому что имя '> 6', то есть true
// }

// const name = "Nick";
// console.log("Hello," + name);
// if (name.length > 6) {
//   console.log("So is longer your name"); /выводит "Nick" потому что имя   не  соответствует значению '> 6', то есть false
// }

// const name = "Nick";
// console.log("Hello," + name);
// if (name.length > 6) {
//   console.log("So is longer your name");
// } else {
//   console.log("You have is short name"); /выводит "You have is short name" потому что имя   не  соответствует значению '> 6'
// }
