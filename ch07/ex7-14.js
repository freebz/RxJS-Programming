// 코드 7-14 predicate 함수를 사용해 짝수만 세기

const { range } = require('rxjs');
const { count } = require('rxjs/operators');

range(1, 7).pipe(count(x => x % 2 === 0)).subscribe(x => console.log(x));
