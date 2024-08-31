/*
let score = 33;
console.log(typeof score);
//number
*/
/* 
let score = "33";
//typeof (score) = string
*/

/* 
let score = "33abc";
//typeof score = string

let valueInNumber = Number(score);
//typeof valueInNumber = number

console.log(valueInNumber);
// it will give NaN (not a number)

*/

/* 
let score = null;
//typeof score = object

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// convert null value to '0' and type is number
console.log(valueInNumber);
*/

let score = undefined;
//typeof score = undefined

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
// convert undefined to 'NaN'
console.log(valueInNumber);