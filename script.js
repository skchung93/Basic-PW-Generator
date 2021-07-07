// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// These are the prompts that are asked for in the read me to determine length and characteristics the user would like
// include in the password that will be generated.
var length = prompt("How many characters would you like to use? (Length must be at least 8 characters and less than 128")
console.log(length);
if (length < 8){
  length = prompt("Please select a number larger than or equal to 8");
  console.log(length);
}
if (length > 128){
  length = prompt("Please select a number less than or equal to 128");
  console.log(length);
}


var upperCase = confirm("Would you like to use UPPERCASE letters?")
var uLetters = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
console.log(upperCase);

var lowerCase = confirm("would you like to use lowercase letters?")
var lLetters = ['abcdefghijklmnopqrstuvwxyz']
console.log(lowerCase);

var numbers = confirm("Would you like to use numbers?")
var nums = ['0123456789']
console.log(numbers);

var special = confirm("Would you like to use special characters?")
var specChar = ['!@#$%^&*()']
console.log(numbers);

// variable used to store a large base of characters based on the user's choice.
var randomChars = '';

if (upperCase === true){
  randomChars = randomChars + uLetters;
}
if (lowerCase === true){
  randomChars += lLetters;
}
if (numbers === true){
  randomChars += nums;
}
if (special === true){
  randomChars += specChar;
}
console.log(randomChars);

// pw is a variable we're using as the password dummy variable so we can add characters to a string
var pw = '';

function passwordGenerator(){
for (i=0; i< length; i++){
  pw = pw + randomChars.charAt(Math.floor(Math.random() * randomChars.length));

  }
  return pw;
}

console.log(passwordGenerator());
document.getElementById('password').textContent = pw;


//THIS BUNDLE OF CODE IS INCORRECT BUT I thought I'd include it to show the struggles I went through... lol

// if statement creating the randomChars variable based on the user's choices.
// if (upperCase === false && lowerCase === true && numbers === true && special === true){
//   randomChars = lLetters + nums + specChar;
// }else if (upperCase === false && lowerCase === false && numbers === true && special === true){
//   randomChars = nums + specChar;
// }else if (upperCase === false && lowerCase === false && numbers === false && special === true){
//   randomChars = specChar;
// }else if (upperCase === true && lowerCase === true && numbers === true && special === false){
//   randomChars = uLetters + lLetters + nums;
// }else if (upperCase === true && lowerCase === true && numbers === false && special === false){
//   randomChars = uLetters + lLetters;
// }else if (upperCase === true && lowerCase === false && numbers === false && special === false){
//   randomChars = uLetters;
// }else if (upperCase === false && lowerCase === true && numbers === false && special === false){
//   randomChars = lLetters;
// }else if (upperCase === false && lowerCase === true && numbers === true && special === false){
//   randomChars = lLetters + nums;
// }else if (upperCase === false && lowerCase === true && numbers === false && special === true){
//   randomChars = lLetters + specChar;
// }else if (upperCase === false && lowerCase === false && numbers === true && special === true){
//   randomChars = nums + specChar;
// }else if (upperCase === true && lowerCase === false && numbers === true && special === true){
//   randomChars = uLetters + nums + specChar;
// }else if (upperCase === false && lowerCase === true && numbers === true && special === true){
//   randomChars = lLetters + nums + specChar;
// }else if (upperCase === true && lowerCase === false && numbers === false && special === true){
//   randomChars = uLetters + specChar;
// }else if (upperCase === false && lowerCase === false && numbers === true && special === false){
//   randomChars = nums;
// }else if (upperCase === true && lowerCase === false && numbers === true && special === false){
//   randomChars = uLetters + nums;
// }else {
//   randomChars = uLetters + lLetters + nums + specChar;
// }