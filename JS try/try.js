const TAKEOUT = 0;
const COURTER = 1;
const POST = 2;
const userChoise = Number;
const Cond = userChoise >= 0 || userChoise <= 3;
let message = prompt("enter:");

if (Cond === TAKEOUT) {
  message = "So, Ok";
} else if (Cond === COURTER) {
  message = "Super, for your money";
} else if (Cond === POST) {
  message = "Without you";
} else {
  message = "Nothing";
}
console.log(message);
