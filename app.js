// let cash = 20
// let price = 20

// let change = cash - price;

// if (cash > price) {
//     console.log('Here is your $' + change + ' change')
// }
// else if (cash < price) {
//     console.log('You need more cash')
// }
// else {
//     console.log("You paid the exact amount, Thank you have a nice day")
// }





// let cash = 60
// let price = 60
// let isStoreOpen = true

// if (cash >= price && isStoreOpen) {
//     console.log('print the receip')
// }
// else if (cash >= price && !isStoreOpen) {
//     console.log('Sorry Store is closed, come back later')
// }
// else {
//     console.log('Card declined')
// }





// let hot = false
// hot ? console.log('Its hot outside') : console.log('its cold asf')





// let cash = 50
// let price = 40
// let isStoreOpen = false

// let str = cash >= price && isStoreOpen ? 'give receipt' : 'do not give receip'
// console.log(str)




// WHILE LOOP

// let count = 1

//  while (count <= 10) {
//     console.log(count)
//     count = count + 1
// }




// FOR LOOP

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <= 20; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log(`${i} -> is divisible by 3 and 5 `)
//     }
//     else if (i % 3 === 0) {
//         console.log(`${i} -> is divisible by 3`)
//     }
//     else if (i % 5 === 0) {
//         console.log(`${i} -> is divisible by 5`)
//     }
//     else {
//         console.log(i)
//     }
// }





// let str = 'frontend simplifid';

// for (let i = 0; i <= str.length; i++) {
//     console.log(str[i])
// }



// let str = 'jackson jacque';

// for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
// }




// function welcomePersonToFES(name) {
//     console.log(`Welcome to Frontend Simplified ${name}`)
// }
// welcomePersonToFES('jackson')
// welcomePersonToFES('jesse')
// welcomePersonToFES('james')




// function sumOfTwoNumber (num1, num2) {
//     return num1 + num2
// }

// console.log(sumOfTwoNumber(10,10))




// function convertCelsiusToFahrenheit (celsius) {
//     return celsius * 1.8 + 32

// }

// console.log(convertCelsiusToFahrenheit(10))




// const convertCelsiusToFahrenheit =(celsius) => {
//     return celsius * 1.8 + 32
// }
// console.log(convertCelsiusToFahrenheit(10))




// ARRAYS

// let arr = [20, 30, 40, 50, 100]

// console.log(arr[0])

// console.log(arr[arr.length-1])


// ARRAY PUSH METHOD

// arr.push(200)
// console.log(arr)


// ARRAY FILTER METHOD


// let arr = [20,30,40,50,100]

// let newArr = arr.filter((element) => {
//     if (element < 50) {
//         return true
//     }
// })

// console.log(newArr)




// let arr = [20,30,40,50,100]

// let newArr = arr.filter (element => element < 50)

// console.log(newArr)



// let arr = ['A+', 'A', 'FAIL']

// let newArr = arr.filter((element) => {
//     if (element !== 'FAIL') {
//         return true
//     }
// })

// console.log(newArr)



// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = grades.filter (element => element !== 'FAIL')

// console.log(goodGrades)



// let arr = ['FAIL', 'FAIL', 'B']
// let newArr = arr.filter (element => element !== 'FAIL')
// console.log(newArr)

// let arr = ['FAIL']

// let newArr = arr.filter (element => element = false)
// console.log(newArr)

// let grades = ['A+', 'A', 'FAIL']
// let goodGrades = []

// for (i = 0; i < grades.length; i++) {
//     if (grades[i] !== 'FAIL') {
//         goodGrades.push(grades[i]);
//     }
// }

// console.log(goodGrades)

// let arr = [10,20,30,40,50,60,70,80,]
// let newarr = []

// for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 50) {
//         newarr.push(arr[i])
//     }
// }

// console.log(newarr)



// ARRAY.MAP MATHOD

// let arr = [1,4,9,16]
// let newarr = arr.map((element) => {
//     return 'changed array'
// })

// console.log(newarr)




// let dollars = [1,5,10,3]

// let cents = dollars.map((element) => {
//     return element * 100
// })

// console.log(cents)




// let dollars = [1,5,10,3]
// let cents = []

// for (i = 0; i < dollars.length; i++) {
//     cents.push(dollars[i] * 100)
// }

// console.log(cents);





// OBJECTS (USED TO STORE MULTIPLE PROPERTIES IN ONE VARIABLE)

// let users = [
//   {
//     username: "Jackson",
//     email: "jacksonjacque.jj@gmail.com",
//     password: "test123",
//     discordID: "jackson#001",
//     subscriptionStatus: "VIP",
//     lessonsCompleted: [0, 1, 2, 3],
//   },
//   {
//     username: "Jacque",
//     email: "jacksonjacque2.jj@gmail.com",
//     password: "test456",
//     discordID: "jackson#002",
//     subscriptionStatus: "Normal",
//     lessonsCompleted: [4, 5, 6, 7],
//   },
// ];

// function login(email, password) {
//   for (let i = 0; i < users.length; i++) {
//     if (users[i].email === email) {
//       console.log(users[i]);
//       if (users[i].password === password) {
//         console.log("Log the user in");
//       } else {
//         console.log("wrong password");
//       }
//       return;
//     }
//   }
//   console.log("counld fint email");
// }
// login("jacksonjacque.jj@gmail.com", "test123");

// function register(user) {
//   users.push(user);
// }
// register({
//   username: "john",
//   email: "johnemail",
//   password: "john123",
//   subscriptionStatus: "VIP",
//   discordId: "johnthebiptist",
//   lessonsCompleted: [1, 2],
// });

// function testing(addOn) {
//   users.push(addOn);
// }

// testing({
//   username: "daddyDave",
//   email: "davejohnson@email.com",
//   password: "daveJohnson123",
//   subscriptionStatus: "VIp",
//   discordId: "daveJohnson",
//   lessonsCompleted: [1, 2, 3],
// });

// console.log(users);

// DOCUMENT OBJECT MODLE
// THE DOM ALLOWS YOU TO ACCESS AND CHANGE THE STYLING AND CONTENT OF ELEMENS ON YOUR WEBSITE




// FIRST WAY OF ACCESSING AN ELEMENT

// console.log(document.querySelector('#title'));

// console.log(document.querySelector('.title'));
// console.log(document.querySelector('h1'));




// HOW TO CHANGE THE INNER HTML IN THE DOM

// document.querySelector('#title').innerHTML = 'Frontend Simplified'




// // change css
// document.querySelector('#title').style.color = "red"





// SECOND WAY OF ACCESSING AN ELEMENT

// console.log(document.getElementById('title'));



// CLICK LISTENERS

// function changeTitleToRed () {
//     document.querySelector("#title").style.color = 'blue'
// }


// DARK AND LIGHT THEME
// 

// function toggleDarkMode() {
//     document.querySelector('body').classList.toggle("dark-theme")
// }



// PROMISES
// SOMETHING THAT GIVE YOU A VALUE SOMETIME IN THE FUTURE


