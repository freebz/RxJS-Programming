// 코드 10-3 retry 연산자의 사용 예

const { interval, of } = require('rxjs');
const { take, mergeMap, tap, retry, catchError } = require('rxjs/operators');

interval(100).pipe(
    take(30),
    mergeMap(x => {
	return of(x).pipe(tap(value => {
	    if (Math.random() <= 0.3) {
		throw new Error(`RANDOM ERROR ${value}`);
	    }
	}),
        retry(10), // 재시도 횟수와 유무에 따라 에러를 방지할 수 있음
        catchError(err => of(err.message))
    );})
).subscribe(x => console.log(x), err => console.error(err));
