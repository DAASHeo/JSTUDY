const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getOddValues(array) {
  var oddArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      oddArray.push(array[i]);
    }
  }

  return oddArray;
}

console.log(getOddValues(arr));
