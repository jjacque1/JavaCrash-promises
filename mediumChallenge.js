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

function arrSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

console.log(arrSum([2, 2, 2]));
