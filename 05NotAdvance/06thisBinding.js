const neha = {
  firstName: "Neha",
  lastName: "Sree",
  role: "Admin",
  courseCount: 3,
  getInfo: function () {
    console.log(`
          First name is ${this.firstName}
          Last name is ${this.lastName}
          Her role is ${this.role}
          and she is studying ${this.courseCount} courses
          `);
  },
};

const dj = {
  firstName: "Rock",
  lastName: "DJ",
  role: "Sub-Admin",
  courseCount: 4,
};

// neha.getInfo();
//   dj.getInfo();

  var djInfo = neha.getInfo.bind(dj);
  djInfo();

//   or u can run the above code in this way line number 26 and 27
// neha.getInfo.bind(dj)();

// neha.getInfo.call(dj);
