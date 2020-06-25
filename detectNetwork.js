var detectNetwork = function(cardNumber) {
    
    var network = 'Card network not recognized';
    isClubLength = false;
    isExpressLength = false;
    isVisaLength = false;
    isMasterCardLength = false;
    isDiscoverLength = false;
    isMaestroLength = false;
    isChinaLength = false;
    isSwitchLength = false;
  
    if (cardNumber.length === 14) {
      isClubLength = true;
      isMaestroLength = true;
    } else if (cardNumber.length === 15) {
      isExpressLength = true;
      isMaestroLength = true;
    } else if (cardNumber.length === 13) {
	isVisaLength = true;
	isMaestroLength = true;
    } else if (cardNumber.length === 16) {
	isVisaLength = true; 
	isMasterCardLength = true;
	isDiscoverLength = true;
	isMaestroLength = true;
	isChinaLength = true;
	isSwitchLength = true;
    } else if (cardNumber.length === 19) {
      isVisaLength = true;
      isDiscoverLength = true;
      isMaestroLength = true;
      isChinaLength = true;
      isSwitchLength = true;
    } else if (cardNumber.length === 12)  {
	isMaestroLength = true;
    } else if (cardNumber.length === 17) {
	isMaestroLength = true;
	isChinaLength = true;
    } else if (cardNumber.length === 18) {
      isMaestroLength = true;
      isChinaLength = true;
      isSwitchLength = true;
    } else {
        return network;
    }

    var prefix1 = cardNumber.substring(0, 2);
    var prefix2 = cardNumber.substring(0, 1);
    var prefix3 = cardNumber.substring(0, 3);
    var prefix4 = cardNumber.substring(0, 4);
    var prefix5 = cardNumber.substring(0, 7);

    if (isClubLength && (prefix1 === '38' || prefix1 === '39')) {
        network = "Diner's Club";
    } else if (isExpressLength && (prefix1 === '34' || prefix1 === '37')) {
        network = "American Express";
    } else if (isVisaLength && prefix2 === '4' && (prefix4 !== '4903' && prefix4 !== '4905' && prefix4 !== '4911' && prefix4 !== '4936')) {
        network = "Visa";
    } else if (isMasterCardLength && (Number(prefix1) > 50 && Number(prefix1) < 56)) {
        network = 'MasterCard';
    } else if (isDiscoverLength && prefix1 === '65') {
        network = 'Discover';
    } else if (isDiscoverLength && (Number(prefix3) > 643 && Number(prefix3) < 650)) {
        network = 'Discover';
    } else if (isDiscoverLength && prefix4 === '6011') {
        network = 'Discover';
    } else if (isMaestroLength && (prefix4 === '5018' || prefix4 === '5020' || prefix4 === '5038' || prefix4 === '6304')) {
        network = 'Maestro';
    } else if (isChinaLength && (Number(prefix3) > 623 && Number(prefix3) < 627)) {
	network = 'China UnionPay';
    } else if (isChinaLength && (Number(prefix4) > 6281 && Number(prefix4) < 6289)) {
	network = 'China UnionPay';
   } else if (isChinaLength && (Number(prefix5) > 622125 && Number(prefix5) < 622926)) {
	network = 'China UnionPay';
   } else if (isSwitchLength && (prefix4 === '4903' || prefix4 === '4905' || prefix4 === '4911' || prefix4 === '4936 || prefix5 === '564182' || prefix5 === '633110' || prefix4 === '6333' || prefix3 === '6759')) {
	network = 'Switch';
  } else {
    return network;
  };
