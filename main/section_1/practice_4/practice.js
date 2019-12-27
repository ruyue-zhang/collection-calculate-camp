function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  var result = [];
  collection_a.forEach(function(x) {
    if(-1 !== object_b.value.indexOf(x.key)) {
      result.push(x.key);
    }
  });
  return result;
}

module.exports = collect_same_elements;
