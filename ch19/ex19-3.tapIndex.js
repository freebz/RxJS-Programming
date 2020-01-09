// 코드 19-3 새로운 옵저버블 인스턴스를 생성(19/myOperators/tapIndex.js)

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
