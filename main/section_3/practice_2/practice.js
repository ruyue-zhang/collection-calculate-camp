function create_updated_collection(collection_a, object_b) {
  //在这里写入代码
  object_b.value.forEach(function(value_b) {
    collection_a.forEach(function(value_a) {
      if(value_a.key === value_b) {
        var cutNumber = parseInt(value_a.count / 3);
        value_a.count -= cutNumber;
      }
    });
  });
  return collection_a;
}

module.exports = create_updated_collection;
