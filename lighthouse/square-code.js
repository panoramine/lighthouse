const squareCode = function(message) {
  let stringToArray = [];
  let arrayOfArrays = [];
  let numberOfColumns;
  let tmpArray = [];
  let answer = "";
  let workAround;
  for (let i = 0; i < message.length; i++) {
    stringToArray.push(message[i]);
  }
  for (let j = 0; j < stringToArray.length; j++) {
    if (stringToArray[j] == " ") {
      stringToArray.splice(j, 1);
    }
  }
  numberOfColumns = Math.ceil(Math.sqrt(stringToArray.length));
  let counter = numberOfColumns;
  if (stringToArray.length % numberOfColumns !== 0) {
    workAround = numberOfColumns - (stringToArray.length % numberOfColumns);
  }

  while (counter > 0) {
    counter -= 1;
    while (numberOfColumns <= stringToArray.length) {
      for (let i = 0; i < numberOfColumns; i++) {
        tmpArray.push(stringToArray[i]);
      }
      arrayOfArrays.push(tmpArray);
      tmpArray = [];
      stringToArray.splice(0, numberOfColumns);
    }
    while (stringToArray.length > 0) {
      for (let i = 0; i < stringToArray.length; i++) {
        tmpArray.push(stringToArray[i]);
      }
      if (tmpArray !== ""){
        arrayOfArrays.push(tmpArray);
      }
      stringToArray = [];
    }
  }
  for (let i = 0; i < numberOfColumns; i++) {
    for (let j = 0; j < arrayOfArrays.length; j++) {
      if (j % numberOfColumns === 0 ) {
        answer += " ";
      }

      if (typeof arrayOfArrays[j][i] !== 'undefined') {
        answer += arrayOfArrays[j][i];
      }
    }
  }
  return answer;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));