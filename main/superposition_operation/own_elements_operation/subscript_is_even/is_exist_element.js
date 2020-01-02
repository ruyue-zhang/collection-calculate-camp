'use strict';
var is_exist_element = function(collection,element){
  var indexIsEvevArray = getIndexEven(collection);
  return isExist(indexIsEvevArray,element);
} //TODO: 分号呢？

function getIndexEven(collection) {
  var indexIsEvevArray = [];
  for(var i = 0; i < collection.length; i += 2) {
    indexIsEvevArray.push(collection[i]);
  }
  return indexIsEvevArray;
}

function isExist(indexIsEvevArray,element) {
  var isExist = false;
  indexIsEvevArray.forEach(function(value) {
    if(element === value) {
      isExist = true;
    }
  });
  return isExist;
}
module.exports = is_exist_element;
