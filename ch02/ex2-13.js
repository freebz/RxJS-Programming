// 코드 2-13 _trySubscribe 함수 구현 부분

_trySubscribe(sink) {
    try {
	return this._subscribe(sink);
    }
    catch(err) {
	sink.syncErrorThrown = true;
	sink.syncErrorValue = err;
	sink.error(err);
    }
}
