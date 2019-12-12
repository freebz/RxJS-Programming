// 코드 11-7 intervalSource$를 구독해 서브젝트로 보내는 작업 추가

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

intervalSource$.subscribe({
    next: x => subject.next(x),
    error: e => subject.error(e),
    complete: () => subject.complete()
});

setTimeout(() => subject.subscribe(observerB), 2000);
