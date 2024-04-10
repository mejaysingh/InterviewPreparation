/*
1. Implement Clone deep [Array's and Objects]
2. Write a function to deepFreeze the object
3. Promise series (Javascript)
4. Implement Object.merge
*/

console.log("----------");
console.log("Q.4. Implement Object.merge");
console.log("Solution:");
console.log("----------");

function merge(targetObj, sourceObj) {
    // Iterate over all properties in sourceObj
    for (const key in sourceObj) {
        if (sourceObj.hasOwnProperty(key)) {
            // If the property value is an object, and target has the same key with an object value
            if (typeof sourceObj[key] === 'object' && sourceObj[key] !== null 
            && targetObj.hasOwnProperty(key) && typeof targetObj[key] === 'object' && targetObj[key] !== null) {
                // Recursively merge the properties of this object
                merge(targetObj[key], sourceObj[key]);
            } else {
                // Otherwise, directly set the value
                targetObj[key] = sourceObj[key];
            }
        }
    }
    return targetObj;
}

// Example usage:
const obj1 = { a: 1, b: { c: 9 } };
const obj2 = { b: { d: 3, c: 1 }, e: 4 };

const mergedObj = merge(obj1, obj2);
console.log(mergedObj); // { a: 1, b: { c: 2, d: 3 }, e: 4 }

console.log("----------");