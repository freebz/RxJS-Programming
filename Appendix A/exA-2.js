// 코드 A-2 const 사용 예

const foo = 10;
const foo = 20; // 재선언하면 에러 발생
const bar; // 초기화하지 않으면 에러 발생

const baz = 30;
if (true) {
    const baz = 40;
    console.log(baz); // 40 출력
}
console.log(baz); // 30 출력
