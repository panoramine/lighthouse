const camelCase = function(input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 1; j < stringToArray.length; j++) {
   if (stringToArray[j] == " ") {
    stringToArray[j + 1] = stringToArray[j + 1].toUpperCase();
    stringToArray.splice(j, 1)
   } 
  }
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
};

const pascalCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 1; j < stringToArray.length; j++) {
   if (stringToArray[j] == " ") {
    stringToArray[j + 1] = stringToArray[j + 1].toUpperCase();
    stringToArray.splice(j, 1)
   } 
  }
  stringToArray[0] = stringToArray[0].toUpperCase();
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}

const snakeCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 1; j < stringToArray.length; j++) {
    if (stringToArray[j] == " ") {
      stringToArray[j] = "_";
    }
  }
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}

const kebabCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 1; j < stringToArray.length; j++) {
    if (stringToArray[j] == " ") {
      stringToArray[j] = "-";
    }
  }
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}

const titleCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 1; j < stringToArray.length; j++) {
   if (stringToArray[j] == " ") {
    stringToArray[j + 1] = stringToArray[j + 1].toUpperCase();
   } 
  }
  stringToArray[0] = stringToArray[0].toUpperCase();
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}


const vowelCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 0; j < stringToArray.length; j++) {
    if (stringToArray[j] == "a" || stringToArray[j] == "e" || stringToArray[j] == "i" || stringToArray[j] == "o" || stringToArray[j] == "u") {
      stringToArray[j] = stringToArray[j].toUpperCase();
    } 
  }
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}   

const consonantCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 0; j < stringToArray.length; j++) {
    if (stringToArray[j] !== "a" && stringToArray[j] !== "e" && stringToArray[j] !== "i" && stringToArray[j] !== "o" && stringToArray[j] !== "u" && stringToArray[j] !== " ") {
      stringToArray[j] = stringToArray[j].toUpperCase();
    }
  }
  for (let k = 0; k < stringToArray.length; k++) {
    answer += stringToArray[k];
  }
  return answer;
}

const upperCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 0; j < stringToArray.length; j++) {
    stringToArray[j] = stringToArray[j].toUpperCase();
    answer += stringToArray[j];
  }
  return answer;
}

const lowerCase = function (input) {
  let stringToArray = [];
  let answer = "";
  for (let i = 0; i < input.length; i++) {
    stringToArray.push(input[i]);
  }
  for (let j = 0; j < stringToArray.length; j++) {
    stringToArray[j] = stringToArray[j].toLowerCase();
    answer += stringToArray[j];
  }
  return answer;
}

const makeCase = function(input, cases) {
  let answer = "";
  let quasiAnswer = "";
  let almostAnswer = "";
  if (typeof cases == 'string') {
    if (cases == "camel") {
      answer = camelCase(input);
    } else if (cases == "pascal") {
      answer = pascalCase(input);
    } else if (cases == "snake") {
      answer = snakeCase(input);
    } else if (cases == "kebab") {
      answer = kebabCase(input);
    } else if (cases == "title") {
      answer = titleCase(input);
    } else if (cases == "vowel") {
      answer = vowelCase(input)
    } else if (cases == "consonant") {
      answer = consonantCase(input);
    } else if (cases == "upper") {
      answer = upperCase(input);
    } else {
      answer = lowerCase(input);
    }
  } else {
    for (let i = 0; i < cases.length; i++) {
      if (cases[i] == "camel" || cases[i] == "pascal" || cases[i] == "snake" || cases[i] == "kebab" || cases[i] == "title") {
        switch (cases[i]) {
          case "camel":
            quasiAnswer = camelCase(input);
            break;
          case "pascal":
            quasiAnswer = pascalCase(input);
            break;
          case "snake":
            quasiAnswer = snakeCase(input);
            break;
          case "kebab":
            quasiAnswer = kebabCase(input);
            break;
          case "title":
            quasiAnswer = titleCase(input);
            break;
        }
        for (let j = 0; j < cases.length; j++) {
          if (cases[j] == "vowel" || cases[j] == "consonant") {
            switch (cases[j]) {
              case "vowel":
                almostAnswer = vowelCase(quasiAnswer);
                break;
              case "consonant":
                almostAnswer = consonantCase(quasiAnswer);

            }
            for (let k = 0; k < cases.length; k++) {
              if (cases[k] == "upper" || cases[k] == "lower") {
                switch (cases[k]) {
                  case "upper":
                    answer = upperCase(almostAnswer);
                    break;
                  case "lower":
                    answer = lowerCase(almostAnswer);
                    break;
                }
              }
            }
          }
        }
        for (let k = 0; k < cases.length; k++) {
          if (cases[k] == "upper" || cases[k] == "lower") {
            switch (cases[k]) {
              case "upper":
                answer = upperCase(quasiAnswer);
                break;
              case "lower":
                answer = lowerCase(quasiAnswer);
                break;
            }
          }
        }
      }      
    }
    for (let j = 0; j < cases.length; j++) {
      if (cases[j] == "vowel" || cases[j] == "consonant") {
        switch (cases[j]) {
          case "vowel":
            almostAnswer = vowelCase(input);
            break;
          case "consonant":
            almostAnswer = consonantCase(input);
            break;
          }
          for (let k = 0; k < cases.length; k++) {
            if (cases[k] == "upper" || cases[k] == "lower") {
              switch (cases[k]) {
                case "upper":
                  answer = upperCase(almostAnswer);
                  break;
                case "lower":
                  answer = lowerCase(almostAnswer);
                  break;
              }
            }
          }
      }
    }
  }
  return answer;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




