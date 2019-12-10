// 코드 6-9 여러 개 인자를 사용하는 startWith 연산자 예

const { range } = require('rxjs');
const { startWith, scan } = require('rxjs/operators');

range(4, 3).pipe(
    startWith(1, 2, 3),
    scan((x, y) => x + y)
).subscribe(sum => console.log(`range(4, 3).startWith(1, 2, 3) sum: ${sum}`));

range(4, 3).pipe(
    scan((x, y) => x + y)
).subscribe(sum => console.log(`range(4, 3) sum: ${sum}`));
