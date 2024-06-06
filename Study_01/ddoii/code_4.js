// 4. 주어진 배열 `arr`에서 중복된 값을 제거하고 유일한 값만 포함하는 새로운 배열을 반환하는 함수 `getUniqueValues`를 작성하세요.

//     ```jsx
//     const arr = [0,1,0,1,2,3,4,5,6,7,8];
//     ```

function getUniqueValues() {
  const arr = [0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  let res = [];
  for (i = 0; i < arr.length; i++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  console.log(res);
}
getUniqueValues();
