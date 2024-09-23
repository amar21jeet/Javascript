// forEach does not return anything/ undefined
// const myArr = [1, 2, 3]
// const value = myArr.forEach((item)=> {
//     //console.log(item);
//     return item;
// })

// console.log(value); // undefined

// filter()  it return value acc to condition

const myArr = [1, 2, 4, 5, 7, 9]
const value = myArr.filter((num)=> {
    return num > 4
})
// console.log(value);

const books = [
    {
        name: "Book One", genre: "Fiction", publish: 1991,
    },
    {
        name: "Book Two", genre: "Non iction", publish: 1999,
    },
    {
        name: "Book Three", genre: "Science", publish: 2002,
    },
    {
        name: "Book Four", genre: "History", publish: 1987,
    },
    {
        name: "Book Five", genre: "Fiction", publish: 2002,
    }
]

let userBook = books.filter( (bk) => bk.genre === "Fiction")
userBook = books.filter( (bk) => {return bk.publish >= 2000})
console.log(userBook);
