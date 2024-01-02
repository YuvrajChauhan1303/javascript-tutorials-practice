/*
    2 categories:
        primitive and non-primitive data types!

    
    primitive (call by value type): 
        - String
        - Number
        - Boolean
        - null
        - undefined
        - Symbol
        - BigInt

    non-primitive(reference type): 
        - Array
        - objects
        - functions
*/

// JS Dynamic vs Static typed language?
// JS is a Dynamic typed Language!

// Typescript is Statistically typed language

const score = 100
const temperature = 100.3
const outTemp = null // empty
let inTemp ; // undefined
const isPerson = true

//Symbols in JS
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//BigInt
const bigNumber = 17237571759827585275957892572857872n

//Array
const heros = ["iron man", "batman" , "spiderman"]

//Object

let myObj = {
    name: "Yuvraj",
    age: 20,
}

//function
const myFunc = function(){
    console.log("Hello World!");
}