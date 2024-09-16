const user = {
    username: "amarjeet",
    price: 999,

    greetUser: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// this is used in current context within object

//  user.greetUser()
//  user.username = "hitesh"
//  user.greetUser()
// console.log(this); // {}

// this only used inside object as it refers to current context of object

function chai(){
    name = "Amarjeet"
    console.log(this.name);
}
// chai() // output: Amarjeet
// exp: here name is assumed to be global variable by javascript(non strict mode)
// this.name refered to name property of grobal object(window in browser)
// else in strict mode cann't assign value to undeclared variable
// if name is declared with let, const, var , this.name = undefined

function chaiOne(){
    let name = "hitesh"
    console.log(this.name);
}
// chaiOne() // output: undefined

const chaiTwo = function(){
    let name = "amarjeet"
    console.log(this.name) // this refers to global object
}
// chaiTwo() // undefined, because "name" doesn't belong to global object
// hence this can't find name : "amarjeet" property

// **************** Arrow function **************************

const coffee = () => {
    let name = "amarjeet"
    console.log(this.name);  // this refers to {}
    
}
// coffee() // undefined

