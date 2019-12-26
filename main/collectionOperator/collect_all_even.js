'use strict';

function collect_all_even(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(value) {
    if(!(value % 2)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = collect_all_even;
