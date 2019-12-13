// 코드 12-16 share 연산자와 publish.refCount를 사용했을 때의 차이

const { interval } = require('rxjs');
const { take, tap, publish, refCount, share } = require('rxjs/operators');

const testSource$ = interval(500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`)),
    share()
);
// const testSource$ = interval(500).pipe(
//     take(5),
//     tap(x => console.log(`tap ${x}`)),
//     publish(),
//     refCount()
// );

const a = testSource$.subscribe(x => console.log(`a: ${x}`));
const b = testSource$.subscribe(x => console.log(`b: ${x}`));

setTimeout(() => {
    console.log('timeout');
    testSource$.subscribe(x => console.log(`c: ${x}`));
}, 3000);
