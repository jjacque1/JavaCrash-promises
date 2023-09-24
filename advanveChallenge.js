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


function showRating(rating) {
    let ratings = "";
    for(let i = 0; i < Math.floor(rating); i++) {
        ratings = ratings + "*"
        if(i !== Math.floor(rating) - 1) {
            ratings = ratings + " "
        }
    }
    if(!Number.isInteger(rating)) {
        ratings = ratings + " ."
    }
    return ratings;
}

console.log(showRating(4.5))