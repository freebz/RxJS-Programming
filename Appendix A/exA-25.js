// 코드 A-25 Spread 연산자 사용 예

function f(x, y, z) {
    return x + y + z;
}

// 배열에 담긴 값 각각을 인자로 사용한다.
const numbers = [1, 2, 3];
f(...numbers) === 6 // true 출력
