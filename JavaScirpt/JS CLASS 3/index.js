console.log('Hello Jee');
// String behave as a both primitive and object

//Primitive
let lastName="  Singh  ";
// lastName.               // using dot notation we can treat primitive type into obejct (Js internally treat lastName as String object)
// Object -> here we are using string constrcutor function to make it string object.
let firstName = new String("Avi");

let mess='this is my first message';
let words=mess.split(' ');           // using split we can slit message on the basic of (' ')
console.log(words);                 // Array
  
// Template Literal
let message=`My 
name is 
${firstName} Singh`;   // we can also dynamic variable using placeholder.

console.log(message);

// Date and Time

let date = new Date();
console.log(date);    // it will current time and date.  
let date1 = new Date();
console.log(date1);

// we can also use getter setter method in data
// date1.setFullYear();
// date1.setMonth();