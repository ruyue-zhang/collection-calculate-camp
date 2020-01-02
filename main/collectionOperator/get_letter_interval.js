'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  var alphabetArray = getAlphabetArray();
  return getLetterByInputNumber(alphabetArray,number_a, number_b);
}

function getAlphabetArray() {
  //TODO: 如果是个常量，不需要定义这个方法，可以定义全局的常量，如果只用一次，直接定义局部变量就好
  var alphabetArray = ['0','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s',
                       't','u','v','w','x','y','z'];
  return alphabetArray;
}

function getLetterByInputNumber(alphabetArray,number_a, number_b) {
  var result = [];
  var min, max;
  (number_a <= number_b) ? (min = number_a, max = number_b) : (min = number_b, max = number_a);
  for(var i = min; i <= max; i++) {
      result.push(alphabetArray[i]);
  }
  if(number_a > number_b) {
    result.reverse();
  }
  return result;
}

module.exports = get_letter_interval;
