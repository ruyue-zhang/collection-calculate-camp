'use strict';
var number_map_to_word = function(collection){
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  var result = collection.map(function(value) {
    return alphabetArray[value];
  });
  return result;
};

module.exports = number_map_to_word;
