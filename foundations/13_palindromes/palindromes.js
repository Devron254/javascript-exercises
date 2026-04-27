function palindromes (str) {
    let cleaned = str.toLowerCase();
    cleaned = cleaned.replace(/[^a-z0-9]/g, '');

    let reversed = cleaned.split('').reverse().join('');

    return cleaned === reversed;
}

// Do not edit below this line
module.exports = palindromes;
