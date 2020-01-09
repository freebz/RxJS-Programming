// 코드 19-4 DoIndexSubscriber 클래스의 생성자 함수(19/myOperators/tapIndex.js)

const { Subscriber } = require('rxjs/Subscriber');
// ...

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
}
