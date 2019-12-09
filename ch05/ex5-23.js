// 코드 5-23 partition 연산자로 소스 옵저버블을 독립적으로 두는 예

const { interval } = require('rxjs');
const { partition, take, map } = require('rxjs/operators');

const [winSource$, loseSource$] = interval(500).pipe(
    partition(x => Math.random() < 0.7)
);

winSource$.pipe(
    map(x => `당첨!! (${x})`),
    take(10)
).subscribe(result => console.log(result));

loseSource$.pipe(
    map(x => `꽝!! (${x})`),
    take(10)
).subscribe(result => console.log(result));
