// 코드 8-5 finalize 연산자 구현 코드 일부

export function finalize(callback) {
    return (source) => source.lift(new FinallyOperator(callback));
}

class FinallyOperator {
    constructor(callback) {
	this.callback = callback;
    }
    call(subscriber, source) {
	return source.subscribe(new FinallySubscriber(subscriber, this.callback));
    }
}

class FinallySubscriber extends Subscriber {
    constructor(destination, callback) {
	super(destination);
	this.add(new Subscription(callback));
    }
}
