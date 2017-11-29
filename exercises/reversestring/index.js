// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var reverseStr = '';

  // line 13 can replace line 14
  // for (let character of str)
  for(var i = str.length -1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

// Below is the solution 2
// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Below is the solution 3
// function reverse(str) {
//   return str.split('').reduce((rev, cha) => cha + rev, '');
// }

module.exports = reverse;
