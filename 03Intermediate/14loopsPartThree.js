const names = ["Youtube", "Amazon", "Instagram","Facebook"];
 
for (const n of names){
    console.log(n);
}
// OUTPUT YOUTUBE TO FACEBOOK

const symbols = {
    yt :"Youtube",
    az : "Amazon",
    ig : "Instagram",
    fb : "Facebook", 
}

for (const n in symbols){
    console.log(`key is : ${n} and the value is ${symbols[n]}`);
}
