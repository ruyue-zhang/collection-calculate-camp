'use strict';

function average_uneven(collection) {
  //在这里写入代码
  var total = 0;
  var count = 0;
  collection.forEach(function(value) {
    if(value % 2) {
      count++;
      total += value;
    }
  });
  return total / count;
}

module.exports = average_uneven;
