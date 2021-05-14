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
