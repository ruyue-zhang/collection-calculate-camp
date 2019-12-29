function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(valueCollect) {
    var isExist = false;
    result.forEach(function(valueResult) {
      if(valueCollect === valueResult.key) {
        valueResult.count++;
        isExist = true;
      }
    });
    if(!isExist) {
      result.push({key: valueCollect, count: 1});
    }
  });
  return result;
}

module.exports = count_same_elements;
