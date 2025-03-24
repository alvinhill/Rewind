// Control
// Get string from the page

function getValue(){
document.getElementById("alert").classList.add("invisible");

let userString = document.getElementById("userString").value;

let revString = reverseString(userString);

displayString(revString);



}

//Logic
// Reverse the string

function reverseString(userString){
let revString=[];



// for loop
for (let index = userString.length - 1; index >=0; index--) {

    revString += userString[index];
    
}
return revString; 
}

// View
// Display the string
function displayString(revString){

// write message to page
document.getElementById("msg").innerHTML=`Your string reversed is: ${revString}`;


// show alert box
document.getElementById("alert").classList.remove("invisible");

}