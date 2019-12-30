'use strict';
var calculate_median = function(collection){
  var evenArray = countEvenNumber(collection)
  return getMedian(evenArray);
};

function countEvenNumber(collection) {
  var evenArray = [];
  for(var i = 1; i < collection.length; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

function getMedian(result) {
  if(result.length % 2) {
    return result[parseInt(result.length / 2)];
  }
  else {
    return (result[result.length / 2] + result[result.length / 2 - 1]) / 2;
  }
}

module.exports = calculate_median;
