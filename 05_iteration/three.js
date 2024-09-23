// for ..of loop
// for(variable of iterator)
// work for map, array, string, set
// not work with object as object are not iterable, they does not have iterator protocol(Symbol.iterator) property is lacking in object
// they are not designed to iterate like array


// for of loop internally calling iterable[Symbol.iterator]() it return iterator object that has acess to iterable elements(like in array, it's element) then iterator calles object next() method that return two properties 'value'= 'current item' and 'done': true/false
// when array reaches to end 'value'= 'undefined' and 'done' = 'true'

const myArr = [1, 2, 3, 4, 5, 6, 7]
for (const item of myArr) {
    // console.log(item);
}

// can make object iterable by defining [Symbol.iterator].() inside object

const obj = {
    data: [1, 3, 6, 7],
    // create [Symbol.iterator]()
    [Symbol.iterator](){
        let index = 0;
        const data = this.data;

        // return iterator object
        return{
            next(){
                if(index < data.length){
                    return{value: data[index++], done: false};
                }else{
                    return{value: undefined, done: true};
                }
            }
        };
    }
};
for (const value of obj) {
    console.log(value);
    
}

const numbers = [1, 3, 5]
// console.log(typeof numbers[Symbol.iterator]()); 

const numberIterator = numbers[Symbol.iterator]();
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());
console.log(numberIterator.next());

// this is the output of above statement
// { value: 1, done: false }
// { value: 3, done: false }
// { value: 5, done: false }
// { value: undefined, done: true }


// numbers[Symbol.iterator](); 
// this method belongs to iterable object i.e (map, array, string, set)
// object does not have this method implemented in it 
// this method return iterator object that has a next() method in it 
// it return an object that contain currently iterating value in 'value' property of object
// and 'done' property contains whether the object further iterable or not(reaches to the boundary)