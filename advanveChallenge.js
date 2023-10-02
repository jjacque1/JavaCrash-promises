// Q1. Show rating
// Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

// showRating(3) -> "* * *"
// showRating(4.5) -> "* * * *"
// showRating(0.5) -> "."

// function showRating(rating) {
//     let ratings = ""
//     for(let i = 0; i < rating; i++) {
//         ratings = ratings + "*"
//         if(i !== rating - 1) {
//             ratings = ratings + " "
//         }
//     }

//     return ratings;
// }

// console.log(showRating(3))

// function showRating(rating) {
//     let ratings = ""

//     for(let i = 0; i < Math.floor(rating); i++) {
//         ratings += "*"
//         if(i !== rating - 1) {
//             ratings += " "
//         }
//     } if(!Number.isInteger(rating)) {
//         ratings += "."
//     }

//     return ratings
// }

// console.log(showRating(3.5))

// Q2. Sort by lowest to highest price

// Given an array of numbers, retrun the prices sorted by low to high.

// sortLowToHigh([20, 40, 10, 30, 50, 10]) -> [10, 10, 20, 30, 40, 50]
// sortLowToHigh([5, 10, 0, -5]) -> [-5, 0, 5, 10]
// sortLowToHigh([3, 2, 1, 0]) -> [0, 1, 2, 3]

// function sortLowToHigh(numbers) {
// return numbers.sort((a, b) => a - b)
// }

// console.log(sortLowToHigh([20, 40, 10, 30, 50, 10]))

// Q3. Sort by Highest to Lowest price

// Given an array of objects, return the prices sorted by high to low

/* 
    sortHighToLow([
    {id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10},
])
    [{id: 1, price: 50},
    {id: 2, price: 30},
    {id: 3, price: 60},
    {id: 4, price: 10}]

*/

// function sortHighToLow(objects) {
//   return objects.sort((a, b) => {
//     return b.price - a.price;
//   });
// }

// console.log(
//   sortHighToLow([
//     { id: 1, price: 50 },
//     { id: 2, price: 30 },
//     { id: 3, price: 60 },
//     { id: 4, price: 10 },
//   ])
// );   n

// Q5. Find all the posts by a single user

// Call this API "https://jsonplaceholderr.typicode/posts" and return all the posts by any given user id.

                        


// postsByuser(4) -> 