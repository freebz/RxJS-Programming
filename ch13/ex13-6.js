// 코드 13-6 스케줄러의 actions 배열 사용 방식(AsapScheduler의 flush 메서드)

export class AsspScheduler extends AsyncScheduler {
    flush(action) {
	this.active = true;
	this.scheduled = undefined;
	const { actions } = this;
	// 생략...
	action = action || action.shift();
	do {
	    if (error = action.execute(action.state, action.delay)) {
		break;
	    }
	} while (++index < count && (action = action.shift()));
	// 생략...
    }
}
