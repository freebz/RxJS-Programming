const { Subscriber } = require('rxjs');

module.exports = function tapIndex(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
	return source.lift(
	    new DoIndexOperator(nextOrObserver, error, complete)
	);
    };
};

class DoIndexOperator {
    // 생성자를 호출해서 새로운 옵저버블을 만들 때 초기화되는 함수
    constructor(nextOrObserver, error, complete) {
	this.nextOrObserver = nextOrObserver;
	this.error = error;
	this.complete = complete;
    }
    // 실제 구독할 때 호출되는 함수 source와 소스 옵저버블 subscriber는
    // doIndex 연산자 실행 후 다음 단계에 값을 전달하는 옵저버 역할
    call(subscriber, source) {
	return source.subscribe(
	    new DoIndexSubscriber(
		subscriber,
		this.nextOrObserver,
		this.error,
		this.complete
	    )
	);
    }
}

class DoIndexSubscriber extends Subscriber {
    constructor(destination, nextOrObserver, error, complete) {
	super(destination);

	// 추가된 부분
	this.needIndex = typeof nextOrObserver === 'function';
	const newNextOrObserver = this.needIndex
	    ? valueAndIndex =>
	          nextOrObserver(valueAndIndex.value, valueAndIndex.index)
	    : nextOrObserver;
	// 추가된 부분

	const safeSubscriber = new Subscriber(
	    newNextOrObserver,
	    error,
	    complete
	);
	safeSubscriber.syncErrorThrowable = true;
	this.add(safeSubscriber);
	this.safeSubscriber = safeSubscriber;

	// 추가된 부분
	this.index = 0; // 몇 번째 인덱스인지 센다.
    }

    _next(value) {
	const { safeSubscriber } = this;

	// 원래 tap 연산자 코드
	// safeSubscriber.next(value);
	safeSubscriber.next(
	    this.needIndex ? { value, index: this.index++ } : value
	);

	if (safeSubscriber.syncErrorThrown) {
	    this.destination.error(safeSubscriber.syncErrorValue);
	} else {
	    this.destination.next(value);
	}
    }
}
