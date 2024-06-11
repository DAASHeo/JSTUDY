// 주어진 숫자 n에 대해 피보나치 수열의 n번째 항을 반환하는 함수 fibonacci를 작성하세요. (재귀함수 쓰셔야합니당.)
// 1 1 2 3
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(3));
