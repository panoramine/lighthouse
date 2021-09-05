const urlDecode = function(text) {
  let urlObj = {};
  let stringToArray = [];
  let keyString = "";
  let valueArray = [];
  let valueString = "";
  let morePairs = 0;
  for (let i = 0; i < text.length; i++) {
    stringToArray.push(text[i]);
    if (text[i] == "&") {
      morePairs += 1;
    }
  } 
  if (morePairs === 0) {
    for (let i = 0; i < stringToArray.length; i++) {
      if (stringToArray[i] == "=") {
        for (let j = 0; j < i; j++) {
          keyString += stringToArray[j];
        }
        for (let k = i + 1; k < stringToArray.length; k++) {
          valueArray.push(stringToArray[k]);
        }
      }
    }
    for (let j = 0; j < valueArray.length; j++) {
      if (valueArray[j] == "%") {
        valueArray.splice(j, 3, " ");
      }
    }
    for (let k = 0; k < valueArray.length; k++) {
      valueString += valueArray[k];
    }
    urlObj[keyString] = valueString;
  }
  while (morePairs > 0) {
    let tmpArray = [];
    morePairs -= 1;
    keyString = "";
    valueArray = [];
    valueString = "";
    let pairsCheck = false;
    for (let i = 0; i < stringToArray.length; i++) {
      if (stringToArray[i] == "&") {
        pairsCheck = true;
        for (let j = 0; j < i; j++) {
          tmpArray.push(stringToArray[j]);
          morePairs += 1;
        }
        stringToArray.splice(0, i + 1)
      } 
    }
    if (!pairsCheck) {
      for (let j = 0; j < stringToArray.length; j++) {
        tmpArray.push(stringToArray[j]);
      }
    }
    for (let j = 0; j < tmpArray.length; j++) {
      if (tmpArray[j] == "=") {
        for (let k = 0; k < j; k++) {
          keyString += tmpArray[k];
        }
        for (let l = j + 1; l < tmpArray.length; l++) {
          valueArray.push(tmpArray[l]);
        }
      }
    }
    for (let k = 0; k < valueArray.length; k++) {
      if (valueArray[k] == "%") {
        valueArray.splice(k, 3, " "); 
      }
    }
    for (let l = 0; l < valueArray.length; l++) {
      valueString += valueArray[l];
    }
    urlObj[keyString] = valueString;
  }
  return urlObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);