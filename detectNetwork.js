// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  
  var network = "Card network not recognized";

isValidLength = false;
if (cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
  isValidLength = true;
}

if (isValidLength === false) {
  return network;
}

if (cardNumber[0] !== '3'|| cardNumber[0] !== '4' || cardNumber[0] !== '5') {
  return network;
}


if ((cardNumber[1] === '8' || cardNumber[1] === '9') && cardNumber[0] === '3') {
  network = "Diner's Club";
}

if ((cardNumber[1] === '4' || cardNumber[1] === '7') && cardNumber[0] === '3') {
  network = "American Express";
}

if (cardNumber[0] === '4') {
  network = 'Visa';
}

if (cardNumber[0] === '5' && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5')) {
  network = 'MasterCard';
}

return network;
 
 // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



