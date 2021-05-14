let people = ["Greg", "Mary", "Devon", "James"];
//
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
//

people.shift();
//

people.pop();
//

people.unshift("Matt");
//

people.push("Elie");
//

for (let i = 0; i < people.length; i++) {
  if (i > 1) {
    break;
  }
  console.log(people[i]);
}
//

people.slice(2);
//

people.indexOf("Mary");
//

people.indexOf("Foo");
//

people = ["Greg", "Mary", "Devon", "James"];

people.splice(2, 1, "Elizabeth", "Artie");
//

let withBob = people.concat("Bob");
