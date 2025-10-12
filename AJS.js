//let number = 69
//let message = number >= 88 ? "Okay I gotchu!" : "What the fuc you mean?";
//console.log(message);

//const time = 18; // from 0–23 (24-hour format)

//const greeting = time < 12 ? "Good morning!" : time < 18 ? "Good afternoon!" : "Good evening!";
//console.log(greeting);
//const time = 18;

/*
const time = 18; // from 0–23 (24-hour format)

const greeting =
  time < 12
    ? "Good morning!"
    : time < 18
    ? "Good afternoon!"
    : "Good evening!";

console.log(greeting); */

//let greeting;

/*if (time < 12) {
//   greeting = "Good morning!";
} else if (time < 18) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good evening!";
}

console.log(greeting);*/

let purchaseAmount = 250;
let discount = purchaseAmount >= 100 ? 10 : 0;
console.log(`Your total is ${purchaseAmount - purchaseAmount * (discount/100)}`)


//shortcut to else if statement