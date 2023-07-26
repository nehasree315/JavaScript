function isEven(element){
    if (element % 2 === 0) {
        return true
    }
    return false
}

// console.log(isEven(2));
// OUTPUT HERE IS TRUE

// EVERY

var result = [2,3,6,8].every(isEven)
// console.log(result)
// OUTPUT HERE IS FALSE AS 3 IS A ODD NUMBER


// CALL BACK FUNCTIONS
var result = [2,3,6,8].every((e) => {
    return e % 2 === 0 ;

})
  console.log(result) 
  // OUTPUT HERE IS FALSE AS 3 IS A ODD NUMBER

