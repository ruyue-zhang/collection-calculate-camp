'use strict';

function find_first_even(collection) {
  for(var i = 0; i < collection.length; i++) {
    if(0 === collection[i] % 2) {
      return collection[i];
    }
  }
}

module.exports = find_first_even;

