// 코드 13-20 observeOn 연산자 안 AsyncScheduler 사용

const { of, asyncScheduler } = require('rxjs');
const { observeOn } = require('rxjs/operators');

console.log('start');
of(1, 2, 3).pipe(observeOn(asyncScheduler, 1000)).subscribe(x => console.log(x));
console.log(`actions length: : ${asyncScheduler.actions.length}`);
console.log('end');
