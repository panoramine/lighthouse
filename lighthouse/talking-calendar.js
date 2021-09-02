const talkingCalendar = function(date) {
  let talkingDate = "";
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let year = date[0] + date[1] + date[2] + date[3];
  let month = date[5] + date[6];
  let day = date[8] + date[9];
  talkingDate += months[month - 1];
  if (day == 01) {
    talkingDate += " 1st, ";
  } else if (day == 02) {
    talkingDate += " 2nd, ";
  } else if (day == 03) {
    talkingDate += " 3rd, ";
  } else {
    talkingDate += " " + day + "th, ";
  }
  talkingDate += year;
  return talkingDate;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));


