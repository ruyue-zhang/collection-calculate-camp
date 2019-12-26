'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var result = [];
  var min, max;
  (number_a <= number_b) ? (min = number_a, max = number_b) : (min = number_b, max = number_a);
  for(var i = min; i <= max; i++) {
    if(!(i % 2)) {
      result.push(i);
    }
  }
  if(number_a > number_b) {
    result.reverse();
  }
  return result;
}


module.exports = get_integer_interval_2;
