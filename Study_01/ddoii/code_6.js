// 6. 주어진 배열 `arr`에서 가장 작은 값과 가장 큰 값을 반환하는 함수 `getMinMax`를 작성하세요.

//     ```jsx
//     const arr = [0,1,0,1,2,3,4,5,6,7,8];
//     ```

function getMinMax() {
  const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort();
  return arr[0] + arr[arr.length - 1];
}
console.log(getMinMax());
