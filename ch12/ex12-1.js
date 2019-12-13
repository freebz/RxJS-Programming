// 코드 12-1 콜드 옵저버블 예

const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

const observerA = {
    next: x => console.log(`observerA: ${x}`),
    error: e => console.error(`observerA: ${e}`),
    complete: () => console.log(`observerA: complete`)
};

const observerB = {
    next: x => console.log(`observerB: ${x}`),
    error: e => console.error(`observerB: ${e}`),
    complete: () => console.log(`observerB: complete`)
};

const intervalSource$ = interval(500).pipe(take(5));
intervalSource$.subscribe(observerA);
setTimeout(() => intervalSource$.subscribe(observerB), 1000);
