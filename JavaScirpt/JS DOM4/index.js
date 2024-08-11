// console.log('its me avi');


// Example of synchronous code
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// Asynchronous code
// setTimeout(function(){
//     console.log('third');
// },5000);
// function sync(){
//     console.log('first');
// }
// sync();
// console.log('second');

// Promise
// creating promise
// let meraPromise1=new Promise(function(resolve,reject)
// {
//     // console.log('I am inside promise');
//     // resole(1998);

//     // let write some asyn code
//     setTimeout(function()
//     {
//         console.log('I am inside prsomise1');
//     },3000);
//     // resolve(888);
//     // reject(new Error('Bhaisahab Error aaye hai'));
// });
// // we can use asyn code using Promise
// let meraPromise2=new Promise(function(resolve,reject)
// {
//     // console.log('I am inside promise');
//     // resole(1998);

//     // let write some asyn code
//     setTimeout(function()
//     {
//         console.log('I am inside prsomise2');
//     },5000);
//     // resolve(888);
//     // reject(new Error('Bhaisahab Error aaye hai'));
// });
// console.log('Pehla');

//then()

// let meraPromise1=new Promise(function(resolve,reject)
// {
//     // console.log('I am inside promise');
//     // resole(1998);

//     // let write some asyn code
//     setTimeout(function()
//     {
//         console.log('I am inside prsomise1');
//     },3000);
//     // resolve(888);
//     reject(new Error('Bhaisahab Error aaye hai'));
// });
// meraPromise1.then((Value) => {console.log(Value)}); 

// meraPromise1.catch((error) => {console.log("Received an error")});


// Async-wait

// async function abcd()
// {
//     return 8;
// }
// abcd();


// Through fetch api we are retriving data
// here we are doing getCall using fetch API
async function utility(){
let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// converting into javascript object notation
let output = await content.json();
console.log(output);
}
utility();

// through fetch API we can send our data. (PostCall)