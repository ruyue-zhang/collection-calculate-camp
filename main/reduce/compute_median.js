'use strict';

function compute_median(collection) {
  arraySortAsc(collection);
  return getMedianNumber(collection);
}

function arraySortAsc(dataArray) {
  dataArray.sort(function(a,b) {
    return a - b;
  });
}

function getMedianNumber(dataArray) {
  var len = dataArray.length;
  var median = len % 2 ? dataArray[Math.floor(len / 2)] : (dataArray[len / 2] + dataArray[len / 2 - 1]) / 2;
  return median;
}

module.exports = compute_median;


