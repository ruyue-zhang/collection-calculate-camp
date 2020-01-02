'use strict';
function map_to_even(collection){
  var result = collection.map(function(value) {
    return value * 2;
  });
  return result; //TODO: result可以inline
}
module.exports = map_to_even;
