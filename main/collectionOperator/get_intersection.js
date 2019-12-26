'use strict';

function get_intersection(collection_a, collection_b) {
  //在这里写入代码
  var data = [];
  collection_b.forEach(function(value) {
    if(collection_a.indexOf(value) !== -1) {
      data.push(value);
    }
  });
  return data;
}

module.exports = get_intersection;
