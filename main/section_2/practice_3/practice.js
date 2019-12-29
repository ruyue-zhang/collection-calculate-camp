function count_same_elements(collection) {
  //在这里写入代码
  var result = [];
  collection.forEach(function(valueCollect) {
    if(valueCollect.length <= 1) {
      countSingleLetter(valueCollect,result);
    }
    else if(valueCollect.length <= 3){
      countStringLetter(valueCollect,result);
    }
    else {
      countStringLetterBrackets(valueCollect,result);
    }
  });
  return result;
}


function countSingleLetter(valueCollect,result) {
  var isExist = false;
  result.forEach(function(valueResult) {
    if(valueCollect === valueResult.name) {
      valueResult.summary++;
      isExist = true;
    }
  });
  if(!isExist) {
    result.push({name: valueCollect, summary: 1});
  }
}

function countStringLetter(valueCollect,result) {
  var isExist = false;
  result.forEach(function(valueResult) {
    if(valueCollect.substring(0,1) === valueResult.name) {
      valueResult.summary += Number(valueCollect.substring(2));
      isExist = true;
    }
  });
  if(!isExist) {
    var keyValue = valueCollect.substring(0,1);
    var countValue = Number(valueCollect.substring(2));
    result.push({name: keyValue, summary: countValue});
  }
}

function countStringLetterBrackets(valueCollect,result) {
  var isExist = false;
  result.forEach(function(valueResult) {
    if(valueCollect.substring(0,1) === valueResult.name) {
      valueResult.summary += Number(valueCollect.substring(2,valueCollect.length - 1));
      isExist = true;
    }
  });
  if(!isExist) {
    var keyValue = valueCollect.substring(0,1);
    var countValue = Number(valueCollect.substring(2,valueCollect.length - 1));
    result.push({name: keyValue, summary: countValue});
  }
}

module.exports = count_same_elements;
