// Reverse a String
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Count Characters
function countCharacters(str) {
    return str.length;
}

// Capitalize Words
function capitalizeWords(sentence) {
    return sentence.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}

// Example Usage:
console.log(reverseString("hello"));  // Output: "olleh"
console.log(countCharacters("hello"));  // Output: 5
console.log(capitalizeWords("hello world"));  // Output: "Hello World"
// Find Maximum and Minimum
function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

// Sum of Array
function sumArray(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

// Filter Array
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Example Usage:
const arr = [5, 3, 8, 1, 9, 2];
console.log(findMax(arr));  // Output: 9
console.log(findMin(arr));  // Output: 1
console.log(sumArray(arr));  // Output: 28
console.log(filterArray(arr, x => x % 2 === 0));  // Output: [8, 2]

// Factorial
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

// Prime Number Check
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

// Fibonacci Sequence
function fibonacciSequence(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

// Example Usage:
console.log(factorial(5));  // Output: 120
console.log(isPrime(7));  // Output: true
console.log(fibonacciSequence(7));  // Output: [0, 1, 1, 2, 3, 5, 8]