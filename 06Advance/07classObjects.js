// import User from "./06classjs";

const User = require("./06classjs.js");

const neha = new User("neha", "neha@hng.dev");

console.log(neha.getInfo());

neha.enrollCourse("React Bootcamp");
neha.enrollCourse("Angular Bootcamp");

console.log(neha.getCourseList());

let courses = neha.getCourseList();

courses.forEach((c) => console.log(c));