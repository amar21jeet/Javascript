// creating function, return an iterator object that give square of numbers
// 1) iterator is an object
// 2) iterator must contain atleast a method next()
// 3) next() return return an object {value: " ", done: true/false}

function squared(max){
    return {
        [Symbol.iterator](){
            let n = 0;
            return {
                next(){
                    n++;
                    if(n <= max){
                        return{value: n*n, done: false};
                    }
                    return{value: undefined, done: true};
                }
            };
        }
    };   
}

const squaredIterator = squared();
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());
// console.log(squaredIterator.next());

for(const n of squared(10)){
    // console.log(n);
}

const [a, b, c, ...d] = squared(10)
console.log(a);
console.log(b);
console.log(c);
console.log(d);
