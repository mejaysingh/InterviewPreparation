/*
1. Implement Clone deep [Array's and Objects]
2. Write a function to deepFreeze the object
3. Promise series (Javascript)
4. Implement Object.merge
*/

console.log("----------");
console.log("Q.3. Promise series (Javascript)");
console.log("Solution:");
console.log("----------");

function promiseSeries(promises) {
    const results = [];

    // Helper function to handle the series execution
    function executePromiseInSeries(index) {
        // Base case: if we've handled all promises, return the results
        if (index >= promises.length) {
            return Promise.resolve(results);
        }

        // Execute the current promise and then proceed to the next
        return promises[index]()
            .then(result => {
                results.push(result);
                return executePromiseInSeries(index + 1);
            });
    }

    // Start the series execution with the first promise
    return executePromiseInSeries(0);
}

// Example usage:
const promise1 = () => Promise.resolve("Promise 1 resolved");
const promise2 = () => Promise.resolve("Promise 2 resolved");
const promise3 = () => Promise.resolve("Promise 3 resolved");

const apicall1 = () => new Promise((resolve, reject) => { 
    setTimeout(() => resolve('data1'));
});

const apicall2 = () => new Promise((resolve, reject) => { 
    setTimeout(() => resolve('data2'));
});

promiseSeries([promise1, promise2, promise3])
    .then(result => console.log(result)) // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
    .catch(error => console.error(error));

promiseSeries([apicall1, apicall2])
    .then(result => console.log(result)) // ["data1", "data2"]
    .catch(error => console.error(error));


console.log("----------");