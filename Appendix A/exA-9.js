// 코드 A-9 계산된 속성 이름 사용 예

const obj = {
    foo: 'bar',
    ['baz' + (35 + 7) ]: 42
};

console.log(obj.baz42); // 42
