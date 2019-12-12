// 코드 11-16 피보나치 수열 옵저버블에 AsyncSubject 연산자 사용

const { interval, AsyncSubject } = require('rxjs');
const { take, scan, pluck, tap } = require('rxjs/operators');
const asyncSubject = new AsyncSubject();

const period = 500;
const lastN = 8;

const fibonacci = n => interval(period).pipe(
    take(n),
    scan((acc, index) => acc ? {
	a: acc.b,
	b: acc.a + acc.b
    } : {a: 0, b: 1}, null),
    pluck('a'),
    tap(n => console.log(`tap log: emitting ${n}`)));

fibonacci(lastN).subscribe(asyncSubject);

asyncSubject.subscribe(result => console.log(`1st subscribe: ${result}`));

setTimeout(() => {
    console.log("try 2nd subscribe");
    asyncSubject.subscribe(result => console.log(`2nd subscribe: ${result}`));
}, period * lastN);
