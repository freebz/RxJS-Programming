// 코드 4-6 1초마다 숫자를 5회만 반복해서 발행

const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

interval(1000).pipe(take(5))
    .subscribe(x => console.log(`result: ${x}`));
