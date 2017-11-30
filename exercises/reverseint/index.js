// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  if (n >= 0) {
    return Number(n.toString().split('').reverse().join(''));
  } else {
    var reversed = Number(n.toString().split('').reverse().slice(0, -1).join(''));
    return ~reversed + 1;
  }
}

module.exports = reverseInt;
