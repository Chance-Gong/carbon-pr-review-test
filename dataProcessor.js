// Data processor with intentional performance issues

// ISSUE: Inefficient algorithm - O(n²) when O(n) is possible
function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// ISSUE: Memory leak - event listeners not cleaned up
class DataStream {
    constructor() {
        this.listeners = [];
        setInterval(() => {
            this.processData();
        }, 1000);
    }
    
    processData() {
        // Processing without cleanup
        const data = new Array(10000).fill(Math.random());
        this.listeners.forEach(listener => listener(data));
    }
}

// ISSUE: Blocking operation in async context
async function fetchAllUsers() {
    const users = [];
    for (let i = 0; i < 1000; i++) {
        // Blocking synchronous operation
        const user = fetchUserSync(i);
        users.push(user);
    }
    return users;
}

// ISSUE: Unnecessary computation in loop
function calculateTotals(items) {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
        // Recalculating same value repeatedly
        const taxRate = 0.08;
        const discount = calculateDiscount(); // Called every iteration
        total += items[i].price * (1 + taxRate) * (1 - discount);
    }
    return total;
}

// ISSUE: Resource leak - file handle not closed
function readLargeFile(filename) {
    const fs = require('fs');
    const data = fs.readFileSync(filename, 'utf8');
    // File handle never closed
    return data.split('\n');
}

// ISSUE: Inefficient string concatenation
function buildLargeString(items) {
    let result = '';
    for (let i = 0; i < items.length; i++) {
        result = result + items[i] + '\n'; // String concatenation in loop
    }
    return result;
}

module.exports = {
    findDuplicates,
    DataStream,
    fetchAllUsers,
    calculateTotals,
    readLargeFile,
    buildLargeString
};

// Made with Bob
