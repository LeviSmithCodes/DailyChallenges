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

console.log(convertToDecimal2(["33%", "98.1%", "56.44%", "100%"]));
