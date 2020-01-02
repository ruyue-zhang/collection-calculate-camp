'use strict';
var map_to_four_multiples_add_one = function(collection){
  var result = collection.map(function(value) {
    return value * 4 + 1;
  });
  return result; //TODO: result可以inline
};

module.exports = map_to_four_multiples_add_one;
