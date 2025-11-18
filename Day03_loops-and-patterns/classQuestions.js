// 1. Print Right-Angled Star Triangle
function printRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// 2️. Print Inverted Right-Angled Triangle
function printInvertedRightTriangle(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = n; j >= i; j--) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

// 3. Print Pyramid Pattern
function printPyramid(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";

    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// 4️. Print Inverted Pyramid Pattern
function printInvertedPyramid(n) {
  for (let i = n; i >= 1; i--) {
    let str = "";

    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }

    console.log(str);
  }
}

// 5️. Print Hollow Square Pattern
function printHollowSquare(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i === 1 || i === n || j === 1 || j === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

// 6️. Print Hollow Pyramid Pattern
function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i + j === n + 1 || j - i === n - 1 || i === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

// 7️. Print Alternating Binary Triangle
function printAlternatingBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + (i % 2 === 1 ? j % 2 : (j + 1) % 2);
    }
    console.log(str);
  }
}

/**********Homework Questions**********/

//1. Print Hollow Inverted Pyramid
function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i === 1 || i + j === 2 * n || i === j) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

//2. Print Butterfly Pattern
function printButterfly(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (j === 1 || j === n || i === j || i + j === n + 1) {
        process.stdout.write("* ");
      } else {
        process.stdout.write("  ");
      }
    }
    console.log();
  }
}

//3. Print Diamond Pattern
function printDiamond(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = n - 1; i >= 1; i--) {
    let str = "";
    for (let s = 1; s <= n - i; s++) {
      str += " ";
    }

    for (let j = 1; j <= 2 * i - 1; j++) {
      str += "*";
    }
    console.log(str);
  }
}

//4. Print Hourglass Pattern
function printHourglass(n) {
  for (let i = 1; i <= 2 * n - 1; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i === 1 || j + i === 2 * n || i === j || i === 2 * n - 1) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

//5. Print Hollow Diamond Pattern
function printHollowPyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= 2 * n - 1; j++) {
      if (i + j === n + 1 || j - i === n - 1 || i === n) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}

//6. Print Rhombus Pattern
function printRhombus(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      process.stdout.write(" ");
    }

    for (let j = 1; j <= n; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}

//7. Print Multiplication Table (Single and Upto N)
function printSingleTable(num) {
  console.log(`\n📘 Multiplication Table of ${num}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

function printTablesUptoN(n) {
  for (let i = 1; i <= n; i++) {
    console.log(`\n📗 Table of ${i}`);
    for (let j = 1; j <= 10; j++) {
      console.log(`${i} x ${j} = ${i * j}`);
    }
  }
}




const n = 5;
const number = 5;
const upto = 3;

printRightTriangle(n);
printInvertedRightTriangle(n);
printPyramid(n);
printInvertedPyramid(n);
printHollowSquare(n);
printHollowPyramid(n);
printAlternatingBinaryTriangle(n);

printHollowPyramid(n);
printButterfly(n);
printDiamond(n);
printHourglass(n);
printHollowPyramid(n);
printRhombus(n);
printSingleTable(number);
printTablesUptoN(upto);
