'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  var alphabetArray = getAlphabetArray()
  var average = getArrayAverage(collection);
  return alphabetArray[average];
}

function getAlphabetArray() {
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  return alphabetArray;
}

function getArrayAverage(collection) {
  var sum = collection.reduce(function(value1,value2) {
    return value1 + value2;
  },0);
 return Math.ceil(sum / collection.length);
}


module.exports = average_to_letter;

