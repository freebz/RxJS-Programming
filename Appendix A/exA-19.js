// 코드 A-19 ES2015+ 이전의 파라미터 기본값 지정

function test(x, y) {
    x = x === undefined ? 10 : x;
    y = y || 12;
    console.log(x + y);
}

test(); // 22
