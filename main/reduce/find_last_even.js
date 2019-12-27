'use strict';

function find_last_even(collection) {
  //在这里写入代码
  for(var i = collection.length - 1; i >=0 ; i--) {
    if(0 === collection[i] % 2) {
      return collection[i];
    }
  }
}

module.exports = find_last_even;
