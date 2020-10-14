// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterBase = "";
var generatedPassword = "";
function generatePassword() {
  // THEN I am presented with a series of prompts for password criteria

  // WHEN prompted for the length of the password
  var passwordLength = prompt(
    "Choose a password length between 8 and no more than 128 characters."
  );
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  if (passwordLength < 8 || 128 < passwordLength) {
    alert("Sorry, password length must be between 8 and 128 characters");
    return;
  }
  // WHEN prompted for character types to include in the password
  var lower = confirm("Do you want lowercase characters?");
  var upper = confirm("Do you want uppercase characters?");
  var num = confirm("Do you want numeric values?");
  var specChar = confirm("Do you want special characters?");
  // THEN I choose lowercase, uppercase, numeric, and/or special characters
  var lowercaseCharacters = "qwertyuiopasdfghjklzxcvbnm";
  var uppercaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM";
  var numbers = "1234567890";
  var specialCharacters = "~!@#$%^&*()";

  // WHEN I answer each prompt
  if (lower) {
    characterBase = lowercaseCharacters + characterBase;
    console.log(characterBase);
  }
  if (upper) {
    characterBase = uppercaseCharacters + characterBase;
    console.log(characterBase);
  }
  if (num) {
    characterBase = numbers + characterBase;
    console.log(characterBase);
  }
  if (specChar) {
    characterBase = specialCharacters + characterBase;
    console.log(characterBase);
  }

  // THEN my input should be validated and at least one character type should be selected
  else if (!lower && !upper && !num && !specChar) {
    alert("You must pick at least one character type!");
    return;
  }

  // WHEN all prompts are answered
  // THEN a password is generated that matches the selected criteria
  for (var i = 0; i < passwordLength; i++) {
    generatedPassword =
      generatedPassword +
      characterBase.charAt(
        Math.floor(Math.random() * Math.floor(characterBase.length))
      );
  }
  return generatedPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // WHEN the password is generated
  // THEN the password is written to the page
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
