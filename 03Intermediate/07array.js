var countries = ["India", "USA", "UK", "Russia"];

var state = new Array("Delhi", "Telangana", "Tamil Nadu", "Rajasthan");

console.log(state[3]);

// Out Put Rajasthan

console.log(state.length);

// Out Put 4

state[0] = "Punjab";
console.log(state);

// This will replace the first state Delhi's Position as Punjab

var user = ["Neha", "neha.hng", 30, 3, true];

console.log(user);

user.pop();
// POP IS USED TO REMOVE THE LAST ITEMS FROM THE LIST
// user.pop();

user.unshift("NEW VALUE");
console.log(user);

// AFTER THIS CONSOLE NEW VALUE IS ADDED IN THE FIRST PLACE 

user.shift();

console.log(user);

console.log(user.indexOf("3"));
// AS 3 IS NOT MENTIONED ITS OUTPUT WILL BE -1


console.log(Array.from("Neha"));
// EVERYTHING BREAKS 'N' 'E' 'H' 'A'

// User.pop is used to delete the last word in a sentence

// Shift and Unshift Concepts have been thought in this module
