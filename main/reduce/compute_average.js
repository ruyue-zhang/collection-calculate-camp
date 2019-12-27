'use strict';

function compute_average(collection) {
  //在这里写入代码
  var totalValue = collection.reduce(function(total,currentValue) {
    return total + currentValue;
  },0);
  return totalValue / collection.length;
}

module.exports = compute_average;

