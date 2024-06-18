// 6. 객체의 프로퍼티를 삭제하는 코드를 작성하세요. (예: `person` 객체의 `age` 프로퍼티를 삭제)

const person = {};

person.age = 23;
console.log(person);

delete person.age;

console.log(person);
