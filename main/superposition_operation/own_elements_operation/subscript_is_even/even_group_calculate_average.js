'use strict';
var even_group_calculate_average = function(collection){
  var evenArray = getEvenNumberArray(collection);
  var valueIsEven = getAllValueIsEven(evenArray);
  if(valueIsEven.length) {
    var result = getSortAverage(valueIsEven);
    return result;
  }
  else {
   return [0];
  } 
};

function getEvenNumberArray(collection) {
  var evenArray = [];
  for(var i = 1; i < collection.length; i += 2) {
    evenArray.push(collection[i]);
  }
  return evenArray;
}

function getAllValueIsEven(evenArray) {
  var reuslt = [];
  evenArray.forEach(function(value) {
    if(!(value % 2)) {
      reuslt.push(value);
    }
  });
  return reuslt;
}

function getSortAverage(valueIsEven) {
  var sum1 = 0, count1 = 0;
  var sum2 = 0, count2 = 0;
  var sum3 = 0, count3 = 0;
  var result = [];
  valueIsEven.forEach(function(value) {
    if(value < 10) {
      sum1 += value;
      count1++;
    }
    else if(value < 100) {
      sum2 += value;
      count2++;
    }
    else {
      sum3 += value;
      count3++;
    }
  });
  if(count1) {
    result.push(sum1 / count1);
  }
  if(count2) {
    result.push(sum2 / count2);
  }
  if(count3) {
    result.push(sum3 / count3);
  }
  return result;
}

module.exports = even_group_calculate_average;
