// 코드 4-13 skipUntil 연산자 구현 중 일부분

class SkipUntilOperator {
    // ...생략...
    call(subscriber, source) {
	return source.subscribe(new SkipUntilSubscriber(subscriber, this.notifier));
    }
}

class SkipUntilSubscriber extends OuterSubscriber {
    constructor(destication, notifier) {
	super(destication);
	this.hasValue = false;
	this.isInnerStopped = false;
	this.add(subscribeToResult(this, notifier));
    }
    // ...생략...
}
