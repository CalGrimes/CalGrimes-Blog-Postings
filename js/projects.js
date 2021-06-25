// Index
// LIVE ON WEBSITE
// 1. Tip Calculate

//1. Tip Calculate starts here
function calculateTip() {
  var billAmt = document.getElementById("billamt").value;
  var serviceQual = document.getElementById("serviceQual").value;
  var numOfPeople = document.getElementById("peopleamt").value;
  //validate input
  if (billAmt === "" || serviceQual == 0) {
    alert("Please enter values");
    return;
  }
  //Check to see if this input is empty or less than or equal to 1
  if (numOfPeople === "" || numOfPeople <= 1) {
    numOfPeople = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  //Calculate tip
  var total = (billAmt * serviceQual) / numOfPeople;
  //round to two decimal places
  total = Math.round(total * 100) / 100;
  //next line allows us to always have two digits after decimal point
  total = total.toFixed(2);
  //Display the tip
  document.getElementById("totalTip").style.display = "block";
  document.getElementById("tip").innerHTML = total;

}
//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
//click to call function
document.getElementById("calculate").onclick = function () {
  calculateTip();
};
// Tip Calculate ends here
//-------------------------

//ISBN Verifier starts here

//ISBN form properties
document.getElementById("isbnNo").oninput = function () {
  switch (document.getElementById("isbnNo").value.length) {
    case (1):
      document.getElementById("isbnNo").value += "-";
      break;
    case (5):
      document.getElementById("isbnNo").value += "-";
      break;
    case (11):
      document.getElementById("isbnNo").value += "-";
      break;
  }

}
document.getElementById("validityDisplay").style.display = "none";

//ISBN verification starts here

//Remove occurances of "-"
function IsbnDeparation(isbn) {
  return isbn.replace(/-/g, '');
}
function verifyCharacterX(isbn) {
  if (isbn[isbn.length - 1] === 'X') {
    return true;
  }
  return false;
}

//Check for invalid characters
function verifyInvalidCharacters(isbn) {
  if (isbn.match(/[a-zA-Z]/g)) {
    if (verifyCharacterX(isbn)) {
      return false;
    }
    return true;
  }
}

//If last position of isbn is X then replace with 10
function replaceXto10(isbn) {
  return isbn[isbn.length - 1] = 10;
}

function convertsStringToNumbers(isbn) {
  isbn = isbn.split('');
  return isbn.map(value => Number(value));
}

//postions 0-9 multiplied by 10-1 respectively and added
function sumAndMultiplicationRecursive(isbn, index, counter) {
  if (counter === 1)
    return isbn[index] * counter;

  return isbn[index] * counter + sumAndMultiplicationRecursive(isbn, ++index, --counter);
}

//final part of ISBN formula mod 11. If the result is 0. The ISBN is valid
function isValidIsbn(isbn) {
  if (isbn % 11 === 0)
    return true;

  return false;
}

function verifyISBN() {
  //Get user input
  isbnNo = document.getElementById("isbnNo").value;

  //Removing occurances of "-"
  isbnNo = IsbnDeparation(isbnNo);

  //Check there is no invalid charcters
  if (verifyInvalidCharacters(isbnNo)) {
    return false;
  }

  //Check if check digit is 10 (X)
  if (verifyCharacterX(isbnNo)) {
    replaceXto10(isbnNo);
  }

  isbnNo = convertsStringToNumbers(isbnNo);

  return isValidIsbn(sumAndMultiplicationRecursive(isbnNo, 0, isbnNo.length));
}

document.getElementById("verify").onclick = function () {
  document.getElementById("validityDisplay").style.display = "block";
  if (verifyISBN())
    document.getElementById("valid").innerHTML = "Valid ISBN";
  else
    document.getElementById("valid").innerHTML = "Invalid ISBN";
  }
//ISBN Verifier ends here
// ------------------------


