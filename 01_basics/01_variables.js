// semi-colon are not compulsury, 


const accountId = 14456
let accountEmail = "example123@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

// value of constant variable can't change, it will give error if try to change
// accountId = 123456789


accountEmail = " hit@gmail.com"
accountPassword = "1267896"
accountCity = "Jaipur"


// if multiple variable to print use console.table([var1, var2, var3,..])

console.table([accountEmail, accountPassword, accountCity])

// console.log(accountId)

// if value is not assigned to variable it print undefined
// if null is assigned to a variable it print null
let accountState;
console.log(accountState)

/*
NOTE:
don't use var keyword to declare variables b/c --
  1) it cause issue in functional and block scope
  2) change in value of variable in a scope can change actual value of variable of same name in all program.


*/