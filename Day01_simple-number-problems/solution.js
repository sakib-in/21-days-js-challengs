// 1. Print numbers from 1 to n
function print1ton(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i + " ";
  }
  console.log("1. Print 1 to n:", output);
}

// 2. Print numbers from n to 1 without changing loop condition of above question
function printnto1(n) {
  process.stdout.write("2. Print n to 1:" + " ");
  for (let i = 1; i <= n; i++) {
    const output = n - i + 1;
    process.stdout.write(output + " ");
  }
  console.log();
}

// 3. Print All Even numbers from 1 to n
function printEvennumbers(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) output += i + " ";
  }
  console.log("3. Even numbers:", output);
}

// 4. Sum of First n natural numbers
function sumOfn(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log("4. Sum of first n numbers:", sum);
}

// 5. Product (Factorial) of n
function factorial(n) {
  let product = 1;
  for (let i = 1; i <= n; i++) {
    product *= i;
  }
  console.log("5. Factorial of n:", product);
}

// 6. Sum of All Even numbers up to n
function sumOfEven(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) sum += i;
  }
  console.log("6. Sum of all even numbers:", sum);
}

// 7. Print Squares of numbers from 1 to n
function printSquares(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i * i + " ";
  }
  console.log("7. Squares:", output);
}

/************Homework Questions************/

// 1. Print all numbers divisible by 3 and 5 up to n
function printDivisibleBy3And5(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) output += i + " ";
  }
  console.log("H1. Divisible by 3 & 5:", output);
}

// 2. Find the sum of all odd numbers up to n
function sumOfOdd(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) sum += i;
  }
  console.log("H2. Sum of odd numbers:", sum);
}

// 3. Print the cubes of numbers from 1 to n
function printCubes(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    output += i * i * i + " ";
  }
  console.log("H3. Cubes:", output);
}

// 4. Print only the numbers that are both even and perfect squares (1 to n)
function printEvenPerfectSquares(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0 && Number.isInteger(Math.sqrt(i))) {
      output += i + " ";
    }
  }
  console.log("H4. Even perfect squares:", output.trim());
}

const n = 5;

//functions Call
print1ton(n);
printnto1(n);
printEvennumbers(10);
sumOfn(n);
factorial(n);
sumOfEven(10);
printSquares(n);

printDivisibleBy3And5(30);
sumOfOdd(10);
printCubes(5);
printEvenPerfectSquares(20);
