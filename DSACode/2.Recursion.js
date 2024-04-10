//RECURSION

/*
// WITHOUT GLOBAL Variable
//Q.1 Display name five times
//Q.2 Display 1 to n linearly
//Q.3 Display n to 1

// WITH BACKTRACKING
//Q.4 Display 1 to n linearly
//Q.5 Display n to 1
*/

//Q.1 Display name five times
function displayName(i, n){
    if(i > n)
        return

    console.log('Jay Singh');
    displayName(i+1, n);
}
displayName(1, 5)

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
displayBTReverseLinearly(1, 6)