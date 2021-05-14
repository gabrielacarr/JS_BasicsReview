// INFINITE LOOP === bad practice
// the second part of the for loop is always true
// condition is never met
// avoid using !== condition
// typos >= <= may cause infinite loops accidentally
/*
DON'T RUN THIS: computer will hate you
for (let i = 1; i !== 20; i += 2) {
    console.log(i)
}
*/
// count to 20 increments of 3
for (let i = 1; i <= 20; i += 2) {
  console.log(i); // loop ends at 19 because 21 > 20
}
// count backwards from 100
for (let i = 100; i >= 0; i--) {}
