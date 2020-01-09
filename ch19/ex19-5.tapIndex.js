// 코드 19-5 next 함수 구현(19/myOperators/tapIndex.js)

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
