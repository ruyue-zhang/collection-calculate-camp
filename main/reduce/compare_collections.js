'use strict';

function compare_collections(collection_a, collection_b) {
  //在这里写入代码
  var isEqual = collection_a.reduce(function(total,currentValue,currentIndex) {
    return total && (currentValue === collection_b[currentIndex])
  },true);
  return isEqual; //TODO: 变量可以inline
}

module.exports = compare_collections;


