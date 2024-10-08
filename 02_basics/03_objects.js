// object literals

// initialize Sysmbol
const mySym = Symbol("key1")

const JsUser = {
    name: "Amarjeet",
    [mySym]: "mykey1",
    age: 21,
    location: "Delhi",
    email: "amar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

// change value or overwrite value
JsUser.email = "amar@chatgpt.com";
// console.log(JsUser.name);

// freezing object to prevent properties overwrite
// Object.freeze(JsUser);

JsUser.email = "amar@microsoft.com"
// console.log(JsUser);

// function as property in object
JsUser.greeting = function(){
    console.log(`Hello, JS user! ${this.name}`)
}
// console.log(JsUser.greeting) // it function reference
// console.log(JsUser.greeting())

// keys of object as array
const keyArr = Object.keys(JsUser)
// console.log(keyArr)

// values of object as array
const valueArr = Object.values(JsUser)
// console.log(valueArr);

// key value pair of object
const keyValueArr = Object.entries(JsUser)
// console.log(keyValueArr);

// check object has specified property or not return boolean value
// console.log(JsUser.hasOwnProperty("email"));


