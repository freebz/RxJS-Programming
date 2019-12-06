// 코드 4-3 조건이 있는 first 연산자 사용

const { range } = require('rxjs');
const { first } = require('rxjs/operators');

range(1, 10).pipe(first(x => x >= 3))
    .subscribe(x => console.log(`result: ${x}`));
