// control flow statement
// if

// const isLoggedIn = true

// if(isLoggedIn){
//     console.log("User logged in!");
// }
// else{
//     console.log("Not logged in yet!");
// }

// <, >, <=, >=, ==, !=, ===, !==

// multiple conditions

// const balance = 400
// if (balance < 400) {
//     console.log("low balance");
// }
// else if(balance > 400){
//     console.log("high balance");
// }
// else{
//     console.log("correct balance");
// }

const isLoggedIn = false
const debitCard = true
if (isLoggedIn && debitCard) {
    console.log("Welcome, shop now");   
}
else if (isLoggedIn && !debitCard) {
    console.log("Pls have a debit card");
}
else{
    console.log("Oops! pls login"); 
}
