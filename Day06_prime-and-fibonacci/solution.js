//1. Check if a Number is Prime
function isPrime(n) {
  if (n <= 1) {
    console.log(`${n} is not a Prime Number`);
    return;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      console.log(`${n} is not a Prime Number`);
      return;
    }
  }

  console.log(`${n} is a Prime Number`);
}

//2. Check if two Numbers are Co-Prime
function checkIsCoPrime(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  if (max === 1) console.log("Numbers are Co-Prime");
  else console.log("Numbers are not Co-Prime");
}

//3.Print Fibonacci Series up to N Terms
function printFibonacci(n) {
  process.stdout.write("Fibonacci Series: ");
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    process.stdout.write(a + " ");

    let c = a + b;
    a = b;
    b = c;
  }
}

//4. Find the Nth Fibonacci Number
function findNthFibonacciNumber(n) {
  process.stdout.write(`${n}th Fibonacci Number: `);
  let a = 0,
    b = 1;

  for (let i = 1; i <= n; i++) {
    if (i === n) console.log(a);

    let c = a + b;
    a = b;
    b = c;
  }
}

//5. Check if a Number Belongs to the Fibonacci Series
function isBelongstoFibonacci(n) {
  let a = 0,
    b = 1;

  while (a <= n) {
    if (a === n) {
      console.log(`Yes, ${n} belongs to Fibonacci`);
      return;
    }

    let c = a + b;
    a = b;
    b = c;
  }

  console.log(`No, ${n} not belongs to Fibonacci`);
}

/***********Homework Questions***********/

//1. Print All Prime Numbers up to N
function printPrimesUptoN(n) {
  process.stdout.write(`Prime numbers up to ${n}: `);

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) process.stdout.write(i + " ");
  }
  console.log();
}

//2. Sum of All Prime Numbers till N
function sumOfPrimesUptoN(n) {
  process.stdout.write(`Sum of Prime numbers up to ${n}: `);
  let sum = 0;

  for (let i = 2; i <= n; i++) {
    let isPrime = true;

    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) sum += i;
  }
  console.log(sum);
}

//3. Check if Two Numbers are Twin Primes
function isPrime(num) {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

function checkTwinPrimes(a, b) {
  if (isPrime(a) && isPrime(b) && Math.abs(a - b) === 2) {
    console.log(`${a} and ${b} are Twin primes.`);
  } else {
    console.log(`${a} and ${b} are not Twin primes.`);
  }
}

//4. Print All Fibonacci Numbers up to a Given Limit
function printFibonacciInLimit(n) {
  process.stdout.write(`All Fibonacci Numbers up to ${n}: `);
  let a = 0,
    b = 1;

  while (a < n) {
    process.stdout.write(a + " ");
    let c = a + b;
    a = b;
    b = c;
  }
  console.log();
}

//5. Generate Fibonacci Numbers Within a Range
function generateFibonacciInRange(start, end) {
  process.stdout.write(`All Fibonacci Numbers within ${start} to ${end}: `);
  let a = 0,
    b = 1;

  for (let i = 1; i <= end; i++) {
    if (a > start && a < end) {
      process.stdout.write(a + " ");
    }
    let c = a + b;
    a = b;
    b = c;
  }
  console.log();
}

//6. Find the Sum of Even Fibonacci Numbers up to N Terms
function sumOfEvenFibonacciNumber(n) {
  let a = 2,
    b = 3,
    sum = 0;

  for (let i = 2; i <= n; i++) {
    if (a % 2 === 0) {
      sum += a;
    }

    let c = a + b;
    a = b;
    b = c;
  }
  console.log(`Sum of Even Fibonacci Numbers up to ${n}: ${sum}`);
}

//8. Print First N Prime Fibonacci Numbers
function printPrimeFibonacciNumbers(N) {
  let a = 0,
    b = 1;
  const primeFibs = [];

  while (primeFibs.length < N) {
    let fib = a;
    if (isPrime(fib)) {
      primeFibs.push(fib);
    }

    let c = a + b;
    a = b;
    b = c;
  }

  console.log(`First ${N} Prime Fibonacci Numbers: ${primeFibs.join(", ")}`);
}

//function call
isPrime(7);
checkIsCoPrime(7, 8);
printFibonacci(10);
findNthFibonacciNumber(10);
isBelongstoFibonacci(21);

printPrimesUptoN(20);
sumOfPrimesUptoN(10);
checkTwinPrimes(3, 5);
printFibonacciInLimit(100);
generateFibonacciInRange(10, 100);
sumOfEvenFibonacciNumber(10);
printPrimeFibonacciNumbers(5);
