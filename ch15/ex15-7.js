// 코드 15-7 co 라이브러리 사용 예

const co = require('co');

// 임의의 비동기 작업을 시뮬레이션하는 함수
function makeAsync(text, ms) {
    return new Promise((resolve, reject) => {
	setTimeout(() => resolve(text), ms);
    });
}

// doAsync 함수 대신 co 라이브러리를 사용
co(function*() {
    const foo = yield makeAsync('foo', 1000);
    console.log(foo);

    // ...
});
