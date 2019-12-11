// 코드 9-1 defaultIfEmpty 연산자의 구현 코드 중 일부

_next(value) {
    this.isEmpty = false;
    this.destination.next(value);
}

_complete() {
    if (this.isEmpty) {
	this.destination.next(this.defaultValue);
    }
    this.destination.complete();
}
