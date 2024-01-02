let score = "33";
let temp = "33abc";
let temp2 = null; // object
let temp3 = undefined; // undefined
let temp4 = true;

console.log(typeof score);
console.log(typeof temp);
console.log(typeof temp2);
console.log(typeof temp3);
console.log(typeof temp4);

let valueInNumber = Number(score); // type casting
let valueInNumber2 = Number(temp);
let valueInNumber3 = Number(temp2);
let valueInNumber4 = Number(temp3);
let valueInNumber5 = Number(temp4);


let numLoggedIn = 1;
let boolLoggedIn = Boolean(numLoggedIn);

console.table([
  { "Original Value": score, "Type of Value": typeof valueInNumber, "Converted Value": valueInNumber },
  { "Original Value": temp, "Type of Value": typeof valueInNumber2, "Converted Value": valueInNumber2 },
  { "Original Value": temp2, "Type of Value": typeof valueInNumber3, "Converted Value": valueInNumber3 },
  { "Original Value": temp3, "Type of Value": typeof valueInNumber4, "Converted Value": valueInNumber4 },
  { "Original Value": temp4, "Type of Value": typeof valueInNumber5, "Converted Value": valueInNumber5 },
  { "Original Value": numLoggedIn, "Type of Value": typeof boolLoggedIn, "Converted Value": boolLoggedIn },
]);

//Operations in JS:

let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2+3);
console.log(2-3);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3);