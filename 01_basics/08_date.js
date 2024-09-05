const myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let currentDate = new Date("09-6-2024")
// console.log(currentDate);

let timeStamp = Date.now(); // date in milliseconds
// console.log(timeStamp);
// console.log(currentDate.getTime());
 // .getTime() convert date into milliseconds benefit for comparision

//convert milliseconds into seconds divide by 1000 -> float value

//getDate(), getDay(), getTime(), getFullYear()

// console.log(currentDate.getDate());
// console.log(currentDate.getDay()); // integer value of day
// console.log(currentDate.getMonth()); // month started from 0
// console.log(currentDate.getFullYear());
// console.log(currentDate.getHours());

currentDate.toLocaleString('dafault', {
    weekday: "long"
})
console.log(currentDate);