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

//console.log(unique2("asdfghjkl"));

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
  //console.log("center index: " + centerIndex);
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

//console.log(checkEquals([1, 2], [1, 3]));
//➞ false

//console.log(checkEquals([1, 2], [1, 2]));
//➞ true

//console.log(checkEquals([4, 5, 6], [4, 5, 6]));
//➞ true

//console.log(checkEquals([4, 7, 6], [4, 5, 6]));
//➞ false

//console.log(checkEquals([1, 12], [11, 2]));
//➞ false
// Ah - joining these results in the strings "112" and "112" which are identical. Join using something else?

// ===============================

//You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

//If you can't find Nemo, return "I can't find Nemo :(".

function findNemo(sentence) {
  let sentenceArr = sentence.split(" ");
  let nemoPosition = -1;
  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i] == "Nemo") {
      nemoPosition = i;
      break;
    }
  }
  if (nemoPosition == -1) {
    return "I can't find Nemo :(";
  } else {
    // string interpolation requires backticks, not single or double quotes
    return `I found Nemo at ${nemoPosition + 1}!`;
  }
}

//console.log(findNemo("I am finding Nemo !"));
//➞ "I found Nemo at 4!"

// ================================================

// Create a function that counts how many characters make up a rectangular shape. You will be given a array of strings.

function countCharacters(arr) {
  // initialize count at zero
  // since it's rectangular, multiply the length of the string at position zero by the number of elements in the array
  let count = 0;
  if (arr[0]) {
    count = arr[0].length * arr.length;
  }
  return count;
}

// console.log(countCharacters(["###", "###", "###"]));
//➞ 9

// solutions from others:
function countCharacters_other(arr) {
  return arr.join("").length;
}

// ===============================================

// ah. in JS ^ the bitwise XOR operator
function cubeSquareRoot(num) {
  return Math.sqrt(Math.pow(num, 3));
}

//console.log(cubeSquareRoot(81));

// ==============================================
// Create a function that takes a string as its argument and returns the string in reversed order.

function reverse(str) {
  // probably a more elegant way of doing this, but split into array, loop through array backwards (or push to front? What's that called?), rejoin into string
  let arr = str.split("");
  let returnArr = [];
  for (let i = 0; i < arr.length; i++) {
    returnArr.unshift(arr[i]);
  }
  return returnArr.join("");
}

//console.log(reverse("Hello World!"));

// other's solution - one liner!
function reverse_elegant(str) {
  return str.split("").reverse().join("");
}

// ======================================

// Create a function that returns true if the given circular areas are intersecting, otherwise return false. The circles are given as two arrays containing the values in the following order:

// Radius of the circle.
// Center position on the x-axis.
// Center position on the y-axis.
// Examples
// isCircleCollision([10, 0, 0], [10, 10, 10]) ➞ true

// isCircleCollision([1, 0, 0], [1, 10, 10]) ➞ false

// unsure as to how to start, peeked at resources
// from resources: This algorithm works by taking the centre points of the two circles and ensuring the distance between the centre points are less than the two radii added together.

function isCircleCollision(c1, c2) {
  // ... generate array of every point in the circle? ... um. nope.

  // generate center points of two circles
  // "The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument."
  let center1xy = c1.slice(1, 3);
  let center2xy = c2.slice(1, 3);
  //return center1xy[0] + "  " + center2xy[0];

  // console.log("center 1xy: " + center1xy);
  // console.log("center 2xy: " + center2xy);

  // find distance between center points
  // d = sqrt((x2 - x1)^2 + (y2 -y1)^2)
  // or d = sqrt((x1 - x2)^2 + (y1 -y2)^2) (?) - squaring removes negatives
  // https://www.mathsisfun.com/algebra/distance-2-points.html
  // console.log("center2xy[0] (X2): " + center2xy[0]);
  // console.log("center1xy[0] (X1): " + center1xy[0]);
  // console.log("center2xy[1] (Y2): " + center2xy[1]);
  // console.log("center1xy[1] (Y1): " + center1xy[1]);
  let distance = Math.sqrt(
    Math.pow(center1xy[0] - center2xy[0], 2) +
      Math.pow(center1xy[1] - center2xy[1], 2)
  );

  // troubleshooting - something seems wrong with order of operations??
  // BAHAHAHAHAH "^" is the bitwise XOR operator. hilarious. Use Math.pow or x*x. lol.
  // console.log("(x1 - x2)^2: " + ((center1xy[0] - center2xy[0]) ^ 2));
  // console.log("(x1 - x2)^2: " + Math.pow(center1xy[0] - center2xy[0], 2));

  // return distance;
  // return Math.sqrt(10 ^ (2 + 10) ^ 2);

  // add two radii together
  let radiiSum = parseInt(c1.slice(0, 1)) + parseInt(c2.slice(0, 1));
  // return radiiSum;

  // check if distance between center points is less than two radii added together
  // return true or false
  return distance < radiiSum;
}

//console.log(isCircleCollision([10, 0, 0], [10, 10, 10]));
//➞ true

//console.log(isCircleCollision([1, 0, 0], [1, 10, 10]));
//➞ false

// OTHER SOLUTION FROM EDABIT

function isCircleCollision2(c1, c2) {
  return c1[0] + c2[0] > Math.hypot(c2[2] - c1[2], c2[1] - c1[1]);
}

// console.log(isCircleCollision2([10, 0, 0], [10, 10, 10]));

// ======================================

// Create a function that determines whether a shopping order is eligible for free shipping. An order is eligible for free shipping if the total cost of items purchased exceeds $50.00.

// take in the ... dictionary? Wow, it's been a while.

// begin sum at zero, loop over each element, adding cost to sum

// check if sum > 50 and return bool

function freeShipping(order) {
  let sum = 0;
  for (var item in order) {
    sum += order[item];
  }
  return sum > 50;
}

// sole.log(freeShipping({ Shampoo: 5.99, "Rubber Ducks": 15.99 })); // ➞ false

//console.log(freeShipping({ "Flatscreen TV": 399.99 })); //  ➞ true

// ===================================================

// Create a function that returns true if the first array can be nested inside the second.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.
// Examples

function canNest(arr1, arr2) {
  return (
    Math.min(...arr1) > Math.min(...arr2) &&
    Math.max(...arr1) < Math.max(...arr2)
  );
}
// console.log(canNest([1, 2, 3, 4], [0, 6])); // ➞ true

// canNest([3, 1], [4, 0]) ➞ true

// canNest([9, 9, 8], [8, 9]) ➞ false

// canNest([1, 2, 3, 4], [2, 3]) ➞ false

// ==================================================

// In this challenge, you have to establish if a given integer is an Astonishing number. An Astonishing number is an integer that, when partitioned into two parts a (left) and b (right), is equal to the sum of the consecutive numbers from a up to b (if a is lower than b), or from b up to a (if a is greater than b).

// Given a positive integer num, implement a function that returns:

// The string "AB-Astonishing" if num is an Astonishing number and the partition a is lower than b.
// The string "BA-Astonishing" if num is an Astonishing number and the partition a is greater than b.
// false if num is not an Astonishing number.

function isAstonishing(num) {
  // set variable astonishing to false. while loop?
  // determine first partition, for loop?
  // sum numbers in partition range
  // check that sum against num
  // if equal, determine AB or BA
  // if equal, flip astonishing bool to true
  // continue if astonishing bool is false, return result if true
  // return false by default
}

// console.log(isAstonishing(15));
//➞ "AB-Astonishing"
// There is only one possible partition: a = 1 and b = 5
// Sum from a up to b: 1 + 2 + 3 + 4 + 5 = 15
// It's Astonishing and partition a is lower than partition b

// console.log(isAstonishing(2002077));
//➞ "BA-Astonishing"
// There are six possible partitions
// Partition 1: a = 2 and b = 002077 = 2077 (leading zeros are not considered)
// Sum from a up to b: 2 + 3 + 4 + ... + 2077 = 2158002
// Partition 2: a = 20 and b = 02077 = 2077
// Sum from a up to b: 20 + 21 + 22 + ... + 2077 = 2157813
// Partition 3: a = 200 and b = 2077
// Sum from a up to b: 200 + 201 + 202 + ... + 2077 = 2138103
// Partition 4: a = 2002 and b = 077 = 77
// Sum from b up to a: 77 + 78 + 79 + ... + 2002 = 2002077
// It's Astonishing and partition a is greater than partition b

/////////////////////////////////////////////////////////////

// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// Examples
// hasHiddenFee(["$2", "$4", "$1", "$8"], "$15") ➞ false

// hasHiddenFee(["$1", "$2", "$3"], "$6") ➞ false

// hasHiddenFee(["$1"], "$4") ➞ true
// Notes
// Remember that each price is given as a string.
// All $ signs will be at the beginning of the number.

function hasHiddenFee(prices, t) {
  // initialize prices sum
  let sum = 0;
  // loop through prices, extracting and adding to sum
  for (let i = 0; i < prices.length; i++) {
    sum += parseInt(prices[i].substring(1));
  }
  // return comparison to total
  return sum != parseInt(t.substring(1));
}

// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6")); // ➞ false

// ==================================================

// Write a function that takes an integer minutes and converts it to seconds.

function convert(minutes) {
  return minutes * 60;
}

//console.log(convert(2));

// ==================================================

// Create a function that will return an integer number corresponding to the amount of digits in the given integer num.

// num_of_digits(1000) ➞ 4

// my solution using strings and regex
function num_of_digits(digits) {
  var regex = /[0-9]/g;
  digits = String(digits);
  return digits.match(regex).length;
}

// console.log(num_of_digits(12345));

// const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
// const regex = /[A-Z]/g;
// const found = paragraph.match(regex);
// console.log(found);

// regex examples
// var regex = /hello/;
// var str = "hello world";
// var result = regex.exec(str);
// console.log(result);

// comment blocks: ctrl + k + c to add
// ctrl + k + u to remove

//var regex = /hello/;
//console.log(regex.test("helxlo world"));

// ==================================================

// Create a function which returns the number of true values there are in an array.

// countTrue([true, false, false, true, false]) ➞ 2

function countTrue(array) {
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] == true) {
      count += 1;
    }
  }
  return count;
}

// console.log(countTrue([true, false, false, true, true]));

// =======================================

// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

function sevenBoom(arr) {
  let contains = "there is no 7 in the array";
  arr = arr.toString().split("");
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == 7) {
      contains = "Boom!";
    }
  }
  return contains;
}

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));

// now with regex, as from other solution

function sevenBoomReg(arr) {
  if (/7/.test(arr)) {
    // Important! the regex pattern preceeds what is being tested!
    return "Boom!";
  }
  return "there is no 7 in the array";
}

// console.log(sevenBoomReg([1, 2, 3, 4, 5, 6, 8]));

// ===========================

//A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]

// Create a function that returns the total number of boomerangs in an array.

// Be aware that boomerangs can overlap

// [5, 5, 5] (triple identical digits) is NOT considered a boomerang because the middle digit is identical to the first and last.

function countBoomerangs(arr) {
  let boomCount = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 2] && arr[i] != arr[i + 1]) {
      boomCount++;
    }
  }
  return boomCount;
}

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1]));

// reconstructing the solution with less code from another participant

const countBoomerangs2 = (arr) =>
  arr.filter((_, i) => arr[i] == arr[i + 2] && arr[i] != arr[i + 1]).length;
// I have no idea why the inclusion of "_," makes this work.
// filter((element) => { /* … */ })
// filter((element, index) => { /* … */ })
// oh. I think it names the element for further use, so in this it just acts as a placeholder.

// console.log(countBoomerangs2([9, 5, 9, 5, 1, 1, 1, 1]));

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// Expected output: Array ["exuberant", "destruction", "present"]

// ==================================

// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

// textToNumberBinary("zero one zero one zero one zero one") ➞ "01010101"

function textToNumberBinary(str) {
  let splitStr = str.split(" ");
  let newArr = [];
  for (i = 0; i < splitStr.length; i++) {
    if (splitStr[i].toLowerCase() == "zero") {
      newArr.push("0");
    } else if (splitStr[i].toLowerCase() == "one") {
      newArr.push("1");
    }
  }
  console.log("length: " + newArr.length);
  console.log("remainder: " + (newArr.length % 8));
  let newArrLength = newArr.length; // created a variable because the value was changing in the for loop
  if (newArrLength % 8 != 0) {
    for (i = 0; i < newArrLength % 8; i++) {
      newArr.pop();
    }
  }
  return newArr.join("");
}

// console.log(textToNumberBinary("zero one zero one zero one zero one one"));
// console.log(textToNumberBinary("one zero one"));

// REMEMBER: push(), pop(), shift(), unshift()
// also % - remainder
// really liked this one!

// ===================================================

// Given an input string, reverse the string word by word, the first word will be the last, and so on.

function reverseWords(str) {
  let splitStr = str.split(" ");
  let newArr = [];
  let arrLength = splitStr.length;
  for (let i = arrLength - 1; i >= 0; i--) {
    newArr.push(splitStr[i]);
  }
  return newArr.join(" ");
}

//console.log(reverseWords("Hello world new"));

// from other solutions - lmao - forgot about reverse
function reverseWordsBetter(str) {
  return str.split(" ").reverse().join(" ");
}

// console.log(reverseWordsBetter("Hello world new"));

// ==============================

// The left shift operation is similar to multiplication by powers of two.

//Sample calculation using the left shift operator (<<):

// 10 << 3 = 10 * 2^3 = 10 * 8 = 80
// -32 << 2 = -32 * 2^2 = -32 * 4 = -128
// 5 << 2 = 5 * 2^2 = 5 * 4 = 20

// This challenge is more like recreating of the left shift operation, thus, the use of the operator directly is prohibited.

function shiftToLeft(x, y) {
  return x * Math.pow(2, y);
}

// console.log(shiftToLeft(10, 3));

// =======================================

// Create a function that accepts a Date object and returns true if it's Christmas Eve (December 24th) and false otherwise. Keep in mind JavaScript's Date month is 0 based, meaning December is the 11th month while January is 0.

function timeForMilkAndCookies(date) {
  if (date.getDate() == 24 && date.getMonth() == 11) {
    return true;
  } else {
    return false;
  }
}

// streamlining haha
function timeForMilkAndCookies2nd(date) {
  return date.getDate() == 24 && date.getMonth() == 11;
}

console.log(timeForMilkAndCookies2nd(new Date(2013, 11, 24)));
//➞ true

// ===================================

// Create a function that calculates the number of different squares in an n * n square grid.

// numberSquares(2) ➞ 5

// numberSquares(4) ➞ 30

// numberSquares(5) ➞ 55

// Explanation

//     If n = 0 then the number of squares is 0
//     If n = 1 then the number of squares is 1 + 0 = 1
//     If n = 2 then the number of squares is 2^2 + 1 = 4 + 1 = 5
//     If n = 3 then the number of squares is 3^2 + 5 = 9 + 5 = 14

// As you can see, for each value of n the number of squares is n squared + the number of squares from the previous value of n.

// me
// okay so it includes all squares - like the boundary one, and each possible border combination.
// a for loop starting from one would be best, and accrue the number into a variable that gets returned
// oh. It's only the most recent calculation, not all the preceding ones. oops.easily fixed by updating the inital value if i to num - 1. ... right?!
// OH IT'S SQUARED NOT RAISED TO THE POWER OF I DOH LMAO I'M NOT MAKING CUBES OVER HERE
// okay one step closer. Do I need to run all the calculations from i = 1 and only keep the last two?
// nope, all

function numberSquares(num) {
  let totalNum = 0;
  for (i = 1; i <= num; i++) {
    totalNum += Math.pow(i, 2);
    //console.log("i: " + i + " this totalNum: " + totalNum);
  }
  return totalNum;
}

// there's probably a more elegant way to do this

//console.log(numberSquares(5));

// =======================================

// Create a function that determines whether a number is Oddish or Evenish. A number is Oddish if the sum of all of its digits is odd, and a number is Evenish if the sum of all of its digits is even. If a number is Oddish, return "Oddish". Otherwise, return "Evenish".

// For example, oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4. oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5.

// oddishOrEvenish(43) ➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

function oddishOrEvenish(num) {
  let arr = num.toString().split("");
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    sum += parseInt(arr[i]);
  }
  if (sum % 2 == 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}

console.log(oddishOrEvenish(48));

// is there a way to do this without converting to strings?
