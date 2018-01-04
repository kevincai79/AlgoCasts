// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  let fib = [];

  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      fib.push(0);
    } else if (i === 1) {
      fib.push(1);
    } else {
      fib.push(fib[i-1] + fib[i-2]);
    }
  }
  return fib[n];
}

// Below is the solution 2 with recusion

function fib(n) {
  // if (n === 0) {
  //   return 0;
  // }
  //
  // if (n === 1) {
  //   return 1;
  // }
  if (n < 2) {
    return n;
  }

  return fib(n -1) + fib(n -2)
}

// Below is the memoize solution to make the recusion solution runtime better

function memoize(fn) {
  const cache = {};

  return function(...args) {
    if (cache[args]) {
      return cache[args];
    };

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}
// Below line 60 and line 68 can change the slowFib to fib
function slowFib(n) {
  if (n < 2) {
    return n;
  }

  return fib(n -1) + fib(n -2)
}

const fib = memoize(slowFib);

module.exports = fib;
