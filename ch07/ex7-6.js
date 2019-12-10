// 코드 7-6 comparer 함수를 사용하지 않는 예

const { range } = require('rxjs');
const { max } = require('rxjs/operators');

range(1, 10).pipe(max()).subscribe(x => console.log(x));
