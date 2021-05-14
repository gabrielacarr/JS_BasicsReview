let instructor = "Brie";

if (instructor === "Brie") {
  console.log("Yes");
} else {
  console.log("No");
}

let favoriteFood = prompt("Whats your favorite food?");

if (favoriteFood === "anything with cheese") {
  console.log("Awesome! My name is brie like the cheese");
} else {
  console.log("Nice, I like cheesy food because I'm cheesy");
}

/**-----------------------
 * *       == vs ===
 *  two different operations for comparison
 *  both check whether teo values have the same value
 *  == allows coercion of the values
 *  === does not allow coercion
 *
 *------------------------**/

5 +
  "hi" +
  // "5hi"
  // + as concatenation by coercing 5 into a string

  "304";
// 304
// coerce string value back to number

5 == "5"; // true
5 === "5"; // false

let x = 4;
if (x <= 5) {
  console.log("x is less than 5");
} else {
  console.log("x is greater than or equal to 5");
}

/*****
* Ternary Operators
*
* expression ? pathIfTrue : pathIfFalse
* 
* the same as:
        if (expression) {
            pathIfTrue
        } else {
            pathIfFalse
        }
*******/

let guess = prompt("Guess what my favorite color is");

if (guess == "black") {
  console.log("YES!");
} else {
  console.log("Try again");
}

// refactor to ternary operations
let guessMyAge = prompt("Guess my age");

guessMyAge === "28" ? console.log("You got it!") : console.log("Try again");

// ternary stored in variable
let number = 3;
let comparison =
  number > 0 ? "number is greater than 0" : "number is less than 0";
comparison; // "number is greater than 0"

/**-----------------------
 * *       if/else if/ else
 *  have two or more conditions
 *
 *------------------------**/

let numbers = prompt("What's your favorite number?");

if (numbers >= 100) {
  console.log("That's a big number");
} else if (number >= 0) {
  console.log("Thats a cool number");
} else {
  console.log("Negative numbers are bananas");
}

/**-----------------------
 * *       switch Statement
 *  when multiple conditions can be met
 *
 *------------------------**/
let feeling = prompt("How are you feeling today").toLowerCase();
// .toLowerCase() method used to make responses === to the values
switch (feeling) {
  case "happy":
    console.log("I'm happy too!");
    break;
  case "sad":
    console.log("Hope you have a better day");
    break;
  case "hungry":
    console.log("I'm always hungry too!");
    break;
  default:
    console.log("Thanks for sharing");
}

/**-----------------------
 * *       Modulus Operator
 *  returns remainder of a divided value using %
 *  commonly used to determine odd vs even numbers
 * 0 === even
 * 1 === odd
 *------------------------**/
5 % 3 === 2; // true, remainder of 5 by 3 is 2

let num = prompt("Enter a whole number");

if (num % 2 === 0) {
  console.log("That's an even number");
} else if (num % 2 === 1) {
  console.log("That's an odd number");
} else {
  console.log("No Negative numbers please");
}

// changing the message according to value given
// by defining message as undefined and assigning it to a value depending on condition
let nums = prompt("Whats your favorite number?");
let message;

if (nums % 2 === 0) {
  message = "Thats an even number!";
} else if (nums % 2 === 1) {
  message = "Thats an odd number";
} else {
  message = "No Negative numbers here!";
}
console.log("The message is: ", message);
