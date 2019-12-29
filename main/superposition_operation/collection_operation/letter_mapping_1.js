'use strict';

function even_to_letter(collection) {
  //在这里写入代码
  var alphabetArray = getAlphabetArray();
  return getLetterByEven(alphabetArray,collection);
}

function getAlphabetArray() {
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  return alphabetArray;
}

function getLetterByEven(alphabetArray,collection) {
  var result = [];
  collection.forEach(function(value) {
    if(!(value % 2)) {
      result.push(alphabetArray[value]);
    }
  });
  return result;
}

module.exports = even_to_letter;
