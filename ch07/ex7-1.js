// 코드 7-1 초깃값 없이 reduce 연산자를 사용하는 예

const { of } = require('rxjs');
const { reduce } = require('rxjs/operators');

of(0).pipe(reduce((acc, curr) => acc + curr)).subscribe(x => console.log(x));
