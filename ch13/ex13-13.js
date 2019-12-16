// 코드 13-13 AsyncAction의 _execute 함수 구현 코드

_execute(state, delay) {
    let errored = false;
    let errorValue = undefined;
    try {
	this.work(state);
    }
    catch (e) {
	errored = true;
	errorValue = !!e && e || new Error(e);
    }
    if (errored) {
	this.unsubscribe();
	return errorValue;
    }
}
