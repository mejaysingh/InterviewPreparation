/*
1. Implement Clone deep [Array's and Objects]
2. Write a function to deepFreeze the object
3. Promise series (Javascript)
4. Implement Object.merge
*/

console.log("----------");
console.log("Q.2. Write a function to deepFreeze the object");
console.log("Solution:");
console.log("----------");

function deepFreeze(obj) {
    // return if obj is not an object
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Retrieve the property names defined on obj
    var propNames = Object.getOwnPropertyNames(obj);

    // Freeze properties before freezing self
    propNames.forEach(function(name) {
        var prop = obj[name];

        // Freeze prop if it is an object
        if (typeof prop === 'object' && prop !== null && !Object.isFrozen(prop)) {
            deepFreeze(prop);
        }
    });

    // Freeze self (no-op if already frozen)
    return Object.freeze(obj);
}

// Example usage:
const myObj = {
    a: 1,
    b: { c: 2, d: { e: 3 } },
    f: [1, 2, 3]
};

deepFreeze(myObj);

// Trying to modify the object will have no effect
myObj.a = 10; // won't change
myObj.b.c = 20; // won't change
console.log(myObj); // { a: 1, b: { c: 2, d: { e: 3 } }, f: [1, 2, 3] }
console.log(Object.isFrozen(myObj.b.c)); //check if freezed

console.log("----------");