// console.log('Hello JS')

// Company - CME Group - Round 1
// 1. What is closue, explain with examples & real life use case
function outerFunction(a){
    let b=2
    return function innerFunction(c){
        // return a*b;
        // console.log(a*c)
        return a*c*b
    }
}

const response = outerFunction(4)(3)
console.log(response);

/*
// 2. Write a program to check string is anagram
//anagram
// mary - army 
// check same length using inbuilt length methods
// 

function anagram(str){

}

// 3. Write example how useRef Works for component, element
const childComponentRef = useRef()
const inputRef = useRef(null)

<input ref={inputRef}>

<childComponent ref={childComponentRef}

// 4. What will happen if we have written 3 setState continously
// 3 setState call after one another
// 

let val = 1

*/
