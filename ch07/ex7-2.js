// 코드 7-2 reduce 연산자와 range 함수로 4개 값을 발행하는 예

const { range } = require('rxjs');
const { reduce } = require('rxjs/operators');

range(1, 4).pipe(reduce((acc, curr) => acc + curr)).subscribe(x => console.log(x));
