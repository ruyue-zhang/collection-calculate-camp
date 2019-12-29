function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(valueCollect) {
    if(valueCollect.length <= 1) {
      countSingleLetter(valueCollect,result);
    }
    else {
      countStringLetter(valueCollect,result);
    }
  });
  return result;
}


function countSingleLetter(valueCollect,result) {
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
}

function countStringLetter(valueCollect,result) {
  var isExist = false;
  result.forEach(function(valueResult) {
    if(valueCollect.substring(0,1) === valueResult.key) {
      valueResult.count += Number(valueCollect.substring(2));
      isExist = true;
    }
  });
  if(!isExist) {
    var keyValue = valueCollect.substring(0,1);
    var countValue = Number(valueCollect.substring(2));
    result.push({key: keyValue, count: countValue});
  }
}


module.exports = count_same_elements;
