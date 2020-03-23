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

function percentFilledWes(arr) {
  let numo = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    let count = (arr[i].match(/o/g) || []).length;
    numo += count;
  }
  return Math.round((numo / ((arr[0].length - 2) * (arr.length - 2))) * 100);
}

//console.log(percentFilledWes(["####", "#  #", "#o #", "####"]));
//➞ "25%"

// -------------------------------

// 2.28.20

function indexOfCaps(str) {
  let x = [];
  for (let i = 0; i <= str.length - 1; i++) {
    if (str[i] === str[i].toUpperCase() && /[A-Z]/.test(str[i])) {
      x.push(i);
    }
  }
  return x;
}

//console.log(indexOfCaps("EdAbIT$"));

// --------------------------------------------
// given an array of numbers, return an array with grouped sub-arrays
// [1,3,5,5] -> [[1],[3],[5,5]]

function groupElems(arr) {
  let returnArr = [[arr[0]]];
  for (let i = 1; i < arr.length; i++) {
    let iAdded = false;
    for (let j = 0; j < returnArr.length; j++) {
      if (arr[i] == returnArr[j][0]) {
        returnArr[j].push(arr[i]);
        iAdded = true;
        break;
      }
    }
    if (!iAdded) {
      returnArr.push([arr[i]]);
    }
  }
  return returnArr;
}

function groupElems2(arr) {
  // create dictionary and return array
  let finalArr = [];
  let dict = {};
  let indexCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    // if not in dictionary, add key and value and increment index counter
    if (arr[i] == 7) {
      console.log(dict[arr[i]]);
    }
    // dict[arr[i]] returns 0, so !dict[arr[i]] returns true instead of false.
    if (dict[arr[i]] == undefined) {
      dict[arr[i]] = indexCounter;
      finalArr.push([arr[i]]);
      indexCounter++;
    } else {
      // if in dictionary, add to index in array
      finalArr[dict[arr[i]]].push(arr[i]);
    }
  }
  return finalArr;
  // return array
}

//console.log(groupElems2([7, 6, 7, 1, 3, 5, 5, 4, 5, 6, 6, 6]));

// -------------------------------------
// 02.29.20

//Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.
function afterNDays(arr, num) {
  // create array of days in order
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];
  let resultArr = [];
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    // find index within days
    let indexOfI = days.indexOf(arr[i]);
    // find day after number of days (modulo 7)
    let resultIndex = (indexOfI + num) % 7;
    // add to new array
    resultArr.push(days[resultIndex]);
  }
  // return new array
  return resultArr;
}

//console.log(afterNDays(["Thursday", "Monday"], 4));
//➞ ["Monday", "Friday"]

// --------------------------------
// 03.01.20

// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

function squarePatch(n) {
  let oneRow = [];
  for (let i = 0; i < n; i++) {
    oneRow.push(n);
  }
  let allRows = [];
  for (let i = 0; i < n; i++) {
    allRows.push(oneRow);
  }
  return allRows;
}

//console.log(squarePatch(5));
// this coinsole logs real weird :S

//squarePatch(3) ➞ [
//   [3, 3, 3],
//   [3, 3, 3],
//   [3, 3, 3]
// ]

// -----------------------------------------
// 3/3/2020
// Cracking the Coding Interview:
// impliment an algorithm to determine if a string has all unique characters. what if you cannot use additional data structures?

function unique(str) {
  let unique = true;
  for (let i = 0; i < str.length; i++) {
    // ... this isn't working
    if (str.match(/ + str[i] /g || []).length >= 2) {
      unique = false;
      break;
    }
  }
  return unique;
}

// 3/4/2020

function unique2(str) {
  let unique = true;
  // make a for loop, twice. INCREASE IN BIG O
  for (let i = 0; i < str.length; i++) {
    // count appearances of letter
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    // if count greater than one return false
    if (count > 1) {
      unique = false;
      return unique;
    }
  }
  return unique;
}

// [] how can I use a data structure to reduce time complexity?

console.log(unique2("asdfghjkl"));

// -------------------------------------------------------
// A number is left-heavy if the digits on the left side are larger than the digits on the right. It is right-heavy if the digits on the right side are larger than the digits on the left. Else, it is balanced.

// Create a function that takes in an integer and classifies it into one of the three mutually exclusive categories: left, right or balanced. For inputs with an odd number of integers, ignore the fulcrum (the middle number).

function seesaw(num) {
  // check if null / undefined or single number, return balanced if true
  if (num == undefined || num == null || num.toString().length == 1) {
    return "balanced";
  }
  // convert to string
  num = num.toString();
  let left;
  let right;
  // divide number based on length, accounting for odd or even
  if (num.length % 2 == 0) {
    left = num.slice(0, num.length / 2);
    right = num.slice(num.length / 2);
    console.log([left, right]);
  } else {
    left = num.slice(0, Math.floor(num.length / 2));
    right = num.slice(Math.floor(num.length / 2) + 1);
    console.log([left, right]);
  }
  left = parseInt(left);
  right = parseInt(right);
  // compare numbers (converting to int), returning the appropriate string
  if (left == right) {
    return "balanced";
  } else if (left > right) {
    return "left";
  } else {
    return "right";
  }
}

//onsole.log(seesaw("586585"));
// ---------------------------------------------
//03.06.20
//Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.

// could turn into a string and split on false? seems too hackey.

function dailyStreak(arr) {
  // initialize count at 0
  let count = 0;
  let totalCount = 0;
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      count++;
    } else {
      count = 0;
    }
    if (count > totalCount) {
      totalCount = count;
    }
  }
  // return count
  return totalCount;
}

//console.log(dailyStreak([true, true, false, true, true, true]));
// ➞ 3
// ----------------------------------------
// 3/8/20
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.
function cumulativeSum(arr) {
  // create new array
  let returnArr = [];
  // create sum
  let sum = 0;
  // loop through array and add sum to new array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    returnArr.push(sum);
  }
  return returnArr;
}

//console.log(cumulativeSum([3, 3, -2, 408, 3, 3]));
//➞ [3, 6, 4, 412, 415, 418]

// ----------------------------------------------
//You are given 2 out of 3 angles in a triangle, in degrees.

//Write a function that classifies the missing angle as either "acute", "right", or "obtuse" based on its degrees.

function missingAngle(num1, num2) {
  // determine third angle
  let missingAngle = 180 - num1 - num2;
  // use an if-else chain to return correct string
  if (missingAngle == 90) {
    return "right";
  } else if (missingAngle > 90) {
    return "obtuse";
  } else {
    return "acute";
  }
}

//console.log(missingAngle(27, 59));
//➞ "obtuse"

// --------------------------------------------------------
// 3.9.20
// Create a function that takes an array and determines whether it's strictly increasing, strictly decreasing, or neither.

function check(arr) {
  // loop through checking for increase, then decrease
  let increasing = true;
  let decreasing = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      decreasing = false;
    } else if (arr[i] > arr[i + 1]) {
      increasing = false;
    } else {
      decreasing = false;
      increasing = false;
    }
  }
  if (increasing == true) {
    return "increasing";
  } else if (decreasing == true) {
    return "decreasing";
  } else {
    return "neither";
  }
}

//console.log(check([3, 2, 1]));
// ➞ "increasing"

// ----------------------------------------------
// 3/14/20
//Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

function countPosSumNeg(arr) {
  if (arr.length == 0) {
    return [];
  }
  let count = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    } else {
      sum += arr[i];
    }
  }

  return [count, sum];
}

//console.log(
//countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
//);
//➞ [10, -65]

// ----------------------------------------
// switch values of x and y without creating a third variable

function switchxandy() {
  let x = 1;
  let y = 2;
  x = x + y;
  y = x - y;
  x = x - y;
  console.log(x, y);
}

//switchxandy();

// -------------------------------------------
// 3.15.20

//Write a function that takes a string and determines whether it's a palindrome or not. The function should return a boolean (true or false value).

//Should be case insensitive.
//Special characters (punctuation or spaces) should be ignored.

function isPalindrome(str) {
  // convert to lowercase
  str = str.toLowerCase();
  // ignore special characters
  str = str.match(/[a-zA-Z]/g).join("");
  // reverse string, compare to original
  console.log(str);
  let rev = str
    .split("")
    .reverse()
    .join("");
  // return value
  return str == rev;
}
//console.log(isPalindrome("kayak"));
//console.log(
//   isPalindrome(
//     "A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"
//   )
// );
//➞ true

// --------------------------------------------
//3.16.20
// Create a function to multiply all of the values in an array by the amount of values in the given array.

function multiplyByLength(arr) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(arr[i] * arr.length);
  }
  return returnArr;
}

//console.log(multiplyByLength([2, 3, 1, 0]));

//➞ [8, 12, 4, 0]

// -----------------------------------------
// 3.18.20 & 3.19.20

//Given a string of letters in the English alphabet, return the letter that's missing from the string. The missing letter will make the string be in alphabetical order (from A to Z).

//If there are no missing letters in the string, return "No Missing Letter".

function missingLetter(str) {
  // make array of alphabet and str
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphabetArr = alphabet.split("");
  let strArr = str.split("");
  // locate index of first letter
  let firstIndex = alphabetArr.indexOf(strArr[0]);
  // check resulting letters for existance?
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] != alphabetArr[firstIndex + i]) {
      return alphabetArr[firstIndex + i];
    }
  }
  // return missing letter
  return "No Missing Letter";
}

//console.log(missingLetter("abdefg"));
//➞ "c"

//-------------------------------------------------
// 3/20/20
//In each input array, every number repeats at least once, except for two.

//Write a function that returns the two unique numbers.
function returnUnique(arr) {
  // create a dictionary
  let dict = {};
  // for loop. if exists, increase value. if doesn't, initialize at one.
  for (let i = 0; i < arr.length; i++) {
    if (dict.hasOwnProperty(arr[i])) {
      dict[arr[i]] += 1;
    } else {
      dict[arr[i]] = 1;
    }
  }
  // create an array from the two numbers that are unique
  const objArr = Object.entries(dict);
  let returnArr = [];
  for (let i = 0; i < objArr.length; i++) {
    if (objArr[i][1] == 1) {
      returnArr.push(parseFloat(objArr[i][0]));
    }
  }
  return returnArr;
}

// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));
// ➞ [5, 6]

// ------------------------------------

// 3/21/20

//In the world of birding there are four-letter codes for the common names of birds. These codes are created by some simple rules:

// If the bird's name has only one word, the code takes the first four letters of that word.
// If the name is made up of two words, the code takes the first two letters of each word.
// If the name is made up of three words, the code is created by taking the first letter from the first two words and the first two letters from the third word.
// If the name is four words long, the code uses the first letter from all the words.

function birdCode(arr) {
  // initialize return array
  let returnArr = [];
  // for each entry, push code
  for (let i = 0; i < arr.length; i++) {
    // split string on spaces and hyphens
    let strArr = arr[i].split(/-| /);
    // initialize return string
    let returnStr = "";
    // initialize second for loop
    for (let j = 0; j < strArr.length; j++) {
      // case switch for array length to build string
      switch (strArr.length) {
        case 1:
          returnStr += strArr[j].substring(0, 4).toUpperCase();
          break;
        case 2:
          returnStr += strArr[j].substring(0, 2).toUpperCase();
          break;
        case 3:
          if (j == 0) {
            returnStr += strArr[0].substring(0, 1).toUpperCase();
          }
          if (j == 1) {
            returnStr += strArr[1].substring(0, 1).toUpperCase();
          }
          if (j == 2) {
            returnStr += strArr[2].substring(0, 2).toUpperCase();
          }
          break;
        case 4:
          returnStr += strArr[j].substring(0, 1).toUpperCase();
          break;
      }
    }
    // concat letters in uppercase as appropriate
    returnArr.push(returnStr);
  }
  // return arr
  return returnArr;
}

// console.log(
//   birdCode([
//     "Black-Capped Chickadee",
//     "Common Tern",
//     "Robin",
//     "Heavy-Laden European Swallow"
//   ])
// );
//➞ ["BCCH", "COTE"]
// ALTERNATIVE: could have just returned a concat string, like return b[0][0] + b[0][1] + b[0][2] + b[0][3];

// -------------------------------------------------------
// 3.22.20

// Waterballoon soak
// The input array will always be the exact length it takes for there to be exactly one border zero.
// Length of input array is always odd.

function pop(arr) {
  // find index of focus

  let centerIndex = arr.indexOf(Math.max(...arr));
  console.log("center index: " + centerIndex);
  // have equation relating index to desired value
  for (let i = 0; i < arr.length; i++) {
    if (i < centerIndex) {
      // arr[i] = CenterValue - Centervalue - 1
      // YIKES this was a braintwister.
      arr[i] = arr[centerIndex] - (centerIndex - i);
    } else if (i > centerIndex) {
      arr[i] = centerIndex - (i - centerIndex);
    }
  }
  // loop over the elements and change/add them
  return arr;
}

// ALTERNATE
function pop(state) {
  const pop = state =>
    state.map((num, i) => {
      if (num !== 0) return num;
      if (i > state.length / 2) return state.length - i - 1;
      return i;
    });
}

// console.log(pop([0, 0, 0, 0, 4, 0, 0, 0, 0]));
// center index: 4
// index of first number to be changed: 1
//  difference: 3
// n = n - (n-1)...?
// 1 = 4 - 3
// value of change in number
// 1
//
// ➞ [0, 1, 2, 3, 4, 3, 2, 1, 0]

// console.log(pop([0, 0, 0, 3, 0, 0, 0]));
// ➞ [0, 1, 2, 3, 2, 1, 0]

// console.log(pop([0, 0, 2, 0, 0]));
// ➞ [0, 1, 2, 1, 0]

// console.log(pop([0]));
// ➞ [0]

// NEEDED TO READ NOTES
// The input array will always be the exact length it takes for there to be exactly one border zero.
// Length of input array is always odd.

// ------------------------------------
// 3/23/20
// Write a function that returns the longest common ending between two strings.

function longestCommonEnding(str1, str2) {
  let returnStrArr = [];
  // loop through both from end and add as matched (unshift?)
  for (let i = 0; i > -str1.length; i--) {
    //console.log(str1[str1.length - 1 + i] + " " + str2[str2.length - 1 + i]);
    if (str1[str1.length - 1 + i] == str2[str2.length - 1 + i]) {
      returnStrArr.unshift(str1[str1.length - 1 + i]);
    } else {
      break;
    }
  }
  return returnStrArr.join("");
}

console.log(longestCommonEnding("multiplication", "ration"));
// ➞ "ation"
