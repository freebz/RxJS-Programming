// 코드 13-7 AsspScheduler를 이용한 동기 및 비동기 처리 예

const { of, asapScheduler } = require('rxjs');

console.log('start');
of(1, 2, 3, asapScheduler).subscribe(x => console.log(x));
console.log(`actions length: : ${asapScheduler.actions.length}`);
console.log('end');
