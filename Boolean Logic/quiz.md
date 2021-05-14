## Part One

Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

```js
2 == "2"; // true
2 === 2; // true
10 % 3; // 1, odd number
10 % 3 === 1; // 1
true && false; // false
false || true; // true
true || false; // true
```

## Part Two

Answer the following questions about this code block:

```js
let isLearning = true;
if (isLearning) {
  console.log("Keep it up!");
} else {
  console.log("Pretty sure you are learning....");
}
```

0. What should the above code console.log?  
   **Keep it up, you are true and learning, variable value is truthy code inside {} will executed }**
1. Why do we not need to specify `if(isLearning === true)`?  
   **true value given in variable declaration is truthy value**
2. Why does `if(isLearning)` work on its own?  
   **the condition is declared as true as statement became an expression as a result evaluated to truthy value**

## Part Three

```js
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
```

0. What should the above code console.log?  
   **third, statement looking for truth and first evaluated as a falsy statement s moved on the loop to locate a truthy.**
1. What is the value of `firstVariable` when it is initialized?  
   **`undefined` unassigned variables are undefined until given a value, so its true**
2. Is the value of firstVariable a "truthy" value?  
   **`undefined` is a falsy value**
3. Is the value of secondVariable a "truthy" value?  
   **strings are falsy values**
4. Is the value of thirdVariable a "truthy" value?  
   **all numbers except 0 are truthy**

## Part Four

0. Write an if statement that console.log's "Over 0.5" if `Math.random` returns a number greater than 0.5. Otherwise console.log "Under 0.5".

```js
// 0. solution one
if (Math.random() > 0.5) {
  console.log("Over 0.5");
} else {
  console.log("Under 0.5");
}
// 1. solution two
Math.random() >= 0.5 ? console.log("over") : console.log("under");
```

0. What is a falsey value? List all the falsey values in JavaScript.
   **falsey values are false inside conditional statements: `0, "", null, undefined, NaN`**
