## Quiz

1. Create an array of your favorite foods (call it favoriteFoods). Make sure it has at least three elements.
2. Access the second element in favoriteFoods.
3. Change the last element in favoriteFoods to some other food.
4. Remove the first element in favoriteFoods and store it in a variable called formerFavoriteFood.
5. Add a favorite food to the back of the favoriteFoods array.
6. Add a favorite food to the front of the favoriteFoods array.
7. What happens when you try to pop from an empty array?
8. In the examples below, use splice to convert the first array to the second array:

```js
[2, 3, 4, 5] -> [2, 4, 5]
["alpha", "gamma", "delta"] -> ["alpha", "beta", "gamma", "delta"]
[10,-10,-5,-3,2,1] -> [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
```

### Answer Key

```js
// 1. create an array
let favoriteFoods = ["pizza", "tacos", "pasta"];

// 2. access second element
console.log(favoriteFoods[1]);

// 3. change last element
// favoriteFoods[2] = "veggie burgers";
favoriteFoods[favoriteFoods.length - 1] = "veggie burgers";

// 4. remove first element and store in variable
let formerFavoriteFood = favoriteFoods.shift();

// 5. add to end of arrays
favoriteFoods.push("nachos");

// 6. add to start of array
favoriteFoods.unshift("veggie platter");

// 7. pop from an empty array? undefined

// 8. convert first arr to second array
formerFavoriteFood = favoriteFoods.splice(4);

// check
console.log(favoriteFoods);
console.log(formerFavoriteFood);
```
