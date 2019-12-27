'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(value_a) {
    collection_b.forEach(function(value_b) {
      if(value_a % value_b === 0) {
        result.push(value_a);
      }
    });  
  });
  return result;
}

module.exports = choose_divisible_integer;
