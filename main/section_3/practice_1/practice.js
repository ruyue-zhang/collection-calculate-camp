function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b.value.forEach(function(value_b) {
    collection_a.forEach(function(value_a) {
      if(value_a.key === value_b) {
        value_a.count--;
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
