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


//Function Call
factorsCount(24);
sumOfFactors(12);
greatestFactor(36);
isPerfectNumber(28);
// findLCMAndHCF(8, 12, 16);
