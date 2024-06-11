## 객관식

1. 다음 중 암묵적 타입 변환에 의해 결과가 `NaN`이 되는 경우는 무엇인가요?
   a) `'10' + 2` 
   b) `5 * '10'`
   c) `1 / 'one'` ✅
   d) `1 - '1'`
2. 다음 중 자바스크립트에서 문자열 타입으로 암묵적 타입 변환이 불가능한 경우는 무엇인가요?
   a) `Symbol() + ''` ✅
   b) `{} + ''`
   c) `Math + ''`
   d) `[] + ''`
3. 다음 중 함수 선언문에 해당하는 것은 무엇인가요?
   a) `const add = function(x, y) { return x + y; }`
   b) `var sub = function sub(x, y) { return x - y; }`
   c) `function multiply(x, y) { return x * y; }` ✅
   d) `let divide = (x, y) => x / y;`
4. 다음 코드의 실행 결과는 무엇인가요?

   ```jsx
   var a = 10;
   var b = a && "Hello";
   console.log(b);
   ```

   a) `undefined`
   b) `10`
   c) `false`
   d) `Hello` ✅

5. 다음 중 객체 리터럴로 정의된 객체의 프로퍼티를 접근하는 방법으로 옳지 않은 것은 무엇인가요?
   a) `obj.name`
   b) `obj['name']`
   c) `obj[name]` ✅
   d) `obj[name()]`
