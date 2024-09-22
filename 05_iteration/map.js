const user = new Map()
user.set("name", "amarjeet")
user.set("age", 21)
user.set("userId", 112)
user.set("userGreet", function(){
 console.log(`Hello ${name}`);
})
user.set("myobj", {
 name:"amar",
 email:"amar@google.ai",
})

const str = "Hey, broskii"
user.set(str, "Hello")

const myFunction = function(){
 console.log("Nameste");
}
user.set(myFunction, "this is function")


// console.log(user.values());
// console.log(user.keys());
// console.log(user.entries());

// console.log(user);
// console.log(user.get(myFunction));
// console.log(user.has("myobj"));
// console.log(user.get("myobj"));
// console.log(user.size);



// loop in map

// iterate over key, value of map
for(const [key, value] of user){
 // console.log(`${key} => ${value}`);
}

//iterate over key of map
for(const key of user.keys()){
 // console.log(key);
}

// iterate over values of map
for(const value of user.values()){
 // console.log(value);
}

//  iteration over entries of map
for(const [key, value] of user.entries()){
 // console.log(`${key} => ${value}`);
}