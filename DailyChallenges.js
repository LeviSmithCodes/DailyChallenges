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
  return arr.map((x) => parseFloat(x) / 100);
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
  let arrInt = arr.map((x) => parseInt(x));
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
  return str.split("").reverse().join("");
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
    "Sunday",
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
  let rev = str.split("").reverse().join("");
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
  const pop = (state) =>
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

//console.log(longestCommonEnding("multiplication", "ration"));
// ➞ "ation"

// -------------------------------------------------
// 5/22/20 - been working new job for a while!

// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(arr) {
  // loop through array setting both min and max values
  var min = arr[0];
  var max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  // return array
  return [min, max];
}

//console.log(minMax([1, 2, 3, 4, 5]));
//➞ [1, 5]

// -----------------------------------------
// 6/17/20
// edabit

// Create a function that takes an array and returns the sum of all numbers in the array.

function getSumOfItems(arr) {
  // initialize sum
  var sum = 0;
  // loop through array
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  // return sum
  return sum;
}

//console.log(getSumOfItems([2, 7, 4]));
// ➞ 13

//-----------------------------------------

// function factorial(num) {
//   let x = num;
//   let result = 0;
//   while (x > 0) {
//     console.log(x);
//     result += x * (x - 1);
//     x = x - 1;
//   }
//   return result;
// }

function factorial(num) {
  if (num == 0) {
    return 1;
  }
  let nextNum = num - 1;
  return num * factorial(nextNum);
}

//console.log(factorial(5));

// trying to understand recursion lol
// function recursion(str) {
//   console.log("from the top");
//   let myStr = "";
//   let count = 7;
//   myStr += str;
//   console.log("myStr before: " + myStr);
//   if (count > 0) {
//     count -= 1;
//     recursion(myStr);
//   }
//   console.log("myStr after: " + myStr);
// }

// recursion("hey ");

//--------------------------------------------

// Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
// Examples
// flipEndChars("Cat, dog, and mouse.") ➞ ".at, dog, and mouseC"

// flipEndChars("ada") ➞ "Two's a pair."

// flipEndChars("Ada") ➞ "adA"

// flipEndChars("z") ➞ "Incompatible."

// flipEndChars([1, 2, 3]) ➞ "Incompatible."

function flipEndChars(str) {
  if (typeof str != "string" || str.length <= 1) {
    return "Incompatible.";
  }

  let beginningChar = str[0];
  let endingChar = str[str.length - 1];
  let strArr = str.split("");

  if (beginningChar == endingChar) {
    return "Two's a pair.";
  }

  strArr[0] = endingChar;
  strArr[strArr.length - 1] = beginningChar;

  return strArr.join("");
}

// console.log(flipEndChars("Cat, dog, and mouse."));

// Finished 7/8/20, began earlier

// ------------------------------------------------------

// Create a function that takes an array of strings and returns the words that are exactly four letters.

function isFourLetters(arr) {
  // loop through, adding bits to array
  let returnArr = [];
  //console.log("length " + arr.length);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].length);
    if (arr[i].length == 4) {
      //console.log(arr[i]);
      returnArr.push(arr[i]); // this was arr.push and messing things up
      //break; // huh. lack of this was causing infinite loop.? no, the above was, and this was preventing things from progressing further.
    }
  }
  //console.log(returnArr);
  return returnArr;
}

// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"]));

//=========================================

// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// nextElement([3, 5, 7, 9]) ➞ 11
// nextElement([-5, -6, -7]) ➞ -8
// nextElement([2, 2, 2, 2, 2]) ➞ 2

// Determine constant by finding difference between first two items in array
// apply that to the last number and return

function nextElement(arr) {
  // let diffConst = arr[1] - arr[0];
  // parens for readability
  return arr[arr.length - 1] + (arr[1] - arr[0]);
}

// console.log(nextElement([3, 5, 7, 9]));
// console.log(nextElement([-5, -6, -7]));
// console.log(nextElement([2, 2, 2, 2, 2]));

// =====================================================

// A value is said to be "truthy" if it evaluates to true in a Boolean context. All values are truthy in JavaScript unless they're one of the following:

// false
// null
// undefined
// 0
// NaN
// ""
// In JavaScript, an empty object and an empty array are both considered "truthy," but an empty string is considered false when evaluated as a Boolean (this behavior is what we call "falsey").

// Create a function that takes an argument of any data type and returns 1 if it's truthy and 0 if it's falsy.

function isTruthy(input) {
  if (input) {
    return 1;
  } else {
    return 0;
  }
}

// console.log(isTruthy(NaN));

// isTruthy(0) ➞ 0

// console.log(isTruthy(false));
//➞ 0

// isTruthy("") ➞ 0

// console.log(isTruthy("false"));

// isTruthy("false") ➞ 1

// as easy as it appeared

//=========================================================

// Create a function that takes an array as an argument and return an array of the sum of each of its slices. An array's slices are groups of consecutive values that add up to a maximum of 100. No slice's total sum should exceed 100.

// Examples
// sumOfSlices([10, 29, 13, 14, 15, 16, 17, 31, 20, 10, 29, 13, 14, 15, 16, 17, 31, 20, 100]) ➞ [97, 78, 87, 68, 100]

/* Explanation:
First slice: [10, 29, 13, 14, 15, 16]
10 + 29 + 13 + 14 + 15 + 16 = 97
The next value could not be included in this slice since the total would exceed 100

Second slice: [17, 31, 20, 10]
17 + 31 + 20 + 10 = 78
The next value could not be included in this slice since the total would exceed 100

And so on... */

function sumOfSlices_firstAttempt(arr) {
  // while loop? if statement?
  let sum = 0;
  let returnArr = [];
  // for loop
  for (let i = 0; i < arr.length; i++) {
    if (sum + arr[i] < 100) {
      // add current num to sum
      sum += arr[i];
      // } else if (arr[i] == 100) {
      //   returnArr.push(arr[i]);
    } else if (sum + arr[i] == 100) {
      sum += arr[i];
      returnArr.push(sum);
    } else {
      // push to return array
      returnArr.push(sum);
      // ahhhh, this is better than sum = 0. Values were getting lost.
      if (arr[i] == 100) {
        returnArr.push(arr[i]);
      } else {
        sum = arr[i];
      }
    }
  }

  // return return array
  return returnArr;
}

// Psuedo code take 2
function sumOfSlices_secondAttempt(arr) {
  // initialize sum and returnArray
  let sum = 0;
  let returnArr = [];

  // begin for loop over values
  for (let i = 0; i < arr.length; i++) {
    // if value + sum <= 100, add value to sum
    if (arr[i] + sum <= 100) {
      sum += arr[i];
    }

    // if sum == 100, push to array and reset sum
    // jk, if  arr[i] is the last element, push sum
    if (i == arr.length - 1) {
      returnArr.push(sum);

      // if not the last element and arr[i] + sum > 100, push the sum and set it to arr[i]
    } else {
      returnArr.push(sum);
      sum = arr[i];

      //   // if arr[i+1] exists and sum + arr[i+1] > 100, push to array and reset sum
      // } else if (arr[i+1] && sum + arr[i+1] > 100){
      //   returnArr.push(sum);
      //   sum = 0;

      //   // if arr[i+1] doesn't exist, push and return (?)
      // } else if (!arr[i+1]){
      //   returnArr.push(sum);
      // }
    }
    // return
  }
  return returnArr;
}

// good LORD omg
// I think it works, but there has GOT to be a more elegant way of getting there
// IT PASSED OMG
function sumOfSlices(arr) {
  //initialize
  let sum = 0;
  let returnArr = [];

  // for loop
  for (let i = 0; i < arr.length; i++) {
    // if last element, eval:
    if (i == arr.length - 1) {
      // if sum + arr[i] <= 100, push the sum of the two.
      if (sum + arr[i] <= 100) {
        returnArr.push(sum + arr[i]);
      } else {
        // else push them individually (and check to see if sum is zero)
        if (sum != 0) {
          returnArr.push(sum);
        }
        returnArr.push(arr[i]);
      }
    } else {
      // if not last element
      // eval if sum + arr[i] <= 100
      if (sum + arr[i] <= 100) {
        // if true, sum += arr[i]
        sum += arr[i];
      } else {
        //else push sum, set sum = arr[i]
        returnArr.push(sum);
        sum = arr[i];
      }
    }
  }
  // return array
  return returnArr;
}

// other person's soltuion with my vars and comments
function sumOfSlices_other(arr) {
  let returnArr = [];
  let sum = 0;
  //loop through every variable, last one is "dangling" as sum
  for (let num of arr) {
    if (sum + num <= 100) {
      sum += num;
    } else {
      returnArr.push(sum);
      sum = num;
    }
  }
  // why can't this be a push? hurm oh, returning arr.push returns array length? yep.
  // returnArr.push(sum);
  // return returnArr;

  return returnArr.concat(sum);
}

// console.log(sumOfSlices([58, 3, 38, 99, 10]));
// console.log(sumOfSlices([13]));

// console.log(
//   sumOfSlices([
//     10,
//     29,
//     13,
//     14,
//     15,
//     16,
//     17,
//     31,
//     20,
//     10,
//     29,
//     13,
//     14,
//     15,
//     16,
//     17,
//     31,
//     20,
//     100,
//   ])
// );
//➞ [97, 78, 87, 68, 100]

// ==========================================

// Create a function that take an array of numbers and return the smallest number in the set
function findSmallestNum(arr) {
  // initialize value with first value (arr[0])
  let smallestNum = arr[0];
  //for loop, starting at [1]
  for (let i = 1; i < arr.length; i++) {
    // if arr[i]< value, replace
    if (arr[i] < smallestNum) {
      smallestNum = arr[i];
    }
  }
  // return
  return smallestNum;
}

// ==========================================
// Hard - felt Medium

// Write a functions that returns the Least Common Multtiple (LCM) of two numbers
// good visualiazation: https://www.mathsisfun.com/least-common-multiple.html

function lcm(n1, n2) {
  // possible approach: build arrays of all multiples of each, and then somehow find the first match? hurm.
  // ooo, iterate over one multiple at a time, adding it to the appropriate array
  let n1Arr = [];
  let n2Arr = [];
  // give it somewhere to stop
  for (let i = 1; i < 999999999; i++) {
    let newMultiple1 = n1 * i;
    let newMultiple2 = n2 * i;

    n1Arr.push(newMultiple1);
    n2Arr.push(newMultiple2);

    if (n1Arr.includes(newMultiple2)) {
      return newMultiple2;
    } else if (n2Arr.includes(newMultiple1)) {
      return newMultiple1;
    }
  }
}

//console.log(lcm(8, 5));

// ====================================

// Given an array of numbers, negate all elements contained within.
function negate(arr) {
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.push(arr[i] * -1);
  }
  return returnArr;
}

// console.log(negate([-1, 2, -3, 4]));
// ➞ [1, -2, 3, -4]

// ================================
// Create a function that returns true if two arrays contain identical values, and false otherwise.

// broken code
function checkEquals_broken(arr1, arr2) {
  if (arr1 === arr2) {
    return true;
  } else {
    return false;
  }
}

function checkEquals(arr1, arr2) {
  if (arr1.join(",") == arr2.join(",")) {
    return true;
  } else {
    return false;
  }
}

//console.log(checkEquals([1, 2], [1, 3]));
// ➞ false
// Good so far...

//console.log(checkEquals([1, 2], [1, 2]));
// ➞ false
// Yikes! What happened?

// I believe (based on what I read in the codeburst article about reference vs value types) that the arrays are stored in two different "addresses", and both equality and strict equality for arrays compares the reference address, not the final value.

// part 2
// "It works in most cases, but on some cases it fails. This confuses him, can you spot the error and fix it?"

console.log(checkEquals([1, 2], [1, 3]));
//➞ false

console.log(checkEquals([1, 2], [1, 2]));
//➞ true

console.log(checkEquals([4, 5, 6], [4, 5, 6]));
//➞ true

console.log(checkEquals([4, 7, 6], [4, 5, 6]));
//➞ false

console.log(checkEquals([1, 12], [11, 2]));
//➞ false
// Ah - joining these results in the strings "112" and "112" which are identical. Join using something else?
