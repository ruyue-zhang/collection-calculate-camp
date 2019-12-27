'use strict';

function double_to_one(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(value1) {
    if(value1 instanceof Array) {
      value1.forEach(function(value2) {
        if(-1 === result.indexOf(value2)) {
          result.push(value2);
        }
      });
    }
    else {
      if(-1 === result.indexOf(value1)) {
        result.push(value1);
      }
    }
  });
  return result;
}

module.exports = double_to_one;
