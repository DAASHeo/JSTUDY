const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];

function getUniqueValues(array) {
  var uniqueArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!uniqueArray.includes(array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

console.log(getUniqueValues(arr));
