var testArray = [2,1,4,3,6,8,9];

// console.log(testArray.fill("empty"));
// OUTPUT ALL EMPTY IS PRINTED

const myNumber = [12,45,24,55,75,23,42];

const result = myNumber.filter((num) => num > 55 )
// NUMBERS WHICH ARE ABOVE 55 ARE PRINTED AS OUTPUT

// console.log(result);

// Splice and Slice exercise in the same file

var users = ["Hem", "Har", "Shr", "Mah", "Neh", "Swa", "Raj"];

// console.log(users.slice(1,3));
// BEFORE 4TH POSITION EVERYTHING IS PRINTED

users.splice(1,3,"HI", "Bye");

console.log(users)
// IN THIS CASE 1 AND 3 IS REPLACED BY HI AND BYE 