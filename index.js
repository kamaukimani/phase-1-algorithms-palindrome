function isPalindrome(word) {
  // Write your algorithm here
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* 
  Pseudocode:
  - Take input string 'word'
  - Split the string into an array of characters
  - Reverse the array
  - Join the reversed array back into a string
  - Compare the reversed string to the original
  - Return true if they are the same, otherwise false
*/

/*
  Explanation:
  To check if a word is a palindrome, we reverse the word and then compare it to the original word.
  If both strings are identical, it means the word reads the same forwards and backwards, so we return true.
  Otherwise, we return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("ab"));
}

module.exports = isPalindrome;
