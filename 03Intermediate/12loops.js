// for (let i = 0;  i < 10 ; i++){
//    console.log(i);
// }
// 1 to 9 will be output

const myStates = ["Rajasthan", "Delhi", 1947, "Telangana", "AP", "Karnataka"];

for (i = 0; i <= myStates.length; i++) {
  if (typeof myStates[i] !== "string") break;
  console.log(myStates[i]);
}

while (i < myStates.length) {
  // i++;
  console.log(myStates[i]);
  i++;
}

// output will be from rajasthan to karnataka

// let i = 20;
// do {
//   // i++;
//   console.log(i);
//   i++;
// } while (i < 10);

// output 20
