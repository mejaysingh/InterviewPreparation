//RECURSION

/*
V1=BASIC PROBLEMS:
WITHOUT GLOBAL Variable
Q.1 Display name five times
Q.2 Display 1 to n linearly
Q.3 Display n to 1

WITH BACKTRACKING
Q.4 Display 1 to n linearly
Q.5 Display n to 1
*/

//Q.1 Display name five times
function displayName(i, n){
    if(i > n)
        return

    console.log('Jay Singh');
    displayName(i+1, n);
}
// displayName(1, 5)

//Q.2 Display 1 to n linearly
function displayLinearly(i, n){
    if(i>n) return

    console.log(i);
    displayLinearly(i+1, n)
}
// displayLinearly(1, 6)

//Q.3 Display n to 1
function displayReverseLinearly(i, n){
    if(i<1) return

    console.log(i);
    displayReverseLinearly(i-1, n)
}
// displayReverseLinearly(6, 6)

// WITH BACKTRACKING
//Q.4 Display 1 to n linearly
function displayBTLinearly(i, n){
    if(i<1) return;
    displayBTLinearly(i-1, n)
    console.log(i);
}
// displayBTLinearly(6, 6)

//Q.5 Display n to 1
function displayBTReverseLinearly(i, n){
    if(i>n) return
    displayBTReverseLinearly(i+1, n)
    console.log(i);
}
// displayBTReverseLinearly(1, 6)

//Q. summation of 1 to n

function displaySum(i, n){
    if(i>n) return
    sum = sum + i
    console.log(sum);
    return displaySum(i+1, n)
    // return sum
}
let sum = 0
// displaySum(0, 5)
// console.log(displaySum(0, 5));
//5+4+3+2+1 = 15

/*
V3=PARAMETERISED & FUNCTIONAL:
Q.1. Summation of first N numbers 
- Parameterised
- functional with return
Q.2. Factorial of N numbers

*/

//Q.1. Summation of first N numbers 
//- Parameterised
function summationParameterised(n){
    return parseInt((n*(n+1))/2);
}
console.log(summationParameterised(3));

/*
V4=FUNCTIONAL
Q.1. Reverse an array 
Q.2. Check given string is palindrome or not

*/

/*
V5=MULTIPLE RECURSION CALLS
Q.1. Nth Fibonacci Number

*/

/*
V6=SUBSEQUENCE (which follows an order)
Q.1. Print all Subsequence 

*/

/*
V7=ALL PATTERNS
Q.1. Print subsequence whose sum is K (take/not-take)
Q.2. 

*/