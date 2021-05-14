/**------------------------------------------------------------------------
 *                                 Part One
 *------------------------------------------------------------------------**/
console.log(2 == "2"); // true
console.log(2 === 2); // true
console.log(10 % 3); // 1, odd number
console.log(10 % 3) === 1; // 1
console.log(true && false); // false
console.log(false || true); // true
console.log(true || false); // true

/**------------------------------------------------------------------------
 * *                                Part Two
 *   Answer the following question about this code block:
 *
 *   0. Whats should the above code console.log?
 *   1. Why do we not need specify if(isLearning === true) ?
 *   2. Why does if(isLearning) work on its own?
 *
 *------------------------------------------------------------------------**/

let isLearning = true;
if (isLearning) {
  console.log("Keep it up, you are true and learning");
} else {
  console.log("Pretty sure you are learning, no need for false");
}

/**------------------------------------------------------------------------
 * *                                Answers
 *
 *   0. Keep it up, you are true and learning, variable value is truthy code inside {} will executed
 *   1. true value given in variable declaration is truthy value
 *   2. the condition is declared as true as statement became an expression as a result evaluated to truthy value
 *
 *------------------------------------------------------------------------**/

/**------------------------------------------------------------------------
 * *                              Part Three
 *
 *   0. What should the above code console.log? Why?
 *   1. What is the value of firstVariable when it is initialized?
 *   2. Is the value of firstVariable a "truthy" value? Why?
 *   3. Is the value of secondVariable a "truthy" value? Why?
 *   4. Is the value of thirdVariable a "truthy" value? Why?
 *
 *------------------------------------------------------------------------**/
let firstVariable;
let secondVariable = "";
let thirdVariable = 1;
let secretMessage = "Shh!";

if (firstVariable) {
  console.log("first");
} else if (firstVariable || secondVariable) {
  console.log("second");
} else if (firstVariable || thirdVariable) {
  console.log("third");
} else {
  console.log("fourth");
}
/**------------------------------------------------------------------------
 * *                                Answers
 *
 *   0. third, statement looking for truth and first evaluated as a falsy statement s moved on the loop to locate a truthy
 *   1. undefined. unassigned variables are undefined until given a value, so its true
 *   2. undefined is a falsy value
 *   3. strings are falsy values
 *   4. all numbers except 0 are truthy
 *
 *
 *------------------------------------------------------------------------**/
/**------------------------------------------------------------------------
 * *                              Part Four
 *
 *   0. Write an if statement that console.log's "Over 0.5" if Math.random
 *      returns a number greater than 0.5. Otherwise console.log "Under 0.5".
 *   1. What is a falsey value? List all the falsey values in JavaScript.
 *
 *------------------------------------------------------------------------**/
// 0. solution one

if (Math.random > 0.5) {
  console.log("Over 0.5");
} else {
  console.log("Under 0.5");
}

// 0. solution two
Math.random() >= 0.5 ? console.log("over") : console.log("under");

// 1. falsey values are false inside conditional statements: 0, "", null, undefined, NaN
