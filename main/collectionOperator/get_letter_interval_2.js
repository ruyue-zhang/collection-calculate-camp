'use strict';

function get_letter_interval_2(number_a, number_b) {
  //在这里写入代码
  var alphabetArray = getAlphabetArray();
  return getLetterByInputNumber(alphabetArray,number_a, number_b);
}

function getAlphabetArray() {
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  return alphabetArray;
}

function getLetterByInputNumber(alphabetArray,number_a, number_b) {
  var result = [];
  var min, max;
  (number_a <= number_b) ? (min = number_a, max = number_b) : (min = number_b, max = number_a);
  for(var i = min; i <= max; i++) {
    if(i <= 26 ) {
      result.push(alphabetArray[i]);
    }
    else {
      var count = Math.ceil(i / 26) - 1;
      result.push(alphabetArray[count] + alphabetArray[i - 26 * count]);
    }
  }
  if(number_a > number_b) {
    result.reverse();
  }
  return result;
}


module.exports = get_letter_interval_2;

