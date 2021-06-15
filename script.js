// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword()
{
    let password = "";
  const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";


  var length=prompt("least 8 characters and no more than 128 characters")
  if(length=="")
  {
    alert("Length should not be null");
    return;
  }
  if(+length<8)
  {
    alert("leght should be greater than 7.");
    return;
  }
  var numeric=prompt("Do you want to include numeric value? Type Y if not type N.")
  if(numeric=="")
  {
    alert("Can not be null");
    return;
  }
  var symbol=prompt("Do you want to include symbols? Type Y if not type N.")
  if(numeric=="")
  {
    alert("Can not be null");
    return;
  }
  let characters = alpha;
  numeric=="Y" ? (characters += numbers) : "";
  symbol=="Y" ? (characters += symbols) : "";


  for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return password;
  
}
// Write password to the #password input
function writePassword() {
    var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);