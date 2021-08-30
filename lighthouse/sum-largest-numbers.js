const sumLargestNumbers = function(data) {
  let largestNumber = 0;
  let largestNumberIndex = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > largestNumber) {
      largestNumber = data[i];
      largestNumberIndex = i;
    }
  }
  let largestNumber2 = 0;
  for (let j = 0; j < data.length; j++) {
    if ((data[j] > largestNumber2) && j !== largestNumberIndex) {
      largestNumber2 = data[j];
    }
  }
  return largestNumber + largestNumber2;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
