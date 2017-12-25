// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  if (n <= 0) {
    return [[]]
  }

  let result = [];
  for (let i = 0; i < n; i++) {
    result.push([]);
  }
  let row = 0;
  let column = 0;
  let loopTimes = n;
  for (column; column < n; column++) {
    result[row][column] = column + 1;
  }

  loopTimes -= 1;
  column -= 1;
  row += 1;

  while (loopTimes !== 0) {
    for (let i = 0; i < loopTimes; i++) {
      result[row][column] = result[row -1][column] + 1;
      row ++;
    }

    row -= 1;
    column -= 1;

    for (let i = 0; i < loopTimes; i++) {
      result[row][column] = result[row][column + 1] + 1;
      column --;
    }

    loopTimes -= 1;
    column ++;
    row --;

    if (loopTimes === 0) {
      return result;
    } else {
      for (let i = 0; i < loopTimes; i++) {
        result[row][column] = result[row + 1][column] + 1;
        row --;
      }
    }

      row ++;
      column ++;

      for (let i = 0; i < loopTimes; i++) {
        result[row][column] = result[row][column - 1] + 1;
        column ++;
      }

      loopTimes -= 1;
      column --;
      row ++;
  }

  return result;
}

// Below is another silimar solution

function matrix(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
  // Top row
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right column
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
