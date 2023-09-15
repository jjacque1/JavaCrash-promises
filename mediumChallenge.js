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


function largestNumber(arr) {
let maxNum = arr[0]; 

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > maxNum) {
    maxNum = arr[i]
  }
}
return maxNum
}

console.log(largestNumber([0,4,3,2,1,5,7,9,-1,100]))