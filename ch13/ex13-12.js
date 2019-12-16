// 코드 13-12 AsyncScheduler의 flush 메서드 구현 코드

flush(action) {
    const { actions } = this;
    if (this.active) {
	actions.push(action);
	return;
    }
    let error;
    this.active = true;
    do {
	if (error = action.execute(action.state, action.delay)) {
	    break;
	}
    } while (action = actions.shift()); // 스케줄러 큐 모두 사용
    this.active = false;
    if (error) {
	while (action = actions.shift()) {
	    action.unsubscribe();
	}
	throw error;
    }
}
