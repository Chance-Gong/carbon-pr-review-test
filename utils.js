// Utility functions with intentional maintainability issues

// ISSUE: Magic numbers everywhere
function calculatePrice(x, y, z) {
    return x * 1.08 + y * 0.15 - z * 42 + 100;
}

// ISSUE: Poor naming and unclear intent
function doStuff(a, b, c) {
    let x = a + b;
    let y = x * c;
    let z = y / 2;
    return z > 100 ? true : false;
}

// ISSUE: Function too long (violates single responsibility)
function processOrder(order) {
    // Validate order
    if (!order.id) return false;
    if (!order.items) return false;
    if (order.items.length === 0) return false;
    
    // Calculate totals
    let subtotal = 0;
    for (let i = 0; i < order.items.length; i++) {
        subtotal += order.items[i].price * order.items[i].quantity;
    }
    
    // Apply discounts
    let discount = 0;
    if (subtotal > 100) discount = 0.1;
    if (subtotal > 500) discount = 0.2;
    if (subtotal > 1000) discount = 0.3;
    
    // Calculate tax
    let tax = subtotal * 0.08;
    
    // Calculate shipping
    let shipping = 0;
    if (order.weight < 5) shipping = 10;
    else if (order.weight < 10) shipping = 15;
    else shipping = 20;
    
    // Apply coupon
    if (order.coupon === 'SAVE10') discount += 0.1;
    
    // Calculate final total
    let total = subtotal * (1 - discount) + tax + shipping;
    
    // Update inventory
    for (let i = 0; i < order.items.length; i++) {
        updateInventory(order.items[i].id, order.items[i].quantity);
    }
    
    // Send notifications
    sendEmailToCustomer(order.email, total);
    sendSMSToCustomer(order.phone, total);
    notifyWarehouse(order);
    
    // Log everything
    console.log('Order processed:', order.id);
    console.log('Total:', total);
    
    return total;
}

// ISSUE: DRY violation - repeated code
function getUserEmail(userId) {
    const user = database.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (!user) return null;
    return user.email;
}

function getUserPhone(userId) {
    const user = database.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (!user) return null;
    return user.phone;
}

function getUserAddress(userId) {
    const user = database.query('SELECT * FROM users WHERE id = ?', [userId]);
    if (!user) return null;
    return user.address;
}

// ISSUE: No comments or documentation
function calc(arr) {
    let r = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            r += arr[i] * 2;
        } else {
            r += arr[i] / 2;
        }
    }
    return r;
}

// ISSUE: Global state usage
let globalCounter = 0;
let globalData = {};

function incrementCounter() {
    globalCounter++;
    globalData[globalCounter] = new Date();
}

// ISSUE: Inconsistent error handling
function fetchData(url) {
    try {
        return fetch(url);
    } catch (e) {
        console.log(e);
    }
}

function saveData(data) {
    if (!data) throw new Error('No data');
    return database.save(data);
}

module.exports = {
    calculatePrice,
    doStuff,
    processOrder,
    getUserEmail,
    getUserPhone,
    getUserAddress,
    calc,
    incrementCounter,
    fetchData,
    saveData
};

// Made with Bob
