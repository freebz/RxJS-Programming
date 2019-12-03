// 코드 3-3 try-catch문 없이 에러가 발생하는 create 함수

const { Observable } = require('rxjs');

const observable1to10$ = Observable.create(observer => {
    console.log('[observable1to10] BEGIN subscribe function');
    for (let value = 1; value <= 10; value++) {
	observer.next(value);
	consloe.log(`observer.next(${value})`);  // 오타
    }
    observer.complete()

    console.log('[observable1to10] END subscribe function');
    return () => {
	console.log('observable1to10 unsubscribed');
    }
});

observable1to10$.subscribe(
    function next(value) {
	console.log(`next value: ${value}`);
    },
    function error(err) {
	console.error(`error`, err.message);
    },
    function complete() {
	console.log('complete');
    }
);
