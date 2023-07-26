// this is switch case

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all the access`;
      break;
    case "subadmin":
      return `${name} is sub-admin with access to create and delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create and delete tests`;
      break;
    case "user":
      return `${name} is a user to consume content`;
      break;

    default:
        return `${name} is a Trail User`;
      break;
  }
}
console.log(getUserRole("Neha" , "testprep"));

var getRole = getUserRole("Sammy","user")
console.log(getRole);


// 23rd line lo console we gave names and role in 25th line we are 
// trying to show the difference we can even write it in the funtion form

// manam edina name wrong ga raste default lo di print avutadi

