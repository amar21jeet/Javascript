// string formatting or string concatinating

const name = "Amarjeet";
const age = 21;
console.log(`Hola, My name is ${name} and I am ${age} years old.`);

// creating string object using String() constructor

const myName = new String("Raja")
console.log(myName)
console.log(typeof myName) // object
/*
 the above method create myName as a String object
 {
 0:"A"
 1:"m"
 2:"a"
 3:"r"
 4:"j"
 5:"e"
 6:"e"
 7:"t"
 }
 length = 8

*/

// console.log(myName.length);
// console.log(myName.charAt(2));
// console.log(myName.indexOf('j'));
// console.log(myName.split("j")); ==> ['Ra', a']
// console.log(myName.slice(2)); ==> "ja"
// console.log(myName.replace("Ra", "Do"))

const = 
console.log(myName.replaceAll("Ra","Amarjeet"))


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*


// now we can access string methods like .length, .toUpperCase(), .indexOf(), .charAt(index)

// using String() as function ==> without 'new' keyword it will return a primitive value of string type
const myName2 = String("Raja")
console.log(myName2);
console.log(typeof myName2) // string

*/