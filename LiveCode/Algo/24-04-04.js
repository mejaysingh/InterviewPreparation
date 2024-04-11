// COMPANY - Agilisium

// Q.1.
function countWaysToClimbStairs(arg) {
    if (arg <= 0) return 0;
    if (arg === 1) return 1;
    if (arg === 2) return 2;
    if (arg === 3) return 4;

    let dp = new Array(arg + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 4;

    for (let i = 4; i <= arg; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    }

    return dp[arg];
}

// Test cases
console.log(countWaysToClimbStairs(4)); // Output: 7
console.log(countWaysToClimbStairs(5)); // Output: 13
console.log(countWaysToClimbStairs(10)); // Output: 274


// Q.2.
function letterCombinations(arg) {
    if (!arg) return '';
    
    const digitMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    let result = '';
    
    function generateCombinations(currentIndex, currentCombination) {
        if (currentIndex === arg.length) {
            result += currentCombination + ',';
            return;
        }
        
        const currentDigit = arg[currentIndex];
        const letters = digitMap[currentDigit];
        
        for (let letter of letters) {
            generateCombinations(currentIndex + 1, currentCombination + letter);
        }
    }
    
    generateCombinations(0, '');
    return result.slice(0, -1); // Remove the last comma
}

// Test cases
console.log(letterCombinations('23')); // Output: "ad,ae,af,bd,be,bf,cd,ce,cf"
console.log(letterCombinations('2')); // Output: "a,b,c"
