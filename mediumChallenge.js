// Q1. Falsy or Truthy?

// Given two values, return the first one if it is falsy, otherwise retun the second one.

// filterOutFalsy(0, 500) -> 0
// filterOutFalsy(flase, 100) -> flase
// filterOutFalsy(true, "Dog") -> "Dog"

// function falsyOrTruthy(elem1, elem2) {
//     return !elem1 ? elem1 : elem2;
// }

// console.log(falsyOrTruthy(0, 500))

// Q2. Return the length of any given array

// Given an array, return its length.

// arrLength([1,2,3]) -> 3
// arrLength([1,2,3,4]) -> 4
// arrLength([]) -> 0

// function arrLength(arr) {
//     return arr.length ;
// }

// console.log(arrLength([1,2,3,4]))

// Q3. Get the last element in an array

// Given an Array, return the last element.

// arrLength([1,2,3]) -> 3
// arrLength([1,2,3,4]) -> 4
// arrLength([]) -> 0

// function arrLength(arr) {
//     return arr[arr.length - 1]
// }

// console.log(arrLength([1,2,3]))

// Q4. Find the sum of an array

// Given an Array, return the sum of every element

// arrSum([2,2,2]) -> 6
// arrSum([100,200,500]) -> 800
// arrSum([0,-5,-10]) -> -15

// function arrSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// console.log(arrSum([2, 2, 2]));

// Q5.Add up the numbers from a single number

// Given a number, add up all the numbers from one to the number that is given.
// EX. An inputof 4 wwill give you 1 + 2 + 3 + 4, which equals 10.

// progressiveSum (3) -> 6
// progressiveSum (4) -> 10
// progressiveSum (600) -> 180300

// function progressiveSum(num) {
//   let sum = 0;
//   for(let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//  return sum
// }

// console.log(progressiveSum(4))

// Q6. Calculate the time

// Givena number in seconds, return this number in mm:ss format.

// calcTime(66) -> "01:06"
// calcTime(50) -> "00:50"
// calcTime(300) -> "05:00"

// function calcTime(seconds) {
//   let timerMinutes = Math.floor(seconds / 60);
//   let timerSeconds = seconds % 60;

//    if(timerMinutes.toString().length === 1) {
//     timerMinutes = '0' + timerMinutes
//    }

//    return timerMinutes + ":" + timerSeconds;
// }

// console.log(calcTime(500))

// Q7. Find the largest number

// Given an array of numbers, return the largest number of that array

// getMax([5,100,0]) -> 100
// getMax([12,10,-20]) -> 12
// getMax([-300,-100,-200]) -> -100

// function getMax(arr) {
//   let max = arr[0];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   return max;
// }

// console.log(getMax([-100, -200, -300]));

// function largestNumber(arr) {
// let maxNum = arr[0];

// for(let i = 0; i < arr.length; i++) {
//   if(arr[i] > maxNum) {
//     maxNum = arr[i]
//   }
// }
// return maxNum
// }

// console.log(largestNumber([0,4,3,2,1,5,7,9,-1,100]))

// Q8. Reverse a string

// Given a string, retrun the reversed string

// reverseString("abc") -> "cba"
// reverseString("David") -> "divaD"
// reverseString("This is cool") -> "looc si sihT"

// 3 Ways to reverse a string:

// 1 - use an invrementing for loop
// 2 - use a decrementing for loop
// 3 - use the aray reverse property

// - use an incrementing for loop

// function reverseTheString(str) {
//   let TheReversedString = "";
//   for (let i = 0; i < str.length; ++i) {
//     TheReversedString = str[i] + TheReversedString
//   }
//   return TheReversedString
// }

// console.log(reverseTheString("jackson"))

// - use a decrementing for loop(not best practice)

// function reverseString(str) {
//   let reversedString = '';
//   for(let i = str.length - 1; i >= 0; --i) {
//     reversedString += str[i]
//   }
//   return reversedString;
// }

// console.log(reverseString('abc'));

// - use the aray reverse property

// function reverseString(str) {
//   return str.split("").reverse("").join("")
// }

// console.log(reverseString("Jackson"))

// Q9. Turn every element in an array into 0

// Given an array of elements, return the same length array filled with 0's.

// convertToZeros ([5, 100, 0]) -> [0, 0, 0]
// convertToZeros ([12]) -> [0]
// convertToZeros ([1, 2, 3, 4, 5]) -> [0, 0, 0, 0, 0]

// Solution 1:  For loop
// Solution 2: Array 'fill'
// Solution 3: Array 'map'

// Solution 1:  For loop

// function convertToZeros(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = 0;
//   }
//   return arr;
// }

// console.log(convertToZeros([5, 100, 0]));

// function convertToZeros(arr) {
//   let newArr = []
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = 0;
//   }
//   return newArr;
// }

// console.log(convertToZeros([5, 100, 0]));

// Solution 2: Array 'fill'

// function convertToZeros(arr) {
//   return new Array(arr.length).fill(0);
// }

// console.log(convertToZeros([1, 2, 3, 4, 5]))

// Solution 3: Array 'map' (Best Practice, most used)

// function convertToZeros(arr) {
//   return arr.map(elem => 0);

// }

// console.log(convertToZeros([1, 2, 3]))

// // A return is needed in an arrow function if you have {} in the .map method

// function convertToZeros(arr) {
//   return arr.map(elem => {
//     return 0
//   });

// }

// console.log(convertToZeros([1, 2, 3]))

// Q10. Filter out all the apples

// Given an array of fruits, if it is an apple remove it from the array

// removeApples(["Banana", "Apple", "Orange", "Apple"]) -> ["Banana", "Orange"]
// removeApples(["Banana", "Tomato", "Orange", "Banana"]) -> ["Tomato", "Orange", "Banana"]
// removeApples(["Banana", "Orange", "Apple"]) -> ["Banana", "Orange"]

// - Solution 1: For loop
// - Solution 2: Array 'filter'



// - Solution 1: For loop

// function removeApples(arr) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== "Apple") {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(removeApples(["Banana", "Orange", "Apple"]));





// - Solution 2: Array 'filter'

// function removeApples(arr) {
// return arr.filter(elem => elem !== "Apple")
// }

// console.log(removeApples(["Banana", "Orange", "Apple"]))


// // A return is needed in an arrow function if you have {} in the .filter method

// function removeApples(arr) {
// return arr.filter(elem => {
//   return elem !== "Apple"
// })
// }

// console.log(removeApples(["Banana", "Orange", "Apple"]))


// Q11. Filter out all the faly values
// Given an array of values, filter out all the falsy values and only return the truthy values.

// filterOutFalsy(["", [], null, undefined, "0"]) -> [[], "0"]
// filterOutFalsy(["Tomato", "Orange", false]) -> ["Tomato", "Orange", "Banana"]
// filterOutFalsy(["Banana", "Orange", "Apple"]) -> ["Banana", "Orange"]


// - Solution 1: For loop
// - Solution 2: Array 'filter'



// - Solution 1: For loop
// function filterOutFalsy(arr) {
//   let truthyArr = [];
//   for(let i = 0; i < arr.length; i++) {
//     if(!!arr[i] === true) {
//       truthyArr.push(arr[i])
//     }
//   }
//   return truthyArr
// }

// console.log(filterOutFalsy(["Banana", "Apple", NaN, undefined, null, false, [], 0]))



// - Solution 2: Array 'filter'

// function filterOutFalsy(arr) {
// return arr.filter(elem => !!elem === true)
// }

// console.log(filterOutFalsy(["Banana", "Apple", NaN, undefined, null, false, [], 0]))


// 49:09