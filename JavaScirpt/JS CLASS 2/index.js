console.log('Chaleye suru krete hai')

// object creation
// let rectangle={
//     length:1,
//     breadth:2,

//     // function or behaviour creation
//     draw: function() {                    // it is method
//         console.log('draw');
//     }
// };
   
    

// how to create object ??
// due to bulky code and too much buggyness of the code, we can use factory function and constructor funtion
// Factory function in which it will return object
// In factory function we create function in which it will create an object and return it.

// function createRectangle(len,bre){
//     // return rectangle;
//     let rectangle={
//         length:len,
//         breadth:bre,
    
//         // function or behaviour creation
//         // draw: function() {
//         //     console.log('draw');
//         // }
//         draw(){
//             console.log('Draw');
//         }
        
//     };
//     return rectangle;
// }
// // Creation of obejct
// let rectangleObj1 = createRectangle(8,10);

// console.log(rectangleObj1.length);      
// console.log(rectangleObj1.draw());
// console.log(rectangle.length);                //this will throw an error




// constructor function -> follow Pascal notations -> first letter of every word is capital
// this keyword is poiting to a current object if there is no object it points to a empty object (No key-value pair)
// constructor function is nthg but only initialising or defing property and method of an object
// new keyword in js return an empty object.

// function Rectangle(){
//     this.length=1;
//     this.breadth=2;
//     this.draw=function(){
//         console.log('Drawing');
//     }
// }

// object creation using constructor funtion
// let rectangleObject = new Rectangle();
// // Dynamic Nature of object -> adding a property.
// rectangleObject.color='yellow';
// // deleting a property
// delete rectangleObject.color;


// let rectangle={
//     length:2,
//     breadth:4
// };

// Reference Types
// let a={
//     value:10
// };
// let b=a;    // when dealing with object address is passed in equating and a is reflecting an address     
// a.value++;
// console.log(a.value);
// console.log(b.value);


// pass by value
// let a=10;
// // kise funtion me aap primitive pass krte ho to copy bante hai
// function inc(a){                  // here a is primitive so here copy bane ge 
//     a++;
// }
// inc(a);
// console.log(a);

//pass by reference
// let a={value:10};
// // kise funtion me aap object pass krte ho to address ya reference pass hota hai
// function incr(a){
//     a.value++;
// }
// incr(a);
// console.log(a);

// for-in loop in gerally applied on object.
let rectangle={
    length:2,
    breadth:5
}
// for(let key in rectangle){
//     //keys are reflected through key variable
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

// for-of loop is only applied on iterables (arrays,maps) here we are using hacks to make it object

// for(let key of rectangle){
//     console.log(key);                // it will throw an error
// }

// for(let key of Object.keys(rectangle)){              // it will print key of an obejct using object.keys
//     console.log(key); 
// }

// for(let key of Object.entries(rectangle)){           // it will print entries of an obejct using object.keys
//     console.log(key);
// }

// How to find properties if exist in an object or not?
// if('color' in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }


// object cloning through iteration, assign and spread.

// through iteration
let src={
    a:1,
    b:2,
    c:3
};
// let des={};
// for(let key in src)
// {
//     des[key]=src[key];
// }

// through assign
let src1={value:10}
// let des=Object.assign({},src);
let des=Object.assign({},src,src1);
// we can copy multiple object and source into destination using object.assign()


// through spread
// let des={...src}



// Garbage Collector-> it find those variable and constant which were not is use and deallocates it automatically.
