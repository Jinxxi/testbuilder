var detectNetwork = function(cardNumber) {
    
    var network = 'Card network not recognized';
    isClubLength = false;
    isExpressLength = false;
    isVisaLength = false;
    isMasterCardLength = false;
    isDiscoverLength = false;
    isMaestroLength = false;
  
    if (cardNumber.length === 14) {
      isClubLength = true;
      isMaestroLength = true;
    } else if (cardNumber.length === 15) {
      isExpressLength = true;
      isMaestroLength = true;
    } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) {
      isVisaLength = true;
      isMasterCardLength = true;
      isDiscoverLength = true;
      isMaestroLength = true;
    } else if (cardNumber.length === 12 || cardNumber.length === 17 || cardNumber.length === 18) {
      isMaestroLength = true;
    } else {
        return network;
    }

    var prefix1 = cardNumber.substring(0, 2);
    var prefix2 = cardNumber.substring(0, 1);
    var prefix3 = cardNumber.substring(0, 3);
    var prefix4 = cardNumber.substring(0,4);

    if (isClubLength && (prefix1 === '38' || prefix1 === '39')) {
        network = "Diner's Club";
    } else if (isExpressLength && (prefix1 === '34' || prefix1 === '37')) {
        network = "American Express";
    } else if (isVisaLength && prefix2 === '4') {
        network = "Visa";
    } else if (isMasterCardLength && (Number(prefix1) > 50 && Number(prefix1) < 56)) {
        network = 'MasterCard';
    } else if (isDiscoverLength && prefix1 === '65') {
        network = 'Discover';
    } else if (isDiscoverLength && (Number(prefix3) < 643 && Number(prefix3) > 650)) {
        network = 'Discover';
    } else if (isDiscoverLength && prefix4 === '6011') {
        network = 'Discover';
    } else if (isMaestroLength && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
        network = 'Maestro';
    }
  
    return network;
  };
