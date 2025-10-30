const chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let selectedStrength = "medium";

function setActiveStrength(strength) {
    selectedStrength = strength;
    
    const buttons = document.querySelectorAll("#strength-select button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }
    
    if (strength === "weak") {
        document.getElementById("weakBtn").classList.add("active");
    } else if (strength === "medium") {
        document.getElementById("mediumBtn").classList.add("active");
    } else {
        document.getElementById("strongBtn").classList.add("active");
    }
}

function generatePassword(includeSymbols) {
    let length;
    if (selectedStrength === "weak") {
        length = 8;
    } else if (selectedStrength === "medium"){
        length = 12;
    } else {
        length = 14;
    }

    const availableChars = includeSymbols ? chars : chars.slice(0, 62);

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }
    return password;
}

function generatePass() {
  const includeSymbols = document.getElementById("useSymbols").checked;
  const password = generatePassword(includeSymbols);
  const passwordField = document.getElementById("password");
  const generateBtn = document.getElementById("generateBtn");
    
  generateBtn.classList.add("push-anim");
  setTimeout(() => generateBtn.classList.remove("push-anim"), 250);

  passwordField.value = password;
  passwordField.classList.add("show");
  setTimeout(() => passwordField.classList.remove("show"), 400);
}

function copyBtn() {
  const passwordField = document.getElementById("password");

  passwordField.select();
  document.execCommand("copy");
  alert("Password copied to clipboard!");

  passwordField.classList.add("fade-out");

  // Reset active strength selection
  const buttons = document.querySelectorAll("#strength-select button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("active");
  }
  selectedStrength = "medium"; // Reset to default
  
  setTimeout(() => {
    passwordField.value = "";
    passwordField.placeholder = "A password to conquer the tri-state area";
    passwordField.classList.remove("fade-out");
  }, 600);
}

setActiveStrength("medium")



