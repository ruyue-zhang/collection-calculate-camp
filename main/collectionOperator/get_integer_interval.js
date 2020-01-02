'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  //TODO: format一下这个文件，少一些空格
  var result = [];
  var min, max;
  (number_a <= number_b) ? (min = number_a, max = number_b) : (min = number_b, max = number_a);
  for(var i = min; i <= max; i++) {
    result.push(i);
  }
  if(number_a > number_b) {
    result.reverse();
  }
  //TODO: 判断了多次number_a和number_b显得逻辑有点乱，可以写if-else
  return result;
}

module.exports = get_integer_interval;

