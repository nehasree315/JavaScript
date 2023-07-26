console.log(this);

var user = {
    FirstName : "Neha",
    courseCount :4,
    getCourseCount : function() {
        console.log("Line  7", this);
    }
}
user.getCourseCount();

function sayHello(){
    console.log("Hello");
    console.log("Line  14", this);
}

sayHello()