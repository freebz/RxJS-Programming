// 코드 4-21 flush 옵저버블 사용 예

const { interval } = require('rxjs');
const { take, map, distinct } = require('rxjs/operators');

interval(200).pipe(
    take(25),
    map(x => ({ original: x,value: x % 5 })),
    distinct(x => x.value, interval(2100))
).subscribe(x => console.log(JSON.stringify(x)));
