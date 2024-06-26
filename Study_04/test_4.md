### 객관식 문제

1. `var`, `let`, `const`의 주요 차이점은 무엇인가요?
a. `var`는 함수 스코프, `let`과 `const`는 블록 스코프.
    
    b. `var`는 블록 스코프, `let`과 `const`는 함수 스코프.
    
    c. 세 가지 모두 함수 스코프.
    
    d. 세 가지 모두 블록 스코프.
    
2. JavaScript에서 `new` 키워드를 함수와 함께 사용할 때 하는 일은 무엇인가요?
a. 함수를 호출하고 `undefined`를 반환한다.
    
    b. 함수 객체의 인스턴스를 생성한다.
    
    c. 프로토타입 체인을 생성한다.
    
    d. 위의 것들 중 어느 것도 아니다.
    
3. JavaScript에서 새로운 객체를 생성하는 올바른 방법은 무엇인가요?
a. `var obj = new Object();`
    
    b. `var obj = Object.create();`
    
    c. `var obj = {};`
    
    d. 위의 모든 방법.
    
4. JavaScript에서 함수가 사용하는 스코프의 타입은 무엇인가요?
a. 동적 스코프
    
    b. 렉시컬 스코프
    
    c. 전역 스코프
    
    d. 위의 것들 중 어느 것도 아니다
    
5. 다음 코드의 출력 결과는 무엇인가요?
    
    ```
    console.log(typeof null);
    
    ```
    
    a. "null"
    
    b. "undefined"
    
    c. "object"
    
    d. "function"
    
6. 다음 중 일급 객체가 아닌 것은 무엇인가요?
a. 문자열
    
    b. 숫자
    
    c. 함수
    
    d. 연산자
    
7. JavaScript에서 클로저(closure)의 주요 특징은 무엇인가요?
a. 블록 스코프를 생성한다.
    
    b. 함수와 그 함수가 선언된 렉시컬 환경의 조합이다.
    
    c. 전역 변수를 보호한다.
    
    d. 함수 내부의 `this`를 고정한다.
    
8. 객체의 프로토타입을 설정하는 방법은 무엇인가요?
a. `obj.__proto__ = prototype;`
    
    b. `Object.setPrototypeOf(obj, prototype);`
    
    c. `Object.create(prototype);`
    
    d. 위의 모든 방법.
    
9. 다음 코드에서 `this`는 무엇을 가리키나요?
    
    ```
    const obj = {
        name: 'Lee',
        getName: function() {
            return this.name;
        }
    };
    const getName = obj.getName;
    console.log(getName());
    
    ```
    
    a. `obj`
    
    b. 전역 객체
    
    c. undefined
    
    d. `getName` 함수
    
10. 생성자 함수 내부에서 `return` 키워드를 사용하면 어떤 일이 발생하나요?
a. 항상 `undefined`를 반환한다.
    
    b. `this`가 아닌 다른 객체를 반환할 수 있다.
    
    c. 무시되고 항상 `this`를 반환한다.
    
    d. 에러가 발생한다.
    

### 단답식 문제

1. JavaScript에서 클로저(Closure)의 개념을 설명하세요.
2. `this` 키워드의 목적은 무엇인가요?
3. `apply`, `call`, `bind` 메서드의 차이점을 설명하세요.
4. 프로토타입 상속이란 무엇인가요?
5. 객체 리터럴을 사용하여 객체를 생성하는 방법을 설명하세요.
6. 함수 선언문과 함수 표현식의 차이점을 설명하세요.
7. 자바스크립트에서 `undefined`와 `null`의 차이점을 설명하세요.
8. JavaScript의 일급 객체로서 함수의 특성을 설명하세요.
9. `Object.create` 메서드의 용도를 설명하세요.
10. 즉시 실행 함수(IIFE)의 목적과 사용법을 설명하세요.

### 코드 빈칸 채우기

1. 다음 코드를 완성하세요:
    
    ```jsx
    function Circle(radius) {
        this.radius = radius;
        this.getDiameter = function () {
            return 2 * this._________;
        };
    }
    
    const circle = new Circle(5);
    console.log(circle.getDiameter()); // 10
    ```
    
2. 다음 코드를 완성하세요:
    
    ```jsx
    const person = {
        name: 'Lee',
        sayHello: function () {
            console.log('Hi! My name is ' + this._________);
        }
    };
    
    person.sayHello(); // Hi! My name is Lee
    ```
    

### 코드 결과 예측하기

1. 다음 코드의 출력 결과를 예측하세요:
    
    ```jsx
    function foo() {
        console.log(this);
    }
    
    const obj = { foo };
    obj.foo();
    ```
    
2. 다음 코드의 출력 결과를 예측하세요:
    
    ```jsx
    const x = 10;
    
    function foo() {
        const x = 20;
        console.log(x);
    }
    
    foo();
    console.log(x);
    ```