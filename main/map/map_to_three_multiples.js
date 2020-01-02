'use strict';
var map_to_three_multiples = function(collections){
  var result = collections.map(function(value) {
    return value * 3;
  });
  return result; //TODO: result可以inline
};

module.exports = map_to_three_multiples;
