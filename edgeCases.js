// File with edge case handling and functionality issues

// ISSUE: No null/undefined checks
function processUser(user) {
    return user.name.toUpperCase() + ' - ' + user.email.toLowerCase();
}

// ISSUE: Division by zero not handled
function calculateAverage(numbers) {
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
}

// ISSUE: Array index out of bounds
function getFirstAndLast(arr) {
    return {
        first: arr[0],
        last: arr[arr.length - 1]
    };
}

// ISSUE: Race condition potential
let sharedCounter = 0;

async function incrementAsync() {
    const current = sharedCounter;
    await new Promise(resolve => setTimeout(resolve, 10));
    sharedCounter = current + 1;
}

// ISSUE: No error handling
function parseJSON(jsonString) {
    return JSON.parse(jsonString);
}

// ISSUE: Infinite loop potential
function findValue(arr, target) {
    let i = 0;
    while (arr[i] !== target) {
        i++;
    }
    return i;
}

// ISSUE: Type coercion issues
function compareValues(a, b) {
    if (a == b) {
        return 'equal';
    }
    return 'not equal';
}

// ISSUE: Floating point precision not considered
function calculateTotal(price, quantity) {
    return price * quantity;
}

// ISSUE: No input validation
function setAge(age) {
    this.age = age;
    return this.age;
}

// ISSUE: Backward compatibility not considered
function useNewFeature() {
    const arr = [1, 2, 3];
    return arr.at(-1); // ES2022 feature
}

// ISSUE: Missing edge case for empty string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// ISSUE: Integer overflow not handled
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// ISSUE: No timeout for async operations
async function fetchWithoutTimeout(url) {
    const response = await fetch(url);
    return response.json();
}

// ISSUE: Memory not released
const cache = {};

function cacheData(key, value) {
    cache[key] = value;
}

module.exports = {
    processUser,
    calculateAverage,
    getFirstAndLast,
    incrementAsync,
    parseJSON,
    findValue,
    compareValues,
    calculateTotal,
    setAge,
    useNewFeature,
    reverseString,
    factorial,
    fetchWithoutTimeout,
    cacheData
};

// Made with Bob
