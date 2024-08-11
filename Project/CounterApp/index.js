// here we are selecting element whose id is counter
// we can also getElementById()

const countValue=document.getElementById('counter');
// const countValue = document.querySelector('#counter');
// console.log(countValue);  // it will return element.

// function increment(){
//    // we can use this also without using arrow function 
// }

const increment = () =>{
    //here we extracting text from countValue using innerText in the form of string
    // but we want integer value so we have use parseInt() to convert into integer.
    // get the value from UI
    let value = parseInt(countValue.innerText);
    value=value+1;
    // set the value onto UI
    countValue.innerText=value;

}

const decrement = () =>{
    let value = parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}