// for loop
console.log("numbers from 0 to 10: ");

for (let i = 0; i < 10; i++) {
   // console.log(i+1);
}

// break statement

for (let i = 1; i <= 10; i++) {
   if (i == 5) {
      // console.log("5 is a great number"); 
      break
   }
   // console.log(i);
}

//continue statement

for (let i = 1; i < 10; i++) {
   if (i == 5) {
      continue
   }
   console.log(i);   
}