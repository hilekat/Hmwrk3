var generateBtn = document.querySelector("#generate");{
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '[', ']', "'", '=', '<', '>', '/', ',', '.', '`'];


function generatePassword() {

  var passwordLength = prompt('How many characters would you like your password to be? Please choose between 5 - 15 characters.');


  if (!passwordLength) {
    alert('No value entered.');
    return;
  } else if (passwordLength < 5 || passwordLength > 15) {
    alert('A value between 5 - 15 characters long was not entered.');
    return;
  } else {
    var confirmLowerCase = confirm("Would you like lowercase letters in your password?");
    var confirmUpperCase = confirm("Would you like uppercase letters in your password?");
    var confirmNumbers = confirm("Would you like numbers in your password?");
    var confirmSpecial = confirm("Would you like special characters in your password?");


    if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial) {
      alert('You must select at least one criteria. Please try again');
    } else {
      var allChar = [];
      if (confirmLowerCase) allChar = allChar.concat(lowerCase);
      if (confirmUpperCase) allChar = allChar.concat(upperCase);
      if (confirmNumbers) allChar = allChar.concat(numbers);
      if (confirmSpecial) allChar = allChar.concat(special);


      var password = "";
      for (var i = 1; i <= passwordLength; i++) {
        var randomChar = allChar[Math.floor(Math.random() * allChar.length)]
        password = password + randomChar
      }
      return password;
    }
  }
}
generateBtn.addEventListener("click", writePassword);
