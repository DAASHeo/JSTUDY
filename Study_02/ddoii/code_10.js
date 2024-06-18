// 10. 기본 매개변수를 사용하여 두 숫자를 더하는 함수를 작성하세요. (하나의 숫자가 제공되지 않으면 기본값 `10`을 사용)

function add(a, b = 10) {
  return a + b;
}

console.log(add(20));
