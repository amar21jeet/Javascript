// falsey values
// false
// empty string ""
// 0, -0, BigInt 0n
// null, undefined, NaN

// truthy values
//"0", not empty string is truthy value
// [], {}, function(){}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
    
}

// Nullish coalescing operator(??) : null undefined
// used when database calling , database send two values either null/undefined or some value
// then it handle, handelling errors and values
let val1 = 4;
// val1 = 5 ?? 10 // output: 5
// val1 = null ?? 10 // output: 10
// val1 = undefined ?? 15 // output: 15
// val1 = null ?? 10 ?? 20 // output: 10(first value assigned)
// console.log(val1)

// Ternary operator
// condition ? true : false

const balance = 100
balance > 100 ? console.log("high balance") : console.log("low balance");

