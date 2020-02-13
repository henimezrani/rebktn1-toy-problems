/*
Military Time
Given a string that represents time in hours and minutes, convert the string to military time (if necessary).

Examples: 

toMilitary("3:00pm") // "15:00"
toMilitary("9:15am") // "09:15"
toMilitary("12:00am") // "00:00"
toMilitary("04:00") // "04:00"
*/

function toMilitary(time) {
  if (time.slice(time.length - 2) === "pm") {
    if (time.slice(0, time.indexOf(":")) === "12") {
      return time.slice(0, time.length - 2);
    } else {
      return (parseInt(time.slice(0, time.indexOf(":"))) + 12).toString() + time.slice(time.indexOf(":"), time.length - 2);
    }
  } else if (time.slice(time.length - 2) === "am"){
    if (time.slice(0, time.indexOf(":")) === "12") {
      return "00" + time.slice(2, time.length - 2);
    } else {
      return time.slice(0, time.length - 2);
    }
  } else {
    return time
  }
}



