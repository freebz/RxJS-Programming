// 코드 10-4 retryWhen 연산자의 사용 예

const { interval, of } = require('rxjs');
const {
    take, mergeMap, tap, retryWhen, scan, catchError
} = require('rxjs/operators');
interval(100).pipe(
    take(30),
    mergeMap(x => {
	return of(x).pipe(tap(value => {
	    if (Math.random() <= 0.3) {
		throw new Error(`RANDOM ERROR ${value}`);
	    }
	}),
        retryWhen(errors => {
	    return errors.pipe(
		scan((acc, error) => {
		    return {
			count: acc.count + 1,
			error
		    };
		}, { count: 0 }),
		tap(errorInfo => console.error(
		    `retryCount: ${errorInfo.count}, error message: ${errorInfo.error.message}`
		)
	    ));
	}),
        catchError(err => of(err.message))
    );})
).subscribe(x => console.log(x), err => console.error(err));
