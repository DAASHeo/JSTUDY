const str = "Hello, World!";

function removeWhitespace(str) {
  var result = "";
  for (let i = 0; i <= str.length; i++) {
    if (str[i] !== " ") {
      result += str[i];
    }
  }
  return result;
}

console.log(removeWhitespace(str));
