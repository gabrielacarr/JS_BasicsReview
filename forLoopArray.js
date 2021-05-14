// For Loop + Arrays
/* 
 to loop over an array,  
 start at 0 
 continue to last index (length - 1)


*/
const animals = ["lions", "tigers", "bears"];

for (let i = 0; i < animals.length; i++) {
  console.log(i, animals[i]);
}
// 0 'lions'
// 1 'tigers'
// 2 'bears'
/* 
iterate  over the array 
generate i or any variable in a for loop
starts at 0, the first element index is 0
up to end of array, but not pass it



*/
const scores = [98, 77, 84, 91, 57, 66];

for (let i = 0; i < scores.length; i++) {
  console.log(i, scores[i]);
}
// 0 98
// 1 77
// 2 84
// 3 91
// 4 57
// 5 66

/* 
loop through an array
display name and grade
*/
const greek = [
  {
    name: "Zeus",
    grade: 86,
  },
  {
    name: "Artemis",
    grade: 97,
  },
  {
    name: "Hera",
    grade: 72,
  },
  {
    name: "Apollo",
    grade: 90,
  },
];

for (let j = 0; j < greek.length; j++) {
  let greekName = greek[j]; // access to object

  console.log(`${greekName.name} scored ${greekName.grade}`); // interpolates object name
}
// Zeus scored 86
// Artemis scored 97
// Hera scored 72
// Apollo scored 90
