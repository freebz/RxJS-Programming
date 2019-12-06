// 코드 4-18 distinct 연산자로 중복 값을 발행하지 않는 예

const { of } = require('rxjs');
const { distinct } = require('rxjs/operators');

of(1, 6, 7, 7, 2, 5, 5, 2, 6).pipe(distinct()).subscribe(x => console.log(x));
