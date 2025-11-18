//1. Print All Factors of a Number
function findFactors(n) {
  process.stdout.write(`All factors of ${n}: `);
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      process.stdout.write(i + " ");
    }
  }
  console.log(n);
}

//2. Print All Multiples of a Number up to N
function getMultiples(num, limit) {
  process.stdout.write(`All multiples of ${num} to ${limit}: `);
  const multiples = [];

  for (let i = num; i <= limit; i += num) {
    multiples.push(i);
  }

  console.log(multiples);
}

//3. Find the HCF (Highest Common Factor) or GCD of Two Numbers
function findHCF(num1, num2) {
  let a = Math.min(num1, num2);
  let b = Math.max(num1, num2);

  while (b !== 0) {
    let rem = a % b;
    a = b;
    b = rem;
  }

  console.log(`HCF of ${num1} and ${num2}: ${a}`);
}

//4. Find the LCM (Least Common Multiple) of Two Numbers
function findLCM(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  const gcd = max;
  const lcm = Math.abs(a * b) / gcd;

  console.log(`The LCM of ${a} and ${b}: ${lcm}`);
}

/**********Homework Solution**********/

//1. Count the Total Number of Factors of a Number
function factorsCount(n) {
  let count = 1;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      count++;
    }
  }
  console.log(`Numbers of Factors of ${n}: ${count}`);
}

//2. Sum of All Factors of a Number
function sumOfFactors(n) {
  let sum = n;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }
  console.log(`Sum of Factors of ${n}: ${sum}`);
}

//3. Find the Greatest Factor of a Number (Other Than Itself)
function greatestFactor(n) {
  console.log(`Greatest Factors of ${n}: ${Math.floor(n / 2)}`);
}

//4. Check if a Number is a Perfect Number
function isPerfectNumber(n) {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      sum += i;
    }
  }

  if (sum === n) {
    console.log(`${n} is a Parfect Number`);
  } else {
    console.log(`${n} is not a Perfect Number`);
  }
}

//5. Find the HCF and LCM of Three Numbers
function calculateGCD(a, b) {
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  while (min !== 0) {
    let rem = max % min;
    max = min;
    min = rem;
  }

  return max;
}

function calculateLCM(a, b) {
  return Math.abs(a * b) / calculateGCD(a, b);
}

function findLCMAndHCF(a, b, c) {
  const gcd = calculateGCD(calculateGCD(a, b), c);
  const lcm = calculateLCM(calculateLCM(a, b), c);

  console.log(`The HCF of ${a}, ${b}, and ${c}: ${gcd}`);
  console.log(`The LCM of ${a}, ${b}, and ${c}: ${lcm}`);
}

//Functions Call
findFactors(24);
getMultiples(4, 30);
findHCF(12, 18);
findLCM(12, 18);

factorsCount(24);
sumOfFactors(12);
greatestFactor(36);
isPerfectNumber(28);
findLCMAndHCF(8, 12, 16);
