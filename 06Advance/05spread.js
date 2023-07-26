// var returedValue = Math.max(1,5,3,7,8,2)

// console.log(returedValue)

// var myObj = {}

// Object.assign(myObj,{a:1,b:2,c:3}, {z:9,y:8,x:7})

// console.log(myObj);


// function sumOne (a,b) {
//    return a+b;
// }
// console.log(sumOne(5,4));

// var myA = [9,4];
// console.log(sumOne(...myA));

function sumTwo(a, b, ...args) {
    console.log(args);
    let multi = a * b;
    let sum = 0;
    for (const arg of args) {
      sum += arg;
    }
    return [sum, multi];
  }
  
  console.log(sumTwo(2, 3, 1, 1, 1));