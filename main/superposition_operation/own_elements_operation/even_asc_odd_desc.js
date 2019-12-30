'use strict';
var even_asc_odd_desc = function(collection){
  var evenArray = getArrayByInput(collection,'even');
  var oddArray = getArrayByInput(collection,'odd');
  sortEvenAsc(evenArray);
  sortOddDesc(oddArray);
  return getFirstEvenLastOdd(evenArray,oddArray);
};

function getArrayByInput(collection,input) {
  var outputArray = [];
  collection.forEach(function(value) {
    if('even' === input) {
      if(!(value % 2)) {
        outputArray.push(value);
      }
    }
    else {
      if(value % 2) {
        outputArray.push(value);
      }
    }
  });
  return outputArray;
}

function sortEvenAsc(evenArray) {
  evenArray.sort(function(a,b) {
    return a - b;
  });
}

function sortOddDesc(oddArray) {
  oddArray.sort(function(a,b) {
    return b - a;
  });
}

function getFirstEvenLastOdd(evenArray,oddArray) {
  var result = [];
  evenArray.forEach(function(value) {
    result.push(value);
  });
  oddArray.forEach(function(value) {
    result.push(value);
  });
  return result;
}

module.exports = even_asc_odd_desc;
