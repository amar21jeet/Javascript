// Merging arrays
const heros = ["thor", "spiderman", "ironman"]
const dc = ["superman", "flash", "batman"]
// heros.push(dc) // heros takes dc as single item(array object)
// console.log(heros)

// const allHeros = heros.concat(dc)
// console.log(allHeros)

// spread operator(...)
// spread all element of object/arrays(iteratable collection)
// combine all element into new array/object
// used -> copy array/object, combine array/object, expand array, passing as argument
// const allHeros = [...heros, ...dc]
// console.log(allHeros)

//nested arrays
const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11]]]

// .flat(depth of array/no of nested array) -> remove nested array combine into single array
// above depth is 2. can pass Infinity.
const other_anotherArr = anotherArr.flat(2)
// console.log(other_anotherArr)

// static method of array
// 1) Array.isArray()
// console.log(Array.isArray("Amarjeet")) // false "Amarjeet" is not array
// console.log(Array.isArray([])) // true , [] empty array

// 2) Array.from(iteratable obj/array,string)
// return array formed from value provided to method
// console.log(Array.from("Amarjeet"))

// 3) Array.of(values)
// return array containing values provided