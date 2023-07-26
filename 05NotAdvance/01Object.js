var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCourseCount = function () {
    console.log(`Course is : ${this.courseCount}`);
  };
};

User.prototype.getFirstName = function () {
  console.log(`Your first Name is : ${this.firstName}`);
};

var neha = new User("Neha", 2);

// console.log(neha);
neha.getCourseCount();
neha.getFirstName();

var sam = new User("Sam", 1);
sam.getCourseCount();
sam.getFirstName();
// console.log(sam)
