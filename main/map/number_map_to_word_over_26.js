'use strict';
var number_map_to_word_over_26 = function(collection){
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  var result = collection.map(function(value) {
    if(value <= 26 ) {
      return alphabetArray[value];
    }
    else {
      var count = Math.ceil(value / 26) - 1;
      return alphabetArray[count] + alphabetArray[value - 26 * count];
    }
  });
  return result;
};

module.exports = number_map_to_word_over_26;
