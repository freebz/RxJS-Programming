// 코드 13-21 observeOn 연산자 안 AsapScheduler 사용

const { of, asapScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('start');
of(1, 2, 3).pipe(observeOn(asapScheduler)).subscribe(x => console.log(x));
console.log(`actions length: : ${asapScheduler.actions.length}`);
console.log('end');
