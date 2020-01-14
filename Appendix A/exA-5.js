// 코드 A-5 표현식에서의 템플릿 리터럴 사용

const foo = 10;
const bar = 5.5;

const baz = `계산도 가능: ${ Math.round(foo + bar) }`;
console.log(baz); // 계산도 가능: 16
