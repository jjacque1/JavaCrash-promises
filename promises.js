// PROMISES
// SOMETHING THAT GIVE YOU A VALUE SOMETIME IN THE FUTURE

// https://jsonplaceholder.typicode.com/users/1

// fetch("https://jsonplaceholder.typicode.com/users/1")

//How do we unlock a promise?
// To unlock the data we just (fetch) for the back-end API, there are two thing we can do:

// 1.  Then

//  fetch("https://jsonplaceholder.typicode.com/users/1")

// const emailRef = document.querySelector(".email");
// console.log(emailRef);

// fetch("https://jsonplaceholder.typicode.com/users/1").then((response) => {
//   response.json().then((data) => {
//     console.log(data);
//     emailRef.innerHTML = data.email;
//   });
// });

// CLEANER CODE

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// 2. Async/Await     (best practice)
// const emailRef = document.querySelector(".email");
// console.log(emailRef);

// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
//   const data = await response.json();
//   console.log(data);
//   emailRef.innerHTML = data.email;
// }

// main();


// CREATING A PROMISE
// "retrun new Promise((resolve, reject) => {})

// const statusRef = document.querySelector(".status")

// function getSubscriptionStatus() {
//     return new Promise((resolve, reject) => {
//         resolve("VIP")
//     })
// }

// function getVideo(subscriptionStatus) {
//     return new Promise((resolve, reject) => {
//         if(subscriptionStatus === "VIP") {
//             resolve("show Video")
//         } else if (subscriptionStatus === "FREE") {
//             resolve("show trailer")
//         } else {
//             reject("no video")
//         }
//     })
// }

// async function main() {
//     const status = await getSubscriptionStatus();
//     statusRef.innerHTML = status
//     console.log(await getVideo(status))
// }


// main()