const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
var max = 0;
var min = arr[0];

function getMinMax(arr, max, min) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] >= max) {
      max = arr[i];
    }
    if (arr[i] <= min) {
      min = arr[i];
    }
  }

  return [max, min];
}

console.log(
  `가장 큰 값: ${getMinMax(arr, max, min)[0]}, 가장 작은 값 ${
    getMinMax(arr, max, min)[1]
  }`
);
