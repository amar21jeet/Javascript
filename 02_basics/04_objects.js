// nested object
const regularUser = {
    email: "some@google.com",
    fullName: {
        userName: {
            firstName: "Amarjeet",
            lastName: "Rana"
        }
    }
}
// console.log(regularUser.fullName.userName.firstName);

// merge two objects
const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};
// const obj3 = {...obj1, ...obj2}
const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// ********************  object de-structuring  *****************************

const course = {
    name : "JS in hinds",
    price : "999",
    courseInstructor : "Hitesh"
}
// extracting keys from object
// syntax:
//      const {key} = object_name   
//        OR
//      cont {key:newkeyName to be used as} = object_name
 const {courseInstructor} = course
// console.log(courseInstructor) // Hitesh

const {courseInstructor : instructor} = course
// console.log(instructor); // Hitesh

// ********* API --> JSON API as object*******************
// {
//     "name": "Amarjeet", 
//     "coursename": "Js in hindi", 
//     "price": "free"
// }

// API as array
  [
    {},
    {},
    {}
  ]