// 코드 13-22 observeOn 연산자 안 QueueScheduler 사용

const { of, queueScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('start');
of(1, 2, 3).pipe(observeOn(queueScheduler)).subscribe(x => console.log(x));
console.log(`actions length: : ${queueScheduler.actions.length}`);
console.log('end');
