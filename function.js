
/* =================================
   1. STRING MANIPULATION FUNCTIONS
================================= */

// Reverse a string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Count characters in a string
function countCharacters(str) {
  return str.length;
}

// Capitalize the first letter of each word
function capitalizeWords(sentence) {
  return sentence.replace(/\b[a-z]/gi, letter =>
    letter.toUpperCase()
  );
}


/* =========================
   2. ARRAY FUNCTIONS
========================= */

// Find the maximum value
function findMaximum(numbers) {
  if (numbers.length === 0) return null;
  return Math.max(...numbers);
}

// Find the minimum value
function findMinimum(numbers) {
  if (numbers.length === 0) return null;
  return Math.min(...numbers);
}

// Calculate the sum of an array
function sumArray(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

// Filter an array using a condition
function filterArray(array, condition) {
  return array.filter(condition);
}


/* =========================
   3. MATHEMATICAL FUNCTIONS
========================= */

// Calculate factorial
function factorial(n) {
  if (!Number.isInteger(n) || n < 0) {
    return null;
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

// Check whether a number is prime
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

// Generate Fibonacci sequence for a given number of terms
function fibonacciSequence(terms) {
  if (!Number.isInteger(terms) || terms < 0) {
    return [];
  }

  const sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < terms; i++) {
    sequence.push(a);
    [a, b] = [b, a + b];
  }

  return sequence;
}


/* =========================
   4. TEST YOUR FUNCTIONS
========================= */

console.log("Reverse:", reverseString("hello"));
console.log("Character count:", countCharacters("JavaScript"));
console.log("Capitalized:", capitalizeWords("hello world"));

console.log("Maximum:", findMaximum([4, 9, 2, 15, 6]));
console.log("Minimum:", findMinimum([4, 9, 2, 15, 6]));
console.log("Sum:", sumArray([1, 2, 3, 4, 5]));

console.log(
  "Filtered:",
  filterArray([1, 2, 3, 4, 5, 6], number => number % 2 === 0)
);

console.log("Factorial:", factorial(5));
console.log("Is 7 prime?", isPrime(7));
console.log("Is 9 prime?", isPrime(9));
console.log("Fibonacci:", fibonacciSequence(10));
