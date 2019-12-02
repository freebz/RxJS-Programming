// 코드 2-19 옵저버블을 이용한 값 전달과 에러 처리

const { Observable } = require('rxjs');

const observableCreated$ = Observable.create(function(observer) {
    try {
	observer.next(1);
	observer.next(2);
	throw("throw err test");
    } catch (err) {
	observer.error(err);
    } finally {
	observer.complete();
    }
});

observableCreated$.subscribe(
    function next(item) { console.log(item); },
    function error(err) { console.log('error: ' + err) },
    function complete() { console.log('complete') }
);
