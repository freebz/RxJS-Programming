// 코드 4-14 skipWhile 연산자를 이용한 4 이상의 값 3개 발행


const { interval } = require('rxjs');
const { skipWhile, take } = require('rxjs/operators');

interval(300).pipe(
    skipWhile(x => x < 4),
    take(3)
).subscribe(x => console.log(x));
