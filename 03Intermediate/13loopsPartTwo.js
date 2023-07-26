const myStates =[ "Rajasthan", "Delhi", "Telangana", 1947, "AP", "Karnataka"];

var i = 0;
for(;;){ 
    if (i>3)break;
    console.log(i);
    i++;
}
myStates.forEach((h) => (console.log(h)));

// ForEach