//RECURSION

/*
TODO:
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

//---------------------------------

/*
TODO:
V3=PARAMETERISED & FUNCTIONAL:
Q.3.1. Summation of first N numbers 
- Parameterised
- functional with return
Q.3.2. Factorial of N numbers

*/

//Q.3.1. Summation of first N numbers 
//A- Parameterised
function summationParameterised(n, sum){
    if (n === 0) {
        console.log(sum)
        return
    }
    
    summationParameterised(n-1, sum+n)
}
// summationParameterised(3, 0) //6
// 3-f(2,3), 2-f(1,5), 1-f(0,6), 0-log

//B- functional with return
function summationReturn(n) {
    if (n ===0) return 0
    
    return n + summationReturn(n-1)
}
// console.log(summationReturn(3));
// 3= 3 + f(2), 2= 2 + f(1), 1= 1 + f(0), 0= return 0

// Q.3.2. Factorial of N numbers
function factorial(n) {
    //base case
    if (n === 1) return 1;
    
    return n * factorial(n - 1);
}
// console.log(factorial(4));
// 4! = 4*3*2*1 || 4*3!
// 4= 4*f(3), 3= 3*f(2), 2= 2*f(1), 1= return 1

//---------------------------------

/*
TODO:
V4=FUNCTIONAL
Q.4.1. Reverse an array 
Q.4.2. Check given string is palindrome or not

*/

// Q.4.1. Reverse an array 
function reverse(arr, start, end) {
  /**
   * Iterate till n/2
   * take 0 as start
   * take arr.length-1 as end
   * iterate till start < end
   * store start as temp
   * store end in start
   * store temp in end
   * increase start & decrease end count
   */

  // NOTE: without recursive
  // let start = 0;
  // let end = arr.length - 1;
  // while (start <= end) {
  //     console.log(start,'=',end);
  //     let temp = arr[start]
  //     arr[start] = arr[end]
  //     arr[end] = temp
  //     start++
  //     end--
  // }
  // return arr

  // NOTE: with recursive
    if (start >= end) {
        return arr
    }
    // console.log(start, "=", end,'=',arr);
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp
    return reverse(arr, start+1, end-1);
}
// console.log(reverse([5, 4, 3, 2, 1, 7, 9], 0, 6));
// log(n)
//[ 9, 7, 1, 2, 3, 4, 5 ]

// Q.4.2. Check given string is palindrome or not
function palindrome(str, left, right) {
    /**
     * Iterate from left < right
     * return false, If both left & right value are not equal
     * if equal increase left & decrease right
     */
// NOTE: without recursion
    // while (left < right) {
        // console.log(left, "=", right, "|", str[left],'=',str[right]);
    //     if (str[left] !== str[right]) {
    //         return false;
    //     } else {
    //         left++;
    //         right--;
    //     }
    // }
    // return true;

// NOTE: with recursion
    if (left > right) return true;
    // console.log(left, "=", right, "|", str[left],'=',str[right]);
    
    if (str[left] !== str[right]) return false;
    
    return palindrome(str, left + 1, right - 1);    
}
// console.log(palindrome("moom", 0, 3) === true ? "Palindrome" : "Not Palindrome");
//123 - Palindrome
// console.log(palindrome("momy", 0, 3) === true ? "Palindrome" : "Not Palindrome");
//1234 - Not Palindrome
//log(n)

//---------------------------------

/*
TODO:
V5=MULTIPLE RECURSION CALLS
Q.5.1. Nth Fibonacci Number
*/

// Q.5.1. Nth Fibonacci Number
function fibonacci(n) {
  /**
   * iterate till n
   * sum=prev+before
   * before=prev
   * prev=sum
   * OR
   * create array with 0,1
   * add sum in current i with i-1, i-2
   */
  // NOTE: without recursion
//   //   let res = [0, 1];
//   let sum = 0;
//   let prev = 0;
//   let before = 1;
//   for (let i = 0; i < n + 1; i++) {
//     console.log(sum);
//     // res.push(sum);
//     sum = prev + before;
//     // res[i] = res[i - 1] + res[i - 2];
//     // res.push(sum);
//     // console.log(sum, "=", prev, "+", before);
//     before = prev;
//     prev = sum;
//   }
//   return res;

    // NOTE: with multiple recursion
    if (n <= 1) return n;
    let secondLast = fibonacci(n-1)
    let last = fibonacci(n-2)
    return last + secondLast
    console.log(result);
    // return prev + fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(5));
//1=0+1
//2=1+1
//3=2+1
//5=3+2
//8=5+3
// sum=prev+before
// before=prev
// prev=sum
// 5 = 0 1 1 2 3 5
// 5= 0 + f(4,0)
// 4= 0 + f(3,0)
// 3= 0 + f(2,0)
// 2= 0 + f(1,0)
// 1= 1
// 0= 0 

//---------------------------------

/*
TODO:
V6=SUBSEQUENCE (which follows an order)
Q.6.1. Print all Subsequence 
*/

//---------------------------------

/*
TODO:
V7=ALL PATTERNS
Q.7.1. Print subsequence whose sum is K (take/not-take)
Q.7.2. 
*/
//---------------------------------