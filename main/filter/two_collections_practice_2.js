'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(value) {
    if(-1 === collection_b.indexOf(value)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = choose_no_common_elements;
