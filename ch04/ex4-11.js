// 코드 4-11 take 연산자와 skip 연산자를 조합한 예

const { interval } = require('rxjs');
const { skip, take } = require('rxjs/operators');

interval(300).pipe(
    skip(3),
    take(2)
).subscribe(x => console.log(x));
