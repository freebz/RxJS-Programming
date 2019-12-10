// 코드 7-3 초깃값이 있는 reduce 연산자를 사용하는 예

const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

of(0).pipe(reduce((acc, curr) => acc + curr, 1)).subscribe(x => console.log(x));
