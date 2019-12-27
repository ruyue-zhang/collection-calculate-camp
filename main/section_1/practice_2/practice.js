function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(value_a) {
    collection_b.forEach(function(value_b) {
      if(-1 !== value_b.indexOf(value_a)) {
        result.push(value_a);
      }
    });
  });
  return result;
}

module.exports = collect_same_elements;
