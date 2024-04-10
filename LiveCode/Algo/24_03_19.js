// COMPANY - Capgemini - R1

// Q.1 Write a function to count numbers & print in given format
//  a = [4,3,6,3,4,3]

// ANS:
// output: {3: 3, 4: 2, 6: 1}

// Pseudocode:
// Iterate through array & check whether it available in object
// if available increase count else add it

//SOLUTION:
function countNumber(a){
    const num = {}
    // 3. Best Approach
    a.forEach((val) => {
        num[val] = (num[val] || 0) + 1
    })

    // 2. Better Approach
    // a.forEach((val) => {
        // let n = val;
        // if(!num[n]){
        //     num[n] = 1
        // }else{
        //     num[n] = num[n] + 1;
        // }
    // })

    // 1. Good Approach
    // for(let i =0; i< a.length; i++){
    //     let n = a[i];
    //     if(!num[n]){
    //         num[n] = 1
    //     }else{
    //         num[n] = num[n] + 1;
    //     }
    // }

    return num;
}

const a = [4,3,6,3,4,3];
console.log(countNumber(a));
