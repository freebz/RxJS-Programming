// 코드 13-8 ArrayObservable의 구현 코드 일부

static of(...array) {
    //...생략
    if (len > 1) {
	return new ArrayObservable(array, scheduler);
    }
    //...생략
}

static dispatch(state) {
    const { array, index, count, subscriber } = state;
    if (index >= count) {
	subscriber.complete();
	return;
    }
    subscriber.next(array[index]);
    if (subscriber.closed) {
	return;
    }
    state.index = index + 1;
    this.schedule(state);
}

_subscribe(subscriber) {
    //...생략
    if (scheduler) {
	return schduler.schedule(ArrayObservable.dispatch, 0, {
	    array, index, count, subscriber
	});
    }
    //...생략
}
