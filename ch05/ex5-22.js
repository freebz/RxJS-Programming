// 코드 5-22 새 객체를 매번 생성해 누적자 함수에서 리턴하는 예

const { interval } = require('rxjs');
const { take, scan, pluck } = require('rxjs/operators');
const n = 7;

const source$ = interval(500).pipe(
    take(n),
    scan((accumulation, currentValue) => ({
	a: accumulation.b,
	b: accumulation.a + accumulation.b
    }), { a: 1, b: 0 }),
    pluck('a')
);
source$.subscribe(result => console.log(`result ${result}`));
setTimeout(() =>
    source$.subscribe(result =>
	console.log(`result2 ${result}`)
    ), 3100
);
