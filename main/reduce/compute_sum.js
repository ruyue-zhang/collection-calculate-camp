'use strict';

function calculate_elements_sum(collection) {
  //在这里写入代码
  var sum = collection.reduce(function(x,y) {
    return x + y;
  },0);
  return sum; //TODO: 变量可以inline
}

module.exports = calculate_elements_sum;

