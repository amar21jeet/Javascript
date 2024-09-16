function addNumbers(num1, num2){
    return num1+num2
}
let result = addNumbers(3, 5)
// console.log(result);

 // spread operator to take a list of argument,don't know how many argument is passed

 function addCartPrice(...price){
    return price // array of price 
 }
 function addCartPrice2(price1, price2,...price){
    return price // array of price
 }
 // console.log(addCartPrice2(200, 300, 400, 500, 2000))

 // pass object as argument

 const user = {
    "name": "Amarjeet",
    "price": 199,
 }
 function handleObject(anyObject){
    console.log(`Username is ${anyObject.name} and price is ${anyObject.price}`);
 }

 // handleObject(user)

 // pass array as argument

 const myArr = [200, 400, 500]
 function handleArray(getArray){
    return getArray[1]
 }

 // console.log(handleArray(myArr))

 // function stored in variable, function expression 
 // if this type of function called before declaration -> throw an error
 // addOne(3) // error
 const addOne = function(num){
   return num+1
 }
 // console.log(addOne(3)); // 4

 // console.log(addTwo(3)); // 5 no error throw
 
 function addTwo(num){
   return num+2
 }
