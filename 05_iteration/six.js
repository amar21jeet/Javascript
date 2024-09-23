const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const eachNums = myNumbers.map( (num) => {return num * 10})
// console.log(eachNums);

// map() return new array with transformed value based on code inside function
// the code inside callback function apply to each value of array
// modifies values and store in new array

// filter() return new array with values that pass test code inside function


// chaining
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num+1) // here num is updated value (num*10)
                .filter((num) => num > 50) // filter elements of array on bases of test code inside it
// console.log(newNums);


// reduce() method of array
// add all values of array , focus on initial value

const arr = [1, 2, 3]
const total = arr.reduce((acc, currval) => (acc + currval), 0)

// console.log(total);

shoppingCart = [
    {
        course: "JavaScript course",
        price: 2999,
    },
    {
        course: "TypeScript course",
        price: 2999,
    },
    {
        course: "DevOps course",
        price: 4999,
    },
    {
        course: "Android Development course",
        price: 6999,
    },
    {
        course: "Data Science course",
        price: 9999,
    }
]
 const totalAmount = shoppingCart.reduce((acc, item) => (acc + item.price), 0)

 console.log(totalAmount);
 