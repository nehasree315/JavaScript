var name = "Neha" ;
console.log("LineNumber 3" , name);

function sayName(){
    var name = "Mr.H";
    console.log("LineNumber 7", name);

    function sayNameTwo(){
        var name = "Mr.HA"
        console.log("LineNumber 12", name);
    }
    sayNameTwo()
}

sayName()