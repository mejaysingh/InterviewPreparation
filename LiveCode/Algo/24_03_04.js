// COMPANY - Fujitsu - R1

// Q.1 Write example for object destructuring.
// ANS:
const person = {name: "Shaun", age: 56, city: "Bangalore"};
const {name: firstName} = person;
console.log(firstName)

// Q.2 Write ouput for given code about timeout, logs.
console.log("Hello");
setTimeout(()=> { console.log("FJ") }, 0)
setTimeout(()=> { console.log("USER") }, 0)
console.log("Done");

/* Output:
Hello
Done
FJ
USER
*/