function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(value) {
      if(-1 !== object_b.value.indexOf(value)) {
        result.push(value);
      }
  });
  return result;
}

module.exports = collect_same_elements;
