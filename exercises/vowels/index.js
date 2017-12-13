// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let count = 0;
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let char of str.split('')) {
    if (vowels.includes(char)) {
      count ++;
    }
  }

  return count;
}

// Below is the solution 2

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.lengq : 0;
}

module.exports = vowels;
