'use strict';

function compute_chain_median(collection) {
  var dataArray = stringToNumberArray(collection);
  arraySortAsc(dataArray);
  return getMedianNumber(dataArray);
}

function stringToNumberArray(collection) {
  var dataArray = collection.split('->').map(function(value) {
    return parseInt(value);
  });
  return dataArray;
}

function arraySortAsc(dataArray) {
  dataArray.sort(function(a,b) {
    return a - b;
  });
}

function getMedianNumber(dataArray) {
  var len = dataArray.length;
  return  len % 2 ? dataArray[Math.floor(len / 2)] : (dataArray[len / 2] + dataArray[len / 2 - 1]) / 2;
}

module.exports = compute_chain_median;
