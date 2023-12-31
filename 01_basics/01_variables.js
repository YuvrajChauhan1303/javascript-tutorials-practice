const rollNumber = "202211098"; // How to store Strings
let email = "202211098@diu.iiitvadodara.ac.in"
var semester = 3; //storing Integers
myName = "Yuvraj" // Must NEVER be used, even though it is functional

let age; //Initialisation

console.log(rollNumber);
console.log(myName);
console.log(email);
console.log(semester);


console.table([myName, rollNumber, email, semester, age]); //returns undefined for age

age = 20;

console.table([myName, rollNumber, email, semester, age]);

/*

    const keyword does not allow one to change the data stored in a const keyword.

    console.table() logs data in a tabular format.

    var used to mess up with scoping problems in JavaScript, hence, let is always preferred.

    let and const were introduced to tackle scoping problems. hence var is discouraged!

    scoping has 2 types, block scope and function scope

*/