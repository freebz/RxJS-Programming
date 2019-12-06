// 코드 4-2 조건이 없는 first 연산자 사용

const { range } = require('rxjs');
const { first } = require('rxjs/operators');

range(1, 10).pipe(first())
    .subscribe(x => console.log(`result: ${x}`));
