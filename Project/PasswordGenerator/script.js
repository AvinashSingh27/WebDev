// here we fetching all the elements
const lengthDisplay = document.querySelector("[data-lengthNumber]");

const inputSlider = document.querySelector("[data-lengthSlider]");

const passwordDisplay = document.querySelector("[data-passwordDisplay]");
const copyBtn = document.querySelector("[data-copy]");
const copyMsg = document.querySelector("[data-copyMsg]");
const uppercaseCheck = document.querySelector("#uppercase");
const lowercaseCheck = document.querySelector("#lowercase");
const numbersCheck = document.querySelector("#numbers");
const symbolsCheck = document.querySelector("#symbols");
const indicator = document.querySelector("[data-indicator]");
const generateBtn = document.querySelector(".generateButton");

const allCheckBox = document.querySelectorAll("input[type=checkbox]");

const symbols = '~`!@#$%^&*()_-+={[}]|:;"<,>.?/';


let password = "";
let passwordLength=10;
let checkCount=1;
handleSlider();
//set strength circle to grey
setIndicator("#ccc");

// set password length
// this funtion will reflect password length on the UI
function handleSlider(){
    inputSlider.value = passwordLength;
    lengthDisplay.innerText = passwordLength;

}

function setIndicator(color){
    indicator.style.backgroundColor=color;
    // shodow
}
function getRndInteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;  //1:09  it will return number from min to max;
}

function generateRandomNumber(){
    return getRndInteger(0,9);
}

function generateLowerCase(){
    return String.fromCharCode(getRndInteger(97,123)); // but it will give a number so we have convert into string
}

function generateUpperCase(){
    return String.fromCharCode(getRndInteger(65,91)); // but it will give a number so we have convert into string
}

// there is no mapping of symbols
// so we have to create string with all symbols.

function generateSymbol(){
    const randNum = getRndInteger(0,symbols.length);
    return symbols.charAt(randNum);   // charAt funtions tell character at that index.
}

function calcStrength() {
    let hasUpper = false;
    let hasLower = false;
    let hasNum = false;
    let hasSym = false;
    if (uppercaseCheck.checked) hasUpper = true;
    if (lowercaseCheck.checked) hasLower = true;
    if (numbersCheck.checked) hasNum = true;
    if (symbolsCheck.checked) hasSym = true;
  
    if (hasUpper && hasLower && (hasNum || hasSym) && passwordLength >= 8) {
      setIndicator("#0f0");
    } else if (
      (hasLower || hasUpper) &&
      (hasNum || hasSym) &&
      passwordLength >= 6
    ) {
      setIndicator("#ff0");
    } else {
      setIndicator("#f00");
    }
}

async function copyContent(){
  try{
    await navigator.clipboard.writeText(passwordDisplay.value);
    copyMsg.innerText='copied';
  }
  catch(e)
  {
    copyMsg.innerText='failed';
  }
  // to make copy wala span visible.
  copyMsg.classList.add("active");
  setTimeout( () => {
    copyMsg.classList.remove("avtive");
  },2000);
}

function handleCheckBoxChange(){
  checkCount=0;
  allCheckBox.forEach( (checkbox) =>{
    if(checkbox.checked)
      checkCount++;
  });

  // special condition
  if(passwordLength<checkCount){
    passwordLength=checkCount;
    handleSlider();
  }
}

allCheckBox.forEach( (checkbox) =>{
  checkbox.addEventListener('change', handleCheckBoxChange);
})

inputSlider.addEventListener('input', (e) =>{
  passwordLength=e.target.value;
  handleSlider();
})

copyBtn.addEventListener('click', () => {
  if(passwordDisplay.value)
    copyContent();
})

generateBtn.addEventListener('clcik', () => {
  // none of the checkbox are selected
  if(checkCount<=0) return;
  
  if(passwordLength<checkCount){
    passwordLength=checkCount;
    handleSlider();
  }

  // lets start the journey to find the new password.
  // remove old password
  password="";

  // lets put the stuff metioned by checkboxes

  // if(uppercaseCheck.checked){
  //   password+=generateUpperCase();
  // }
  // if(lowercaseCheck.checked){
  //   password+=generateLowerCase();
  // }
  // if(numbersCheck.checked){
  //   password+=generateRandomNumber();
  // }
  // if(symbolsCheck.checked){
  //   password+=generateSymbol();
  // }

  let funcArr = [];
  if(uppercaseCheck.checked)
    funcArr.push(generateUpperCase);


});