const repeatNumbers = function(data) {
  let numberOfArrays = data.length;
  let answer = "";
  let numberOfCommas = numberOfArrays - 1;
  for (let i = 0; i < data.length; i++) {
    let tmp = data[i][1];
    while (tmp > 0) {
      answer += data[i][0].toString();
      tmp -= 1;
    }
    if (numberOfCommas > 0) {
      answer += ", ";
      numberOfCommas -= 1;
    }
  }
  return answer;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
