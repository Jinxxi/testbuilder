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
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  //output: 'MasterCard' or 'American Express'


  if((cardNumber.slice(0,2) === '38' || cardNumber.slice(0,2) === '39') && cardNumber.length === 14) {
		return "Diner's Club";
	}  

  if((cardNumber.slice(0,2) === '34' || cardNumber.slice(0,2) === '37') && cardNumber.length == 15) {
    return  "American Express";
  }  

  //Visa always has a prefix of 4 and a length of 13, 16, or 19.
  //MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  
//(['4903', '4905', '4911', '4936'].includes(cardNumber.slice(0,4) === false)) &&  case excluding switch
  if( cardNumber.slice(0,1) === '4' && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)) {
    return "Visa";
  } 

  if((cardNumber.slice(0,2) >='51' && cardNumber.slice(0,2) <= '55') && cardNumber.length === 16) {
    return "MasterCard";
  } 
//
//Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
//Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  if( (cardNumber.length === 16 || cardNumber.length === 19) && 
      (cardNumber.slice(0, 2) === '65' || cardNumber.slice(0,4) === '6011' || 
      (cardNumber.slice(0,3) >= '644' && cardNumber.slice(0,3) <= '649') )  )  {
    return "Discover";
  } 

  if(['5018', '5020', '5038', '6304'].includes(cardNumber.slice(0,4)) && cardNumber.length >= 12 && cardNumber.length <= 19) {
    return "Maestro";
  } 

//China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

 if( (16 <= cardNumber.length && cardNumber.length <= 19) && 
   ( ('622126' <= cardNumber.slice(0,6) && cardNumber.slice(0, 6) <= '622925') || 
     ('624' <= cardNumber.slice(0, 3) && cardNumber.slice(0, 3) <= '626') ||
     ('6282' <= cardNumber.slice(0, 4) && cardNumber.slice(0, 4) <= '6288')) )  {
      return 'China UnionPay';
}
//Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
  if( (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && 
    (['4903', '4905', '4911', '4936', '6333', '6759'].includes(cardNumber.slice(0, 4)) || 
      ['564182', '633110'].includes(cardNumber.slice(0, 6))) ) {
  return 'Switch';
  }

 
} //detectNetwork()  


// Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
 //Visa always has a prefix of 4 and a length of 13, 16, or 19.









