// 코드 13-5 schedule 함수 호출

requestAsyncId(scheduler, id, delay = 0) {
    if (delay !== null && delay > 0) {
	return super.requestAsyncId(scheduler, id, delay);
    }
    scheduler.actions.push(this);
    return scheduler.scheduled
	|| (scheduler.scheduled = Immediate.setImmediate(
	    scheduler.flush.bind(scheduler, null)
	));
}
