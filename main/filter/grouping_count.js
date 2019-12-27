'use strict';

function grouping_count(collection) {
  //在这里写入代码
  var result = {};
  for (var i = 0; i < collection.length; i++) {
    collection[i] in result ? result[collection[i]]++ : result[collection[i]]=1;
  }
  return result;
}

module.exports = grouping_count;
