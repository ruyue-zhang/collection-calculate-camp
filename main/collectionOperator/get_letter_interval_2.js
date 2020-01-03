'use strict';

function get_letter_interval_2(number_a, number_b) {
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
    if(i <= 26 ) {
      result.push(String.fromCharCode(i + 96));
    }
    else {
      var count = Math.ceil(i / 26) - 1;
      result.push(String.fromCharCode(count + 96) + String.fromCharCode(i - 26 * count + 96));
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

