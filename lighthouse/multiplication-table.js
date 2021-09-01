const multiplicationTable = function(maxValue) {
  let line = ""
  for (let i = 0; i < maxValue; i++) {
    line = "";
    for (let j = 0; j < maxValue; j++) {
      line += (i + 1) * (j + 1) + " ";
    }
    console.log(line);
  }
};

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));
