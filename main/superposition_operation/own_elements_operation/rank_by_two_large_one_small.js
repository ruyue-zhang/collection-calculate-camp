'use strict';
function rank_by_two_large_one_small(collection){
  //这里写代码。。。
  //先按从小到大排序
  sortAsc(collection);
  return sortByTwoLargeOneSmall(collection);

}
function sortAsc(collection) {
  collection.sort(function(a,b) {
    return a - b;
  });
}

function sortByTwoLargeOneSmall(collection) {
  var result = [];
  var len = collection.length;
  for(var i = 0; i < len; i += 3) {
    if(i + 2 < len) {
      result.push(collection[i + 1]);
      result.push(collection[i + 2]);
      result.push(collection[i]);
    }
    else if(i + 1 < len){
      result.push(collection[i]);
      result.push(collection[i + 1]);
    }
    else {
      result.push(collection[i]);
    } 
  }
  return result;
}


module.exports = rank_by_two_large_one_small;
