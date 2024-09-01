// comparing two different dataType value

console.log(null > 0) // fslse
console.log(null == 0) // false
console.log(null >= 0) // true

// comparision operator and equality check('==') opeartor works differently
// (null >= 0) ==> null is converted to number value i.e '0' that's why it return true
//  (null == 0) ==> compares both values are equal that's why it return false