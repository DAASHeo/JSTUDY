## 코드 실행 결과 유추 문제 (10문제)

1. **다음 코드의 실행 결과는?**

   ```js
   const foo = 1;
   {
     const foo = 2;
     console.log(foo);
   }
   console.log(foo);
   ```

   - A) 2, 1 ✅
   - B) 1, 2
   - C) ReferenceError, 1
   - D) 2, 2

2. **다음 코드의 실행 결과는?**

   ```js
   let x = 10;
   if (true) {
     let x = 20;
     console.log(x);
   }
   console.log(x);
   ```

   - A) 10, 20
   - B) 20, 10 ✅
   - C) 20, 20
   - D) 10, 10

3. **다음 코드의 실행 결과는?**

   ```js
   var a = 1;
   {
     var a = 2;
     console.log(a);
   }
   console.log(a);
   ```

   - A) 1, 1
   - B) 2, 2 ✅
   - C) 1, 2
   - D) ReferenceError, 1

4. **다음 코드의 실행 결과는?**

   ```js
   function test() {
     console.log(a);
     var a = 1;
   }
   test();
   ```

   - A) 1
   - B) undefined ✅
   - C) ReferenceError
   - D) null

5. **다음 코드의 실행 결과는?**

   ```js
   const arr = [1, 2, 3];
   arr.push(4);
   console.log(arr);
   ```

   - A) [1, 2, 3, 4] ✅
   - B) [1, 2, 3]
   - C) TypeError
   - D) undefined

6. **다음 코드의 실행 결과는?**

   ```js
   const obj = { a: 1 };
   obj.b = 2;
   console.log(obj);
   ```

   - A) { a: 1, b: 2 } ✅
   - B) { a: 1 }
   - C) TypeError
   - D) undefined

7. **다음 코드의 실행 결과는?**

   ```js
   let a = 10;
   {
     let a = 20;
     {
       let a = 30;
       console.log(a);
     }
     console.log(a);
   }
   console.log(a);
   ```

   - A) 30, 20, 10 ✅
   - B) 10, 20, 30
   - C) 30, 30, 30
   - D) 10, 10, 10

8. **다음 코드의 실행 결과는?**

   ```js
   const a = 1;
   const b = a;
   b = 2;
   console.log(a);
   ```

   - A) 1
   - B) 2
   - C) TypeError ✅
   - D) ReferenceError

9. **다음 코드의 실행 결과는?**

   ```js
   let a = 1;
   let b = 2;
   [a, b] = [b, a];
   console.log(a, b);
   ```

   - A) 1, 2
   - B) 2, 1 ✅
   - C) undefined
   - D) TypeError

10. **다음 코드의 실행 결과는?**
    ```js
    let a = 10;
    function foo() {
      console.log(a);
      let a = 20;
    }
    foo();
    ```
    - A) 10 ✅
    - B) 20
    - C) undefined
    - D) ReferenceError
