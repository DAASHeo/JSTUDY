function sumNumber(a, b = 10) {
  return a + b;
}

console.log(sumNumber(1, 2)); // 두 숫자가 모두 제공될 경우
console.log(sumNumber(1)); // 숫자가 제공되지 않을 경우
