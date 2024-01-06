let str1 = "hello";
let str2 = " world";

console.log(str1 + str2);

const name = "Yuvraj";
const repoCount = 16;

console.log(name + repoCount); // Outdated Syntax

console.log(`My name is ${name} and my repo count is ${repoCount}`) // Modern Syntax
//Allows on the go editing!

const gameName = new String('Vegebul411');

console.log(gameName);
console.log(gameName[0]);
console.log(gameName[4]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(6));
console.log(gameName.indexOf('g'));



const inGame = gameName.substring(0,5);
console.log(inGame);

const stringWithSpaces = "    yuvraj    "
console.log(stringWithSpaces);
console.log(stringWithSpaces.trim()); // removes spaces from start and end

/*

some other string methods:

- slice
- replace
- includes
- follow ECMA or MDN for more documentation and methods

*/