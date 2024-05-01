const registrationForm = document.getElementById('registration');
const username = registrationForm['username'];

// console.log(username);

const errorDisplayDiv = document.getElementById('errorDisplay');

registrationForm.addEventListener('submit', validate);

// Main Validate function
 
function validate(e) {
    const usernameValue = checkUserName();
    if (usernameValue === false) {
        e.returnValue = false;
        return false;
    }
}

//  Validate Username
 
function checkUserName() {
    const twoUniqueChars = /^(?=.*(.).*\1).*$/;

    if (!twoUniqueChars.test(username.value)) {
        console.log('Provide two special characters');
        username.focus();
        return false;
    }
    return username.value;
}

// Validate Username

function validateUsername(username) {
  // Check if the username is blank
  if (username.trim() === '') {
      return "Username cannot be blank.";
  }
 //=======================================================================

 // Check if the username is at least four characters long
 if (username.length < 4) {
  return "Username must be at least four characters long.";
}

//=======================================================================

// Check if the username contains at least two unique characters
const uniqueChars = new Set(username);
if (uniqueChars.size < 2) {
    return "Username must contain at least two unique characters.";
}

//======================================================================

// Check if the username contains any special characters or whitespace
const regex = /^[a-zA-Z0-9]+$/;
if (!regex.test(username)) {
    return "Username cannot contain any special characters or whitespace.";
}

// Username is valid
return "";
}

//==========================================================================

// Email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return "Please enter a valid email address";
}

//===========================================================================

//The email must not be from the domain "example.com."
if (email.endsWith('@example.com')) {
  return "Email from domain example.com is not allowed";

}

//================================================================================

// Check if password is at least 12 characters long
if (password.length < 12) {
  return "Password must be at least 12 characters long.";
}

//================================================================

// Check if password has at least one uppercase letter and one lowercase letter
if (!/[A-Z]/.test(password) && !/[a-z]/.test(password)) {
  return "Password must contain at least one uppercase letter and one lowercase letter.";
}

//======================================================================

// Check if password has at least one number
if (!/\d/.test(password)) {
  return "Password must contain at least one number.";
}

//===========================================================================
// Check if password has at least one special character
if (!/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(password)) {
  return "Password must contain at least one special character.";
}

//=========================================================================

// Check if password contains the word "password" (case-insensitive)
if (password.toLowerCase().includes("password")) {
  return "Password cannot contain the word 'password'.";
}

//=====================================================================
// Check if password contains the username
if (password.includes(username)) {
  return "Password cannot contain the username.";
}

// Password is valid
return "";
//========================================================================

function validateTermsAndConditions() {
  const termsCheckbox = document.getElementById('termsCheckbox'); // Assuming you have a checkbox with id 'termsCheckbox'

  // Check if the terms and conditions checkbox is checked
  if (!termsCheckbox.checked) {
      return "Please accept the terms and conditions.";
  }

  // Terms and conditions accepted
  return "";
}

const validationMessage = validateTermsAndConditions();

if (validationMessage !== "") {
    // Display the validation message to the user
    alert(validationMessage);
    // Prevent form submission
    event.preventDefault(); // Assuming this code is inside a form submission event handler
}

//=============================================================================

function checkUserName() {
    // Regex: checks for two at least unique characters 
    // and no special characters or whitespace
    const regex = /^(?=.*(.).*\1)[A-Za-z0-9]{2,}$/;

    // test regex
    console.log(regex.test(username.value));

   
    

  return true;

}