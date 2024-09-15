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
console.log(obj3);


