// DATE: 27-3-2024
//Company: UST - R2 - Meena

/**
 * Q1. How to get week number by extending date in JS ?
 */

/**
 * SOLUTION:
 * 1. Use this & store date in a variable
 * 2. Set hour to 0hr 0min 0sec
 * 3. Set day to monday (Set date to +1 & - (todayDay +6) %7))
 * 4. create a new date with existing changing month to 0month
 * 5. calculate difference fron jan 1 to todays in millisec
 * 6. Divide difference by 24*60*60 *1000 milisec & 7 to convert in week
 * 7. Add 1 to week & convert to single number by ceil
 */

// Extend the Date object with a getWeek method
Date.prototype.getWeek = function () {
  // Create a new Date object with the same time as the current date
  var date = new Date(this.getTime());

  // Set the time to midnight to avoid issues with time zones
  date.setHours(0, 0, 0, 0);
  // Set the target day to Monday (0: Sunday, 1: Monday, ..., 6: Saturday)

  date.setDate(date.getDate() + 1 - ((date.getDay() + 6) % 7));
  // Get the week number by counting weeks from January 1st
  var week1 = new Date(date.getFullYear(), 0, 1);

  // Calculate and return the week number based on ISO 8601 standard
  return Math.ceil(((date - week1) / 86400000 + 1) / 7);
};

// Example usage
var today = new Date();
// Get the week number using the custom getWeek method
var weekNumber = today.getWeek();
console.log("Week number:", weekNumber);
