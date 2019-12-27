'use strict';

function choose_multiples_of_three(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(value) {
    if(!(value % 3)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = choose_multiples_of_three;
