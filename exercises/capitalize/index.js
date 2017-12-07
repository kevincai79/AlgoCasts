// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newStr = '';

  if (str[0].match(/[a-zA-Z]/)) {
    newStr = str[0].toUpperCase();
  } else {
    newStr = str[0];
  }

  console.log(newStr);

  for (let i = 1; i < str.length; i ++ ) {
    if (str[i -1].match(/[^a-zA-Z]/) && str[i].match(/[a-zA-Z]/)) {
      newStr = newStr + str[i].toUpperCase();
    } else {
      newStr = newStr + str[i];
    }
  }

  return newStr;
}

module.exports = capitalize;
