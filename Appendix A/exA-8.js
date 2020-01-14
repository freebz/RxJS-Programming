// 코드 A-8 메서드 속성 사용 예

const obj = {
    foo(a, b) {
	console.log(a, b);
    },
    // 제너레이터 함수도 선언 가능
	*bar(x, y) {
	    const z = yield x;
	    return y + z;
	}
};
