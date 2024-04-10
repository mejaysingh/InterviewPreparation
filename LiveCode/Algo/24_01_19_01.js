/*
COMPANY = Tekion
ONLINE TEST
1. Implement Clone deep [Array's and Objects]
2. Write a function to deepFreeze thembject
3. Promise series (Javascript)
4. Implement Object.merge
*/
console.log("----------");
console.log("Q.1. Implement Clone deep [Array's and Objects]");
console.log("Solution:");
console.log("----------");

function cloneDeep(obj) {
    if (typeof obj !== 'object' || obj === null) {
        // Return the value if obj is not an object
        return obj;
    }

    let result;
    if (Array.isArray(obj)) {
        // Handle Array
        result = [];
        obj.forEach((item, index) => {
            result[index] = cloneDeep(item);
        });
    } else {
        // Handle Object
        result = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                result[key] = cloneDeep(obj[key]);
            }
        }
    }

    return result;
}

// Example usage:
const obj = { a: 1, b: { a: 9, b:8, b: { c: 2 }, c: 2 }, d: [1, 2, 3] };
const newObj = cloneDeep(obj);
obj.b.c = undefined  //assign undefined to check
console.log(newObj); // { a: 1, b: { c: 2 }, d: [1, 2, 3] }

console.log("----------");