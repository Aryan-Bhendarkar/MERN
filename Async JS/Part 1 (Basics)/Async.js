// Promises

// Intro to promise - syntax 
// const promise = new Promise((resolve, reject) => {
//     let allWell = true
//     if(allWell){
//         resolve("Sab Chal raha hai ...");
//     }else{
//         reject("Phook gaya!!");
//     }
// })

// console.log(promise) // Print the statement based on resolve or reject state 


/*----------------------------------------------------------------------------------------------------------------*/

// Demonstation of pending state - Here first we get pending state for promise, after 2 seconds we will get resolved or rejected statement 
// const promise = new Promise((resolve, reject) => {
//     let randomNumber = Math.floor(Math.random() * 10);
//     setTimeout(() => {
//         if(randomNumber <= 4){
//             resolve("You guessed it correct !!")
//         }else{
//             reject("You guessed Wrong !!!")
//         }
//     }, 2000)
// }); 
// console.log(promise)


/*----------------------------------------------------------------------------------------------------------------*/

// Older then-catch method for consuming promises

// const promise1 = new Promise((resolve, reject) => {
//     resolve("Well done, promise 1 is resolved !");
// })

// const promise2 = new Promise((resolve, reject) => {
//     resolve("Well done, promise 2 is resolved !");
// })

// const promise3 = new Promise((resolve, reject) => {
//     reject("Well done, promise 3 is resolved !");
// })

// promise1
// .then((value) => {
//     console.log(value);
//     return promise2;
// })
// .then((value) => {
//     console.log(value);
//     return promise3;
// })
// .catch((err) => {
//     console.log(err)
// })


/*----------------------------------------------------------------------------------------------------------------*/

// Promise.all() - Promise.all() takes multiple promises and runs them in parallel.It waits until all promises are finished and then:
//    returns an array of results (if all succeed).
//    rejects immediately (with the first error) if any one fails.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise one resolved !!!")
//     }, 2000);
// })

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Promise Two is resolved !!!")
//     }, 1500);
// })

// Promise.all([promise1, promise2])
// .then((data) =>console.log(data[0], data[1]))
// .catch((err) => console.log(err))


/*----------------------------------------------------------------------------------------------------------------*/

// Async-Await 

// const preHeatOven = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const preHeatOven = true;
//             if(preHeatOven){
//                 resolve("Preheat Oven to 180deg.");
//             }
//             else{
//                 reject("Failed Task")
//             }
//         }, 1000)
//     })
// };

// const addSugarAndChocoChips = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const addChoco = true;
//             if(addChoco){
//                 resolve("Place butter and chocolate chips, stir until melted and smooth.");
//             }
//             else{
//                 reject("Failed Task")
//             }
//         }, 1000)
//     })
// };

// const addFlourCocoaAndSalt = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const addSaltFlour = true;
//             if(addSaltFlour){
//                 resolve("Add flour, cocoa and salt and stir until smooth.");
//             }
//             else{
//                 reject("Failed Task")
//             }
//         }, 1000)
//     })
// };

// const bakeMixture = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const bakeMixture = true;
//             if(bakeMixture){
//                 resolve("Bake for 24 minutes for really gooey center.");
//             }
//             else{
//                 reject("Failed Task")
//             }
//         }, 1000)
//     })
// };

// const bakeChocolateBrownies = async() => {
//     // print all the statement one by one 
//     try{
//         const taskOne = await preHeatOven();
//         console.log(taskOne);

//         const taskTwo = await addSugarAndChocoChips();
//         console.log(taskTwo);

//         const taskThree = await addFlourCocoaAndSalt();
//         console.log(taskThree);

//         const taskFour = await bakeMixture();
//         console.log(taskFour);

//         console.log("Enjoy! Your perfect chocolate brownies.")
//     }
//     catch(error){
//         console.log(error)
//     }
// }
// bakeChocolateBrownies();


/*----------------------------------------------------------------------------------------------------------------*/

// Fetch API - Syntax 
// fetch('<URL>', {})
// .then(response => console.log(response))
// .catch(err => console.log(err))

// Add product or data in API  - Using 'POST' method
// fetch('https://dummyjson.com/products/add', {
//     method: 'POST',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         description: 'Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })


// Update data in API - 1st product updated to Iphone 19 with 'PUT' method 
// fetch('https://dummyjson.com/products/1', {
//     method: 'PUT',
//     headers: {
//         'Content-type': 'application/json'
//     },
//     body: JSON.stringify({
//         title: 'iphone 19',
//         description: 'changes to Iphone 19',
//         price: '1000',
//         rating: '9/10'
//     })
// })

// Delete data from API 
// fetch('https://dummyjson.com/products/1', {
//     method : 'DELETE',
//     headers: {
//         'Content-type': 'application/json'
//     }
// })
// Common to all the above fetch 
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


const getAllProducts = async () => {
    try{
        const response = await fetch('https://dummyjson.com/products/1');
        const json = await response.json();
        console.log(json);
    }
    catch(error){
        console.log(error);
    }
}
getAllProducts();