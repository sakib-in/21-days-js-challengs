//1. Reverse a String (Manual Method Only)
function reverseString(str) {
  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }

  console.log(`Reversed String: "${reversedString}"`);
}

//2. Check if a String is a Palindrome
function checkPalindromeString(str) {
  let i = 0,
    j = str.length - 1;

  while (i < j) {
    if (str[i] !== str[j]) {
      console.log(`"${str}" is not a Palindrome String`);
      return;
    }
    i++;
    j--;
  }

  console.log(`"${str}" is a Palindrome String`);
}

//3. Count Frequency of Each Character
function frequencyCounter(str) {
  let frequency = {};

  for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  console.log(frequency);
}

//4. Find the Most Frequent Character in a String
function mostFrequentCharacter(str) {
  let frequency = {};
  let maxCount = 0;
  let maxChar = "";

  for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i];
    frequency[char] = (frequency[char] || 0) + 1;

    if (frequency[char] > maxCount) {
      maxCount = frequency[char];
      maxChar = char;
    }
  }

  console.log(`Most Frequent Character: ${maxChar}`);
}

//5. Check if Two Strings Are Anagrams (Without Sorting)
function checkAnagramStrings(str1, str2) {
  if (str1.length !== str2.length) {
    console.log(`"${str1}" and "${str2}" are not Anagrams`);
  }

  let frequency = {};

  for (let i = 0; i <= str1.length - 1; i++) {
    let char = str1[i];
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for (let i = 0; i <= str2.length - 1; i++) {
    let char = str2[i];
    if (!frequency[char]) {
      console.log(`"${str1}" and "${str2}" are not Anagrams`);
      return;
    }

    frequency[char]--;
  }

  console.log(`"${str1}" and "${str2}" are Anagrams`);
}

/************Homework Solution***********/

//1. Remove All Duplicate Characters (Keep First Occurrence)
function removeDuplicateCharacters(str) {
  let result = "";

  for (let i = 0; i <= str.length - 1; i++) {
    let char = str[i];

    if (!result.includes(char)) {
      result += char;
    }
  }

  console.log(`String after removing duplicates: "${result}"`);
}

//2. Check if a String Contains Only Alphabets (No Regex)
function isAlphabetsString(str) {
  const temp = str.toLowerCase();

  for (let i = 0; i < temp.length; i++) {
    let char = temp[i];
    let code = char.charCodeAt(0);

    if (code < 97 || code > 122) {
      console.log("False - Contains non-alphabet characters");
      return;
    }
  }

  console.log("True - String Contains Only Alphabets");
}

//3. Reverse Only the Words in a Sentence
function reverseSentence(str) {
  let word = "";
  let wordArr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === " ") {
      wordArr.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }

  wordArr.push(word);

  let result = "";

  for (let i = wordArr.length - 1; i >= 0; i--) {
    result += wordArr[i] + " ";
  }

  console.log(`Sentence After Reverse: "${result.trim()}"`);
}

//4. Find the Longest Word in a Sentence
function findLongestWord(str) {
  let word = "";
  let wordArr = [];

  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === " ") {
      wordArr.push(word);
      word = "";
    } else {
      word += str[i];
    }
  }

  wordArr.push(word);

  let longestWord = "";

  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr[i].length > longestWord.length) {
      longestWord = wordArr[i];
    }
  }

  console.log(`Longest Word is "${longestWord}"`);
}

//5. Count the Number of Words (Manually Without split)
function countNumberOfWords(str) {
  let word = "";
  let wordArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      if (word !== "") {
        wordArr.push(word);
        word = "";
      }
    } else {
      word += str[i];
    }
  }

  if (word !== "") wordArr.push(word);

  console.log(`Sentence has ${wordArr.length} words`);
}

//6. Find All Substrings of a String (No Built-ins)
function findAllSubstrings(str) {
  let result = [];

  for (let i = 0; i < str.length; i++) {
    let temp = "";

    for (let j = i; j < str.length; j++) {
      temp += str[j];
      result.push(temp);
    }
  }

  console.log(result.join(", "));
}

//7. Compress a String (Basic Run-Length Encoding)
function compressString(str) {
  let result = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }

  console.log(`Compressed String: ${result}`);
}

//Functions Call
reverseString("javascript");
checkPalindromeString("racecar");
frequencyCounter("banana");
mostFrequentCharacter("success");
checkAnagramStrings("listen", "silent");

removeDuplicateCharacters("programming");
isAlphabetsString("HelloWorld123");
reverseSentence("I love coding");
findLongestWord("coding is beautiful");
countNumberOfWords("  hi   there  world ");
findAllSubstrings("abc");
compressString("aaabbccccd");
