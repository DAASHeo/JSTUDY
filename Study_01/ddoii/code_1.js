// 1. 주어진 배열 `arr`에서 홀수 값만 추출하여 새로운 배열을 반환하는 함수 `getOddValues`를 작성하세요.

//     ```jsx
//     const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     ```

function getOddValues() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let res = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2) res.push(arr[i]);
  }
  console.log(res);
}

getOddValues();
