// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Blow is the solution 1
// function reverseInt(n) {
//   if (n >= 0) {
//     return Number(n.toString().split('').reverse().join(''));
//   } else {
//     var reversed = Number(n.toString().split('').reverse().slice(0, -1).join(''));
//     return ~reversed + 1;
//   }
// }

// Below is the good solution

function reverseInt(n) {
  const reversed = n.toString().split('').reverse().join('');

  return parseInt(reversed) * Math.sign(n);

  // if (n < 0) {
  //   return parseInt(reversed) * (-1);
  // }
  // return parseInt(reversed);
}

module.exports = reverseInt;
