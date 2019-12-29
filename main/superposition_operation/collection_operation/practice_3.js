'use strict';

function hybrid_operation_to_uneven(collection) {
  //在这里写入代码
  var result = collection.reduce(function(total,currentValue) {
    if(currentValue % 2) {
      return total + currentValue * 3 + 5;
    }
    else {
      return total;
    }
  },0);
  return result;
}

module.exports = hybrid_operation_to_uneven;

