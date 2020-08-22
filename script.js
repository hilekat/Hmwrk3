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


  var passwordLength = prompt('Your password can be between 8 - 128 characters. How long would you like your password to be? (whole numbers only)');


  if (!passwordLength) {
    alert('No value entered, try again.');
    return;
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a password with ONLY 8 - 128 characters.');
    return;
  } else {
    var confirmLowerCase = confirm("Any lowercase letters in your password?");
    var confirmUpperCase = confirm("Any uppercase letters in your password?");
    var confirmNumbers = confirm("Any numbers in your password?");
    var confirmSpecial = confirm("Any special characters in your password?");


    if (!confirmLowerCase && !confirmUpperCase && !confirmNumbers && !confirmSpecial) {
      alert('You must select at least one, try again');
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
