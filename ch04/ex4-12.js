// 코드 4-12 skipUntil 연산자로 인자의 옵저버블 값만 발행

const { interval } = require('rxjs');
const { skipUntil, take } = require('rxjs/operators');
const sourceIntervalTime = 300;
interval(sourceIntervalTime).pipe(
    skipUntil(interval(sourceIntervalTime * 5)),
    take(3)
).subscribe(x => console.log(x));
