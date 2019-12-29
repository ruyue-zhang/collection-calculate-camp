function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  var collection_c = countByDifferentForm(collection_a);
  sameValueCountReduceThree(collection_c, object_b);
  return collection_c;
}
function countByDifferentForm(collection_a) {
  var result = [];
  collection_a.forEach(function(valueCollect) {
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

function sameValueCountReduceThree(collection_c, object_b) {
  object_b.value.forEach(function(value_b) {
    collection_c.forEach(function(value_c) {
      if(value_c.key === value_b) {
        var cutNumber = parseInt(value_c.count / 3);
        value_c.count -= cutNumber;
      }
    });
  });
}

module.exports = create_updated_collection;
