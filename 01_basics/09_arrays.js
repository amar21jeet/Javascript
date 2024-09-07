// array is object in js
// resizable and can contain values of different datatype
// shallow copy(share reference of value of source to copy)
// change in copy let change in source
// not deep copy(source and copy are independent)

const myArr = [1, 2, 3, 4, 5]
const myArr2 = new Array(3,5,6)
// console.log(myArr2)
const arr  = myArr
// arr[0] = "Amar"
// console.log(arr) // ['Amar', 2, 3]
// console.log(myArr) // ['Amar', 2, 3]

//-----------------------------  Array Methods  --------------------------------------------

// myArr.push(5) // add value to end of array

// myArr.pop() // no argument, remove item form end

// myArr.unshift(7) // add item to start of array

// myArr.shift() // no argument, remove item form start

// Questionary methods return true/false or index value

// console.log(myArr.includes(4))
// console.log(myArr.indexOf(3)) // return first index of value


// .join(separator) default saparator = ","
// it return new string by concatenating element of array 
// by internally calling 'Array.prototype.toString()'
const newArr = myArr.join() 
// console.log(newArr) // 1,2,3,4,5
// console.log(typeof newArr) // string

// slice(start, end)
// return array containing shallow copy of potion defined as parameter
// doen't modify original array
console.log("A ", myArr) // [1, 2, 3, 4, 5]
const mynewArr1 = myArr.slice(1,3)
console.log(mynewArr1) // [2, 3]
console.log("B ", myArr) // [1, 2, 3, 4,  5]

// .splice(start, deleteCount, item1,...item$n) 
// return array containing deleted portion of original array
// deleteCount = no of element removed from start 
// modify original array
const mynewArr2 = myArr.splice(1,3)
console.log(mynewArr2) // [2, 3, 4]
console.log("C ", myArr) // [1, 5]