// 코드 11-8 옵저버블에서 값을 바로 서브젝트로 전달

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

// 수정 코드 => 한 줄로 간결해짐
intervalSource$.subscribe(subject);

setTimeout(() => subject.subscribe(observerB), 2000);
