/*
Company - Bhawan Cybertek
QUESTION:

1. Given a string s consisting of words and spaces, return the length of the last word in the string.


Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.

Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
 
*Note: Do not use any predefined functions like Trim, Split, Components, Reduce etc
*/

//ANSWER: without inbuilt methods
function lengthOfLastWord(s) {
    let length = 0;
    let isCounting = false;
  
    for (let i = s.length - 1; i >= 0; i--) {
      if (s[i] !== ' ') {
        isCounting = true;
        length++;
      } else if (isCounting) {
        // If a space is encountered after the last word, break the loop
        break;
      }
    }
  
    return length;
  }
  
  // Example usage:
  const example1 = lengthOfLastWord("Hello World");
  console.log(example1); // Output: 5
  
  const example2 = lengthOfLastWord("   fly me   to   the moon  ");
  console.log(example2); // Output: 4
  
  const example3 = lengthOfLastWord("luffy is still joyboy");
  console.log(example3); // Output: 6

//ANSWER: with inbuilt methods
/*
function lengthOfLastWord(s) {
    // Trim the input string to remove leading and trailing spaces
    s = s.trim();
  
    // Split the string into an array of words
    const words = s.split(" ");
  
    // Get the last word and return its length
    const lastWord = words[words.length - 1];
    return lastWord.length;
}

// Example usage:
const example1 = lengthOfLastWord("Hello World");
console.log(example1); // Output: 5

const example2 = lengthOfLastWord("   fly me   to   the moon  ");
console.log(example2); // Output: 4

const example3 = lengthOfLastWord("luffy is still joyboy");
console.log(example3); // Output: 6
*/
  