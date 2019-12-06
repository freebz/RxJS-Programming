// 코드 4-8 takeWhile 연산자의 사용 예

const { interval } = require('rxjs');
const { filter, takeWhile } = require('rxjs/operators');

interval(300).pipe(
    filter(x => x >= 7 || x % 2 === 0),
    takeWhile(x => x <= 10)
).subscribe(x => console.log(x));
