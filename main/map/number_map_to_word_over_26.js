'use strict';

var number_map_to_word_over_26 = function(collection){
  return collection.map(function(value) {
    if(value <= 26 ) {
      return String.fromCharCode(value + 96);
    }
    else {
      var count = Math.ceil(value / 26) - 1;
      return String.fromCharCode(count + 96) + String.fromCharCode(value - 26 * count + 96);
    }
  });
};

module.exports = number_map_to_word_over_26;
