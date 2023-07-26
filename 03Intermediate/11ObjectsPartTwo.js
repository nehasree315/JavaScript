var user = {
    firstName: "Neha",
    lastName: "Sree",
    role: "student",
    loginCount : 32,
    facebookSignIn: true,
    courseList :[],
    buyCourse : function(courseName){
   this.courseList.push(courseName)
    },
    getCourseCount : function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    },
};

var courseList = true
// console.log(user.firstName);
// console.log(user.getCourseCount());
user.buyCourse("ReactJS Course");
console.log(user.getCourseCount());

