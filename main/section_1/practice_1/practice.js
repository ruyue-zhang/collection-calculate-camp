function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(value) {
    if(-1 !== collection_b.indexOf(value)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = collect_same_elements;
