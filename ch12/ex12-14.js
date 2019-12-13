// 코드 12-14 ConnectableObservable의 구현 코드 일부분

class RefCountOperator {
    constructor(connectable) {
	this.connectable = connectable;
    }
    call(subscriber, source) {
	const { connectable } = this;
	connectable._refCount++;
	const refCounter = new RefCountSubscriber(subscriber, connectable);
	if (!refCounter.closed) {
	    refCount.connection = connectable.connect();
	}
	return subscription;
    }
}
