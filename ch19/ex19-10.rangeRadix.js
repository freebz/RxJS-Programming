// 코드 19-10 진법을 변환하는 코드 부분(19/myOperators/rangeRadix.js)

function dispatch(state) {
    const { start, index, count, radix, subscriber } = state;
    if (index >= count) {
	subscriber.complete();
	return;
    }
    subscriber.next(start.toString(radix));
    if (subscriber.closed) {
	return;
    }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
};
