// forEach() method of array
// it take function as an argument
// the function called callback function without any name
// the vehicle hold/ refer to an item of arr
const arr = ["car", "bike", "bicycle", "bus"]
arr.forEach(function(vehicle){
    // console.log(vehicle); 
})

arr.forEach((vehicle)=> {
    // console.log(vehicle);
})

function printme(item){
    console.log(item);
}

// arr.forEach(printme) // only pass defination not to execute

arr.forEach((item, index, fullarray)=> {
    // console.log(item, index, fullarray);
})

const language = [
    {
        lang: "JavaScript",
        ext : "js",
    },
    {
        lang: "Java",
        ext : "java",
    },
    {
        lang: "Python",
        ext : "py",
    }
]

language.forEach((item)=> {
    console.log(item.lang);
    
})