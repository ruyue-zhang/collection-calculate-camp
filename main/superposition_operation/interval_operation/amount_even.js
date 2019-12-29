'use strict';

function amount_even(collection) {
  //在这里写入代码
  var result = collection.reduce(function(total,currentValue) {
    return currentValue % 2 ? total : total + currentValue;
  },0);
  return result;
}

module.exports = amount_even;
