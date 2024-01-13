/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
   
   let lowercaseStr = str.toLowerCase();
   let updatedStr = lowercaseStr.replace(/[^a-z0-9]/g, '');
   let reversedStr = updatedStr.split('').reverse().join('');
   
   return updatedStr === reversedStr;
 
}

module.exports = isPalindrome;
