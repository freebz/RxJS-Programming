// 코드 A-6 tag 함수 형태로 템플릿 리터럴 사용

const a = 5;
const b = 10;

function tag(strings, ...values) {
    console.log(strings[0]); // "Hello "
    console.log(strings[1]); // " world "
    console.log(values[0]); // 15
    console.log(values[1]); // 50

    return "안녕하세요!";
}

const message = tag`Hello ${ a + b } world ${ a * b }`;
console.log(message); // "안녕하세요!"
