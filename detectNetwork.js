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

  var network = 'Card network not recognized';
  isClubLength = false;
  isExpressLength = false;
  isVisaLength = false;
  isMasterCardLength = false;
  isDiscoverLength = false;
  isMaestroLength = false;

  if (cardNumber.length === 14) {
    isClubLength = true;
  }

  if (isClubLength && (cardNumber[1] === '8' || cardNumber[1] === '9')) {
    network = "Diner's Club";
  }

  if (cardNumber.length === 15) {
    isExpressLength = true;
  }

  if (isExpressLength && (cardNumber[1] === '4' || cardNumber[1] === '7')) {
    network = "American Express";
  }

  if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
    isVisaLength = true;
  }

  if (isVisaLength && cardNumber[0] === '4') {
    network = "Visa";
  }

  if (cardNumber.length === 16) {
    isMasterCardLength = true;
  } 

  if (isMasterCardLength && cardNumber[0] === '5' && (cardNumber[1] === '1' || cardNumber[1] === '2' || cardNumber[1] === '3' || cardNumber[1] === '4' || cardNumber[1] === '5')) {
    network = "MasterCard";
  }
  
  if (cardNumber.length === 16 || cardNumber.length === 19) {
    isDiscoverLength = true;
  }

  if (isDiscoverLength && cardNumber[0] === '6'  &&  cardNumber[1] === '5') {
    network = 'Discover';
  }
 
  if (isDiscoverLength && cardNumber[0] === '6' && cardNumber[1] === '0' && cardNumber[2] === '1' && cardNumber[3] === '1') {
    network = 'Discover';
  }

  if (isDiscoverLength && cardNumber[0] === '6' && cardNumber[1] === '4' && cardNumber[2] === '4' && cardNumber[3] === '-' && cardNumber[4] === '6' && cardNumber[5] === '4' && cardNumber[6] === '9') {
    network = 'Discover';
  }

  if (cardNumber.length === 12 || cardNumber.length === 13 || cardNumber.length === 14 || cardNumber.length === 15 || cardNumber.length === 16 || cardNumber.length === 17 || cardNumber.length === 18 || cardNumber.length === 19) {
    isMaestroLength = true;
  }

  if (isMaestroLength && (cardNumber[0] === '5' || cardNumber[0] === '6') && (cardNumber[1] === '0' || cardNumber[1] === '3') && (cardNumber[2] === '1' || cardNumber[2] === '2' || cardNumber[2] === '0') && (cardNumber[3] === '8' || cardNumber[3] === '0' || cardNumber[3] === '4')) {
    network = 'Maestro';
  }

   return network;
 
 // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
};



