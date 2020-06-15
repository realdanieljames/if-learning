/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/


//Write a function called isItLong 
// that returns the string "That's a long string!" 
// if the given string is longer than 20 characters. 
// It should not return anything otherwise.
// (Explicitly, at least--every function returns undefined if you don't return a value!)
function isItLong(element){
  if (element.length > 20) {
  return "That's a long string!";
}}   
//___________________________________________________________________________________________________________________


//Write a function called isItMedium that returns the string "That's a regular sized string!" 
// if the given string is between 10 and 20 characters, inclusive. 
// It should not return anything otherwise.
function isItMedium(element){
  if (element.length >= 10 && element.length <= 20) {
  return "That's a regular sized string!";
}}
//___________________________________________________________________________________________________________________


// Write a function called isItShort that returns "That's a small string!" 
// if the given string is shorter than 10 characters. 
// Otherwise, it should return "That's not a small string!"
function isItShort(element){
  if (element.length < 10) {
    return "That's a small string!";
  }
  else {
    return "That's not a small string!";
  }
}
//___________________________________________________________________________________________________________________


// Write a function called howLongIsMyString that returns:
//  the string "That's a long string!" if the given string is longer than 20 characters
//  the string "That's a regular sized string!" if the given string is between 10 and 20 characters, inclusive
//  the string "That's a small string!" if the given string is shorter than 10 characters
function howLongIsMyString(element){
  if (element.length > 20) {
    return "That's a long string!"
  }
  else if (element.length >= 10 && element.length <= 20) {
    return "That's a regular sized string!";
  }
  else {
    return "That's a small string!";
  }
}
//___________________________________________________________________________________________________________________


// Write a function called instructorHeight that returns the height of your instructors, in inches. 
//  If given the string "Colin" it should return the number 62. 
//   If given the string "Mesuara", it should return the number 67. 
//    If given anything else, it should return the string "I don't know that instructor!".
function instructorHeight(element) {
  if (element === 'Colin') {
    return 62
  }
  else if (element === 'Mesuara') {
    return 67
  }
  else {
    return "I don't know that instructor!"
  }
}
//___________________________________________________________________________________________________________________






/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/

if (typeof isItLong === 'undefined') {
  isItLong = undefined;
}

if (typeof isItMedium === 'undefined') {
  isItMedium = undefined;
}

if (typeof isItShort === 'undefined') {
  isItShort = undefined;
}

if (typeof howLongIsMyString === 'undefined') {
  howLongIsMyString = undefined;
}

if (typeof instructorHeight === 'undefined') {
  instructorHeight = undefined;
}


module.exports = {
  isItLong,
  isItMedium,
  isItShort,
  howLongIsMyString,
  instructorHeight,
}