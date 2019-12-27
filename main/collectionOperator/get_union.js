'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  collection_b.forEach(function(value) {
    if(collection_a.indexOf(value) === -1) {
      collection_a.push(value);
    }
  });
  return collection_a;
}

module.exports = get_union;

