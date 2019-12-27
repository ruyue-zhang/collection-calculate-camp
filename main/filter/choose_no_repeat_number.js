'use strict';

function choose_no_repeat_number(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(value) {
    if(-1 === result.indexOf(value)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = choose_no_repeat_number;
