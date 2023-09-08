// Q1. Retrun the sum of Two Numbers

// Create a function that takes two arguments as function and return their sum.

// addition (3,2) -> 5
// addition (-3, -6) -> -9
// addition (7,3) -> 10

// function sum(num1, num2) {
//     return num1 + num2
// }

// console.log(sum(3,2))

// Q2. Convert Hours into Seconds

// Create a funciton that converts hurs into seconds

// hoursIntoSeconds(2) -> 7200
// hoursIntoSeconds(10) -> 36000
// hoursIntoSeconds(24) -> 86400

// function convertHoursIntoSeconds(hours) {
//     let minutes = hours * 60;
//     let seconds = minutes * 60;
//     return seconds;
// }

// console.log(convertHoursIntoSeconds(24))

// Cleaner Code

// function convertHoursIntoSeconds(seconds) {
//     return seconds * 60 * 60
// }

// console.log(convertHoursIntoSeconds(2))

// Q3. Calculate the Perimeter of a Rectangle

// Create  function that takes length nd width of a rectangle and retrun it's perimeter

// p = 2(L + W)

// calcPerimeter(6, 7) -> 26
// calcPerimeter(20, 10) -> 60
// calcPerimeter(2,  9) -> 22  

// function perimeter(length, width) {
//     return 2 * (length + width);
// }

// console.log(perimeter(2, 9))

// Q4. Calculate the Area of a Triangle

// Write a funciton that takes the base and height of a triangle and return its area

// A = ½ (b × h) 

// calcTriangleArea (3,2) -> 3
// calcTriangleArea (10,10) -> 50
// calcTriangleArea (20,20) -> 200

// function area(base, height) {
//     return 0.5 * (base * height)
// }

// console.log(area(20, 20))

// Q5. Extend a String

// Write a funciton that accepts a string and adds "Frontend" onto the end of it.

// ("Apple") -> AppleFrontend
// ("Banana") -> BananaFrontend
// ("Orange") -> OrangeFrontend



// function append(word) {
//     return word + "Frontend"
// }

// console.log(append("Apple"))



// Q6. Greater than 100?

// Given two numbers, return true if the sum of both numbers is greater than 100, othervise, return false

// sumGreaterThen100 (20, 10) -> false
// sumGreaterThen100 (50, 60) -> true
// sumGreaterThen100 (100, -50) -> false

// function sumGreaterThen100 (numb1, numb2) {
//     if (numb1 + numb2 > 100) {
//         return "true"
//     } else {
//         return "false"
//     }
// }

// console.log(sumGreaterThen100(50,60))

// Cleaner Code

// function sumGreaterThen100(num1, num2) {
//     return num1 + num2 >= 100
// }

// console.log(sumGreaterThen100(50, 60))

// Q7. Less than or Equal to Zero

// Write a funciton that accepts a number and retruns true if it is less than or equal to zero, otherwise returns false.

// lessThenOrEqualToZero(3) -> false
// lessThenOrEqualToZero(0) -> true
// lessThenOrEqualToZero(-2) -> true

function lessThenOrEqualToZero(number) {
    return number <= 0
}

console.log(lessThenOrEqualToZero(0))