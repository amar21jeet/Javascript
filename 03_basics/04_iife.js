// Immediately Invoked Function Expression (IIFE)
// immediately execute
// global scope pollution
// ; after such function b/c thes function invoked but not terminate
// parameter can be passed
// use ; after declaring IIFE

(function chai(){ // named IIFE
    console.log("DB Connected, successfully");
})();
((name) => {
    console.log(`DB connected two ${name}`)
})("Amarjeet");