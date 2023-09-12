const players = ["John", "Bob", "Alice", "Poppy"];
const person = {
  name: "John Doe",
  age: 80,
};

// Create a reference to the players array
const team = players;

// Create a copy of the players array using the spread operator
const team1 = [...players];

// Create a copy of the person object using Object.assign()
const cap1 = Object.assign({}, person);

// Testing the modifications on the copied arrays and object
team.push("Tom");
team1.push("Jerry");
cap1.name = "Jane Smith";

console.log("Original players:", players);
console.log("team:", team);
console.log("team1:", team1);
console.log("Original person:", person);
console.log("cap1:", cap1);

