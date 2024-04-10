// console.log('Hola JS');

// COMPANY - Fragmadata - R1

// USE GIVEN ONLINE EDITOR
// https://www.programiz.com/javascript/online-compiler/

// Q.1 What will be the output
// setTimeout(() => {
//      console.log('A');
//  }, 0);

//  console.log('B');

//  Promise.resolve('C').then(response => {
//    console.log(response);
//  });

/* Ans. 
B
C
A
*/

// Q.2 What will be the output
var a = 10;

function display() {
    if(a > 30) {
        var a = 20;
    }
    console.log(a);
}

display();

/* Ans. 
undefined
*/

/* Q.3 write currying dynamic program for given statement with any number of arg 
sum(2)() => 2
sum(2)(3)() => 5
sum(1)(9)(0)(5)() => 15
sum(4)(8)(10)(2)(10)() => 34
*/

/* Ans. */
console.log('----------------');
function summation(){
    return function (a){
        return function (b){
            return a+b
        }
    }
}

const sums = summation();
// console.log(sums(2)(3))

//create a function which receives multiple params & iterate

function dynamicSum(...args){
    return function(...nextArgs){
        console.log(args)
        console.log(nextArgs)
    }
}

// const ds = dynamicSum()
// console.log(dynamicSum(1)(2)(4)())

//------------------------------
function sum(args) {
    console.log('-',args);
    // let total = args.reduce((acc, value) => acc + value, 0);
    let total = parseInt(args)
    console.log('=',total);
  
    function curry(nextArgs) {
        console.log('+',nextArgs);
      if (nextArgs.length === 0 || nextArgs === null) {
        return total;
      }
  
    //   total += nextArgs.reduce((acc, value) => acc + value, 0);
      total = total + parseInt(nextArgs)
      return curry;
    }
  
    return curry;
  }
  
  // Examples:
//   console.log(sum(2)());                // Output: 2
//   console.log(sum(2)(3)());              // Output: 5
  console.log(sum(1)(9)(0)(5)());        // Output: 15
//   console.log(sum(4)(8)(10)(2)(10)());   // Output: 34
  