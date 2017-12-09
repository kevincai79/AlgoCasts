// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {

  for (let i = 1; i <= n; i ++) {
    console.log('#'.repeat(i) + ' '.repeat(n - i));
  }
}

// Below is the solution 2 with recusion

// From 0 to n(iterate through rows)
//   Create an empty string 'stair'
//   From 0 to n (iterate through columns)
//     If the current column is equal to or less than the current row
//       Add a '#' to 'stair'
//     ELSE
//         Add a space to 'stair'
//   Console log 'stair'

function steps(n) {
  for (let row = 0; row < n; row ++) {
    let stair = '';

    for (let column = 0; column < n; column ++) {
      if (column <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }

    console.log(stair);
  }
}

module.exports = steps;
