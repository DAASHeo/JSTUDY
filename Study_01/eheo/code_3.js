const str = "Hello, World!";

function removeWhitespace(str) {
  var result = "";
<<<<<<< HEAD
  for (let i = 0; i <= str.length; i++) {
=======
  for (let i = 0; i < str.length; i++) {
>>>>>>> 39715338d793fcfbda47aa8639cbd5c81bdd48a6
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

console.log(removeWhitespace(str));
