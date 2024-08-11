console.log('hey its me');

let num=[1,2,3,4];
console.log(num);

// Insertion of element ->
// end -> push
// begining -> unshift
// middle -> splice  num.splice(index,delete count,the value which you want to insert)
num.push(5);
num.unshift(0);
num.splice(0,0,'a','b');
console.log(num);

// Searching
// console.log(num);
console.log(num.indexOf(3));
console.log(num.indexOf(19));   // this will give -1 as it is not present

// if we want to check if a number exist in an array or not

if(console.log(num.indexOf(3))!=-1)
    console.log("present");  // but this is not the best approach

// best approach to use includes method()
console.log(num.includes(4));    // this function return true if a number is present in an array
// Advanced Version
console.log(num.indexOf(7,2));  // it startt from index 2 to search 7 that it can present or not


// lets create array of object..... Above we are applying our method on to primitive data type.

let courses=[
    {no:1, name:'Avi'},
    {no:2, name:'Rahul'}
];
console.log(courses);

// here both object references are different that's why -1 or false. And in primitive we are comparing value.
console.log(courses.indexOf({no:1, name:'Avi'}));    // it will return -1, but it present, here we use callback function

// 
// here we are searching in object using find method
// arrayName.find(callback funtion) -> it will return object
// Predicate function means on which condition we are going to find object

// let course = courses.find(function(course){
//     return course.name=='Avi';
// });
// console.log(course);

// we can deduce the upper callback function using arrow function (More READABLE, Take less space)
// if there is no parameter
// let course = courses.find( () => course.name == 'Rahul');
let course=courses.find(course => course.name == 'Rahul');
console.log(course);

// Removing Element
let x=[9,8,7,6,5];
x.pop();              // end -> pop()
x.shift()              // begining -> shift()
x.splice(2,1)           // middle -> splice(index,number of element u want to delete)
console.log(x);


// Emptying an Arrays using num.length()
let num1=[1,2,3,4];
let num2=num1;

// num1=[]   // here we are pointing num1 to empty object,Not deleting it
num1.length=0;      // here we are deleting num1 array object. GOOD PRACTICE
// num1.splice(0,num1.length);
console.log(num1);
console.log(num2);


// Combining ARRAY
// Combining and slicing on object ??? HOW??
// let first=[1,2,3,4];
// let second=[9,8,7,6];

// let combined=first.concat(second);     // here we are combining two array
// console.log(combined);


// Slicing ARRAY
// let slice=combined.slice(2,4);       // slice(x,y) x is include and y is exclude.
// let slice=combined.slice()   // full slicing -> original array ki copy bany jaate
// console.log(slice);

// Spread Operator
let first=[1,2,3];
let second=[4,5,6];
let combined=[...first,'a',...second,'b',true];   // we can also combined two array through spread operator
console.log(combined);

// using spread operator we can contenate and also create copy
// copy kaise create karu
let another=[...combined];
console.log(another);


// iterating an array
let arr1=[1,2,3,4,5,6,7];
// for(let i=0;i<arr1.length;i++)
//     console.log(arr1[i]);

// for-of applied on iterable
// for(let value of arr1){
//     console.log(value);
// }

// we can also use for-each loop to traverse an array
// arr1.forEach(function(numbers){
//     console.log(numbers);
// });

// we can also use arrow function
arr1.forEach(numbers=>console.log(numbers));


// Joining ARRAYS
// joining an array using join method
// let arr2=[1,2,3,4,5];
// const joined=arr2.join(',');
// console.log(joined);


// split method is basically used for string
// split method will create an array...
// let mess='this is my first message';
// let parts=mess.split(' ');
// console.log(parts);

// we can also join the string using join method
// let joined=parts.join('_');
// console.log(joined);

// Applying sort() and reverse() method on primitive 
// let a1=[9,8,3,2,1];
// a1.sort();
// console.log(a1);
// a1.reverse();
// console.log(a1);

// how we can apply sort() method on object ???


// Filtering array
// let a=[1,2,-1,-4];
// let filtered=a.filter(function(value)
// {
//     return value>=0;
// });
// // let filtered=a.filter(value => value>=0)   // using arrow 
// console.log(filtered);


// mapping arrays -> map each elemet of array to something else.
// Like ASCII value is mapped to a number....
// let num3=[8,9,10,11];
// let items = num3.map(function(value)
// {
//     return 'student_no'+value;
// });
// console.log(items);

// Maping with object....

let num4=[1,2,-6,-7,5];
let filtered = num4.filter(value => value>=0);

let items = filtered.map(function(num)
{
    return {value: num};
});
console.log(items);


// Chaining.....
