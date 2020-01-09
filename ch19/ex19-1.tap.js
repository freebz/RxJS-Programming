// 예제 19-1 tap 연산자의 구현 코드 일부

export function tap(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
	return source.lift(new DoOperator(nextOrObserver, error, complete));
    };
}

class DoOperator {
    constructor(nextOrObserver, error, complete) {
	this.nextOrObserver = nextOrObserver;
	this.error = error;
	this.complete = complete;
    }
    call(subscriber, source) {
	return source.subscribe(
	    new DoSubscriber(
		subscriber,
		this.nextOrObserver,
		this.error,
		this.complete
	    )
	);
    }
}
