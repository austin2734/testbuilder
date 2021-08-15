// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Warning: Regular Expressions (RegEx) are NOT ALLOWED on this assignment!

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long


  if (cardNumber[0] + cardNumber[1] === '38' || cardNumber[0] + cardNumber[1] === '39') {
    if (cardNumber.length === 14) {
      return 'Diner\'s Club';
    }
  }
  if (cardNumber[0] + cardNumber[1] === '34' || cardNumber[0] + cardNumber[1] === '37') {
    if (cardNumber.length === 15) {
      return 'American Express';
    }
  }
  if (cardNumber[0] === '4') {
    if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Visa';
    }
  }
  var masterPrefix = ['51', '52', '53', '54', '55'];
  var masterActual = cardNumber.substring(0, 2);

  if (masterPrefix.indexOf(masterActual) !== -1) {
    if (cardNumber.length === 16) {
      return 'MasterCard';
    }
  }
  var discoverPrefix = ['644', '645', '646', '647', '648', '649'];
  var discoverActual = cardNumber.substring(0, 3);
  if (discoverPrefix.indexOf(discoverActual) !== -1 || cardNumber.substring(0, 4) === '6011' ||
      cardNumber.substring(0, 2) === '65') {

    if (cardNumber.length === 16 || cardNumber.length === 19) {
      return 'Discover';
    }
  }
  var maestroPrefix = ['5018', '5020', '5038', '6304'];
  var maestroActual = cardNumber.substring(0, 4);

  if (maestroPrefix.indexOf(maestroActual) !== -1) {
    if (cardNumber.length >= 12 && cardNumber.length <= 19) {
      return 'Maestro';
    }
  }

};



