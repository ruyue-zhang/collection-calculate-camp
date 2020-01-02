'use strict';

function amount_even(collection) {
  //在这里写入代码
  var sum = collection.reduce(function(total,currentValue) {
    return currentValue % 2 ? total : total + currentValue;
  },0);
  return sum; //TODO: 变量可以inline
}

module.exports = amount_even;
