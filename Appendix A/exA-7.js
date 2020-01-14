// 코드 A-7 짧은 속성 이름 사용 예

const name = '홍길동';

function hello() {
    console.log('안녕하세요!');
};

// 기존 객체 선언 방식
const before = {
    name: name,
    hello: hello
};

// 새로운 객체 선언 방식
const after = {
    name,
    hello
};
