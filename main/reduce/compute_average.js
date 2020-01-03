'use strict';

function compute_average(collection) {
  var totalValue = collection.reduce(function(total,currentValue) {
    return total + currentValue;
  },0);
  return totalValue / collection.length;
}

module.exports = compute_average;

