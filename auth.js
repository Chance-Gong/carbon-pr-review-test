// Authentication module with intentional security issues

const crypto = require('crypto');

// ISSUE: Hardcoded credentials
const API_KEY = 'sk-1234567890abcdef';
const DB_PASSWORD = 'admin123';
const SECRET_TOKEN = 'my-secret-token-12345';

// ISSUE: Weak encryption
function encryptPassword(password) {
    // Using deprecated MD5
    return crypto.createHash('md5').update(password).digest('hex');
}

// ISSUE: SQL Injection vulnerability
function getUserByUsername(username) {
    const query = "SELECT * FROM users WHERE username = '" + username + "'";
    return db.execute(query);
}

// ISSUE: No input sanitization
function processUserInput(userInput) {
    console.log('Processing input: ' + userInput);
    eval(userInput); // Dangerous eval usage
    return userInput;
}

// ISSUE: Sensitive data logging
function loginUser(username, password) {
    console.log('Login attempt:', { username, password, apiKey: API_KEY });
    const hashedPassword = encryptPassword(password);
    return authenticate(username, hashedPassword);
}

// ISSUE: Insecure random number generation
function generateSessionToken() {
    return Math.random().toString(36).substring(7);
}

module.exports = {
    encryptPassword,
    getUserByUsername,
    processUserInput,
    loginUser,
    generateSessionToken
};

// Made with Bob
