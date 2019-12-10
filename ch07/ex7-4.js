// 코드 7-4 초깃값 1을 설정해 여러 개 값을 발행하는 예

const { range } = require('rxjs');
const { reduce } = require('rxjs/operators');

range(1, 4).pipe(reduce((acc, curr) => acc + curr, 1)).subscribe(x => console.log(x));
