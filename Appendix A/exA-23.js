// 코드 A-23 Rest 연산자 사용 예

function test(x, ...y) {
    return x * y.length;
}
test(3, 'hello', true, false) === 9 // true 출력
