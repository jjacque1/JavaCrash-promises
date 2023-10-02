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

// Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user id.

// postsByuser(4) ->

// async function postsByUser(userId) {
//     const promise = await fetch("https://jsonplaceholder.typicode.com/posts");

//     const result = await promise.json()

//     const posts = result.filter(element => element.userId === userId)

//     console.log(posts)
//   }

//   postsByUser(4)

// async function postsByUser(userId) {
//   const promise = await fetch("https://jsonplaceholder.typicode.com/posts");
// // First we are getting the promise for the fetch API
//   const result = await promise.json()
// // Second we are converting the promise to json which is something the frontend can read
// // While we are waiting for the conversion to happen, we need to use "await" because the conversion does not happen imediately.
// // When we use await, we have to pair it with an "async" function
//   const posts = result.filter(element => element.userId === userId)
// // We have alredy converted the promise so we have the result of the conversion
// // Then we filter the promise using (.filter)to find what we are looking for
//   console.log(posts)
// }

// postsByUser(4)

// Q6. First 6 incomplete Todos

// Call thi API "https://jsonplaceholder.typicode.com/todos"

async function incompleteTodos(completed) {
  const promise = await fetch("https://jsonplaceholder.typicode.com/todos");

  const results = await promise.json();

  const todos = results.filter((elem) => !elem.completed).slice(0, 6);

  console.log(todos);
}

incompleteTodos();
