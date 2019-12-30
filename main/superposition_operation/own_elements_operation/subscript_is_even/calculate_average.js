'use strict';
var calculate_average = function(collection){
  var count = 0;
  var sum = 0;
  for(var i = 2; i < collection.length; i += 2) {
    count++;
    sum += collection[i];
  }
  return sum / count;
};
module.exports = calculate_average;
