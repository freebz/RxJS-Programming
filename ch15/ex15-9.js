// 코드 15-9 RxJS 4의 spawn 연산자 사용 예

const spawned = Rx.Observable.spawn(function*() {
    const a = yield cb => cb(null, 'R'); // 함수
    const b = yield ['X']; // 배열
    const c = yield Rx.Observable.just('J'); // 옵저버블
    const d = yield Promise.resolve('S'); // 프로미스

    return a + b + c + d;
});

spawned.subscribe(
    function (x) { console.log('next %s', x); },
    function (err) { console.log('error %s', err); },
    function () { console.log('completed'); }
);
