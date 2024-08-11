console.log("Hey its me");
// Function -> a block of code that fullfils a specific task

// Hoisting is the process of moving function declaration to the top of file, this is automatically by JS engine
run();   // this also run, this is not c/c++, because of hoisting.

function run()    // function declaration
{
    console.log('runing');
}
// function call or invoke
// run();

// stand();   // Hoisting only shift function declaration not functions assignment, so it will throw an error.
// Named funtion assignment
let stand =  function walk(){
    console.log('walking');
};
// Anonymous funtion assignment => function has no name
let stand2=function(){
    console.log('walking');
}

// walk()   // it will throw an error
stand();
let jump=stand;
jump();
stand2();

let x=1;
x='a';
console.log(x);

// function sum(a,b){
//     // JS has special object called 'arguments' which store all the data
//     // console.log(arguments);

//     let total=0;

//     for(let value of arguments)
//         total=total+value;
//     return total;
// };
// // funtion is also behaves as dynamic
// // console.log(sum(1,2));
// // console.log(sum(1));            // 1+undefined=NaN (not a number)
// // console.log(sum());
// // console.log(sum(1,2,3,4,5,6));

// console.log(sum(1,2,3,4,5,6));   // now we can pass any number of arguments or parameter.

// spread operator is used for concatenating and copy of array...

// rest operator (...) is used to handle all the parameter pass by a functions...

// Rest paramter will be last formal parameter.
function sum(num,value,...args)   // here ...args it will store in the form of array
{
    console.log(args);
}
sum(1,2,3,4,5);


// default parameter... is initialsed form left to right




// getter to fetch the value and setter to set the value
// getter -> access properties
// setter -> change or mutuate properties


// creating object...
// let person={
//     fName:'love',
//     lName:'Babbar',

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         if(typeof value !== String){
//             throw new Error("you have not sent a string");
//         }
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }
// };

// console.log(person);

// function fullName(){
//     return `${person.fName} ${person.lName}`   // here we are using placeholder....
//     // here we used template literal `back-tick` means it exactly show we write on a editor
// }

// console.log(person);

// here we are using getter method
// console.log(person.fullName);


// here we using setter method
// person.fullName='Rahul Kumar';
// console.log(person.fullName);


// Error handling "try and catch block"


// try{
//     person.fullName=1;
// }
// catch(e)
// {
//     // alert('You have sent a number in a fullname');
//     alert(e);
// }

// Scope of a variable of var and let
// {
//     var a=5;
// }
// // var is accessible in funtion body if not function then in file...
// console.log(a);

// function walk(){
//     var a=5;
// }
// console.log(a);

// for(var i=0;i<10;i++)
// {

// }
// console.log(i);



// sorting an array ??

// let a = [10,5,4,25];
// a.sort(function(a,b){
//     return a-b;
// });
// console.log(a);


let arr=[1,2,3,4];
// let total=0;
// for (let value of arr)   // value of apply on iterables...
//     total=total+value;
// console.log(total);


// Reducing an ARRAY....
let totalSum = arr.reduce((accumulater,currentValue) => accumulater+currentValue,0);
console.log(totalSum);