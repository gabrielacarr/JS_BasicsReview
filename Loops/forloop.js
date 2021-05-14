// for... let loop by increments of 3
for (let i = 1; i <= 10; i += 3) {}
/* 
1
4
7
13 // loop ends since it is > 10
*/

// for... let loop print hello 10x + index value
for (let i = 1; i <= 10; i++) {
  console.log("Hello:", i);
}
/*
    Hello: 1
    Hello: 2
    Hello: 3
    Hello: 4
    Hello: 5
    Hello: 6
    Hello: 7
    Hello: 8
    Hello: 9
    Hello: 10 // loop stops <= 10
*/

// for... let loop print hello from [5] + index value
for (let i = 5; i <= 10; i++) {
  console.log("Hello:", i);
}
/*
    Hello: 5
    Hello: 6
    Hello: 7
    Hello: 8
    Hello: 9
    Hello: 10
*/

// Create the perfect square up to 20
//
// from lowest to highest
for (let i = 1; i <= 20; i++) {
  // console.log(i) // each number 1-20
  console.log(`${i}x${i} = ${i * i}`); // interpolate the values to display 2x2 = 4
}
/*
1x1 =1
2x2 = 4
3x3 = 9
4x4 =16...
*/
// count backwards: start at 50, subtract 10 each iteration, stop when 0
for (let num = 50; num >= 0; num -= 10) {
  console.log(num);
}
console.log("Once loop is false, this will run");
/* 
50
40
30
20
10
0
Once loop is false, this will run
*/
