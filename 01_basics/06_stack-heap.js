// memeory 
// primitive dataType ==> Stack
// Non-primitive dataType ==> Heap

let myName = "Amarjeet Rana";
let userName = myName; // copy of value of *myName* is assigned to *userName*, not the reference and both are stored in stack
// that's why if *userName* value is changed it doesn't affect *myName* value
userName = "Raja";
console.log(myName);
console.log(userName);

// Non - primitive
let userOne = function(){
    name: "amarjeet"
    upi : "xyz@ybl"
}
let userTwo = userOne;
userTwo.upi = "qwer@cnbc";
console.log(userOne.upi);
console.log(userTwo.upi);
// here userOne and userTwo both object refer to same function in heap
// a reference of memory of userOne is passed to userTwo
// hence changes made by userTwo are visible to userOne