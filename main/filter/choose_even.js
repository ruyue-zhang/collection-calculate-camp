'use strict';

function choose_even(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(value) {
    if(!(value % 2)) {
      result.push(value);
    }
  });
  return result;

}

module.exports = choose_even;
