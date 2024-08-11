//factory function

// function createRectangle(length,breadth){
//     let rectangle={
//         length,
//         breadth,
//         draw(){
//             console.log('Drawing');
//         }
//     };
//     return rectangle;
// }
// let obj=createRectangle(5,3);   
// console.log(obj.length);
// console.log(obj.draw());


// Constructor funtion
function Rectangle() {
    this.length=1;
    this.breadth=2;
    this.draw=function() {
        console.log('Drawaing');
    }

}
// object creation
let obj=new Rectangle();     // new keyword in js return an empty object
obj.color='red';       // addding property  due to dynamic nature of object
delete obj.color;    // deleting a propery

