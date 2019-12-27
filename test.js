var chain = '1->4->6->2->3->10->9->8->11->20->19->30';
function compute_chain_median(collection) {
  //在这里写入代码
  var dataArray = stringToNumberArray(collection);
  arraySortAsc(dataArray);
  var median = getMedianNumber(dataArray);
  return median;
}
function stringToNumberArray(collection) {
  var dataArray = collection.split('->').map(function(value) {
    return parseInt(value);
  });
  return dataArray;
}

function arraySortAsc(dataArray) {
  dataArray.sort(function(a,b) {
    return a - b;
  });
}

function getMedianNumber(dataArray) {
  var len = dataArray.length;
  var median = len % 2 ? dataArray[Math.floor(len / 2)] : (dataArray[len / 2] + dataArray[len / 2 - 1]) / 2;
  return median;
}


compute_chain_median(chain);