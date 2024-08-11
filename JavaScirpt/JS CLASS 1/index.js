// Basic of JS


console.log('Namaste duniya jee2');

let x,y,z;   //creating multiple variables.


let a=true;
console.log(a);

// const num=12;
// num=13;         

// let a=12;     // cannto redeclare block scope variable or let.
// let a='avi'


var b=12;
var b=true;     // redclaration is possible in var case.it will consider the last one.
var b='avi';
console.log(b);


// let name;
// console.log(name);    // example of undefined primitive data types.
//name is deprecated here? why????

let lastName=null;     // example of null primitive data typewe define that variable to null;


// creation of object as person
let person={
    name:'avi',          // name as property or key-value pair.
    age:24
}

console.log(person.name);      // accessed by dot notation
console.log(person['age']);    // accessed by bracket notation


//Array is used to contain a list of items
let random=['harsh',1,true];
console.log(random[0]);
console.log(random[1]);
console.log(random[3]);    // it will print undefined
random[3]='rohit';
console.log(random[3]);


console.log(2**3);   //* means exponential power 2^3;

let k=3;
let l='3'
console.log(k==l);   // it will give true -> loose equality
console.log(k===l)   //it will give false -> strict equality


// Ternary Operator
let age=27;
let status = (age>=18) ? 'Vote':'Not Vote';
console.log(status);



// switch statement

let r=1;
switch(r)
{
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('z');

}


