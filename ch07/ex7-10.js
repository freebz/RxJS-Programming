// 코드 7-10 comparer 함수를 사용하지 않는 min 연산자 예

const { range } = require('rxjs');
const { min } = require('rxjs/operators');

range(1, 10).pipe(min()).subscribe(x => console.log(x));
