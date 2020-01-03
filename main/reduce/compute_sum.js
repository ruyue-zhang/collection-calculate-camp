'use strict';

function calculate_elements_sum(collection) {
  return collection.reduce(function(x,y) {
    return x + y;
  },0);
}

module.exports = calculate_elements_sum;

