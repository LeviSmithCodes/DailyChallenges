// 2.24.2020

// Create a function that returns the number of hashes and pluses in a string.
// hashPlusCount("##+++#") ➞ [3, 3]

function hashPlusCount(str) {
  let hashCount = 0;
  let plusCount = 0;
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "+") {
      plusCount += 1;
    }
    if (arr[i] == "#") {
      hashCount += 1;
    }
  }
  return [hashCount, plusCount];
}

//console.log(hashPlusCount("##+++#"));

// 2/25/20
// Create a function to convert an array of percentages to their decimal equivalents.

//convertToDecimal(["33%", "98.1%", "56.44%", "100%"]) ➞ [0.33, 0.981, 0.5644, 1]

// first attempt

function convertToDecimal(arr) {
  let resultsArr = [];
  for (let i = 0; i < arr.length; i++) {
    let decimal = parseFloat(arr[i].substring(0, arr[i].length - 1)) / 100;
    resultsArr.push(decimal);
  }
  return resultsArr;
}

// optimized

function convertToDecimal2(arr) {
  return arr.map(x => parseFloat(x) / 100);
}

// console.log(convertToDecimal2(["33%", "98.1%", "56.44%", "100%"]));

// ------------------------------------------------
// 2.26.20
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits. Your task is to create a function that takes a string and returns true if the PIN is valid and false if it's not.

function validatePIN(pin) {
  return (
    (/\d{4}/.test(pin) || /\d{6}/.test(pin)) &&
    (pin.length == 4 || pin.length == 6)
  );
}

function validatePIN_optimized(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}

//console.log(validatePIN_optimized("1234"));

// ----------------------------------------

// Create a function that takes a number as input and returns true if the sum of its digits has the same parity as the entire number. Otherwise, return false.
// Parity is whether a number is even or odd. If the sum of the digits is even and the number itself is even, return true. The same goes if the number is odd and so is the sum of its digits.

function parityAnalysis(num) {
  let arr = num.toString().split("");
  let arrInt = arr.map(x => parseInt(x));
  let sum = 0;
  for (let i = 0; i < arrInt.length; i++) {
    sum += arrInt[i];
  }

  return sum % 2 == num % 2;
}

//console.log(parityAnalysis(243));

// -------------------------------------

// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.
// In order to work properly, the function should replace all 'a's with 4, 'e's with 3, 'i's with 1, 'o's with 0, and 's's with 5.

// hackerSpeak("javascript is cool") ➞ "j4v45cr1pt 15 c00l"

// 02.27.20

function hackerSpeak(str) {
  let returnArr = [];
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "a":
        returnArr.push("4");
        break;
      case "e":
        returnArr.push("3");
        break;
      case "i":
        returnArr.push("1");
        break;
      case "o":
        returnArr.push("0");
        break;
      case "s":
        returnArr.push("5");
        break;
      default:
        returnArr.push(arr[i]);
        break;
    }
  }
  return returnArr.join("");
}

// console.log(hackerSpeak("javascript is cool"));

// ---------------------------------------

// see if the average of an array is a whole number
// isInteger() exists

// ----------------------------------------
// Reverse a string

function reverse(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// without .reverse()
function reverse2(str) {
  let returnArr = [];
  let arr = str.split("");
  for (let i = arr.length - 1; i >= 0; i--) {
    returnArr.push(arr[i]);
  }
  return returnArr.join("");
}

//console.log(reverse2("Hello!"));

// ------------------------------------

// Create a function that calculates what percentage of the box is filled in. Give your answer as a string percentage rounded to the nearest integer.

//percentFilled([
//   "#######",
//   "#o oo #",
//   "#######"
// ]) ➞ "60%"

function percentFilled(arr) {
  // find box dimensions
  // count length of first item vs length of array? Subtract two from each and multiply together?
  let width = arr[0].length;
  let height = arr.length;
  let availableArea = (width - 2) * (height - 2);

  // find number of spaces filled
  let elemCount = 0;
  for (let i = 0; i < arr.length; i++) {
    let elemArr = arr[i].split("");
    for (let j = 0; j < elemArr.length; j++) {
      if (elemArr[j] == "o") {
        elemCount++;
      }
    }
  }
  // calculate and return percent filled
  return Math.round((elemCount / availableArea) * 100).toString() + "%";
}

console.log(percentFilled(["####", "#  #", "#o #", "####"]));
//➞ "25%"
