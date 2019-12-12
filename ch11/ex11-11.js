// 코드 11-11 서브젝트의 unsubscribe 함수의 동작

const { Subject } = require('rxjs');
const subject = new Subject();

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

const observerC = {
    next: x => console.log(`observerC: ${x}`),
    error: e => console.error(`observerC: ${e}`),
    complete: () => console.log('observerC: complete')
};

subject.subscribe(observerA);
subject.subscribe(observerB);

subject.unsubscribe();

// subject 구독 해제 후 다시 구독한다.
subject.subscribe(observerC);

// 하나씩만 주석 처리를 해제한 후 코드를 실행한다.
// subject.next(1);
// subject.error('error');
// subject.complete();
