
// applying event listener
// document.addEventListener('click',function(){
//     console.log('I have clicked on the documents');
// });

// 2nd way to define event listener


// function eventFunction(){
//     console.log('I have clicked on documents');
// }

// document.addEventListener('click',eventFunction);

// remove event listener...
// document.removeEventListener('click',eventFunction);

//if we want fetch paragraph
// through event object how to extract event information
// const content=document.querySelector('#wrapper');            // Event Object EXAMPLE
// content.addEventListener('click',function(event)
// {
//     console.log(event);
// });

//preventDefault

// let links=document.querySelectorAll('a');
// let thirdLink=links[2];
// thirdLink.addEventListener('click',function(event)
// {
//     event.preventDefault();
//     console.log('Maja AA gaya');
// });

// creating new element using createElement in JS
// How to avoid too many event...
let myDiv=document.createElement('div');

function paraStatus(event)
{
        // console.log('I have clicked on para');
        console.log('Para' + event.target.textContent);
}
myDiv.addEventListener('click',paraStatus);
for(let i=1;i<=100;i++){
    let newElement=document.createElement('p');
    newElement.textContent='This is para'+ i;

   
    myDiv.appendChild(newElement);
}
document.body.appendChild(myDiv);
