// 1. Find the Maximum of Three Numbers
function findMaxOfThree(a, b, c) {
  let max;
  if (a >= b && a >= c) {
    max = a;
  } else if (b >= a && b >= c) {
    max = b;
  } else {
    max = c;
  }
  console.log("1. Maximum of three numbers:", max);
}

// 2. Check if a Number is Positive, Negative, or Zero
function checkNumberType(num) {
  if (num > 0) {
    console.log("2. Number Type: Positive");
  } else if (num < 0) {
    console.log("2. Number Type: Negative");
  } else {
    console.log("2. Number Type: Zero");
  }
}

// 3. Calculate Electricity Bill
function calculateElectricityBill(units) {
  let total = 0;

  if (units <= 100) {
    total = units * 5;
  } else if (units <= 200) {
    total = 100 * 5 + (units - 100) * 7;
  } else if (units <= 300) {
    total = 100 * 5 + 100 * 7 + (units - 200) * 10;
  } else {
    total = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12;
  }

  console.log(`3. Total Electricity Bill for ${units} units = ₹${total}`);
}

// 4. Check if a Character is a Vowel or Consonant
function checkVowelOrConsonant(ch) {
  ch = ch.toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    console.log(`4. '${ch}' is a Vowel`);
  } else if (ch >= "a" && ch <= "z") {
    console.log(`4. '${ch}' is a Consonant`);
  } else {
    console.log("4. Not a valid alphabet character");
  }
}

// 5. Check if a Year is a Leap Year
function checkLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(`5. ${year} is a Leap Year`);
  } else {
    console.log(`5. ${year} is NOT a Leap Year`);
  }
}

/************Homework Questions************/

// 1. Check if a Character is Uppercase, Lowercase, Digit, or Special Character
function checkCharacterType(ch) {
  const code = ch.charCodeAt(0);

  if (code >= 65 && code <= 90) {
    console.log(`1. '${ch}' is an Uppercase Letter`);
  } else if (code >= 97 && code <= 122) {
    console.log(`1. '${ch}' is a Lowercase Letter`);
  } else if (code >= 48 && code <= 57) {
    console.log(`1. '${ch}' is a Digit`);
  } else {
    console.log(`1. '${ch}' is a Special Character`);
  }
}

// 2. Check Triangle Type Using Sides (a, b, c)
function checkTriangleType(x, y, z) {
  if (x + y <= z || y + z <= x || x + z <= y) {
    console.log("Triangle is not possible - Try Again");
  } else {
    if (x === y && y === z) {
      console.log("2. Triangle Type: Equilateral");
    } else if (x === y || y === z || x === z) {
      console.log("2. Triangle Type: Isosceles");
    } else if (
      x * x + y * y === z * z ||
      x * x + z * z === y * y ||
      z * z + y * y === x * x
    ) {
      console.log("2. Triangle Type: Right-Angled");
    } else {
      console.log("2. Triangle Type: Scalene");
    }
  }
}

// 3. Calculate Income Tax Based on Slabs
function calculateIncomeTax(income) {
  let tax = 0;

  if (income <= 250000) {
    tax = 0;
  } else if (income <= 500000) {
    tax = (income - 250000) * 0.05;
  } else if (income <= 1000000) {
    tax = 250000 * 0.05 + (income - 500000) * 0.2;
  } else {
    tax = 250000 * 0.05 + 500000 * 0.2 + (income - 1000000) * 0.3;
  }

  console.log(
    `3. Tax on Income ₹${income.toLocaleString()} = ₹${tax.toLocaleString()}`
  );
}

findMaxOfThree(10, 20, 5);
checkNumberType(-9);
calculateElectricityBill(230);
checkVowelOrConsonant("e");
checkLeapYear(2024);

checkCharacterType("A");
checkTriangleType(3, 4, 5);
calculateIncomeTax(750000);
