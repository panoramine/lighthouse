const organizeInstructors = function(instructors) {
  let tmp;
  let courses = []
  let instructorsObj = {};
  for (let i = 0; i < instructors.length; i++) {
    instructorsObj[instructors[i].course] = [instructors[i].name];
  }
  for (let j = 0; j < instructors.length; j++) {
    for (let k = 0; k < Object.keys(instructorsObj).length; k++) {
      if (instructors[j].course == Object.keys(instructorsObj)[k]) {
        if (instructors[j].name !== instructorsObj[Object.keys(instructorsObj)[k]]) {
          instructorsObj[Object.keys(instructorsObj)[k]].push(instructors[j].name);
        }
      }
    }
  }
  for (let h = 0; h < Object.keys(instructorsObj).length; h++) {
    instructorsObj[Object.keys(instructorsObj)[h]].pop()
  }
  return instructorsObj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));