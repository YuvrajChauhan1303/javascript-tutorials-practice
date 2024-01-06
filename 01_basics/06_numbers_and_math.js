const score = 20

const bal = new Number(100); //Object of Number
console.log(bal);
console.log(bal.toFixed(2));

const otherNum = 23.95262
console.log(otherNum.toFixed(2));
console.log(otherNum.toPrecision(5));

const _100s = 100000000
console.log(_100s.toLocaleString('en-IN'))

Maths :

console.log(Math.abs(-4));
console.log(Math.round(5.732));
console.log(Math.ceil(5.732));
console.log(Math.floor(5.732));
console.log(Math.min(1,2,3,4));
console.log(Math.max(1,2,3,4));

console.log(Math.random()) // value between 0 - 1

const min = 1;
const max = 6;

console.log(Math.floor( (Math.random() * (max - min + 1)) + min))
