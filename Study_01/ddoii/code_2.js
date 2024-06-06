// 2. 숫자 n이 주어질 때, 1부터 n까지의 합을 계산하는 함수 sumUpToN을 작성하세요.

function sumUpToN(n) {
  let res = 0;
  for (i = 1; i <= n; i++) {
    res += i;
  }
  console.log(res);
}

sumUpToN(10);
