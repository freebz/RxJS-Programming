// 코드 A-37 함수나 변수에서 단독으로 export 키워드 사용

function sum(x, y) {
    return x + y;
}

export sum; // 에러 발생
