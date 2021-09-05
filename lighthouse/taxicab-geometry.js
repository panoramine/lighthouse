const blocksAway = function(directions) {
  let taxiCab = [0, 0];
  let orientation;
  let answerObj = {};
  if (directions[0] == "right") {
    orientation = "east";
  } else {
    orientation = "north";
  }
  for (let i = 1; i < directions.length; i++) {
    if (typeof directions[i] == "number") {
      switch (orientation) {
        case "north":
          taxiCab[1] += directions[i];
          break;
        case "east":
          taxiCab[0] += directions[i];
          break;
        case "south":
          taxiCab[1] -= directions[i];
          break;
        case "west":
          taxiCab[0] -= directions[i];
          break;
      }
    } else {
      if (directions[i] == "right") {
        switch (orientation) {
          case "north":
            orientation = "east";
            break;
          case "east":
            orientation = "south";
            break;
          case "south":
            orientation = "west";
            break;
          case "west":
            orientation = "north";
            break;
        }
      } else {
        switch (orientation) {
          case "north":
            orientation = "west";
            break;
          case "west":
            orientation = "south";
            break;
          case "south":
            orientation = "east";
            break;
          case "east":
            orientation = "north";
            break;
        }
      }
    }
  }
  answerObj.east = taxiCab[0];
  answerObj.north = taxiCab[1];
  return answerObj;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));