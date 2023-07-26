var user = {
    firstName: "Neha",
    lastName: "Sree",
    role: "student",
    loginCount : 32,
    facebookSignIn: true,
};

console.log(user.firstName);
console.log(user["lastName"]);

console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);

console.log(user);


console.table(user);