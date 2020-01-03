'use strict';

var single_element = function(collection){
  var evenElement = getEvenElement(collection);
  return getNoRepeatElementArray(evenElement);
};

function getEvenElement(collection) {
  var evenElement = [];
  for(var i = 1; i < collection.length; i += 2) {
    evenElement.push(collection[i]);
  }
  return evenElement;
}

function getNoRepeatElementArray(evenElement) {
  var noRepeatElement = [];
  var len = evenElement.length;
  for(var i = 0; i < len; i++) {
    var isExist = false;
    for(var j = 0; j < len; j++) {
      if(i === j) {
        continue;
      }
      else {
        if(evenElement[i] === evenElement[j]) {
          isExist = true;
          break;
        }
      } 
    }
    if(!isExist) {
      noRepeatElement.push(evenElement[i]);
    }
  }
  return noRepeatElement;
}

module.exports = single_element;
