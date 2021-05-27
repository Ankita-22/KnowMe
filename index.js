var readlineSync = require("readline-sync");
var name = readlineSync.question("What's you name? : ")
console.log("Welcome !! " + name);
let p = prompt("Format should be DD/MM/YYY");
var dob = readlineSync.question("When is your birthday ? :")

console.log("Hey your birthday is : " + dob);


var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
if (regex.test(dob)) {
    var parts = dob.split("/");
    var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
    console.log("You provided correct format !!")
}
else {
    console.log("Potato")
}
if (parts[2] % 4 === 0) {
    console.log("You born in a leap year!!")
}
else {
    console.log("You are born in " + parts[2])
}

// let n;
// if(n%2==0 || n%3==0 || n%5==0){
//   console.log("Not a prime number")
// }
// else{
//   console.log("Prime number")
// }

