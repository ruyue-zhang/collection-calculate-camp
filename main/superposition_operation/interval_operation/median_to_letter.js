'use strict';

function median_to_letter(collection) {
  //在这里写入代码
  var alphabetArray = getAlphabetArray();
  var median = getMedian(collection);
  return getStringByNumber(alphabetArray,median);
}

function getAlphabetArray() {
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  return alphabetArray;
}

function getMedian(collection) {
  if(collection.length % 2) {
    return collection[Math.floor(collection.length / 2)];
  }
  else {
    return Math.ceil((collection[collection.length / 2] + collection[collection.length / 2 - 1]) / 2);
  }
}

function getStringByNumber(alphabetArray,median) {
  if(median <= 26 ) {
    return alphabetArray[median];
  }
  else {
    var count = Math.ceil(median / 26) - 1;
    return alphabetArray[count] + alphabetArray[median - 26 * count];
  }
}

module.exports = median_to_letter;
