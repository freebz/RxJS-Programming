// 코드 15-1 제너레이터 함수를 인자로 사용한 예

// 임의의 비동기 작업을 시뮬레이션하는 함수
function makeAsync(text, ms) {
    return new Promise((resolve, reject) => {
	setTimeout(() => resolve(text), ms);
    });
}

// 비동기 로직인데 마치 동기 로직처럼 다룬다.
doAsync(function*() {
    const foo = yield makeAsync('foo', 1000);
    console.log(foo); // foo

    const bar = yield makeAsync('bar', 2000);
    console.log(bar); // bar

    const bax = yield makeAsync('baz', 3000);
    console.log(bax); // baz

    console.log('complete');
});
