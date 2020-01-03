'use strict';

function get_letter_interval(number_a, number_b) {
  if(number_a < number_b) {
    return getLetterByInputNumber(number_a, number_b);
  }
  else {
    return getLetterByInputNumber(number_b, number_a).reverse();
  }
  
}

function getLetterByInputNumber(min, max) {
  var result = [];
  for(var i = min; i <= max; i++) {
      result.push(String.fromCharCode(i + 96));
  }
  return result;
}

module.exports = get_letter_interval;
