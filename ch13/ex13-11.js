// 코드 13-11 QueueAction의 schedule 함수 구현 코드

// request, recycle은 호출하지 않고 실행만 한다.
schedule(state, delay = 0) {
    if (delay > 0) { // delay 값이 0보다 크면 AsapScheduler를 상속받아 실행
	return super.schedule(state, delay);
    }
    this.delay = delay;
    this.state = state;
    this.scheduler.flush(this); // AsyncScheduler.flush
    return this;
}
execute(state, delay) {
    return (delay > 0 || this.closed) ?
	super.execute(state, delay) :
	// delay == 0이고 !this.close이므로 실행됨.
	this._execute(state, delay);
}
