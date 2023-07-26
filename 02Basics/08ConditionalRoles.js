// admin - gets full access
// sub admin , testprep - gets access to create and delete courses
// user - gets access to consume content

var user = "subadmin";

switch (user) {
  case "admin":
    console.log("You get full access");
    break;

  case "subadmin":
    console.log(" gets access to create and delete courses");
    break;

  case "testprep":
    console.log("gets access to create and delete tests");
    break;

  case "user":
    console.log(" gets access to consume content");
    break;

  default:
    console.log("Trail User");
    break;
}

// 5th line lo var user pakkana em raste adhey execute avutadi
