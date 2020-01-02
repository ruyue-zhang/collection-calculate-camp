'use strict';

function hybrid_operation(collection) {
  //在这里写入代码
  var sum = collection.reduce(function(total,currentValue) {
    return total + currentValue * 3 + 2;
  },0);
  return sum; //TODO: 变量可以inline
}

module.exports = hybrid_operation;

