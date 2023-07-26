// function init() {
//     var firstName = "Neha";
//     console.log("I am init")
//     function sayFirstName() {
//       console.log(firstName);
//     }
//     return sayFirstName;
//   }
//  var value = init()

//   value ()

function doAddiction(x){
   return function(y){
    return x + y;
   }
}

var add = doAddiction(4)
console.log(add(5)); 

// console.log(doAddiction(8)(9));
// even the above line code refers to addition of numbers in short form


// closure is also called a curring so don't stress out