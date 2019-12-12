// 코드 11-6 서브젝트를 새로 선언해 대체

const { interval, Subject } = require('rxjs');
const { take } = require('rxjs/operators');

const subject = new Subject();

const intervalSource$ = interval(500).pipe(take(5));

const observerA = {
    next: x => console.log(`observerA: ${x}`),
    error: e => console.error(`observerA: ${e}`),
    complete: () => console.log('observerA: complete')
};

const observerB = {
    next: x => console.log(`observerB: ${x}`),
    error: e => console.error(`observerB: ${e}`),
    complete: () => console.log('observerB: complete')
};

subject.subscribe(observerA);
setTimeout(() => subject.subscribe(observerB), 2000);
