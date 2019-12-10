// 코드 6-6 project 함수를 인자로 사용한 예

const { timer, combineLatest } = require('rxjs');
const { take } = require('rxjs/operators');

const req1$ = timer(0, 400).pipe(take(6));
const req2$ = timer(0, 300).pipe(take(10));
const req3$ = timer(0, 500).pipe(take(7));

combineLatest(req1$, req2$, req3$, (a, b, c) => `${a}, ${b}, ${c}`)
    .subscribe(result => console.log(result));
