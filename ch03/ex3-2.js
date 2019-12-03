// 코드 3-2 에러 발생을 확인할 수 있는 create 함수 사용

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(observer => {
    try {
	console.log('[observable1to10] BEGIN subscribe function');
	for (let value = 1; value <= 10; value++) {
	    observer.next(value);
	    consloe.log(`observer.next(${value})`);  // 오타
	}
    } catch(e) {
	observer.error(e);
    }
    // observer.complete()
    console.log('[observable1to10] END subscribe function');

    return () => {
	console.log('observable1to10 unsubscribed');
    }
});

observable1to10$.subscribe(
    value => console.log(`next value: ${value}`),
    err => console.error(`error`, err.message),
    () => console.log('complete')
);
