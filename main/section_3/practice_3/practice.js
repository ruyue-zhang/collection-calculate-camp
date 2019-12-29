function create_updated_collection(collection_a, object_b) {
  var collection_c = countSameElements(collection_a);
  sameValueCountReduceThree(collection_c, object_b);
  return collection_c;
}

function countSameElements(collection) {
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
