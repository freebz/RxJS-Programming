// 코드 2-2 옵저버블을 구독해 실행하는 자바스크립트 이벤트 처리

const { Observable } = require('rxjs');

const observableCreated$ = Observable.create(function(observer) {
    for (let i = 1; i <= 10; i++) {
	setTimeout(function() {
	    observer.next(i);
	    if (i === 10) {
		observer.complete();
	    }
	}, 300 * i);
    }
});

observableCreated$.subscribe(
    function next(item) {
	console.log(`observerA: ${item}`);
    },
    function error(err) {
	console.log(`observerA: ${err}`);
    },
    function complete() {
	console.log('observerA: complete');
    }
);
setTimeout(function() {
    observableCreated$.subscribe(
	function next(item) {
	    console.log(`observerB: ${item}`);
	},
	function error(err) {
	    console.log(`observer B: ${err}`);
	},
	function complete() {
	    console.log('observer B: complete');
	}
    );
}, 1350);
